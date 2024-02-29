import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
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

const getBtns = (ids: number[]): string => {
    return ids.map((id) => getBtn(btns[id])).join("");
};

const groups: { id: string; children: string }[] = [
    {
        id: "1",
        children: getBtns([0]),
    },
    {
        id: "2",
        children: getBtns([0, 1]),
    },
    {
        id: "3",
        children: getBtns([0, 1, 2]),
    },
    {
        id: "4",
        children: getBtns([0, 1, 2, 3]),
    },
    {
        id: "4-with-form",
        children: `
            ${getBtns([0])}
            <form class="mb0 p0">
                ${getBtn(btns[1])}
            </form>
            ${getBtns([2, 3])}`,
    },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const btnGroupTemplate = ({ component, testid }: any) =>
    html`<div
        class="d-inline-flex ai-center jc-center p8"
        data-testid="${testid}"
    >
        ${component}
    </div>`;

describe("button group", () => {
    groups.forEach((group) => {
        runVisualTests({
            baseClass: "s-btn-group",
            modifiers: {
                global: [`btn-group-${group.id}`],
            },
            children: {
                default: group.children,
                radio: btns
                    .map((btn) => getBtn({ ...btn, isRadio: true }))
                    .join(""),
            },
            template: btnGroupTemplate,
            options: {
                includeNullModifier: false,
            },
        });
    });
});
