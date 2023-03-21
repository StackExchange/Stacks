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
        skippedTestids: [
            "s-activity-indicator-dark-new", // TODO fix contrast issue
            "s-activity-indicator-dark-success-new", // TODO fix contrast issue
            "s-activity-indicator-dark-warning-new", // TODO fix contrast issue
            "s-activity-indicator-light-success-new", // TODO fix contrast issue
            "s-activity-indicator-light-warning-new", // TODO fix contrast issue
        ],
    });
});
