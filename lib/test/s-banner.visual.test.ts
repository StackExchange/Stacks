import { html, fixture } from "@open-wc/testing";
import { visualDiff } from "@web/test-runner-visual-regression";
import "../ts/index";

const testBanner = (variant = "info", important = false) => {
    const importantClass = important ? "s-banner__important" : "";

    return html`<aside
        class="s-banner s-banner__${variant} ${importantClass} is-pinned ps-relatives"
        role="alert"
        aria-hidden="false"
    >
        <div
            class="d-flex flex__center jc-space-between s-banner--container"
            role="alertdialog"
            aria-describedby="banner-message"
        >
            <div aria-label="banner message">
                Test Banner: ${variant} ${importantClass}
            </div>
            <div class="ml-auto myn8">
                <span class="s-btn s-banner--btn">Close</span>
            </div>
        </div>
    </aside>`;
};

describe("s-banner", () => {
    it("should not introduce visual regressions for info banner", async () => {
        const banner = await fixture(testBanner("info"));
        await visualDiff(banner, "s-banner__info");
    });
    it("should not introduce visual regressions for important info banner", async () => {
        const banner = await fixture(testBanner("info", true));
        await visualDiff(banner, "s-banner__info-important");
    });
    it("should not introduce visual regressions for success banner", async () => {
        const banner = await fixture(testBanner("success"));
        await visualDiff(banner, "s-banner__success");
    });
    it("should not introduce visual regressions for important success banner", async () => {
        const banner = await fixture(testBanner("success", true));
        await visualDiff(banner, "s-banner__success-important");
    });
    it("should not introduce visual regressions for warning banner", async () => {
        const banner = await fixture(testBanner("warning"));
        await visualDiff(banner, "s-banner__warning");
    });
    it("should not introduce visual regressions for important warning banner", async () => {
        const banner = await fixture(testBanner("warning", true));
        await visualDiff(banner, "s-banner__warning-important");
    });
    it("should not introduce visual regressions for danger banner", async () => {
        const banner = await fixture(testBanner("danger"));
        await visualDiff(banner, "s-banner__danger");
    });
    it("should not introduce visual regressions for important danger banner", async () => {
        const banner = await fixture(testBanner("danger", true));
        await visualDiff(banner, "s-banner__danger-important");
    });
});
