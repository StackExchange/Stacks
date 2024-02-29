import { testArgs } from "./button-group.test.setup";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("button group", () => {
    runA11yTests({
        ...testArgs,
        // TODO resolve btn badge contrast issues
        skippedTestids: [/s-btn-group-(light|dark|highcontrast-light)-badge/],
    });
});
