import { html, fixture } from "@open-wc/testing";
import { visualDiff } from "@web/test-runner-visual-regression";
import "../ts/index";

describe("s-btn", () => {
    it("should not introduce visual regressions for loading button", async () => {
        const btn = await fixture(html`
            <button class="s-btn is-loading" type="button">Loading</button>
        `);
        await visualDiff(btn, "s-btn-is-loading");
    });
});