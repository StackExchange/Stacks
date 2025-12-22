import type { PageLoad } from "./$types";

const mdFiles = import.meta.glob("$docs/**/*.md");

export const load: PageLoad = async (event) => {
    const layoutData = await event.parent();
    const serverData = event.data;

    if (!serverData.filename) return { ...layoutData, ...serverData };

    const doc = mdFiles[serverData.filename];
    const loader: any = await doc();

    return {
        ...layoutData,
        ...serverData,
        Content: loader.default,
    };
};

export const ssr = true;
