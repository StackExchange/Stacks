import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("notice", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-notice",
        variants: ["info", "success", "warning", "danger"],
        modifiers: {
            primary: ["important"],
        },
        children: {
            default: `Test notice`,
        },
        tag: "aside",
        skippedTestids: [
            /s-notice-dark/,
            "s-notice-light-success-important",
            "s-notice-light-warning-important",
        ],
    });
});
