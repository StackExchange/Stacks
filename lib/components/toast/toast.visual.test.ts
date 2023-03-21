import { runComponentTests } from "../../test/test-utils";
import { html } from "@open-wc/testing";
import "../../index";

describe("toast > notice", () => {
    // This is a test of notice component wrapped in a toast component
    runComponentTests({
        type: "visual",
        baseClass: "s-notice", // s-toast is a wrapper around s-notice
        variants: ["info", "success", "warning", "danger"],
        modifiers: {
            primary: ["important"],
        },
        attributes: {
            ariaHidden: "false",
        },
        children: {
            toast: "Test toast",
        },
        tag: "aside",
        template: ({ component, testid }) => html`
            <div data-testid="${testid}" class="s-toast" aria-hidden="false">
                ${component}
            </div>
        `,
    });
});
