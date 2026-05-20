import { runVisualTests } from "../../test/visual-test-utils";
import { html } from "@open-wc/testing";
import { children } from "./vote.test.setup";
import "../../index";

describe("vote", () => {
    runVisualTests({
        baseClass: "s-vote",
        modifiers: {
            primary: ["expanded", "horizontal"],
        },
        children,
        template: ({ component, testid }) => html`
            <div
                class="d-inline-flex ai-center jc-center ws1 p8"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
    });
});
