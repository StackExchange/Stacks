import { html } from "@open-wc/testing";
import { IconClearSm } from "@stackoverflow/stacks-icons";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

const children = {
    default: `default`,
    dismiss: `dismiss <span class="s-tag--dismiss">${IconClearSm}</span>`,
    sponsor: `<img class="s-tag--sponsor" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII" width="16" height="16" alt="sponsor">sponsor`,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div data-testid="${testid}" class="d-inline-block p4">${component}</div>
`;

describe("tag", () => {
    runVisualTests({
        baseClass: "s-tag",
        variants: ["ignored", "watched", "moderator", "muted", "required"],
        modifiers: {
            global: ["is-selected"],
        },
        children,
        template,
    });

    // Size modifiers
    runVisualTests({
        baseClass: "s-tag",
        modifiers: {
            primary: ["xs", "sm", "md", "lg"],
            global: ["is-selected"],
        },
        children: {
            default: `default`,
        },
        template,
        options: {
            includeNullModifier: false,
        },
    });
});
