import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

["checkbox", "radio"].forEach((type) => {
    describe("s-check-control", () => {
        // TODO include indeterminate
        ["checked", "unchecked"].forEach((state) => {
            runVisualTests({
                baseClass: "s-check-control",
                modifiers: {
                    global: ["has-warning", "has-error", "has-success"],
                },
                attributes: {
                    class: "bg-black-225 hs1 ws2 p8",
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
