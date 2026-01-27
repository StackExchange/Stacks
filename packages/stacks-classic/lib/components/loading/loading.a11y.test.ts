import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("loading", () => {
    runA11yTests({
        baseClass: "s-loading",
        modifiers: {
            primary: ["sm", "lg"],
        },
        children: {
            default: `<div class="v-visible-sr">Loading…</div>`,
        },
    });
});
