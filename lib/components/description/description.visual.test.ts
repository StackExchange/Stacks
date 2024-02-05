import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// account for parent with `.is-disabled` class
[true, false].forEach((isDisabled) => {
    describe("description", () => {
        runVisualTests({
            tag: "p",
            baseClass: "s-description",
            children: {
                default: `Describes the site in the product, emails, integrations, and logs.`,
            },
            options: {
                testidSuffix: isDisabled ? "is-disabled" : "",
            },
            template: ({ component, testid }) => html`
                <div
                    class="bg-black-225 d-inline-flex ai-center jc-center hs1 ws2 p8
                    ${isDisabled ? "is-disabled" : ""}"
                    data-testid="${testid}"
                >
                    ${component}
                </div>
            `,
        });
    });
});
