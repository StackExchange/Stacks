import { runA11yTests } from "../../test/a11y-test-utils";
import testArgs from "./post-summary.test.setup";
import "../../index";

describe("post-summary", () => {
    // Base, sparce
    runA11yTests({
        ...testArgs.base,
        // TODO resolve test failures
        skippedTestids: [
            /-deleted/,
            /-ignored/,
            /-highcontrast-(light|dark)-watched/,
        ],
    });

    // Truncated description sizes
    runA11yTests(testArgs.sizes);

    // Stats - answers, view hotness
    runA11yTests(testArgs.stats);

    // Badges
    runA11yTests(testArgs.badges);
});
