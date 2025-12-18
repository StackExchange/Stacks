import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

["s-checkbox", "s-radio"].forEach((atomicClass) => {
    const type = atomicClass.replace("s-", "");

    describe(type, () => {
        // TODO include indeterminate
        ["checked", "unchecked"].forEach((state) => {
            runA11yTests({
                baseClass: atomicClass,
                modifiers: {
                    global: ["has-warning", "has-error", "has-success"],
                    primary: ["checkmark"],
                },
                children: {
                    default: `
                        <input
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
