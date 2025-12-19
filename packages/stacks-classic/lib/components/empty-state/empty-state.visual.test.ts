import { html } from "@open-wc/testing";
import { SpotEmpty } from "@stackoverflow/stacks-icons/spots";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("empty-state", () => {
    runVisualTests({
        baseClass: "s-empty-state",
        children: {
            default: `${SpotEmpty.replace("svg-spot", "svg-spot native")}
            <p>This is a wonderful empty state component.</p>`,
            "with-title": `${SpotEmpty.replace("svg-spot", "svg-spot native")}
            <h4 class="s-empty-state--title">Amazing title for this empty state.</h4>
            <p>This is a wonderful empty state component.</p>`,
        },
        template: ({ component, testid }) => html`
            <div class="ws3 p16" data-testid="${testid}">${component}</div>
        `,
    });
});
