import path from "path";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import extractToc from "@stefanprobst/rehype-extract-toc";
import hljs from "highlight.js";
import { visit, SKIP } from "unist-util-visit";
import { IconLink } from "@stackoverflow/stacks-icons/icons";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extension: ".md",
            highlight: {
                highlighter: (code, lang) => {
                    const language = hljs.getLanguage(lang)
                        ? lang
                        : "plaintext";
                    const highlighted = hljs.highlight(code, {
                        language,
                    }).value;
                    // Escape the highlighted HTML to prevent Svelte from parsing it
                    const escaped = highlighted
                        .replace(/\{/g, "&#123;")
                        .replace(/\}/g, "&#125;");
                    return `<pre class="s-code-block" tabindex="0"><code class="s-code-block language-${lang}">${escaped}</code></pre>`;
                },
            },
            remarkPlugins: [relativeImagesToImports],
            rehypePlugins: [
                rehypeSlug,
                extractToc,
                exposeToc,
                markHeadingsInsideGrid,
                sectionizeTopLevelHeadings,
                [
                    rehypeAutolinkHeadings,
                    {
                        behavior: "append",
                        test: (node) =>
                            node?.data?.disableHeadingAnchor !== true,
                        properties: {
                            className: ["docs-heading-anchor"],
                            ariaHidden: "true",
                            tabIndex: -1,
                        },
                        content: { type: "raw", value: IconLink },
                    },
                ],
                addTableClasses,
                addDocClasses,
            ],
        }),
    ],
    kit: {
        adapter: adapter(),
        alias: {
            $src: "src",
            $components: "src/components",
            $docs: "src/docs",
        },
    },
    extensions: [".svelte", ".md"],
};

// Custom plugin to expose TOC in frontmatter
function exposeToc() {
    return function (tree, file) {
        if (file.data.toc) {
            // Add TOC to the file's data so mdsvex can access it
            if (!file.data.fm) {
                file.data.fm = {};
            }
            file.data.fm.toc = file.data.toc;
        }
    };
}

const VOID_TAGS = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);

const RAW_TAG_PATTERN =
    /<\/?([A-Za-z][A-Za-z0-9:._-]*)(?:(?:\s[^<>]*)?)\/?\s*>/g;

function headingRank(node) {
    if (node?.type !== "element" || !/^h[1-6]$/.test(node.tagName)) {
        return null;
    }
    return Number.parseInt(node.tagName.slice(1), 10);
}

function updateRawTagStack(raw, stack) {
    RAW_TAG_PATTERN.lastIndex = 0;

    for (const match of raw.matchAll(RAW_TAG_PATTERN)) {
        const fullMatch = match[0];
        const tagName = match[1];
        const isClosing = fullMatch.startsWith("</");
        const isSelfClosing = fullMatch.endsWith("/>");
        const isVoid = VOID_TAGS.has(tagName.toLowerCase());

        if (isClosing) {
            const lastIndex = stack.lastIndexOf(tagName);
            if (lastIndex !== -1) {
                stack.splice(lastIndex, 1);
            }
            continue;
        }

        if (!isSelfClosing && !isVoid) {
            stack.push(tagName);
        }
    }
}

function isInsideTag(rawTagStack, tagName) {
    const target = tagName.toLowerCase();
    return rawTagStack.some((openTag) => openTag.toLowerCase() === target);
}

// Mark headings inside <Grid> blocks so autolink anchors can skip them.
function markHeadingsInsideGrid() {
    return function (tree) {
        const rawTagStack = [];

        for (const node of tree.children) {
            if (node.type === "raw") {
                updateRawTagStack(node.value, rawTagStack);
            }

            const rank = headingRank(node);
            if (rank !== null && isInsideTag(rawTagStack, "grid")) {
                node.data = { ...node.data, disableHeadingAnchor: true };
            }
        }
    };
}

// Sectionize top-level markdown headings, but skip headings rendered inside raw
// blocks/components (e.g. markdown inside <GridColumn> slots).
function sectionizeTopLevelHeadings() {
    const createSection = (rank, headingNode = null) => {
        const headingId = headingNode?.properties?.id;

        return {
            type: "element",
            tagName: "section",
            properties: {
                className: ["heading"],
                dataHeadingRank: rank,
                ...(typeof headingId === "string"
                    ? { ariaLabelledby: headingId }
                    : {}),
            },
            children: headingNode ? [headingNode] : [],
        };
    };

    return function (tree) {
        const rootWrapper = createSection(0);
        const wrapperStack = [rootWrapper];
        const rawTagStack = [];

        const currentWrapper = () => wrapperStack[wrapperStack.length - 1];
        const currentRank = () => currentWrapper().properties.dataHeadingRank;

        for (const node of tree.children) {
            if (node.type === "raw") {
                updateRawTagStack(node.value, rawTagStack);
            }

            const rank = headingRank(node);
            const shouldSectionize = rank !== null && rawTagStack.length === 0;

            if (!shouldSectionize) {
                currentWrapper().children.push(node);
                continue;
            }

            while (rank <= currentRank()) {
                wrapperStack.pop();
            }

            const section = createSection(rank, node);
            currentWrapper().children.push(section);
            wrapperStack.push(section);
        }

        tree.children = rootWrapper.children;
    };
}

// Custom plugin to add individual docs-* classes to generated elements.
// These replace the old .doc X descendant-selector pattern so each element
// carries its own class and does not depend on a parent .doc wrapper.
function addDocClasses() {
    return function (tree) {
        visit(tree, "element", (node) => {
            node.properties = node.properties || {};
            const existing = Array.isArray(node.properties.className)
                ? node.properties.className
                : node.properties.className
                  ? [node.properties.className]
                  : [];

            const add = (...names) => {
                node.properties.className = [...existing, ...names];
            };

            switch (node.tagName) {
                case "h2":
                    add("docs-heading", "docs-h2");
                    break;
                case "h3":
                    add("docs-heading", "docs-h3");
                    break;
                case "h4":
                    add("docs-heading", "docs-h4");
                    break;
                case "p":
                    add("docs-copy");
                    break;
                case "ol":
                    add("docs-copy", "lh-xl");
                    break;
                case "section":
                    add("docs-section");
                    break;
                case "ul":
                    add("docs-ul", "lh-xl");
                    break;
                case "li":
                    add("docs-li");
                    break;
                case "nav":
                    add("docs-nav");
                    break;
                case "img":
                    add("docs-img");
                    break;
                case "iframe":
                    add("docs-iframe");
                    break;
                case "a":
                    if (!existing.includes("docs-heading-anchor")) {
                        add("docs-link");
                    }
                    break;
            }
        });
    };
}

// Custom plugin to add Stacks classes to tables.
// Ensures s-table is present while preserving any existing classes (e.g. s-table__bx-simple).
function addTableClasses() {
    return function (tree) {
        visit(tree, "element", (node, index, parent) => {
            if (node.tagName === "table") {
                node.properties = node.properties || {};
                const existing = Array.isArray(node.properties.className)
                    ? node.properties.className
                    : node.properties.className
                      ? [node.properties.className]
                      : [];
                if (!existing.includes("s-table")) {
                    node.properties.className = ["s-table", ...existing];
                }

                if (parent) {
                    const wrapper = {
                        type: "element",
                        tagName: "div",
                        properties: { className: ["s-table-container"] },
                        children: [node],
                    };
                    parent.children.splice(index, 1, wrapper);
                    return [SKIP, index + 1];
                }
            }
        });
    };
}

// Custom plugin to transform image paths to Vite imports
// This is so in md files we can reference images relative to the file itself
function relativeImagesToImports() {
    return function (tree, file) {
        // Get the file path - try multiple properties
        const filePath = file.path || file.history?.[0] || file.filename;

        if (!filePath) {
            console.warn("Could not determine file path for image rewriting");
            return; // Skip if we can't determine the file path
        }

        visit(tree, "image", (node) => {
            const url = node.url;

            if (url.startsWith("./") || url.startsWith("../")) {
                try {
                    // Get the directory of the markdown file
                    const mdDir = path.dirname(filePath);
                    const imagePath = path.resolve(mdDir, url);
                    let relativeToRoot = path.relative(
                        process.cwd(),
                        imagePath
                    );

                    // Remove the src
                    relativeToRoot = relativeToRoot.replace(/^src\//, "");

                    // Rewrite to absolute URL path
                    node.url = "/" + relativeToRoot.replace(/\\/g, "/");

                    console.log(`Rewrote image: ${url} -> ${node.url}`);
                } catch (err) {
                    console.error(
                        `Error rewriting image path ${url}:`,
                        err.message
                    );
                }
            }
        });
    };
}

export default config;
