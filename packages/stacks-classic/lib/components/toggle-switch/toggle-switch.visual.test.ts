import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("toggle-switch", () => {
    // Single toggle switch
    [true, false].forEach((checked) => {
        [true, false].forEach((disabled) => {
            const testidSuffix = `${checked ? "checked" : "unchecked"}${
                disabled ? "-disabled" : "-enabled"
            }`;
            const id = `toggle-switch-${testidSuffix}`;

            runVisualTests({
                baseClass: "s-toggle-switch",
                tag: "input",
                attributes: {
                    id,
                    type: "checkbox",
                    ...(checked ? { checked: "" } : {}),
                    ...(disabled ? { disabled: "" } : {}),
                },
                options: {
                    includeNullModifier: false,
                    testidSuffix,
                },
                template: ({ component, testid }) => html`
                    <div data-testid="${testid}" class="p4 ws1">
                        <label class="v-visible-sr" for="${id}">toggle</label>
                        ${component}
                    </div>
                `,
            });
        });
    });

    // Multiple toggle switch variant
    [true, false].forEach((offChecked) => {
        runVisualTests({
            baseClass: "s-toggle-switch",
            variants: ["multiple"],
            children: {
                default: `
                    <input type="radio" name="group" id="off" ${
                        offChecked ? 'checked=""' : ""
                    }>
                    <label for="off" class="s-toggle-switch--label-off">Off</label>
                    <input type="radio" name="group" id="one" ${
                        !offChecked ? 'checked=""' : ""
                    }>
                    <label for="one">Weekly</label>
                    <input type="radio" name="group" id="two">
                    <label for="two">Daily</label>
                    <input type="radio" name="group" id="three">
                    <label for="three">3 hrs</label>
                `,
            },
            options: {
                includeNullModifier: false,
                includeNullVariant: false,
                testidSuffix: offChecked ? "unchecked" : "checked",
            },
            template: ({ component, testid }) => html`
                <div data-testid="${testid}" class="d-flex ai-center g8 p4 ws2">
                    ${component}
                </div>
            `,
        });
    });
});
