import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

type CheckGroup = "checkbox" | "radio";
const checkTypes: CheckGroup[] = ["checkbox", "radio"];

checkTypes.map((type) => {
    describe("s-check-group", () => {
        const checkEls: {
            type: CheckGroup;
            id: string;
            state?: "checked" | "unchecked" | "indeterminate",
        }[] = [
            { type, id: `test-${type}1`, state: "checked" },
            { type, id: `test-${type}2` },
            { type, id: `test-${type}3` },
        ];
        runComponentTests({
            type: "visual",
            tag: "fieldset",
            baseClass: "s-check-group",
            attributes: {
                class: "hs2 ws2 p8",
            },
            children: {
                default: `
                    <legend class="s-label">${type} group</legend>
                    ${checkEls.map(({ type, state, id }, index) => `
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
                    `).join("")}
                `,
            },
            options: {
                ...defaultOptions,
                testidSuffix: type,
            },
        });
    });
});
