import { html } from "@open-wc/testing";
import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("activity-indicator", () => {
    runComponentTests({
        type: "visual",
        baseClass: "s-activity-indicator",
        variants: ["danger", "success", "warning"],
        children: {
            default: `<div class="v-visible-sr">New activity</div>`,
            new: `new<div class="v-visible-sr">New activity</div>`,
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
