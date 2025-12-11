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
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                addTableClasses,
            ],
        }),
    ],
    kit: {
        adapter: adapter(),
        alias: {
            $src: "src",
            $components: "src/components",
            $docs: "src/docs",
            $data: "../stacks-docs/_data",
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

// Custom plugin to add Stacks classes to tables
function addTableClasses() {
    return function (tree) {
        visit(tree, "element", (node) => {
            if (node.tagName === "table") {
                node.properties = node.properties || {};
                node.properties.className = ["s-table"];
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
                    relativeToRoot = relativeToRoot.replace(/^src\//, '');

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
