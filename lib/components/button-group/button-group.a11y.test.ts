import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

const btns = [
    { name: "Newest", isSelected: true },
    { name: "Frequent" },
    { name: "Active" },
    { name: "Bountied" },
    { name: "Unanswered" },
];

const getBtn = ({
    name = "",
    isRadio,
    isSelected,
}: {
    name: string;
    isRadio?: boolean;
    isSelected?: boolean;
}): string => {
    const baseClasses = "s-btn s-btn__muted s-btn__outlined";

    return isRadio
        ? `<input
            class="s-btn--radio"
            type="radio"
            name="test-btn-radio-group"
            id="btn-${name}"
            ${isSelected ? "checked" : ""}/>
            <label class="${baseClasses}" for="btn-${name}">
                ${name}
            </label>`
        : `<button
            class="${baseClasses}${isSelected ? " is-selected" : ""}"
            ${isSelected ? `aria-current="true"` : ""}
            role="button">
                ${name}
            </button>`;
};

describe("button group", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-btn-group",
        children: {
            default: btns.map((btn) => getBtn({ ...btn }))
            .join(""),
        },
        skippedTestids: [
            "s-btn-group-dark"
        ],
    });

    // s-btn-group--radio
    runComponentTests({
        type: "a11y",
        baseClass: "s-btn-group",
        modifiers: {
            primary: ["radio"],
        },
        children: {
            default: btns.map((btn) => getBtn({ ...btn, isRadio: true }))
                .join(""),
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
        skippedTestids: [
            "s-btn-group-dark-radio"
        ],
    });
});
