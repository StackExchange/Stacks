import testArgs from "./button.test.setup";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";
import { html } from "@open-wc/testing";

describe("button", () => {
    runVisualTests({
        ...testArgs,
        template: ({ component, testid }) => html`
            <div
                class="bg-black-225 d-inline-flex ai-center jc-center hs1 ws2 p8"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
    });
});
