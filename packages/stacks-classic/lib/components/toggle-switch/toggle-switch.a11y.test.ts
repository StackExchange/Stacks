import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("toggle-switch", () => {
    // Single toggle switch
    [true, false].forEach((checked) => {
        [true, false].forEach((disabled) => {
            const idSuffix = `${checked ? "-checked" : ""}${
                disabled ? "-disabled" : ""
            }`;
            const id = `toggle-switch${idSuffix}`;

            runA11yTests({
                baseClass: "s-toggle-switch",
                modifiers: {
                    global: idSuffix ? [idSuffix.substring(1)] : [], // for proper testid generation
                },
                tag: "input",
                attributes: {
                    id,
                    type: "checkbox",
                    ...(checked ? { checked: "" } : {}),
                    ...(disabled ? { disabled: "" } : {}),
                },
                template: ({ component, testid }) => html`
                    <div data-testid="${testid}">
                        <label for="${id}">toggle</label>
                        ${component}
                    </div>
                `,
            });
        });
    });

    // Multiple toggle switch variant
    [true, false].forEach((offChecked) => {
        runA11yTests({
            baseClass: "s-toggle-switch",
            variants: ["multiple"],
            modifiers: {
                global: offChecked ? ["off"] : [], // for proper testid generation
            },
            children: {
                default: `
                    <input type="radio" name="group" id="four" ${
                        offChecked ? 'checked=""' : ""
                    }>
                    <label for="four" class="s-toggle-switch--label-off">Off</label>
                    <input type="radio" name="group" id="one" ${
                        !offChecked ? 'checked=""' : ""
                    }>
                    <label for="one">one</label>
                    <input type="radio" name="group" id="two">
                    <label for="two">two</label>
                `,
            },
            options: {
                includeNullVariant: false,
            },
            template: ({ component, testid }) => html`
                <div data-testid="${testid}">${component}</div>
            `,
        });
    });
});
