import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

// account for parent with `.is-disabled` class
[true, false].forEach((isDisabled) => {
    describe("description", () => {
        runComponentTests({
            type: "a11y",
            tag: "p",
            baseClass: "s-description",
            children: {
                default: `Describes the site in the product, emails, integrations, and logs.`,
            },
            options: {
                ...defaultOptions,
                testidSuffix: isDisabled ? "is-disabled" : "",
            },
            template: ({ component, testid }) => html`
                <div
                    class="${isDisabled ? "is-disabled" : ""}"
                    data-testid="${testid}"
                >
                    ${component}
                </div>
            `,
            skippedTestids: [/is-disabled/],
        });
    });
});
