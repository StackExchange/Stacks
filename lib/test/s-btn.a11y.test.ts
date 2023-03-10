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
            role: "button",
        },
        children: {
            default: "Ask question",
        },
        tag: "button",
    });
});
