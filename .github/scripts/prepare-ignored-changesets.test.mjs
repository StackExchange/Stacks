import assert from "node:assert/strict";
import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { prepareIgnoredChangesets } from "./prepare-ignored-changesets.mjs";

async function createFixture(
    t,
    { ignore = [], changesets = [], preState } = {}
) {
    const cwd = await mkdtemp(path.join(os.tmpdir(), "stacks-changesets-"));
    const tempDirectory = await mkdtemp(
        path.join(os.tmpdir(), "stacks-runner-temp-")
    );
    const changesetDirectory = path.join(cwd, ".changeset");

    t.after(async () => {
        await Promise.all([
            rm(cwd, { recursive: true, force: true }),
            rm(tempDirectory, { recursive: true, force: true }),
        ]);
    });

    await mkdir(changesetDirectory, { recursive: true });
    await writeFile(
        path.join(changesetDirectory, "config.json"),
        JSON.stringify({ ignore })
    );

    if (preState) {
        await writeFile(
            path.join(changesetDirectory, "pre.json"),
            JSON.stringify(preState)
        );
    }

    for (const { id, releases } of changesets) {
        const frontmatter = releases
            .map(({ name, type }) => `"${name}": ${type}`)
            .join("\n");
        await writeFile(
            path.join(changesetDirectory, `${id}.md`),
            `---\n${frontmatter}\n---\n\n${id}\n`
        );
    }

    return { cwd, tempDirectory };
}

async function exists(filePath) {
    try {
        await access(filePath);
        return true;
    } catch {
        return false;
    }
}

test("does nothing when there are no pending changesets", async (t) => {
    const fixture = await createFixture(t);

    const moved = await prepareIgnoredChangesets(fixture);

    assert.deepEqual(moved, []);
});

test("temporarily moves changesets when every release is ignored", async (t) => {
    const fixture = await createFixture(t, {
        ignore: ["@stackoverflow/stacks-email"],
        changesets: [
            {
                id: "email-release",
                releases: [
                    { name: "@stackoverflow/stacks-email", type: "major" },
                ],
            },
        ],
    });

    const moved = await prepareIgnoredChangesets(fixture);

    assert.equal(moved.length, 1);
    assert.equal(await exists(moved[0].source), false);
    assert.equal(await exists(moved[0].target), true);
});

test("leaves actionable changesets in place", async (t) => {
    const fixture = await createFixture(t, {
        ignore: ["@stackoverflow/stacks-email"],
        changesets: [
            {
                id: "classic-release",
                releases: [{ name: "@stackoverflow/stacks", type: "patch" }],
            },
        ],
    });

    const moved = await prepareIgnoredChangesets(fixture);

    assert.deepEqual(moved, []);
    assert.equal(
        await exists(
            path.join(fixture.cwd, ".changeset", "classic-release.md")
        ),
        true
    );
});

test("leaves mixed ignored and actionable changesets in place", async (t) => {
    const fixture = await createFixture(t, {
        ignore: ["@stackoverflow/stacks-email"],
        changesets: [
            {
                id: "email-release",
                releases: [
                    { name: "@stackoverflow/stacks-email", type: "major" },
                ],
            },
            {
                id: "utils-release",
                releases: [
                    {
                        name: "@stackoverflow/stacks-utils",
                        type: "patch",
                    },
                ],
            },
        ],
    });

    const moved = await prepareIgnoredChangesets(fixture);

    assert.deepEqual(moved, []);
    assert.equal(
        await exists(path.join(fixture.cwd, ".changeset", "email-release.md")),
        true
    );
    assert.equal(
        await exists(path.join(fixture.cwd, ".changeset", "utils-release.md")),
        true
    );
});

test("ignores changesets already consumed in prerelease mode", async (t) => {
    const fixture = await createFixture(t, {
        ignore: ["@stackoverflow/stacks-email"],
        preState: {
            mode: "pre",
            tag: "beta",
            initialVersions: {},
            changesets: ["consumed-classic-release"],
        },
        changesets: [
            {
                id: "consumed-classic-release",
                releases: [{ name: "@stackoverflow/stacks", type: "patch" }],
            },
            {
                id: "email-release",
                releases: [
                    { name: "@stackoverflow/stacks-email", type: "major" },
                ],
            },
        ],
    });

    const moved = await prepareIgnoredChangesets(fixture);

    assert.equal(moved.length, 1);
    assert.match(moved[0].source, /email-release\.md$/);
    assert.equal(
        await exists(
            path.join(fixture.cwd, ".changeset", "consumed-classic-release.md")
        ),
        true
    );
});
