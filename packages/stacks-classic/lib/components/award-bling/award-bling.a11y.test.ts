import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("award-bling", () => {
    runA11yTests({
        baseClass: "s-award-bling",
        variants: ["gold", "silver", "bronze"],
        children: {
            default: `100 <div class="v-visible-sr">award</div>`,
        },
        options: {
            includeNullVariant: false,
        },
    });
});
