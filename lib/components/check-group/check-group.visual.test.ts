import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

type CheckGroup = "checkbox" | "radio";
const checkTypes: CheckGroup[] = ["checkbox", "radio"];

// Account for horizontal variant
[true, false].forEach((isHorizontal) => {
    checkTypes.forEach((type) => {
        describe("s-check-group", () => {
            const checkEls: {
                type: CheckGroup;
                id: string;
                state?: "checked" | "unchecked" | "indeterminate";
            }[] = [
                { type, id: `test-${type}1`, state: "checked" },
                { type, id: `test-${type}2` },
            ];
            runVisualTests({
                tag: "fieldset",
                baseClass: "s-check-group",
                attributes: {
                    class: isHorizontal ? "hs1 ws3 p8" : "hs2 ws2 p8",
                },
                variants: isHorizontal ? ["horizontal"] : [],
                children: {
                    default: `
                        <legend class="s-label">${type} group</legend>
                        ${checkEls
                            .map(
                                ({ type, state, id }, index) => `
                            <div class="s-check-control">
                                <input
                                    class="s-${type}"
                                    type="${type}"
                                    id="${id}-${index}"
                                    name=""
                                    ${state === "checked" ? "checked" : ""}/>
                                <label class="s-label" for="${id}-${index}">
                                    ${type} label ${index}
                                    <p class="s-input-message">Description</p>
                                </label>
                            </div>
                        `
                            )
                            .join("")}
                    `,
                },
                options: {
                    includeNullVariant: !isHorizontal,
                    testidSuffix: type,
                },
            });
        });
    });
});
