import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("button", () => {
    runComponentTests({
        type: "a11y",
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
            default: "Ask question",
        },
        tag: "button",
        excludedTestids: [
            /primary-outlined/, // This combination is not supported
        ],
        skippedTestids: [
            /s-btn-dark/, // TODO remove when contrast bugs are fixed
        ],
    });
});
