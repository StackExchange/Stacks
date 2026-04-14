import type { PageServerLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import type { Component } from "svelte";
import { render } from "svelte/server";
import TurndownService from "turndown";
const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
});

const mdFiles = import.meta.glob("$docs/**/*.md");

type NavItem = { slug: string; items?: NavItem[] };

function firstLeafSlug(prefix: string, item: NavItem): string {
    if (!item.items?.length) return `${prefix}/${item.slug}`;
    return firstLeafSlug(`${prefix}/${item.slug}`, item.items[0]);
}

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

    if (parent.active?.legacy) {
        const response = await event.fetch(`/legacy/fragments/${parent.active.legacy}/fragment.html`);
        if (response.ok) {
            const html = (await response.text())
                .replace(/="\/assets\//g, '="/legacy/assets/');
            return {
                source: "legacy" as const,
                filename: null,
                metadata: null,
                markdown: null,
                html,
            };
        }
    }

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

    // If the active item is a section (has children), redirect to the first leaf page
    if (parent.active?.items?.length > 0) {
        throw redirect(302, `/${firstLeafSlug(slug, parent.active.items[0])}`);
    }

    throw error(404, `No content found for ${slug}`);
};
