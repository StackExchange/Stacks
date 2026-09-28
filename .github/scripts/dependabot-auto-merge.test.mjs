import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execPath } from "node:process";
import test from "node:test";
import { URL } from "node:url";

const workflow = readFileSync(
    new URL("../workflows/dependabot-auto-merge.yml", import.meta.url),
    "utf8"
);
// Extract the two real shell blocks; do not simulate GitHub's workflow engine.
const approval = workflow
    .match(/^ {8}run: \|\n([\s\S]*?)^ {8}env:/m)[1]
    .replace(/^ {10}/gm, "");
const merge = workflow.match(/^ {8}run: (gh pr merge .+)$/m)[1];
const endpoint = "repos/StackExchange/Stacks/pulls/2410";
const head = "a".repeat(40);

function fixture() {
    const pr = {
        state: "open",
        draft: false,
        user: { login: "dependabot[bot]" },
        head: { sha: head, repo: { full_name: "StackExchange/Stacks" } },
        base: { ref: "main", sha: "b".repeat(40) },
        commits: 2,
        changed_files: 3,
    };
    const commit = (sha) => ({
        sha,
        author: { login: "dependabot[bot]" },
        commit: { verification: { verified: true, reason: "valid" } },
    });
    const file = (filename) => ({ filename, status: "modified" });
    const signature = {
        isValid: true,
        wasSignedByGitHub: true,
        signer: { login: "web-flow" },
    };
    return {
        initial: pr,
        final: JSON.parse(JSON.stringify(pr)),
        commits: [[commit("first")], [commit(head)]],
        files: [
            [file("package.json")],
            [file("package-lock.json"), file("packages/example/package.json")],
        ],
        signatures: [signature, { ...signature }],
    };
}

// One gh stub serves canned responses and records requests. No network is used.
// Snapshot reads apply the workflow's own jq projection to a raw PR response.
const mockGh = `
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { spawnSync } = require("node:child_process");
const config = JSON.parse(fs.readFileSync("fixture.json", "utf8"));
const calls = JSON.parse(fs.readFileSync("calls.json", "utf8"));
const args = process.argv.slice(1);
const endpoint = ${JSON.stringify(endpoint)};
let name;
if (args[0] === "pr" && args[1] === "merge") name = "merge";
else if (args.includes(endpoint + "/reviews") && args.includes("POST")) name = "approval";
else if (args[1] === "graphql") name = args.includes("sha=first") ? "signature1" : "signature2";
else if (args.includes(endpoint + "/commits?per_page=100")) name = "commits";
else if (args.includes(endpoint + "/files?per_page=100")) name = "files";
else if (args.includes(endpoint) && args.includes("--jq")) name = calls.length ? "final" : "initial";
assert.ok(name, "Unexpected gh call: " + JSON.stringify(args));
assert.equal(process.env.GH_TOKEN, name === "approval" ? "approval-token" : "actions-token");
calls.push({ name, args });
fs.writeFileSync("calls.json", JSON.stringify(calls));
if (config.fail === name) process.exit(1);
if (config.malformed === name) { process.stdout.write("not JSON"); process.exit(0); }
const body = name.startsWith("signature")
    ? {data: {repository: {object: {signature: config.signatures[name === "signature1" ? 0 : 1]}}}}
    : config[name];
if (args.includes("--jq")) {
    const result = spawnSync("jq", [args[args.indexOf("--jq") + 1]], { input: JSON.stringify(body), encoding: "utf8" });
    process.stdout.write(result.stdout);
    process.exit(result.status);
}
if (body !== undefined) process.stdout.write(JSON.stringify(body));
`;

function run(data) {
    const directory = mkdtempSync(join(tmpdir(), "dependabot-test-"));
    try {
        writeFileSync(join(directory, "fixture.json"), JSON.stringify(data));
        writeFileSync(join(directory, "calls.json"), "[]");
        writeFileSync(
            join(directory, "gh"),
            '#!/bin/bash\nexec "$MOCK_NODE" --input-type=commonjs --eval "$MOCK_GH" -- "$@"\n',
            { mode: 0o755 }
        );
        const result = spawnSync(
            "/bin/bash",
            ["-e", "-o", "pipefail", "-c", `${approval}\n${merge}`],
            {
                cwd: directory,
                encoding: "utf8",
                timeout: 10000,
                env: {
                    // Deliberately exclude real credentials and shell startup settings.
                    PATH: `${directory}:/usr/bin:/bin`,
                    MOCK_NODE: execPath,
                    MOCK_GH: mockGh,
                    GITHUB_REPOSITORY: "StackExchange/Stacks",
                    PR_NUMBER: "2410",
                    HEAD_SHA: head,
                    GH_TOKEN: "actions-token",
                    APPROVAL_TOKEN: "approval-token",
                    PR_TITLE: "$(unsafe); dependency update",
                    PR_URL: "https://github.com/StackExchange/Stacks/pull/2410",
                },
            }
        );
        assert.ifError(result.error);
        assert.doesNotMatch(result.stderr, /AssertionError/);
        return {
            ...result,
            calls: JSON.parse(
                readFileSync(join(directory, "calls.json"), "utf8")
            ),
        };
    } finally {
        rmSync(directory, { recursive: true, force: true });
    }
}

test("workflow retains bot and patch/minor gates, token bindings, and no checkout", () => {
    assert.match(workflow, /^on: pull_request$/m);
    assert.match(workflow, /if: github.actor == 'dependabot\[bot\]'/);
    const conditions = [...workflow.matchAll(/if: (steps.metadata.+)/g)].map(
        (match) => match[1]
    );
    const eligible =
        "steps.metadata.outputs.update-type == 'version-update:semver-minor' || steps.metadata.outputs.update-type == 'version-update:semver-patch'";
    assert.deepEqual(conditions, [eligible, eligible]);
    assert.doesNotMatch(workflow, /actions\/checkout|continue-on-error/);
    assert.match(workflow, /dependabot\/fetch-metadata@[a-f0-9]{40}\b/);
    const query = approval.match(/-f query='([\s\S]*?)'/)[1];
    for (const field of ["isValid", "wasSignedByGitHub", "signer", "login"]) {
        assert.match(query, new RegExp(`\\b${field}\\b`));
    }
    assert.match(
        workflow,
        /HEAD_SHA: \$\{\{github.event.pull_request.head.sha\}\}/
    );
    assert.match(workflow, /GH_TOKEN: \$\{\{secrets.GITHUB_TOKEN\}\}/);
    assert.match(
        workflow,
        /APPROVAL_TOKEN: \$\{\{secrets.STACKS_TOOLING_GH_RW_PAT\}\}/
    );
});

test("approves complete paginated results, then requests a SHA-bound merge", () => {
    const result = run(fixture());
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.calls.length, 8);
    assert.ok(
        result.calls.at(-1).args.includes("$(unsafe); dependency update")
    );
    const approveArgs = result.calls.at(-2).args;
    assert.ok(approveArgs.includes(`commit_id=${head}`));
    assert.ok(approveArgs.includes("event=APPROVE"));
    const mergeArgs = result.calls.at(-1).args;
    assert.equal(mergeArgs[mergeArgs.indexOf("--match-head-commit") + 1], head);
    for (const flag of ["--auto", "--squash"]) {
        assert.ok(mergeArgs.includes(flag));
    }
    for (const { args } of result.calls.slice(1, 3)) {
        assert.ok(args.includes("--paginate") && args.includes("--slurp"));
    }
    const shas = result.calls.flatMap(({ args }) =>
        args.filter((arg) => arg.startsWith("sha="))
    );
    assert.deepEqual(shas, ["sha=first", `sha=${head}`]);
});

// Each case changes one part of a valid PR. Bad commits/files are on later pages.
for (const [name, change] of Object.entries({
    "stale head": (f) => (f.initial.head.sha = "moved"),
    "human commit": (f) => (f.commits[1][0].author.login = "someone"),
    "unsigned commit": (f) =>
        (f.commits[1][0].commit.verification.verified = false),
    "invalid signature reason": (f) =>
        (f.commits[1][0].commit.verification.reason = "unknown_key"),
    "incomplete commits": (f) => f.commits.pop(),
    "incomplete files": (f) => f.files.pop(),
    "source file": (f) => (f.files[1][0].filename = "src/index.ts"),
    "nested manifest": (f) =>
        (f.files[1][0].filename = "packages/a/b/package.json"),
    "added file": (f) => (f.files[1][0].status = "added"),
    "renamed file": (f) => (f.files[1][0].status = "renamed"),
    "removed file": (f) => (f.files[1][0].status = "removed"),
    "human signature": (f) => (f.signatures[1].wasSignedByGitHub = false),
    "untrusted signer": (f) => (f.signatures[1].signer = { login: "someone" }),
    "invalid GitHub signature": (f) => (f.signatures[1].isValid = false),
    "head changed during validation": (f) => (f.final.head.sha = "moved"),
    "base changed during validation": (f) => (f.final.base.sha = "moved"),
})) {
    test(`rejects ${name} without approval or merge`, () => {
        const data = fixture();
        change(data);
        const result = run(data);
        assert.notEqual(result.status, 0);
        assert.ok(
            result.calls.every(
                ({ name }) => name !== "approval" && name !== "merge"
            )
        );
    });
}

for (const stage of [
    "initial",
    "commits",
    "files",
    "signature2",
    "final",
    "approval",
    "merge",
]) {
    test(`stops when ${stage} fails`, () => {
        const result = run({ ...fixture(), fail: stage });
        assert.notEqual(result.status, 0);
        assert.equal(result.calls.at(-1).name, stage);
    });
}

test("rejects a malformed API response", () => {
    const result = run({ ...fixture(), malformed: "commits" });
    assert.notEqual(result.status, 0);
    assert.equal(result.calls.at(-1).name, "commits");
});
