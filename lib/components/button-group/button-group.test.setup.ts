import { html } from "@open-wc/testing";
import type { TestVariationArgs } from "../../test/test-utils";

const btns = [
    { name: "Newest", isSelected: true },
    { name: "Frequent" },
    { name: "Active" },
];

const getBtn = ({
    name = "",
    isRadio,
    isSelected,
    hasBadge,
}: {
    name: string;
    isRadio?: boolean;
    isSelected?: boolean;
    hasBadge?: boolean;
}): string => {
    const baseClasses = "s-btn s-btn__muted";
    const btnChildren = `
        <span class="s-btn--text" data-text="${name}">${name}</span>
        ${
            hasBadge
                ? `<span class="s-btn--badge"><span class="s-btn--number">123</span></span>`
                : ""
        }
    `;

    return isRadio
        ? `<input
            class="s-btn--radio"
            type="radio"
            name="test-btn-radio-group"
            id="btn-${name}"
            ${isSelected ? "checked" : ""}/>
            <label class="${baseClasses}" for="btn-${name}">
                ${btnChildren}
            </label>`
        : `<button
            class="${baseClasses}${isSelected ? " is-selected" : ""}"
            ${isSelected ? `aria-current="true"` : ""}
            type="button">
                ${btnChildren}
            </button>`;
};

const getBtns = (ids: number[]): string => {
    return ids.map((id) => getBtn(btns[id])).join("");
};

const testArgs: TestVariationArgs = {
    baseClass: "s-btn-group",
    children: {
        default: getBtns([0, 1, 2]),
        single: getBtns([0]),
        form: `
            ${getBtns([0])}
            <form class="mb0 p0">
                ${getBtn(btns[1])}
            </form>
            ${getBtns([2])}
        `,
        badge: btns.map((btn) => getBtn({ ...btn, hasBadge: true })).join(""),
        radio: btns.map((btn) => getBtn({ ...btn, isRadio: true })).join(""),
    },
    template: ({ component, testid }) =>
        html`<div
            class="d-inline-flex ai-center jc-center p8"
            data-testid="${testid}"
        >
            ${component}
        </div>`,
};

export { testArgs };
