import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

const getButton = ({
    children = "",
    isRadio,
    isSelected,
}: {
    children: string;
    isRadio?: boolean;
    isSelected?: boolean;
}): string => {
    const baseClasses = "s-btn s-btn__muted s-btn__outlined";

    return isRadio
        ? `<input
            class="s-btn--radio"
            type="radio"
            name="test-btn-radio-group"
            id="btn-${children}"
            ${isSelected ? "checked" : ""}/>
            <label class="${baseClasses}" for="btn-${children}">
                ${children}
            </label>`
        : `<button
            class="${baseClasses}${isSelected ? " is-selected" : ""}"
            ${isSelected ? `aria-current="true"` : ""}
            role="button">
                ${children}
            </button>`;
};

const getBaseButtons = (isRadio?: boolean): string =>
    [
        { children: "Newest", isSelected: true, isRadio },
        { children: "Frequent", isRadio },
        { children: "Active", isRadio },
        { children: "Bountied", isRadio },
        { children: "Unanswered", isRadio },
    ]
        .map(getButton)
        .join("");

describe("button-group", () => {
    [false, true].forEach((isRadio) => {
        runComponentTests({
            type: "a11y",
            baseClass: "s-btn-group",
            modifiers: isRadio ? { primary: ["radio"] } : {},
            children: {
                default: getBaseButtons(isRadio),
            },
            options: {
                ...defaultOptions,
                includeNullModifier: !isRadio,
            },
            // skippedTestids: [
            //     "s-btn-group-dark",
            // ],
        });
    });
});
