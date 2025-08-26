import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

type CheckGroup = "checkbox" | "radio";
const checkTypes: CheckGroup[] = ["checkbox", "radio"];

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
        runA11yTests({
            tag: "fieldset",
            baseClass: "s-check-group",
            variants: ["horizontal"],
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
                testidSuffix: type,
            },
        });
    });
});
