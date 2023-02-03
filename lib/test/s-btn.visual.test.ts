import { html, fixture } from "@open-wc/testing";
import { visualDiff } from "@web/test-runner-visual-regression";
import "../ts/index";

describe("s-btn", () => {
    it("should not introduce visual regressions for loading button", async () => {
        // Adding a padded wrapper to avoid GitHub Actions diff discrepancies
        const btn = await fixture(html`
            <div style="height: 40px; width: 100px; display: inline-block;">
                <button class="s-btn is-loading" type="button">Loading</button>
            </div>
        `);

        await visualDiff(btn, "s-btn-is-loading");
    });
});
