import { runA11yTests } from "../../test/a11y-test-utils";
import { html } from "@open-wc/testing";
import "../../index";

describe("breadcrumbs", () => {
    runA11yTests({
        baseClass: "s-breadcrumbs",
        children: {
            default: `
                <div class="s-breadcrumbs--item">
                    <a class="s-breadcrumbs--link" href="#">Stacks</a>
                    <span class="s-breadcrumbs--divider" aria-hidden="true">|</span>
                </div>
                <div class="s-breadcrumbs--item">
                    <a class="s-breadcrumbs--link" href="#">Help center</a>
                    <span class="s-breadcrumbs--divider" aria-hidden="true">|</span>
                </div>
                <div class="s-breadcrumbs--item">
                    <a class="s-breadcrumbs--link" href="#">Icons</a>
                </div>
            `,
        },
        attributes: {
            "aria-label": "Breadcrumb navigation",
        },
        tag: "nav",
        template: ({ component, testid }) => html`
            <div
                class="d-inline-flex ai-center jc-center hs1 ws2 p8"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
    });
});
