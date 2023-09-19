import { runComponentTests } from "../../test/test-utils";
import { html } from "@open-wc/testing";
import "../../index";

describe("toast > notice", () => {
    // This is a test of notice component wrapped in a toast component
    runComponentTests({
        type: "a11y",
        baseClass: "s-notice", // s-toast is a wrapper around s-notice
        variants: ["info", "success", "warning", "danger"],
        modifiers: {
            primary: ["important"],
        },
        children: {
            toast: `<span id="message">Test toast</span>`,
        },
        tag: "aside",
        template: ({ component, testid }) => html`
            <div
                class="s-toast ps-static t0 l0"
                role="alertdialog"
                aria-hidden="false"
                aria-labelledby="message"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
    });
});
