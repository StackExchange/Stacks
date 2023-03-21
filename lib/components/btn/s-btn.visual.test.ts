import { html } from "@open-wc/testing";
import { runComponentTests } from "../../test/test-utils";
import "../../index";

const getChild = (child?: string): string => {
    switch (child) {
        case "badge":
            return `Ask question
                <span class="s-btn--badge">
                    <span class="s-btn--number">198</span>
                </span>`;
        default:
            return "Ask question";
    }
};

describe("btn", () => {
    // TODO test disabled states, interaction pseudo-classes
    runComponentTests({
        type: "visual",
        baseClass: "s-btn",
        variants: ["danger", "muted", "primary"],
        modifiers: {
            primary: ["filled", "outlined"],
            secondary: [...["xs", "sm", "md"], ...["dropdown", "icon"]],
            global: ["is-loading"],
            standalone: [
                ...["link", "unset"],
                ...["facebook", "github", "google"],
            ],
        },
        attributes: {
            type: "button",
        },
        children: {
            default: getChild(),
            badge: getChild("badge"),
        },
        tag: "button",
        template: ({ component, testid }) => html`
            <div
                class="bg-black-100 d-inline-flex ai-center jc-center hs1 ws2 p8"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
        excludedTestids: [
            /primary-outlined/, // This combination is not supported
        ],
    });
});
