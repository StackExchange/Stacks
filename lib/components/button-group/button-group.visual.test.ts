import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const btnGroupTemplate = ({ component, testid }: any) =>
    html`<div
        class="d-inline-flex ai-center jc-center p8"
        data-testid="${testid}"
    >
        ${component}
    </div>`;

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
    const btns = [
        getBtn({ id: "btn-0", selected: true }),
        getBtn({ id: "btn-1" }),
        getBtn({ id: "btn-2" }),
        getBtn({ id: "btn-3" }),
    ];

    const form = (children: number[]) => `
        <form class="mb0 p0">
            ${children.map((child) => btns[child]).join("")}
        </form>
    `;

    const childGroups: { id: string; children: string }[] = [
        {
            id: "1",
            children: `${btns[0]}`,
        },
        {
            id: "1-form",
            children: `${form([0])}`,
        },
        {
            id: "2",
            children: `${btns[0]}${btns[1]}`,
        },
        {
            id: "2-form-first",
            children: `${form([0])}${btns[1]}`,
        },
        {
            id: "3",
            children: `${btns[0]}${btns[1]}${btns[2]}`,
        },
        {
            id: "3-form-first",
            children: `${form([0])}${btns[1]}${btns[2]}`,
        },
        {
            id: "3-form-middle",
            children: `${btns[0]}${form([1])}${btns[2]}`,
        },
        {
            id: "3-form-last",
            children: `${btns[0]}${btns[1]}${form([2])}`,
        },
        {
            id: "4-form-first-multi",
            children: `${form([0, 1, 2])}${btns[3]}`,
        },
        {
            id: "4-form-last-multi",
            children: `${btns[0]}${form([1, 2, 3])}`,
        },
    ];

    childGroups.forEach((childGroup) => {
        runComponentTests({
            type: "visual",
            baseClass: "s-btn-group",
            modifiers: {
                global: [`btn-group-${childGroup.id}`],
            },
            children: {
                default: childGroup.children,
            },
            template: btnGroupTemplate,
            options: {
                ...defaultOptions,
                includeNullModifier: false,
            },
        });
    });

    // s-btn-group--radio
    runComponentTests({
        type: "visual",
        baseClass: "s-btn-group",
        modifiers: {
            primary: ["radio"],
        },
        children: {
            default: [
                { id: "radio-1", selected: true, type: "radio" },
                { id: "radio-2", type: "radio" },
                { id: "radio-3", type: "radio" },
            ]
                .map((btn) => getBtn(btn))
                .join(""),
        },
        template: btnGroupTemplate,
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
    });
});
