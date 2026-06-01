import hljs from "highlight.js";

type SupportedLanguage = "html" | "xml";

const escapeHtml = (input: string) =>
    input
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

const resolveLanguage = (language: SupportedLanguage) =>
    hljs.getLanguage(language) ? language : "plaintext";

export const highlightCode = async (
    code: string,
    language: SupportedLanguage
) => {
    try {
        const resolvedLanguage = resolveLanguage(language);
        const highlighted = hljs.highlight(code, {
            language: resolvedLanguage,
        }).value;

        return `<pre class="s-code-block" tabindex="0"><code class="s-code-block language-${resolvedLanguage}">${highlighted}</code></pre>`;
    } catch {
        const escaped = escapeHtml(code);
        return `<pre class="s-code-block" tabindex="0"><code class="s-code-block language-plaintext">${escaped}</code></pre>`;
    }
};
