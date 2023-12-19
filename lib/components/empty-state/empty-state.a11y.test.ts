import { html } from "@open-wc/testing";
import { SpotEmptyXL } from "@stackoverflow/stacks-icons";
import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("empty-state", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-empty-state",
        children: {
            default: `${SpotEmptyXL}<p class="mt24"><strong>Hello!</strong> This is a wonderful empty state component.</p>`,
        },
        template: ({ component, testid }) => html`
            <div class="ws3 p16" data-testid="${testid}">${component}</div>
        `,
    });
});
