import type { LayoutServerLoad } from "./$types";
import type { Component } from "svelte";
import { render } from "svelte/server";
import TurndownService from "turndown";
import YAML from "yaml";
import structureRaw from "$src/structure.yaml?raw";

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

function parseStructure(): Structure {
    try {
        return YAML.parse(structureRaw);
    } catch (err) {
        console.error("Failed to parse structure.yaml:", err);
        return {};
    }
}

const structure = parseStructure();

function findByPath(
    { navigation = [] }: Structure,
    path: string[]
): NavItem | undefined {
    let currentLevel: { items?: NavItem[] } | NavItem = { items: navigation };

    for (const slug of path) {
        const next = currentLevel.items?.find((item) => item.slug === slug);
        if (!next) return undefined;
        currentLevel = next;
    }

    return "slug" in currentLevel ? currentLevel : undefined;
}

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
    if (metadata?.title) return metadata.title;

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
    if (metadata?.description) return metadata.description;

    const trail = getNavTrail(structure, path.split("/").filter(Boolean));
    return trail.at(-1)?.description ?? "";
}

async function getSearchDocuments(
    structure: Structure
): Promise<DocsSearchDocument[]> {
    const markdownDocuments = await Promise.all(
        Object.entries(mdFiles).map(async ([path, doc]) => {
            const page = (await doc()) as {
                default: Component;
                metadata: DocsMetadata;
            };
            const searchPath = getSearchPath(path);

            return {
                id: path,
                title: getSearchTitle(page.metadata, structure, searchPath),
                description: getSearchDescription(
                    page.metadata,
                    structure,
                    searchPath
                ),
                path: searchPath,
                text: turndownService.turndown(render(page.default).body),
            };
        })
    );

    return [
        ...markdownDocuments,
        {
            id: "route:/resources/icons",
            title: "Resources > Icons & Spots",
            description:
                "Search and browse Stack Overflow icons and spot illustrations.",
            path: "/resources/icons",
            text: "icons icon spots spot illustrations illustration figma github svg svelte",
        },
    ];
}

const searchDocumentsPromise = getSearchDocuments(structure);

export const load: LayoutServerLoad = async (event) => {
    // Grab the current section from the structure
    const path = [
        event.params.category,
        event.params.section,
        event.params.subsection,
    ].filter(Boolean);

    const active = findByPath(structure, path);

    const user = event.locals.user;

    // In development, skip auth since the submodule itself requires authorization to clone
    const isDev = process.env.NODE_ENV === "development";
    const needsAuth = !isDev && !user && active?.private;

    // Build breadcrumbs with actual page titles
    const segments = event.url.pathname.split("/").filter(Boolean);
    const breadcrumb: { label: string; path: string }[] = [];

    // Walk an item's children to find the first page path (an item with no children).
    function firstPagePath(item: NavItem, basePath: string): string {
        if (!Array.isArray(item.items) || item.items.length === 0)
            return basePath;
        const first = item.items[0];
        return firstPagePath(first, `${basePath}/${first.slug}`);
    }

    let currentLevel: { items?: NavItem[] } = { items: structure.navigation };
    let currentPath = "";

    segments.forEach((segment: string) => {
        const item = currentLevel?.items?.find((item) => item.slug === segment);

        if (item) {
            currentPath += `/${segment}`;

            // If this item has children (it's a section, not a page), link to its
            // first descendant page so the breadcrumb doesn't navigate to a 404.
            const linkPath =
                Array.isArray(item.items) && item.items.length > 0
                    ? firstPagePath(item, currentPath)
                    : currentPath;

            breadcrumb.push({
                label: item.title ?? segment,
                path: linkPath,
            });

            currentLevel = item;
        }
    });

    return {
        structure,
        active,
        breadcrumb,
        needsAuth,
        searchDocuments: await searchDocumentsPromise,
    };
};
