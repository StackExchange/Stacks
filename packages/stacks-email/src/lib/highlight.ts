import type { LanguageFn } from "highlight.js";
import hljs from "highlight.js/lib/core";
import hljsXml from "highlight.js/lib/languages/xml";

type SupportedLanguage = "html" | "xml";

const registerLanguage = (language: SupportedLanguage, grammar: LanguageFn) => {
    if (!hljs.getLanguage(language)) {
        hljs.registerLanguage(language, grammar);
    }
};

registerLanguage("html", hljsXml);
registerLanguage("xml", hljsXml);

const escapeHtml = (input: string) =>
    input
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

export const highlightCode = async (
    code: string,
    language: SupportedLanguage
) => {
    try {
        const highlighted = hljs.highlight(code, {
            language,
        }).value;

        return `<pre class="s-code-block" tabindex="0"><code class="s-code-block language-${language}">${highlighted}</code></pre>`;
    } catch {
        const escaped = escapeHtml(code);
        return `<pre class="s-code-block" tabindex="0"><code class="s-code-block language-plaintext">${escaped}</code></pre>`;
    }
};
