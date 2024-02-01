import { runVisualTests } from "../../test/visual-test-utils";
import { html } from "@open-wc/testing";
import "../../index";

runVisualTests({
    baseClass: "s-notice",
    variants: ["info", "success", "warning", "danger"],
    modifiers: {
        primary: ["important"],
    },
    attributes: {
        ariaHidden: "false",
    },
    children: {
        default: `Test notice`,
    },
    tag: "aside",
    template: ({ component, testid }) => html`
        <div class="d-inline-block p8" data-testid="${testid}">
            ${component}
        </div>
    `,
});
