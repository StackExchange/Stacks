import { render } from "svelte/server";

export async function GET() {
    const baseUrl = "http://beta.stackoverflow.design/";
    const mdFiles = import.meta.glob("$docs/public/system/**/*.md");

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
${processContent(render(page.default).body)}

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

// Borrowed from
// https://github.com/CleverCloud/eleventy-plugin-llms-txt/blob/main/src/index.js#L16
function processContent(
    content,
    maxLength,
    normalizeWhitespace = true,
    stripHorizontalRules = true
) {
    if (!content) return "";

    // Remove <style> tags and their content
    let processedContent = content.replace(
        /<style[^>]*>[\s\S]*?<\/style>/gi,
        ""
    );

    // Remove <script> tags and their content
    processedContent = processedContent.replace(
        /<script[^>]*>[\s\S]*?<\/script>/gi,
        ""
    );

    // Strip HTML tags
    processedContent = processedContent.replace(/<[^>]*>/g, " ");

    // Remove horizontal rules if configured
    if (stripHorizontalRules) {
        // Replace '---' with a space to avoid breaking content flow
        processedContent = processedContent.replace(/---/g, " ");
    }

    // Normalize whitespace if configured
    if (normalizeWhitespace) {
        processedContent = processedContent.replace(/\s+/g, " ").trim();
    } else {
        // Just trim leading/trailing whitespace but preserve internal formatting
        processedContent = processedContent.trim();
    }

    // Truncate if needed
    if (maxLength && processedContent.length > maxLength) {
        // Try to truncate at a sentence boundary
        const lastPeriod = processedContent.lastIndexOf(".", maxLength - 3);
        if (lastPeriod > maxLength * 0.8) {
            // Only truncate at period if it's reasonably close to the max length
            processedContent =
                processedContent.substring(0, lastPeriod + 1) + "...";
        } else {
            processedContent = processedContent.substring(0, maxLength) + "...";
        }
    }

    return processedContent;
}
