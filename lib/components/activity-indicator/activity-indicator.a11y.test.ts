import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("activity-indicator", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-activity-indicator",
        variants: ["danger", "success", "warning"],
        children: {
            default: `<div class="v-visible-sr">New activity</div>`,
            new: `new<div class="v-visible-sr">New activity</div>`,
        },
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            "s-activity-indicator-dark-new",
            "s-activity-indicator-dark-success-new",
            "s-activity-indicator-dark-warning-new",
            "s-activity-indicator-light-success-new",
            "s-activity-indicator-light-warning-new",
            "s-activity-indicator-highcontrast-light-warning-new",
        ],
    });
});
