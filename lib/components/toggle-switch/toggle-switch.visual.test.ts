import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

describe("toggle-switch", () => {
    // Single toggle switch
    [true, false].forEach((checked) => {
        [true, false].forEach((disabled) => {
            const idSuffix = `${checked ? "-checked" : ""}${disabled ? "-disabled" : ""}`;
            const id = `toggle-switch${idSuffix}`;

            runComponentTests({
                type: "visual",
                baseClass: "s-toggle-switch",
                modifiers: {
                    global: idSuffix ? [idSuffix.substring(1)] : [], // for proper testid generation
                },
                tag: "input",
                attributes: {
                    id,
                    type: "checkbox",
                    ...(checked ? { checked: "checked" } : {}),
                    ...(disabled ? { disabled: "" } : {}),
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
        runComponentTests({
            type: "visual",
            baseClass: "s-toggle-switch",
            variants: ["multiple"],
            modifiers: {
                global: offChecked ? ["off"] : [], // for proper testid generation
            },
            children: {
                default: `
                    <input type="radio" name="group" id="four" ${offChecked ? "checked" : ""}>
                    <label for="four" class="s-toggle-switch--label-off">Off</label>
                    <input type="radio" name="group" id="one" ${!offChecked ? "checked" : ""}>
                    <label for="one">Weekly</label>
                    <input type="radio" name="group" id="two">
                    <label for="two">Daily</label>
                    <input type="radio" name="group" id="three">
                    <label for="three">3 hrs</label>
                `,
            },
            options: {
                ...defaultOptions,
                includeNullVariant: false,
            },
            template: ({ component, testid }) => html`
                <div data-testid="${testid}" class="d-flex ai-center g8 p4 ws2">
                    ${component}
                </div>
            `,
        });
    });
});
