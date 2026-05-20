import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div class="d-inline-block p8" data-testid="${testid}">${component}</div>
`;
describe("loader", () => {
    // default, sizes
    runVisualTests({
        baseClass: "s-loader",
        modifiers: {
            primary: ["sm", "lg"],
        },
        children: {
            default: `<div class="s-loader--sr-text">Loading…</div>`,
        },
        template,
    });
    // applied font color
    runVisualTests({
        baseClass: "s-loader",
        modifiers: {
            global: ["fc-theme-primary"],
        },
        children: {
            default: `<div class="s-loader--sr-text">Loading…</div>`,
        },
        template,
    });
});
