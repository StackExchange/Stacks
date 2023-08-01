import { defaultOptions, runComponentTests } from "../../test/test-utils";
import { html } from "@open-wc/testing";
import "../../index";

describe("anchors", () => {
    runComponentTests({
        type: "visual",
        baseClass: "s-award-bling",
        variants: ["gold", "silver", "bronze"],
        children: {
            default: `100 <div class="v-visible-sr">award</div>`,
        },
        options: {
            ...defaultOptions,
            includeNullVariant: false,
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
