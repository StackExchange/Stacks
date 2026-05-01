import { render } from "svelte/server";
import htmlToMd from "$src/lib/htmlToMd";

export async function GET(event) {
    const baseUrl = "https://stackoverflow.design/";
    const mdFiles = import.meta.glob("$docs/public/**/**/*.md");

    let groupedDocs = {};

    for (const [path, doc] of Object.entries(mdFiles)) {
        const parts = path.split("/");

        const systemIndex = parts.indexOf("system");
        const group = parts[systemIndex + 1];

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
${htmlToMd(render(page.default).body)}

---

`.trimEnd();
        }
    }

    // Append legacy content from stacks-docs
    const legacyResponse = await event.fetch("/legacy/llms.txt");
    if (legacyResponse.ok) {
        const legacyContent = await legacyResponse.text();
        // Strip the header lines from the legacy file (lines starting with #)
        const legacyBody = legacyContent
            .split("\n")
            .filter((line) => !line.startsWith("#"))
            .join("\n")
            .trimStart();
        output += "\n\n" + legacyBody;
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
