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
        const loader: any = await doc();

        return {
            source: "md",
            filename,
            Content: loader.default,
            metadata: loader.metadata,
        };
    }

    throw error(404, `No content found for ${slug}`);
};

export const ssr = true;
