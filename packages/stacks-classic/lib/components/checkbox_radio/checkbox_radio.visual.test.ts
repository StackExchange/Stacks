import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

["s-checkbox", "s-radio"].forEach((atomicClass) => {
    const type = atomicClass.replace("s-", "");

    describe(type, () => {
        // TODO include indeterminate
        ["checked", "unchecked"].forEach((state) => {
            runVisualTests({
                baseClass: atomicClass,
                modifiers: {
                    global: ["has-warning", "has-error", "has-success"],
                    primary: ["checkmark"],
                },
                attributes: {
                    class: "bg-black-100 hs1 ws2 p8",
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
                    disabled: `
                        <input
                            type="${type}"
                            id="test-input"
                            name=""
                            disabled
                            ${state === "checked" ? "checked" : ""}/>
                        <label class="s-label" for="test-input">
                            Label ${type}
                            <p class="s-input-message">Description</p>
                        </label>
                    `,
                },
                options: {
                    testidSuffix: `${state}`,
                },
            });
        });
    });
});
