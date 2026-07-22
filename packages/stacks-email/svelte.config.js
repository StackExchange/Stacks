import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import hljs from "highlight.js/lib/core";
import hljsBash from "highlight.js/lib/languages/bash";
import hljsTypeScript from "highlight.js/lib/languages/typescript";
import hljsXml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("bash", hljsBash);
hljs.registerLanguage("html", hljsXml);
hljs.registerLanguage("typescript", hljsTypeScript);
hljs.registerLanguage("xml", hljsXml);

const languageAliases = {
    sh: "bash",
    ts: "typescript",
};

const resolveLanguage = (lang) => {
    const language = languageAliases[lang] ?? lang;
    return hljs.getLanguage(language) ? language : undefined;
};

const escapeHtml = (code) =>
    code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extension: ".md",
            highlight: {
                highlighter: (code, lang) => {
                    const language = resolveLanguage(lang);
                    const highlighted = language
                        ? hljs.highlight(code, {
                              language,
                          }).value
                        : escapeHtml(code);
                    const escaped = highlighted
                        .replace(/\{/g, "&#123;")
                        .replace(/\}/g, "&#125;");
                    return `<pre class="s-code-block" tabindex="0"><code class="s-code-block language-${language ?? "plaintext"}">${escaped}</code></pre>`;
                },
            },
        }),
    ],
    kit: {
        adapter: adapter(),
    },
    extensions: [".svelte", ".md"],
};

export default config;
