import { makeTest } from "../ts/test-utils";
import { html } from "@open-wc/testing";
import "../ts/index";

const testElement = (testid, variant = "info", important = false) => {
    const importantClass = important ? "s-notice__important" : "";

    return html`<div data-testid="${testid}" class="s-toast" aria-hidden="false">
        <aside class="s-notice s-notice__${variant} ${importantClass}">
            Test toast: ${variant} ${importantClass}
        </aside>
    </div>`;
};

describe("s-toast", () => {
    ["info", "success", "warning", "danger"].forEach((variant) => {
        [false, true].forEach((important) => {
            const testid = important ? `s-toast-${variant}-important` : `s-toast-${variant}`;

            makeTest({
                element: testElement(testid, variant, important),
                testid: testid,
                type: "visual",
            });
        });
    });
});
