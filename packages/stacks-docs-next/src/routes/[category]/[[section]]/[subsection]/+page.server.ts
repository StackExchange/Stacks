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

type LegacyMetadata = {
    description?: string;
    svelte?: string;
    figma?: string;
};

/**
 * Extracts description and action links from the legacy fragment's page-header
 * div (`d-flex ai-start jc-space-between`) and returns both the extracted
 * metadata and the fragment HTML with that header div removed.
 *
 * Legacy fragments were built against the old docs template which rendered its
 * own page header. The new template provides the header, so the fragment's
 * header section would otherwise duplicate the description and action buttons.
 */
function extractLegacyHeader(html: string): LegacyMetadata & { strippedHtml: string } {
    const HEADER_OPEN = '<div class="d-flex ai-start jc-space-between">';
    const headerStart = html.indexOf(HEADER_OPEN);
    if (headerStart === -1) return { strippedHtml: html };

    // Find the matching closing </div> by tracking nesting depth.
    let depth = 0;
    let i = headerStart;
    let headerEnd = -1;

    while (i < html.length) {
        if (html.slice(i, i + 4) === "<div") {
            depth++;
        } else if (html.slice(i, i + 6) === "</div>") {
            depth--;
            if (depth === 0) {
                headerEnd = i + 6;
                break;
            }
        }
        i++;
    }

    if (headerEnd === -1) return { strippedHtml: html };

    const headerHtml = html.slice(headerStart, headerEnd);

    const descMatch = headerHtml.match(/<p[^>]*docs-copy[^>]*>([\s\S]*?)<\/p>/);
    const description = descMatch ? descMatch[1].trim() : undefined;

    // Match each badge <a> element individually to extract href and label.
    // URL-domain matching is unreliable (some Figma links are on svelte.stackoverflow.design).
    let svelte: string | undefined;
    let figma: string | undefined;
    const badgeRe = /<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    let badgeMatch;
    while ((badgeMatch = badgeRe.exec(headerHtml)) !== null) {
        const [, url, content] = badgeMatch;
        if (/<\/svg>\s*Svelte/i.test(content)) svelte = url;
        // Only accept proper figma.com URLs; legacy fragments have some badges
        // using svelte.stackoverflow.design/figma/* aliases instead.
        else if (/<\/svg>\s*Figma/i.test(content) && url.includes("figma.com")) figma = url;
    }

    let strippedHtml = html.slice(0, headerStart) + html.slice(headerEnd);

    // Some fragments built from the old template rendered the description twice:
    // once inside the header div and once as a standalone paragraph immediately
    // after it. Strip that second occurrence if present.
    if (description) {
        strippedHtml = strippedHtml.replace(
            `<p class="docs-copy fc-black-500 fs-title mb0">${description}</p>`,
            ""
        );
    }

    return { description, svelte, figma, strippedHtml };
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
            const rawHtml = (await response.text())
                .replace(/="\/assets\//g, '="/legacy/assets/');
            const { description, svelte, figma, strippedHtml } = extractLegacyHeader(rawHtml);
            return {
                source: "legacy" as const,
                filename: null,
                metadata: (description || svelte || figma)
                    ? { description, svelte, figma }
                    : null,
                markdown: null,
                html: strippedHtml,
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

    throw error(404, `No content found for ${slug}`);
};
