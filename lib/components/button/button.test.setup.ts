import type { TestVariationArgs } from "../../test/test-utils";
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

// TODO test disabled states, interaction pseudo-classes
const testArgs: TestVariationArgs = {
    baseClass: "s-btn",
    variants: ["danger", "muted"],
    modifiers: {
        primary: ["filled", "outlined"],
        secondary: [...["xs", "sm", "md"], ...["dropdown", "icon"]],
        global: ["is-loading"],
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

export default testArgs;
