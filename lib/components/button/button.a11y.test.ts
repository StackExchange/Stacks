import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("button", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-btn",
        variants: ["danger", "muted"],
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
    });
});
