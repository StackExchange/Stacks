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

describe("Netlify configuration", () => {
    test("redirects the beta hostname to the current documentation", () => {
        assert.match(
            netlifyConfig,
            /\[\[redirects\]\][\s\S]*from = "https:\/\/beta\.svelte\.stackoverflow\.design\/\*"[\s\S]*to = "https:\/\/svelte\.stackoverflow\.design\/:splat"[\s\S]*status = 301[\s\S]*force = true/
        );
    });
});
