import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("empty-state", () => {
    runVisualTests({
        baseClass: "s-skeleton",
        variants: ["ai"],
        template: ({ component, testid }) => html`
            <div class="ws3 p4" data-testid="${testid}">${component}</div>
        `,
    });
});
