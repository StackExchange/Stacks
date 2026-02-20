import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe.skip("card", () => {
    runA11yTests({
        baseClass: "s-card",
        variants: ["muted"],
        children: {
            default: `<p>This is a description of the card’s content.</p>`,
        },
    });
});
