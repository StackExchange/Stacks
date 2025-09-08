import { testArgs } from "./button-group.test.setup";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("button group", () => {
    runA11yTests({
        ...testArgs,
        // TODO remove skipped tests once btn badge contrast issues are resolved
        // see also https://github.com/StackExchange/Stacks/pull/1663
        skippedTestids: [/s-btn-group-(light|dark|highcontrast-light)-badge/],
    });
});
