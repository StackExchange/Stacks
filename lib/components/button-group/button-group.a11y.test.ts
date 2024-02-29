import { runA11yTests } from "../../test/a11y-test-utils";
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
    const baseClasses = "s-btn s-btn__muted";

    return isRadio
        ? `<input
            class="s-btn--radio"
            type="radio"
            name="test-btn-radio-group"
            id="btn-${name}"
            ${isSelected ? "checked" : ""}/>
            <label class="${baseClasses}" for="btn-${name}">
                <span class="s-btn--text" data-text="${name}">${name}</span>
            </label>`
        : `<button
            class="${baseClasses}${isSelected ? " is-selected" : ""}"
            ${isSelected ? `aria-current="true"` : ""}
            type="button">
                <span class="s-btn--text" data-text="${name}">${name}</span>
            </button>`;
};

describe("button group", () => {
    runA11yTests({
        baseClass: "s-btn-group",
        children: {
            default: btns.map((btn) => getBtn({ ...btn })).join(""),
            radio: btns
                .map((btn) => getBtn({ ...btn, isRadio: true }))
                .join(""),
        },
    });
});
