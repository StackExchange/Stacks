import process from "node:process";
import { pathToFileURL } from "node:url";
import semver from "semver";

export function validateNpmDistTag(tag) {
    if (typeof tag !== "string" || tag.length === 0) {
        throw new Error("The npm dist-tag must be a non-empty string.");
    }

    if (
        !/^[a-z][a-z0-9._-]*$/i.test(tag) ||
        /^v\d/i.test(tag) ||
        semver.validRange(tag) !== null
    ) {
        throw new Error(
            `The npm dist-tag "${tag}" is unsafe because it is invalid or SemVer-like.`
        );
    }

    return tag;
}

if (
    process.argv[1] &&
    import.meta.url === pathToFileURL(process.argv[1]).href
) {
    try {
        validateNpmDistTag(process.argv[2]);
    } catch (error) {
        process.stderr.write(`${error.message}\n`);
        process.exitCode = 1;
    }
}
