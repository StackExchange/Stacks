import { readFileSync, readdirSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const sourceRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const svelteRoot = resolve(sourceRoot, "../../stacks-svelte");
const sourceExtensions = new Set([".js", ".md", ".svelte", ".ts"]);

function getSourceFiles(directory: string): string[] {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const path = join(directory, entry.name);

        if (entry.isDirectory()) {
            return getSourceFiles(path);
        }

        return sourceExtensions.has(extname(path)) ? [path] : [];
    });
}

describe("Svelte documentation links", () => {
    it("use the canonical stable domain", () => {
        const sourceFiles = [
            ...getSourceFiles(resolve(sourceRoot, "docs/public")),
            ...getSourceFiles(resolve(sourceRoot, "routes")),
            resolve(svelteRoot, ".storybook/stacks-theme.ts"),
            resolve(svelteRoot, "tools/storybook-llms-extractor.js"),
        ];
        const betaHostname = ["beta", "svelte", "stackoverflow", "design"].join(
            "."
        );
        const removedFigmaPath = ["svelte.stackoverflow.design", "figma"].join(
            "/"
        );

        for (const sourceFile of sourceFiles) {
            const source = readFileSync(sourceFile, "utf8");

            expect(source, sourceFile).not.toContain(betaHostname);
            expect(source, sourceFile).not.toContain(`${removedFigmaPath}/`);
        }
    });

    it("does not label the stable Storybook as beta", () => {
        const theme = readFileSync(
            resolve(svelteRoot, ".storybook/stacks-theme.ts"),
            "utf8"
        );

        expect(theme).not.toContain(">Beta<");
    });
});
