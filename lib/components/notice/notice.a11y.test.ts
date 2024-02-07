import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("notice", () => {
    runA11yTests({
        baseClass: "s-notice",
        variants: ["info", "success", "warning", "danger"],
        modifiers: {
            primary: ["important"],
        },
        children: {
            default: `Test notice`,
        },
        tag: "aside",
    });
});
