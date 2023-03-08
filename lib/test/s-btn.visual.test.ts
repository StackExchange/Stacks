import { html } from "@open-wc/testing";
import { makeTest } from "../ts/test-utils";
import "../ts/index";

describe("s-btn", () => {
    const loadingBtnTestid = "s-btn-is-loading";

    makeTest({
        description:
            "should not introduce visual regressions for loading button",
        // Adding a padded wrapper to avoid GitHub Actions diff discrepancies
        element: html`
            <div
                data-testid="${loadingBtnTestid}"
                style="height: 38px; width: 88px; display: inline-block;"
            >
                <button class="s-btn is-loading" type="button">Loading</button>
            </div>
        `,
        testid: loadingBtnTestid,
        type: "visual",
    });
});
