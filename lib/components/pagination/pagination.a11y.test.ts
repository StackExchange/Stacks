import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("pagination", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-pagination",
        children: {
            default: `
                <a class="s-pagination--item" href="#">Prev</a>
                <a class="s-pagination--item" href="#">1</a>
                <span class="s-pagination--item is-selected" aria-current="page">2</span>
                <a class="s-pagination--item" href="#">3</a>
                <span class="s-pagination--item s-pagination--item__clear">…</span>
                <a class="s-pagination--item" href="#">100</a>
                <a class="s-pagination--item" href="#">Next</a>
            `,
        },
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: ["s-pagination-dark", "s-pagination-light"],
    });
});
