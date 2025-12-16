import { html } from "@open-wc/testing";
import { SpotEmpty } from "@stackoverflow/stacks-icons/spots";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("empty-state", () => {
    runA11yTests({
        baseClass: "s-empty-state",
        children: {
            default: `${SpotEmpty}<p>This is a wonderful empty state component.</p>`,
        },
        template: ({ component, testid }) => html`
            <div class="ws3 p16" data-testid="${testid}">${component}</div>
        `,
    });
});
