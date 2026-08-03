import assert from "node:assert/strict";
import { execSync, spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const packageDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = execSync("git rev-parse --show-toplevel", {
    cwd: packageDirectory,
    encoding: "utf8",
}).trim();
const netlifyConfig = readFileSync(
    resolve(packageDirectory, "netlify.toml"),
    "utf8"
);
const ignoreCommand = netlifyConfig.match(/ignore = "([^"]+)"/)?.[1];

assert.ok(ignoreCommand, "netlify.toml must define an ignore command");

function runIgnoreCommand(context) {
    return spawnSync(ignoreCommand, {
        cwd: repositoryRoot,
        env: {
            ...process.env,
            CONTEXT: context,
        },
        shell: true,
        encoding: "utf8",
    });
}

test("skips automatic production builds", () => {
    const result = runIgnoreCommand("production");

    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /production deploys require a build hook/);
});

for (const context of ["deploy-preview", "branch-deploy"]) {
    test(`builds the ${context} context`, () => {
        const result = runIgnoreCommand(context);

        assert.equal(result.status, 1, result.stderr);
        assert.match(result.stdout, new RegExp(`${context} context`));
    });
}
