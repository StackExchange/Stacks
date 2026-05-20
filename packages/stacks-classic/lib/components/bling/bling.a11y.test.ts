import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("bling", () => {
    runA11yTests({
        baseClass: "s-bling",
        variants: ["activity", "rep", "gold", "silver", "bronze"],
        modifiers: {
            primary: ["filled"],
            secondary: ["sm", "lg"],
        },
        children: {
            default: `<div class="v-visible-sr">bling</div>`,
        },
    });
});
