import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("pagination", () => {
    runVisualTests({
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
        template: ({ component, testid }) => html`
            <div class="d-inline-block p8" data-testid="${testid}">
                ${component}
            </div>
        `,
    });
});
