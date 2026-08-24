import { mkdtemp, readFile, rename } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import readChangesets from "@changesets/read";

const log = (message) => process.stdout.write(`${message}\n`);

async function filterConsumedPrereleaseChangesets(cwd, changesets) {
    try {
        const preState = JSON.parse(
            await readFile(path.join(cwd, ".changeset", "pre.json"), "utf8")
        );

        if (preState.mode === "pre") {
            const consumedChangesets = new Set(preState.changesets);
            return changesets.filter(({ id }) => !consumedChangesets.has(id));
        }
    } catch (error) {
        if (error.code !== "ENOENT") {
            throw error;
        }
    }

    return changesets;
}

export async function prepareIgnoredChangesets({
    cwd = process.cwd(),
    tempDirectory,
} = {}) {
    const changesets = await filterConsumedPrereleaseChangesets(
        cwd,
        await readChangesets(cwd)
    );

    if (changesets.length === 0) {
        log("No pending changesets found.");
        return [];
    }

    const configPath = path.join(cwd, ".changeset", "config.json");
    const config = JSON.parse(await readFile(configPath, "utf8"));
    const ignoredPackages = new Set(config.ignore ?? []);
    const pendingReleases = changesets.flatMap(
        (changeset) => changeset.releases
    );

    if (
        pendingReleases.length === 0 ||
        pendingReleases.some(({ name }) => !ignoredPackages.has(name))
    ) {
        log("Actionable changesets found; leaving all changesets in place.");
        return [];
    }

    if (!tempDirectory) {
        throw new Error(
            "RUNNER_TEMP is required when temporarily excluding ignored changesets."
        );
    }

    const destination = await mkdtemp(
        path.join(tempDirectory, "stacks-ignored-changesets-")
    );
    const movedChangesets = [];

    for (const { id } of changesets) {
        const source = path.join(cwd, ".changeset", `${id}.md`);
        const target = path.join(destination, `${id}.md`);
        await rename(source, target);
        movedChangesets.push({ source, target });
    }

    log(
        `Temporarily excluded ${movedChangesets.length} ignored-only changeset(s) so Changesets can publish prepared package versions.`
    );

    return movedChangesets;
}

const isMainModule =
    process.argv[1] &&
    import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isMainModule) {
    await prepareIgnoredChangesets({ tempDirectory: process.argv[2] });
}
