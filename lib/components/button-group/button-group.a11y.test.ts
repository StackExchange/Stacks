import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

const getBtn = ({
    id,
    selected = false,
    type = "button",
}: {
    id: string;
    selected?: boolean;
    type?: string;
}): string => {
    if (type === "radio") {
        // TODO fix: checked never renders as "checked"
        return `
            <input class="s-btn--radio" type="radio" name="ex-btn-group" id="${id}"${
                selected ? " checked" : ""
            }/ >
            <label class="s-btn s-btn__muted s-btn__outlined" for="${id}">
                radio
            </label>
        `;
    }
    return `
        <button class="s-btn s-btn__muted s-btn__outlined ${
            selected ? "is-selected" : ""
        }" aria-current="${selected}">btn</button>
    `;
};

describe("button group", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-btn-group",
        children: {
            default: [
                { id: "btn-1", selected: true },
                { id: "btn-2" },
                { id: "btn-3" },
            ]
                .map((btn) => getBtn(btn))
                .join(""),
        },
    });

    // s-btn-group--radio
    runComponentTests({
        type: "a11y",
        baseClass: "s-btn-group",
        modifiers: {
            primary: ["radio"],
        },
        children: {
            default: [
                { id: "radio-1", selected: true },
                { id: "radio-2" },
                { id: "radio-3" },
            ]
                .map((btn) => getBtn(btn))
                .join(""),
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
    });
});
