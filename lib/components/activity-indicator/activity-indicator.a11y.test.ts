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
        }
    });
});
