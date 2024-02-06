import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

["checkbox", "radio"].forEach((type) => {
    describe("s-check-control", () => {
        // TODO include indeterminate
        ["checked", "unchecked"].forEach((state) => {
            runA11yTests({
                baseClass: "s-check-control",
                modifiers: {
                    global: ["has-warning", "has-error", "has-success"],
                },
                children: {
                    default: `
                        <input
                            class="s-${type}"
                            type="${type}"
                            id="test-input"
                            name=""
                            ${state === "checked" ? "checked" : ""}/>
                        <label class="s-label" for="test-input">
                            Label ${type}
                            <p class="s-input-message">Description</p>
                        </label>
                    `,
                },
                options: {
                    testidSuffix: `${state}-${type}`,
                },
            });
        });
    });
});
