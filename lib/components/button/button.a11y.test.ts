import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("button", () => {
    runA11yTests({
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
