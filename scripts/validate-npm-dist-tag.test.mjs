import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, test } from "node:test";
import { URL } from "node:url";

import { validateNpmDistTag } from "./validate-npm-dist-tag.mjs";

describe("validateNpmDistTag", () => {
    test("accepts descriptive non-SemVer tags", () => {
        for (const tag of ["legacy-v2", "beta", "next"]) {
            assert.equal(validateNpmDistTag(tag), tag);
        }
    });

    test("rejects invalid and SemVer-like tags", () => {
        for (const tag of [
            "",
            "2",
            "2.x",
            "v2",
            "V6",
            "x",
            "x.x",
            "x.x.x",
            "^2",
            "latest tag",
        ]) {
            assert.throws(() => validateNpmDistTag(tag));
        }
    });

    test("validates the same tag that the V2 release publishes", async () => {
        const packageJson = JSON.parse(
            await readFile(new URL("../package.json", import.meta.url), "utf8")
        );
        const releaseScript = packageJson.scripts["release:v2"];
        const validationTags = [
            ...releaseScript.matchAll(/validate-npm-dist-tag\.mjs (\S+)/g),
        ].map((match) => match[1]);
        const publishInvocations = [
            ...releaseScript.matchAll(
                /\bchangeset publish\b(?:\s+--tag(?:=|\s+)([^\s&]+))?/g
            ),
        ];
        const publishTags = publishInvocations.map((match) => match[1]);

        assert.deepEqual(validationTags, ["legacy-v2"]);
        assert.equal(publishInvocations.length, 1);
        assert.deepEqual(publishTags, validationTags);
        assert.equal(validateNpmDistTag(publishTags[0]), "legacy-v2");
    });
});
