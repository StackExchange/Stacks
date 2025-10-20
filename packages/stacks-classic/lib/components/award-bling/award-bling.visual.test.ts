import { runVisualTests } from "../../test/visual-test-utils";
import { html } from "@open-wc/testing";
import "../../index";

describe("anchors", () => {
    runVisualTests({
        baseClass: "s-award-bling",
        variants: ["activity", "rep", "gold", "silver", "bronze"],
        modifiers: {
            primary: ["filled"],
            secondary: ["sm", "lg"],
        },
        children: {
            default: `<div class="v-visible-sr">bling</div>`,
        },
        template: ({ component, testid }) => html`
            <div
                class="d-inline-flex ai-center jc-center hs1 ws1 p8"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
    });
});
