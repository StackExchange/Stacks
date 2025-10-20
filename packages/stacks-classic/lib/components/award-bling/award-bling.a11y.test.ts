import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("award-bling", () => {
    runA11yTests({
        baseClass: "s-award-bling",
        variants: ["gold", "silver", "bronze"],
        children: {
            default: `<div class="v-visible-sr">bling</div>`,
        },
        options: {
            includeNullVariant: false,
        },
    });
});
