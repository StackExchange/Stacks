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
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            "s-card-dark-muted",
            "s-card-light-muted",
            "s-card-highcontrast-light-muted",
        ],
    });
});
