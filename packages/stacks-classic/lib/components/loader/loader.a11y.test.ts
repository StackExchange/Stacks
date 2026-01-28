import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("loader", () => {
    runA11yTests({
        baseClass: "s-loader",
        modifiers: {
            primary: ["sm", "lg"],
        },
        children: {
            default: `<div class="v-visible-sr">Loading…</div>`,
        },
    });
});
