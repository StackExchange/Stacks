import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { execPath } from "node:process";
import test from "node:test";
import { URL } from "node:url";

const workflow = readFileSync(
    new URL("../workflows/dependabot-auto-merge.yml", import.meta.url),
    "utf8"
);

// Extract the actual shell and configuration without installing dependencies.
// Intentionally support only the workflow's current, simple YAML step shape.
function step(name) {
    const marker = `      - name: ${name}\n`;
    assert.equal(workflow.split(marker).length, 2, `unique step: ${name}`);
    const content = workflow.split(marker)[1].split("\n      - name:")[0];
    const field = (key) => {
        const match = content.match(new RegExp(`^        ${key}: (.+)$`, "m"));
        assert.ok(match, `${name}: ${key}`);
        return match[1];
    };
    const run = field("run");
    const script =
        run === "|"
            ? content
                  .split("        run: |\n")[1]
                  .split("        env:\n")[0]
                  .split("\n")
                  .map((line) => {
                      assert.ok(!line.trim() || line.startsWith("          "));
                      return line.slice(10);
                  })
                  .join("\n")
            : run;
    const env = Object.fromEntries(
        [...content.matchAll(/^ {10}([A-Z_]+): (.+)$/gm)].map(
            ([, key, value]) => [key, value]
        )
    );
    return { script, condition: field("if"), env, content };
}

const approve = step("Approve eligible Dependabot PRs");
const merge = step("Enable auto-merge for Dependabot PRs");
const endpoint = "repos/StackExchange/Stacks/pulls/2410";
const head = "a".repeat(40);
const base = "b".repeat(40);
const title = '$(unsafe); `unsafe` "dependency title"';
const url = "https://github.com/StackExchange/Stacks/pull/2410";

function eligible(condition, updateType) {
    return condition
        .split(" || ")
        .map((clause) => {
            const match = clause.match(
                /^steps\.metadata\.outputs\.update-type == '([^']+)'$/
            );
            assert.ok(match, `unsupported eligibility expression: ${clause}`);
            return updateType === match[1];
        })
        .some(Boolean);
}

const commit = (sha = head) => ({
    sha,
    author: { login: "dependabot[bot]" },
    commit: { verification: { verified: true, reason: "valid" } },
});
const file = (filename = "package.json") => ({ filename, status: "modified" });
function fixture(overrides = {}) {
    return {
        commitPages: [[commit()]],
        filePages: [[file()]],
        ...overrides,
        snapshot: {
            state: "open",
            draft: false,
            author: "dependabot[bot]",
            head,
            head_repo: "StackExchange/Stacks",
            base: "main",
            base_sha: base,
            commits: 1,
            changed_files: 1,
            ...overrides.snapshot,
        },
    };
}

// gh is replaced on PATH. All unrecognized calls fail; no network is used.
const mockGh = `
const { appendFileSync, readFileSync } = require("node:fs");
const { spawnSync } = require("node:child_process");
const config = JSON.parse(readFileSync(process.env.MOCK_CONFIG, "utf8"));
const previous = readFileSync(process.env.MOCK_LOG, "utf8").trim();
const calls = previous ? previous.split("\\n").map(JSON.parse) : [];
const args = process.argv.slice(1);
appendFileSync(process.env.MOCK_LOG, JSON.stringify({args, token: process.env.GH_TOKEN}) + "\\n");
const endpoint = ${JSON.stringify(endpoint)};
const route = args.find(arg => arg.startsWith("repos/"));
let kind;
let response;
if (args[0] === "api" && args[1] === "graphql") {
    kind = "signature";
    const sha = args.find(arg => arg.startsWith("sha=")).slice(4);
    const signature = config.signatures?.[sha] ?? {isValid: true, wasSignedByGitHub: true, signer: {login: "web-flow"}};
    response = {data: {repository: {object: {signature}}}};
} else if (args[0] === "pr" && args[1] === "merge") {
    kind = "merge";
} else if (args[0] === "api" && route === endpoint + "/reviews" && args.includes("POST")) {
    kind = "approval";
} else if (args[0] === "api" && route === endpoint + "/commits?per_page=100" && args.includes("--paginate") && args.includes("--slurp")) {
    kind = "commits";
    response = config.commitPages;
} else if (args[0] === "api" && route === endpoint + "/files?per_page=100" && args.includes("--paginate") && args.includes("--slurp")) {
    kind = "files";
    response = config.filePages;
} else if (args[0] === "api" && route === endpoint && args.includes("--jq")) {
    const isFinal = calls.some(call => call.args.includes(endpoint));
    kind = isFinal ? "final" : "initial";
    const snapshot = isFinal ? {...config.snapshot, ...config.final} : config.snapshot;
    const raw = {state: snapshot.state, draft: snapshot.draft, user: {login: snapshot.author},
        head: {sha: snapshot.head, repo: {full_name: snapshot.head_repo}},
        base: {ref: snapshot.base, sha: snapshot.base_sha},
        commits: snapshot.commits, changed_files: snapshot.changed_files};
    const projection = spawnSync("jq", [args[args.indexOf("--jq") + 1]], {input: JSON.stringify(raw), encoding: "utf8"});
    if (projection.status !== 0) process.exit(98);
    response = JSON.parse(projection.stdout);
} else {
    process.stderr.write("Unexpected gh call: " + JSON.stringify(args));
    process.exit(97);
}
if (config.fail === kind) process.exit(1);
if (config.malformed === kind) process.stdout.write("not JSON");
else if (response !== undefined) process.stdout.write(JSON.stringify(response));
`;

function runFixture(data, updateType = "version-update:semver-patch") {
    if (!eligible(approve.condition, updateType)) {
        assert.equal(eligible(merge.condition, updateType), false);
        return { calls: [], skipped: true };
    }
    const directory = mkdtempSync(join(tmpdir(), "dependabot-auto-merge-"));
    try {
        const log = join(directory, "calls.jsonl");
        const config = join(directory, "config.json");
        writeFileSync(log, "");
        writeFileSync(config, JSON.stringify(data));
        writeFileSync(
            join(directory, "gh"),
            '#!/bin/bash\nexec "$MOCK_NODE" --input-type=commonjs --eval "$MOCK_GH" -- "$@"\n',
            { mode: 0o755 }
        );
        const values = {
            "github.event.pull_request.number": "2410",
            "github.event.pull_request.head.sha": head,
            "github.event.pull_request.title": title,
            "github.event.pull_request.html_url": url,
            "secrets.GITHUB_TOKEN": "dummy-actions-token",
            "secrets.STACKS_TOOLING_GH_RW_PAT": "dummy-approval-token",
        };
        function run(workflowStep) {
            const stepEnv = Object.fromEntries(
                Object.entries(workflowStep.env).map(([key, expression]) => {
                    const match = expression.match(/^\$\{\{\s*(.*?)\s*\}\}$/);
                    assert.ok(match && match[1] in values, expression);
                    return [key, values[match[1]]];
                })
            );
            return spawnSync(
                "/bin/bash",
                ["-e", "-o", "pipefail", "-c", workflowStep.script],
                {
                    cwd: directory,
                    encoding: "utf8",
                    timeout: 10000,
                    env: {
                        // Do not inherit real credentials or shell startup settings.
                        PATH: `${directory}:${dirname(execPath)}:/usr/bin:/bin`,
                        MOCK_NODE: execPath,
                        MOCK_GH: mockGh,
                        MOCK_CONFIG: config,
                        MOCK_LOG: log,
                        GITHUB_REPOSITORY: "StackExchange/Stacks",
                        ...stepEnv,
                    },
                }
            );
        }
        const approval = run(approve);
        // GitHub applies success() implicitly to the merge step's condition.
        const merged =
            approval.status === 0 && eligible(merge.condition, updateType)
                ? run(merge)
                : undefined;
        const calls = readFileSync(log, "utf8")
            .trim()
            .split("\n")
            .filter(Boolean)
            .map((line) => JSON.parse(line));
        return { approval, merged, calls };
    } finally {
        rmSync(directory, { recursive: true, force: true });
    }
}

function assertApproved(result) {
    assert.equal(result.approval.status, 0, result.approval.stderr);
    assert.equal(result.merged?.status, 0, result.merged?.stderr);
    assert.ok(result.calls.length >= 7);
}

function assertRejected(result, callCount) {
    assert.notEqual(result.approval.status, 0);
    assert.equal(result.merged, undefined);
    assert.equal(result.calls.length, callCount);
    assert.ok(
        result.calls.every(({ token }) => token === "dummy-actions-token")
    );
    assert.ok(
        result.calls.every(
            ({ args }) => !args.includes("POST") && args[0] !== "pr"
        )
    );
}

test("workflow keeps its trigger, bot gate, pinned metadata, and no checkout", () => {
    assert.match(workflow, /^on: pull_request$/m);
    assert.match(workflow, /^ {4}if: github.actor == 'dependabot\[bot\]'$/m);
    assert.match(
        workflow,
        /dependabot\/fetch-metadata@25dd0e34f4fe68f24cc83900b1fe3fe149efef98/
    );
    assert.doesNotMatch(workflow, /actions\/checkout|continue-on-error/);
    assert.match(approve.content, /^ {8}shell: bash$/m);
    assert.equal(approve.condition, merge.condition);
});

for (const updateType of [
    "version-update:semver-patch",
    "version-update:semver-minor",
]) {
    test(`approves and enables auto-merge for ${updateType}`, () => {
        const result = runFixture(fixture(), updateType);
        assertApproved(result);
        assert.deepEqual(
            result.calls
                .slice(0, -2)
                .map(
                    ({ args }) =>
                        args.find((arg) => arg.startsWith("repos/")) ?? args[1]
                ),
            [
                endpoint,
                `${endpoint}/commits?per_page=100`,
                `${endpoint}/files?per_page=100`,
                "graphql",
                endpoint,
            ]
        );
        assert.ok(
            result.calls
                .slice(0, -2)
                .every(({ token }) => token === "dummy-actions-token")
        );
        const signatureArgs = result.calls[3].args;
        assert.deepEqual(signatureArgs.slice(0, -1), [
            "api",
            "graphql",
            "-f",
            "owner=StackExchange",
            "-f",
            "name=Stacks",
            "-f",
            `sha=${head}`,
            "-f",
        ]);
        assert.equal(
            signatureArgs.at(-1).replace(/\s+/g, " ").trim(),
            "query= query($owner: String!, $name: String!, $sha: String!) { " +
                "repository(owner: $owner, name: $name) { " +
                "object(expression: $sha) { ... on Commit { " +
                "signature { isValid wasSignedByGitHub signer { login } } " +
                "} } } }"
        );
        assert.deepEqual(result.calls.at(-2), {
            args: [
                "api",
                "--method",
                "POST",
                `${endpoint}/reviews`,
                "-f",
                "event=APPROVE",
                "-f",
                `commit_id=${head}`,
                "--silent",
            ],
            token: "dummy-approval-token",
        });
        assert.deepEqual(result.calls.at(-1), {
            args: [
                "pr",
                "merge",
                "--auto",
                "--squash",
                "--match-head-commit",
                head,
                "--subject",
                title,
                url,
            ],
            token: "dummy-actions-token",
        });
    });
}

for (const updateType of [
    "version-update:semver-major",
    "",
    "unknown",
    undefined,
]) {
    test(`excludes metadata update type ${JSON.stringify(updateType)}`, () => {
        assert.equal(eligible(approve.condition, updateType), false);
        assert.equal(eligible(merge.condition, updateType), false);
    });
}

for (const [key, value] of [
    ["state", "closed"],
    ["draft", true],
    ["author", "someone"],
    ["head_repo", "fork/Stacks"],
    ["base", "release"],
    ["head", "stale"],
    ["commits", 0],
    ["commits", 251],
    ["commits", null],
    ["changed_files", 0],
    ["changed_files", 3001],
    ["changed_files", null],
]) {
    test(`rejects initial ${key}=${value}`, () => {
        assertRejected(runFixture(fixture({ snapshot: { [key]: value } })), 1);
    });
}

for (const [name, entry] of [
    ["human author", { ...commit(), author: { login: "someone" } }],
    ["missing author", { ...commit(), author: null }],
    [
        "unsigned commit",
        {
            ...commit(),
            commit: { verification: { verified: false, reason: "unsigned" } },
        },
    ],
    [
        "invalid signature reason",
        {
            ...commit(),
            commit: { verification: { verified: true, reason: "unknown_key" } },
        },
    ],
    ["missing signature", { ...commit(), commit: {} }],
    ["wrong head", commit("wrong-head")],
]) {
    test(`rejects ${name} on a later commit page`, () => {
        assertRejected(
            runFixture(
                fixture({
                    snapshot: { commits: 2 },
                    commitPages: [[commit("first")], [entry]],
                })
            ),
            2
        );
    });
}

test("accepts complete paginated commits and files", () => {
    const result = runFixture(
        fixture({
            snapshot: { commits: 2, changed_files: 3 },
            commitPages: [[commit("first")], [commit()]],
            filePages: [
                [file()],
                [
                    file("package-lock.json"),
                    file("packages/stacks-classic/package.json"),
                ],
            ],
        })
    );
    assertApproved(result);
    assert.deepEqual(
        result.calls
            .filter(({ args }) => args[1] === "graphql")
            .map(({ args }) => args.find((arg) => arg.startsWith("sha="))),
        ["sha=first", `sha=${head}`]
    );
});

for (const [name, overrides] of [
    ["empty commits", { commitPages: [[]] }],
    ["missing commits", { snapshot: { commits: 2 } }],
    ["extra commits", { commitPages: [[commit("first"), commit()]] }],
    [
        "duplicate commits",
        { snapshot: { commits: 2 }, commitPages: [[commit()], [commit()]] },
    ],
]) {
    test(`rejects ${name}`, () =>
        assertRejected(runFixture(fixture(overrides)), 2));
}

for (const filename of [
    "README.md",
    ".github/workflows/dependabot-auto-merge.yml",
    "packages/foo/src/package.json",
    "packagesfoo/package.json",
    "packages/foo/packageXjson",
    "packages/foo/package.json.bak",
    "package.json\npackages/foo/package.json",
    "packages/foo/package.json\n",
    "packages/foo\nbar/package.json",
]) {
    test(`rejects disallowed path ${JSON.stringify(filename)} on a later file page`, () => {
        assertRejected(
            runFixture(
                fixture({
                    snapshot: { changed_files: 2 },
                    filePages: [[file()], [file(filename)]],
                })
            ),
            3
        );
    });
}

for (const [name, overrides] of [
    ...["added", "removed", "renamed", "copied"].map((status) => [
        status,
        { filePages: [[{ ...file(), status }]] },
    ]),
    [
        "previous filename",
        { filePages: [[{ ...file(), previous_filename: "old.json" }]] },
    ],
    ["empty files", { filePages: [[]] }],
    ["missing files", { snapshot: { changed_files: 2 } }],
    ["extra files", { filePages: [[file(), file("package-lock.json")]] }],
    [
        "duplicate files",
        { snapshot: { changed_files: 2 }, filePages: [[file()], [file()]] },
    ],
]) {
    test(`rejects ${name} in the file list`, () =>
        assertRejected(runFixture(fixture(overrides)), 3));
}

for (const [key, value] of [
    ["head", "changed-head"],
    ["base", "release"],
    ["base_sha", "changed-base"],
    ["commits", 2],
    ["changed_files", 2],
    ["state", "closed"],
    ["draft", true],
]) {
    test(`rejects ${key} changing during validation`, () => {
        assertRejected(runFixture(fixture({ final: { [key]: value } })), 5);
    });
}

for (const [stage, callCount] of [
    ["initial", 1],
    ["commits", 2],
    ["files", 3],
    ["signature", 4],
    ["final", 5],
]) {
    for (const failure of ["fail", "malformed"]) {
        test(`rejects ${failure} API response during ${stage}`, () => {
            assertRejected(
                runFixture(fixture({ [failure]: stage })),
                callCount
            );
        });
    }
}

test("does not merge when approval fails", () => {
    const result = runFixture(fixture({ fail: "approval" }));
    assert.notEqual(result.approval.status, 0);
    assert.equal(result.merged, undefined);
    assert.equal(result.calls.length, 6);
    assert.equal(result.calls.at(-1).token, "dummy-approval-token");
});

test("surfaces failure of the SHA-guarded merge without retrying", () => {
    const result = runFixture(fixture({ fail: "merge" }));
    assert.equal(result.approval.status, 0);
    assert.notEqual(result.merged.status, 0);
    assert.equal(result.calls.length, 7);
});

for (const [name, signature] of [
    [
        "human signature",
        {
            isValid: true,
            wasSignedByGitHub: false,
            signer: { login: "someone" },
        },
    ],
    [
        "unexpected signer",
        {
            isValid: true,
            wasSignedByGitHub: true,
            signer: { login: "someone" },
        },
    ],
    [
        "invalid GitHub signature",
        {
            isValid: false,
            wasSignedByGitHub: true,
            signer: { login: "web-flow" },
        },
    ],
    ["missing signature provenance", {}],
]) {
    test(`rejects ${name} on a later commit`, () => {
        assertRejected(
            runFixture(
                fixture({
                    snapshot: { commits: 2 },
                    commitPages: [[commit("first")], [commit()]],
                    signatures: { [head]: signature },
                })
            ),
            5
        );
    });
}
