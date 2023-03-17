import { runComponentTests } from "../ts/test-utils";
import "../ts/index";

describe("s-btn", () => {
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
            /s-btn-dark/, // TODO remove exclusion when contrast bugs are fixed
            /primary-outlined/, // This combination is not supported
        ],
    });
});
