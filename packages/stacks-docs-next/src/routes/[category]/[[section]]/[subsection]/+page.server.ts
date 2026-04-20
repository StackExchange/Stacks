import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { Component } from "svelte";
import { render } from "svelte/server";

import TurndownService from "turndown";
const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
});

const mdFiles = import.meta.glob("$docs/**/*.md");

export const load: PageServerLoad = async (event) => {
    // SECURITY: Check auth first - don't load any content if unauthorized
    const parent = await event.parent();
    if (parent.needsAuth) {
        // Return minimal data - no content loading to prevent data leakage
        return {
            source: null,
            filename: null,
            metadata: null,
            markdown: null,
        };
    }

    const slug = [
        event.params.category,
        event.params.section,
        event.params.subsection,
    ]
        .filter(Boolean)
        .join("/");

    const possiblePaths = [
        `/src/docs/public/${slug}.md`,
        `/src/docs/public/${slug}/index.md`,
        `/src/docs/private/${slug}.md`,
        `/src/docs/private/${slug}/index.md`,
    ];

    const found = Object.entries(mdFiles).find(([path]) =>
        possiblePaths.includes(path)
    );

    if (found) {
        const [filename, doc] = found;
        const loader = (await doc()) as { default: Component; metadata: Record<string, unknown> };

        const markdown = turndownService.turndown(render(loader.default).body);

        return {
            source: "md",
            filename,
            metadata: loader.metadata,
            markdown,
        };
    }

    throw error(404, `No content found for ${slug}`);
};
