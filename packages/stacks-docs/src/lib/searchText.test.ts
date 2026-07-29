import { describe, expect, it } from "vitest";
import { getSearchText } from "./searchText";

describe("getSearchText", () => {
    it("removes rendered markup while preserving HTML examples", () => {
        const text = getSearchText(`
            <p>Use this button:</p>
            <pre><code>&lt;button class="s-btn" aria-pressed="false"&gt;Save&lt;/button&gt;</code></pre>
        `);

        expect(text).not.toContain("<p>");
        expect(text).toContain('<button class="s-btn" aria-pressed="false">');
    });
});
