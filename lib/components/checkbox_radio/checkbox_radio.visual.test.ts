import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkboxTemplate = ({ component, testid }: any) => html`<div
    class="d-inline-flex ai-center jc-center bg-black-100 hs1 ws1 p8"
    data-testid="${testid}"
>
    ${component}
</div>`;

["checkbox", "radio"].forEach((type) => {
    describe(type, () => {
        // TODO include indeterminate
        ["checked", "unchecked"].forEach((state) => {
            runComponentTests({
                type: "visual",
                tag: "input",
                baseClass: `s-${type}`,
                attributes: {
                    type,
                    ...(state === "checked" ? { checked: "checked" } : {}),
                },
                template: ({ component, testid }) =>
                    checkboxTemplate({ component, testid }),
                options: {
                    ...defaultOptions,
                    testidSuffix: state,
                },
            });
        });
    });
});
