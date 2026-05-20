import testArgs from "./button.test.setup";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("button", () => {
    runA11yTests({
        ...testArgs,
        excludedTestids: [
            /^s-btn-(?=.*unset).*badge$/, // s-btn with badge and unset variant not supported
        ],
    });
});
