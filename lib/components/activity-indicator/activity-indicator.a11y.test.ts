import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("activity-indicator", () => {
    runA11yTests({
        baseClass: "s-activity-indicator",
        variants: ["danger", "success", "warning"],
        children: {
            default: `<div class="v-visible-sr">New activity</div>`,
            new: `new<div class="v-visible-sr">New activity</div>`,
        },
    });
});
