import type { LayoutServerLoad } from "./$types";
import YAML from "yaml";
import structureRaw from "$src/structure.yaml?raw";

type NavItem = {
    slug: string;
    title?: string;
    private?: boolean;
    items?: NavItem[];
    [key: string]: unknown;
};

type Structure = {
    navigation?: NavItem[];
};

function findByPath({ navigation = [] }: Structure, path: string[]): NavItem | undefined {
    let currentLevel: { items?: NavItem[] } | NavItem = { items: navigation };

    for (const slug of path) {
        const next = currentLevel.items?.find((item) => item.slug === slug);
        if (!next) return undefined;
        currentLevel = next;
    }

    return "slug" in currentLevel ? currentLevel : undefined;
}

export const load: LayoutServerLoad = async (event) => {
    // Load the navigation structure from the structure.yaml
    let structure: Structure = {};

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
    const segments = event.url.pathname.split("/").filter(Boolean);
    const breadcrumb: { label: string; path: string }[] = [];

    // Walk an item's children to find the first page path (an item with no children).
    function firstPagePath(item: NavItem, basePath: string): string {
        if (!Array.isArray(item.items) || item.items.length === 0) return basePath;
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
            const linkPath = Array.isArray(item.items) && item.items.length > 0
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
    };
};
