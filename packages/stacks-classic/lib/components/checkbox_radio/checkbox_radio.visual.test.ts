import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

["s-checkbox", "s-radio"].forEach((type) => {
    describe(type, () => {
        const atomicClass = type.replace("s-", "");
        // TODO include indeterminate
        ["checked", "unchecked"].forEach((state) => {
            runVisualTests({
                baseClass: type,
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
                            type="${atomicClass}"
                            id="test-input"
                            name=""
                            ${state === "checked" ? "checked" : ""}/>
                        <label class="s-label" for="test-input">
                            Label ${atomicClass}
                            <p class="s-input-message">Description</p>
                        </label>
                    `,
                    disabled: `
                        <input
                            type="${atomicClass}"
                            id="test-input"
                            name=""
                            disabled
                            ${state === "checked" ? "checked" : ""}/>
                        <label class="s-label" for="test-input">
                            Label ${atomicClass}
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
