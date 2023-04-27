import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkboxTemplate = ({ component, testid, id }: any) => html`
<div class="s-check-control" data-testid="${testid}">
    ${component}
    <label class="s-label" for="${id}">Label</label>
</div>`;

["checkbox", "radio"].map((type) => {
    describe(type, () => {
        // TODO include indeterminate
        ["checked", "unchecked"].map((state) => {
            runComponentTests({
                type: "a11y",
                tag: "input",
                baseClass: `s-${type}`,
                attributes: {
                    name: "test-name",
                    id: "test-id",
                    type,
                    ...(state === "checked" ? { checked: "checked" } : {}),
                },
                template: ({ component, testid }) =>
                    checkboxTemplate({
                        component,
                        testid,
                        id: "test-id",
                    }),
                options: {
                    ...defaultOptions,
                    testidSuffix: state,
                },
            });
        });
    });
});
