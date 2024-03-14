import { runVisualTests } from "../../test/visual-test-utils";
import { html } from "@open-wc/testing";
import "../../index";

describe("notice", () => {
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
            default: `Test notice <code>some code</code> <a class="s-link s-link__inherit s-link__underlined" href="#">Link</a>`,
        },
        tag: "aside",
        template: ({ component, testid }) => html`
            <div class="d-inline-block p8 wmx5" data-testid="${testid}">
                ${component}
            </div>
        `,
    });
});
