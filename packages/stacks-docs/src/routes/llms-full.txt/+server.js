import { render } from "svelte/server";
import TurndownService from "turndown";

// Full content dump used by tools that need to chunk page bodies
// (e.g. stacks-mcp-server). The spec-compliant index lives at /llms.txt.

const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
});

export async function GET() {
    const baseUrl = "https://stackoverflow.design/";
    const mdFiles = import.meta.glob("$docs/public/**/**/*.md");

    let groupedDocs = {};

    for (const [path, doc] of Object.entries(mdFiles)) {
        const parts = path.split("/");
        const publicIndex = parts.indexOf("public");

        // Derive the section name from the path. Files under system/<group>/
        // use the sub-group name (e.g. components, base). Files outside system
        // (brand, copy, resources, changelog) use the first segment under public.
        let group;
        if (parts[publicIndex + 1] === "system") {
            group = parts[publicIndex + 2] ?? "system";
        } else {
            group = parts[publicIndex + 1] ?? "general";
        }

        if (!groupedDocs[group]) {
            groupedDocs[group] = [];
        }

        groupedDocs[group].push({ path, doc });
    }

    // Header
    let output = `
# Site Content for LLMs
# Generated: ${new Date().toISOString()}
# Site URL: ${baseUrl}
`.trim();

    // Loop over the sections
    for (const [group, docs] of Object.entries(groupedDocs)) {
        output += `\n\n## Collection: ${group}`;

        // Render the docs in the group
        for (const { path, doc } of docs) {
            const page = await doc();

            output += `

### Page: ${page.metadata?.title ?? path}
URL: ${baseUrl}${getSlug(path)}
Date: ${new Date().toISOString()}
description: ${page.metadata?.description ?? ""}

Content:
${turndownService.turndown(render(page.default).body)}

---

`.trimEnd();
        }
    }

    return new Response(output, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}

function getSlug(filePath) {
    let slug = filePath;

    slug = slug
        .replace("/src/docs/public/", "")
        .replace("index.md", "")
        .replace(".md", "");

    return slug;
}
