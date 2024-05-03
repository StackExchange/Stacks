import { html } from "@open-wc/testing";
import { IconClearSm } from "@stackoverflow/stacks-icons/icons";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

const children = {
    default: `default`,
    dismiss: `dismiss <span class="s-tag--dismiss">${IconClearSm}</span>`,
    sponsor: `<img class="s-tag--sponsor" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII" width="16" height="16" alt="sponsor">sponsor`,
};

const themeStyles = `
    --theme-tag-background-color: var(--purple-100);
    --theme-tag-border-color: var(--purple-100);
    --theme-tag-color: var(--purple-500);
    --theme-tag-required-background-color: var(--green-100);
    --theme-tag-required-border-color: var(--green-400);
    --theme-tag-required-color: var(--green-500);
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid, style = "" }: any) => html`
    <div data-testid="${testid}" class="d-inline-block p4" style="${style}">${component}</div>
`;

describe("tag", () => {
    runVisualTests({
        baseClass: "s-tag",
        variants: ["ignored", "watched", "moderator", "required"],
        children,
        template,
    });

    // Size modifiers
    runVisualTests({
        baseClass: "s-tag",
        modifiers: {
            primary: ["xs", "sm", "md", "lg"],
        },
        children: {
            default: `default`,
        },
        template,
        options: {
            includeNullModifier: false,
        },
    });

    // Custom theme variables
    runVisualTests({
        baseClass: "s-tag",
        variants: ["required"],
        modifiers: {
            global: ["custom-theme"], // added for test id purposes
        },
        children: {
            default: children.default,
        },
        template: ({ component, testid }) => template({
            component,
            testid,
            style: themeStyles,
        }),
        options: {
            includeNullModifier: false,
        },
    });
});
