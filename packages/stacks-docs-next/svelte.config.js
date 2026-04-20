import path from "path";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import rehypeSlug from "rehype-slug";
import rehypeSectionize from "@hbsnow/rehype-sectionize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import extractToc from "@stefanprobst/rehype-extract-toc";
import hljs from "highlight.js";
import { visit } from "unist-util-visit";

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
                rehypeSectionize,
                [rehypeAutolinkHeadings, {
                    behavior: "append",
                    properties: { className: ["docs-heading-anchor", "s-btn", "s-btn__clear"], title: "Anchor link to this heading" },
                    content: {
                        type: "element",
                        tagName: "svg",
                        properties: {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            className: ["svg-icon", "IconLink"],
                            ariaHidden: "true",
                        },
                        children: [{
                            type: "element",
                            tagName: "path",
                            properties: { d: "M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38" },
                            children: [],
                        }],
                    },
                }],
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
                case "h2": add("docs-heading", "docs-h2"); break;
                case "h3": add("docs-heading", "docs-h3"); break;
                case "h4": add("docs-heading", "docs-h4"); break;
                case "p": add("docs-copy"); break;
                case "ol": add("docs-copy", "lh-xl"); break;
                case "section": add("docs-section"); break;
                case "ul": add("docs-ul", "lh-xl");  break;
                case "li": add("docs-li");  break;
                case "nav": add("docs-nav"); break;
                case "img": add("docs-img"); break;
                case "iframe": add("docs-iframe"); break;
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
        visit(tree, "element", (node) => {
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
