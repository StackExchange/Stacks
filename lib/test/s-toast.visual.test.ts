import { html, fixture } from "@open-wc/testing";
import { visualDiff } from "@web/test-runner-visual-regression";
import "../ts/index";

const testToast = (variant = "info", important = false) => {
    const importantClass = important ? "s-notice__important" : "";

    return html`<div class="s-toast" aria-hidden="false">
        <aside class="s-notice s-notice__${variant} ${importantClass}">Test toast: ${variant} ${importantClass}</aside>
    </div>`
}

describe("s-toast", () => {
    it("should not introduce visual regressions for info toast", async () => {
        const toast = await fixture(testToast("info"));
        await visualDiff(toast, "s-toast__info");
    });
    it("should not introduce visual regressions for important info toast", async () => {
        const toast = await fixture(testToast("info", true));
        await visualDiff(toast, "s-toast__info-important");
    });
    it("should not introduce visual regressions for success toast", async () => {
        const toast = await fixture(testToast("success"));
        await visualDiff(toast, "s-toast__success");
    });
    it("should not introduce visual regressions for important success toast", async () => {
        const toast = await fixture(testToast("success", true));
        await visualDiff(toast, "s-toast__success-important");
    });
    it("should not introduce visual regressions for warning toast", async () => {
        const toast = await fixture(testToast("warning"));
        await visualDiff(toast, "s-toast__warning");
    });
    it("should not introduce visual regressions for important warning toast", async () => {
        const toast = await fixture(testToast("warning", true));
        await visualDiff(toast, "s-toast__warning-important");
    });
    it("should not introduce visual regressions for danger toast", async () => {
        const toast = await fixture(testToast("danger"));
        await visualDiff(toast, "s-toast__danger");
    });
    it("should not introduce visual regressions for important danger toast", async () => {
        const toast = await fixture(testToast("danger", true));
        await visualDiff(toast, "s-toast__danger-important");
    });
});
