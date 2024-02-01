import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("page title", () => {
    runA11yTests({
        baseClass: "s-page-title",
        children: {
            default: `
                <div class="s-page-title--text">
                    <nav class="s-breadcrumbs" aria-label="example-breadcrumbs">…</nav>
                    <h1 class="s-page-title--header">Page title</h1>
                    <p class="s-page-title--description">
                        Optional description de Finibus Bonorum et Malorum
                    </p>
                </div>
                <div class="s-page-title--actions">
                    <button class="s-btn s-btn__filled" type="button">Action</button>
                </div>
            `,
        },
        template: ({ component, testid }) => html`
            <div class="d-block p8 ws6" data-testid="${testid}">
                ${component}
            </div>
        `,
    });
});
