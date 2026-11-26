import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert";
import { describe, test } from "node:test";

const toolsDirectory = dirname(fileURLToPath(import.meta.url));
const netlifyConfig = readFileSync(
    join(toolsDirectory, "..", "netlify.toml"),
    "utf8"
);
const redirects = netlifyConfig
    .split(/^\s*\[\[redirects\]\]\s*$/m)
    .slice(1)
    .map((block) => block.split("\n").map((line) => line.trim()));

const expectedRules = [
    {
        name: "redirects the beta hostname to the current documentation",
        from: "https://beta.svelte.stackoverflow.design/*",
        to: "https://svelte.stackoverflow.design/:splat",
        status: 301,
    },
    {
        name: "upgrades the v0 hostname to HTTPS before proxying",
        from: "http://v0.svelte.stackoverflow.design/*",
        to: "https://v0.svelte.stackoverflow.design/:splat",
        status: 301,
    },
    {
        name: "serves the existing v2 branch deploy behind the HTTPS v0 hostname",
        from: "https://v0.svelte.stackoverflow.design/*",
        to: "https://v2--stacks-svelte.netlify.app/:splat",
        status: 200,
    },
];

describe("Netlify configuration", () => {
    test("limits routing rules to the beta and v0 hostnames", () => {
        assert.deepStrictEqual(
            redirects.map((rule) =>
                rule.find((line) => line.startsWith("from = "))
            ),
            expectedRules.map(({ from }) => `from = "${from}"`)
        );
    });

    for (const { name, from, to, status } of expectedRules) {
        test(name, () => {
            const rule = redirects.find((lines) =>
                lines.includes(`from = "${from}"`)
            );

            assert.ok(rule, `Missing routing rule for ${from}`);
            // Check each block independently so another rule cannot satisfy it.
            // No target query string means Netlify passes query parameters through.
            assert.ok(rule.includes(`to = "${to}"`));
            assert.ok(rule.includes(`status = ${status}`));
            assert.ok(rule.includes("force = true"));
        });
    }
});
