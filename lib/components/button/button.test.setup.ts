import type { TestVariationArgs } from "../../test/test-utils";
import { IconArrowUp } from "@stackoverflow/stacks-icons/icons";
import "../../index";
import { html } from "@open-wc/testing";

const getChild = (child?: string): string => {
    switch (child) {
        case "badge":
            return `Ask question
                <span class="s-btn--badge">
                    <span class="s-btn--number">198</span>
                </span>`;
        case "vote":
            return `
                ${IconArrowUp}
                <span class="v-visible-sr">Vote</span>
            `;
        default:
            return "Ask question";
    }
};

// TODO test disabled states, interaction pseudo-classes
const testArgs: TestVariationArgs = {
    baseClass: "s-btn",
    variants: ["danger", "muted"],
    modifiers: {
        primary: ["filled", "outlined"],
        secondary: [...["xs", "sm", "md"], ...["dropdown", "icon"]],
        global: ["is-loading"], // TODO add `is-selected` global modifier
        standalone: [...["link", "unset"], ...["facebook", "github", "google"]],
    },
    attributes: {
        type: "button",
    },
    children: {
        default: getChild(),
        badge: getChild("badge"),
    },
    tag: "button",
};

const voteBtnTestArgs: TestVariationArgs = {
    baseClass: "s-btn",
    variants: ["vote"],
    modifiers: {
        global: ["is-selected"],
    },
    attributes: {
        type: "button",
    },
    children: {
        default: getChild("vote"),
    },
    tag: "button",
    options: {
        includeNullVariant: false,
    },
    template: ({ component, testid }) => html`
        <div
            class="d-inline-flex ai-center jc-center p8"
            data-testid="${testid}"
        >
            ${component}
        </div>
    `,
};

export { testArgs, voteBtnTestArgs };
