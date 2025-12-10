import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import rehypeSlug from "rehype-slug";
import rehypeSectionize from "@hbsnow/rehype-sectionize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import extractToc from "@stefanprobst/rehype-extract-toc";
import hljs from "highlight.js";
import { visit } from "unist-util-visit";

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
            $docs: "docs",
            $data: "../stacks-docs/_data",
        },
    },
    extensions: [".svelte", ".md"],
};

export default config;
