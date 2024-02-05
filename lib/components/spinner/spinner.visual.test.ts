import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div class="d-inline-block p8" data-testid="${testid}">${component}</div>
`;
describe("spinner", () => {
    // default, sizes
    runVisualTests({
        baseClass: "s-spinner",
        modifiers: {
            primary: ["xs", "sm", "md", "lg"],
        },
        children: {
            default: `<div class="v-visible-sr">Loading…</div>`,
        },
        template,
    });
    // applied font color
    runVisualTests({
        baseClass: "s-spinner",
        modifiers: {
            global: ["fc-theme-primary"],
        },
        children: {
            default: `<div class="v-visible-sr">Loading…</div>`,
        },
        template,
    });
    // .is-loading
    runVisualTests({
        baseClass: "is-loading",
        children: {
            default: `Loading…`,
        },
        template,
    });
});
