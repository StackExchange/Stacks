import YAML from "yaml";
import structureRaw from "$src/structure.yaml?raw";

// Spec-compliant llms.txt index (see https://llmstxt.org). The full content
// dump tools like stacks-mcp-server chunk lives at /llms-full.txt.

const BASE_URL = "https://stackoverflow.design";

const SITE_TITLE = "Stacks";
const SITE_DESCRIPTION =
    "Stacks provides everything you need to quickly design, build, and ship coherent experiences across all of Stack Overflow—from the brand and product itself, down to how we send emails and write copy.";

// Top-level navigation entries whose direct children should each become their
// own H2 section. Everything else collapses to a single H2 per top-level.
const FLATTENED_TOP_LEVELS = new Set(["system"]);

export async function GET() {
    let structure = { navigation: [] };
    try {
        structure = YAML.parse(structureRaw) ?? { navigation: [] };
    } catch (err) {
        console.error("Failed to parse structure.yaml:", err);
    }

    const descriptions = await loadPageDescriptions();
    const sections = collectSections(structure.navigation ?? [], descriptions);
    const output = renderOutput(sections);

    return new Response(output, {
        headers: { "Content-Type": "text/plain" },
    });
}

async function loadPageDescriptions() {
    // Read markdown files as raw text rather than loading the compiled Svelte
    // module — we only need the frontmatter description, and avoiding the
    // module load keeps this independent of every page component's imports.
    const mdFiles = import.meta.glob("$docs/public/**/*.md", {
        query: "?raw",
        import: "default",
    });
    const entries = await Promise.all(
        Object.entries(mdFiles).map(async ([path, doc]) => {
            const raw = await doc();
            return [pathToUrl(path), parseDescription(raw)];
        })
    );
    return Object.fromEntries(entries);
}

function parseDescription(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return "";
    try {
        const fm = YAML.parse(match[1]) || {};
        return typeof fm.description === "string" ? fm.description : "";
    } catch {
        return "";
    }
}

function collectSections(navigation, descriptions) {
    const sections = [];
    for (const topLevel of navigation) {
        if (topLevel.private) continue;

        if (FLATTENED_TOP_LEVELS.has(topLevel.slug)) {
            for (const child of topLevel.items ?? []) {
                if (child.private) continue;
                pushSection(
                    sections,
                    child,
                    [topLevel.slug, child.slug],
                    descriptions
                );
            }
        } else {
            pushSection(
                sections,
                topLevel,
                [topLevel.slug],
                descriptions
            );
        }
    }
    return sections;
}

function pushSection(sections, item, basePath, descriptions) {
    const links = [];
    walkItems(item, basePath, descriptions, links);
    if (links.length > 0) {
        sections.push({ title: item.title ?? basePath.join(" / "), links });
    }
}

function walkItems(item, basePath, descriptions, links) {
    const children = Array.isArray(item.items) ? item.items : [];
    if (children.length === 0) {
        emitLink(item, basePath, descriptions, links);
        return;
    }
    for (const child of children) {
        if (child.private) continue;
        if (child.externalUrl) continue; // external links aren't site pages
        walkItems(child, [...basePath, child.slug], descriptions, links);
    }
}

function emitLink(item, basePath, descriptions, links) {
    const slug = basePath.join("/");
    // Folder-index pages keep their trailing slash (brand/color/index.md →
    // /brand/color/); plain .md pages don't (brand/motion.md → /brand/motion).
    const candidateUrls = [`/${slug}/`, `/${slug}`];
    const matchedUrl = candidateUrls.find((u) => descriptions[u] != null);
    if (!matchedUrl) {
        // No matching page file — skip rather than emit a dead link.
        return;
    }
    const cleaned = cleanDescription(descriptions[matchedUrl]);
    const url = `${BASE_URL}${matchedUrl}`;
    const title = item.title ?? basePath[basePath.length - 1];
    const suffix = cleaned ? `: ${cleaned}` : "";
    links.push(`- [${title}](${url})${suffix}`);
}

// Descriptions may contain inline HTML for the rendered page; strip it for
// llms.txt. Loop until stable so unclosed tags can't reintroduce the pattern
// (CodeQL js/incomplete-multi-character-sanitization).
function cleanDescription(input) {
    let previous;
    let output = input;
    do {
        previous = output;
        output = output.replace(/<[^>]+>/g, "");
    } while (output !== previous);
    return output.replace(/\s+/g, " ").trim();
}

function pathToUrl(path) {
    let slug = path
        .replace("/src/docs/public/", "")
        .replace(/\.md$/, "");
    if (slug.endsWith("/index")) {
        return `/${slug.replace(/\/index$/, "")}/`;
    }
    return `/${slug}`;
}

function renderOutput(sections) {
    const body = sections
        .map((s) => `## ${s.title}\n\n${s.links.join("\n")}`)
        .join("\n\n");
    return `# ${SITE_TITLE}\n\n> ${SITE_DESCRIPTION}\n\n${body}\n`;
}
