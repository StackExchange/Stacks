import { runA11yTests } from "../../test/a11y-test-utils";
import { WCAGNonTextContrast } from "../../test/assertions";
import "../../index";

describe("pagination", () => {
    runA11yTests({
        baseClass: "s-pagination",
        children: {
            default: `
                <ul>
                    <li>
                        <a class="s-pagination--item" href="#">Prev</a>
                    </li>
                    <li>
                        <a class="s-pagination--item" href="#">1</a>
                    </li>
                    <li>
                        <span class="s-pagination--item is-selected" aria-current="page">2</span>
                    </li>
                    <li>
                        <a class="s-pagination--item" href="#">3</a>
                    </li>
                    <li>
                        <span class="s-pagination--item s-pagination--item__clear">…</span>
                    </li>
                    <li>
                        <a class="s-pagination--item" href="#">100</a>
                    </li>
                    <li>
                        <a class="s-pagination--item" href="#">Next</a>
                    </li>
                </ul>
            `,
        },
        tag: "nav",
        additionalAssertions: [WCAGNonTextContrast],
    });
});
