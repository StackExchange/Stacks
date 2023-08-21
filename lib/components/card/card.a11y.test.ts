import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("card", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-card",
        variants: ["muted"],
        children: {
            default: `<p>This is a description of the card’s content.</p>`,
        },
    });
});
