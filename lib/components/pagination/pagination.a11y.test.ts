import { runComponentTests } from "../../test/test-utils";
import { WCAGNonTextContrast } from "../../test/assertions";
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
        additionalAssertions: [WCAGNonTextContrast],
    });
});
