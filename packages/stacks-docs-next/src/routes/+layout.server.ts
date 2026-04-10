import type { LayoutServerLoad } from "./$types";
import YAML from "yaml";
import structureRaw from "$src/structure.yaml?raw";

function findByPath({ navigation }, path) {
    return path.reduce(
        (acc, slug) => acc?.items?.find((item) => item.slug === slug),
        { items: navigation }
    );
}

export const load: LayoutServerLoad = async (event) => {
    // Load the navigation structure from the structure.yaml
    let structure: Record<string, unknown> = {};

    try {
        structure = YAML.parse(structureRaw);
    } catch (err) {
        console.error("Failed to parse structure.yaml:", err);
    }

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
    const segments: [string] = event.url.pathname.split("/").filter(Boolean);
    const breadcrumb: { label: string; path: string }[] = [];

    let currentLevel = { items: structure.navigation };
    let currentPath = "";

    segments.forEach((segment: string) => {
        const item = currentLevel?.items?.find((item) => item.slug === segment);

        if (item) {
            currentPath += `/${segment}`;

            breadcrumb.push({
                label: item.title || segment,
                path: currentPath,
            });

            currentLevel = item;
        }
    });

    return {
        structure,
        active,
        breadcrumb,
        needsAuth,
    };
};
