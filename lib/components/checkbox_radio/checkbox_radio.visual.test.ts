import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkboxTemplate = ({ component, testid }: any) =>
    html`<div
        class="d-inline-flex ai-center jc-center bg-black-225 hs1 ws1 p8"
        data-testid="${testid}"
    >
        ${component}
    </div>`;

["checkbox", "radio"].forEach((type) => {
    describe(type, () => {
        // TODO include indeterminate
        ["checked", "unchecked"].forEach((state) => {
            runVisualTests({
                tag: "input",
                baseClass: `s-${type}`,
                attributes: {
                    type,
                    ...(state === "checked" ? { checked: "checked" } : {}),
                },
                template: ({ component, testid }) =>
                    checkboxTemplate({ component, testid }),
                options: {
                    testidSuffix: state,
                },
            });
        });
    });
});
