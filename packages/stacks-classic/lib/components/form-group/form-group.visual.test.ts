import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

const children = {
    default: `
        <legend class="s-label">Form group</legend>
        <div class="s-checkbox">
            <input type="checkbox" id="test-checkbox1" name="test-group" checked/>
            <label class="s-label" for="test-checkbox1">
                Checkbox label 1
                <p class="s-input-message">Description</p>
            </label>
        </div>
        <div class="s-checkbox">
            <input type="checkbox" id="test-checkbox2" name="test-group"/>
            <label class="s-label" for="test-checkbox2">
                Checkbox label 2
            </label>
        </div>
    `,
};

describe("form-group", () => {
    runVisualTests({
        tag: "fieldset",
        baseClass: "s-form-group",
        variants: ["horizontal"],
        modifiers: {
            global: ["has-warning", "has-error", "has-success"],
        },
        children,
    });

    // Disabled
    runVisualTests({
        tag: "fieldset",
        baseClass: "s-form-group",
        children: {
            disabled: children.default,
        },
        options: {
            testidSuffix: "disabled",
        },
    });
});
