import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

describe("award-bling", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-award-bling",
        variants: ["gold", "silver", "bronze"],
        children: {
            default: `100 <div class="v-visible-sr">award</div>`,
        },
        options: {
            ...defaultOptions,
            includeNullVariant: false,
        },
    });
});
