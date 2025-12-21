import type { PageLoad } from "./$types";

const mdFiles = import.meta.glob("$docs/**/*.md");

export const load: PageLoad = async (event) => {
    const serverData = event.data;

    if (!serverData.filename) return serverData

    const doc = mdFiles[serverData.filename];
    const loader: any = await doc();

    return {
        ...serverData,
        Content: loader.default,
    };
};

export const ssr = true;
