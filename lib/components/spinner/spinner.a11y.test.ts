import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("spinner", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-spinner",
        modifiers: {
            primary: ["xs", "sm", "md", "lg"],
        },
        children: {
            default: `<div class="v-visible-sr">Loading…</div>`,
        },
    });
});
