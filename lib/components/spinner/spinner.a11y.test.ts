import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("spinner", () => {
    runA11yTests({
        baseClass: "s-spinner",
        modifiers: {
            primary: ["xs", "sm", "md", "lg"],
        },
        children: {
            default: `<div class="v-visible-sr">Loading…</div>`,
        },
    });
});
