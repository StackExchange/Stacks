import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

const mdFiles = import.meta.glob("$docs/**/*.md");

export const load: PageLoad = async (event) => {
    await event.parent();

    const slug = [
        event.params.category,
        event.params.section,
        event.params.subsection,
    ]
        .filter(Boolean)
        .join("/");

    // Look for either public or private version of the file
    // i.e., try both color.md and color/index.md patterns, in public and private folders
    const doc =
        mdFiles[`/docs/public/${slug}.md`] ||
        mdFiles[`/docs/public/${slug}/index.md`] ||
        mdFiles[`/docs/private/${slug}.md`] ||
        mdFiles[`/docs/private/${slug}/index.md`];

    if (doc) {
        const loader: any = await doc();

        return {
            source: "md",
            Content: loader.default,
            metadata: loader.metadata,
        };
    }

    throw error(404, `No content found for ${slug}`);
};

export const ssr = true;
