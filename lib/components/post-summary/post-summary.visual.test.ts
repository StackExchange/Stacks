import { runVisualTests } from "../../test/visual-test-utils";
import testArgs from "./post-summary.test.setup";
import "../../index";

describe("post-summary", () => {
    // Base, sparce
    runVisualTests({
        ...testArgs.base,
        // TODO resolve test failures
        skippedTestids: [
            /-deleted/,
            /-ignored/,
            /-highcontrast-(light|dark)-watched/,
        ],
    });

    // Truncated description sizes
    runVisualTests(testArgs.sizes);

    // Stats - answers, view hotness
    runVisualTests(testArgs.stats);

    // Badges
    runVisualTests(testArgs.badges);
});
