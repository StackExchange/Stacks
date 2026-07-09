import type { Component } from "svelte";
import { render } from "svelte/server";
import TurndownService from "turndown";

// Only public docs are indexed because layout data is sent to every visitor.
const mdFiles = import.meta.glob("$docs/public/**/*.md");

const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
});

type NavItem = {
    slug: string;
    title?: string;
    description?: string;
    externalUrl?: string;
    private?: boolean;
    items?: NavItem[];
    [key: string]: unknown;
};

type Structure = {
    navigation?: NavItem[];
};

function getNavTrail(
    { navigation = [] }: Structure,
    path: string[]
): NavItem[] {
    const trail: NavItem[] = [];
    let currentLevel: { items?: NavItem[] } | NavItem = { items: navigation };

    for (const slug of path) {
        const next = currentLevel.items?.find((item) => item.slug === slug);
        if (!next) return trail;

        trail.push(next);
        currentLevel = next;
    }

    return trail;
}

function getSearchPath(filePath: string): string {
    return filePath
        .replace("/src/docs/public/", "/")
        .replace(/\/index\.md$/, "/")
        .replace(/\.md$/, "");
}

function getSearchTitle(
    metadata: DocsMetadata,
    structure: Structure,
    path: string
): string {
    if (metadata?.title) return normalizeText(metadata.title);

    const trail = getNavTrail(structure, path.split("/").filter(Boolean));
    if (trail.length) {
        return trail.map((item) => item.title ?? item.slug).join(" > ");
    }

    return path;
}

function getSearchDescription(
    metadata: DocsMetadata,
    structure: Structure,
    path: string
): string {
    if (metadata?.description) return normalizeText(metadata.description);

    const trail = getNavTrail(structure, path.split("/").filter(Boolean));
    return normalizeText(trail.at(-1)?.description ?? "");
}

function getPlainText(html: string): string {
    return normalizeText(turndownService.turndown(html));
}

function normalizeText(text: string): string {
    return text
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

const routeSearchDocuments: DocsSearchDocument[] = [
    // Non-markdown docs routes are not included in the glob above.
    {
        id: "route:/resources/icons",
        title: "Resources > Icons & Spots",
        description:
            "Search and browse Stack Overflow icons and spot illustrations.",
        path: "/resources/icons",
        text: "icons icon spots spot illustrations illustration figma github svg svelte",
    },
];

async function getSearchDocuments(
    structure: Structure
): Promise<DocsSearchDocument[]> {
    const markdownDocuments = await Promise.all(
        Object.entries(mdFiles).map(async ([path, doc]) => {
            try {
                const page = (await doc()) as {
                    default: Component;
                    metadata: DocsMetadata;
                };
                const searchPath = getSearchPath(path);
                const text = getPlainText(render(page.default).body);

                return {
                    id: path,
                    title: getSearchTitle(page.metadata, structure, searchPath),
                    description: getSearchDescription(
                        page.metadata,
                        structure,
                        searchPath
                    ),
                    path: searchPath,
                    text,
                };
            } catch (err) {
                console.error(
                    `Failed to build search document for ${path}:`,
                    err
                );
                return null;
            }
        })
    );

    return [
        ...markdownDocuments.filter(
            (document): document is DocsSearchDocument => document !== null
        ),
        ...routeSearchDocuments,
    ];
}

export function getSearchDocumentsPromise(structure: Structure) {
    return getSearchDocuments(structure).catch((err) => {
        console.error("Failed to build search documents:", err);
        return routeSearchDocuments;
    });
}
