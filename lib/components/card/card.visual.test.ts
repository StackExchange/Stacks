import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardTemplate = ({ component, testid }: any) =>
    html`<div
        class="d-inline-flex ai-center jc-center hs2 ws3 p8"
        data-testid="${testid}"
    >
        ${component}
    </div>`;

const baseChild = `
    <h2 class="fs-body3 lh-sm fc-dark">Base card title</h2>
    <p class="fs-body1 fc-medium">
        This is a description of the card’s content.
    </p>
    <div class="d-flex gx4">
        <button class="flex--item s-btn s-btn__primary s-btn__sm">
            Call to action
        </button>
        <button class="flex--item s-btn s-btn__sm">Cancel</button>
    </div>
`;

describe("card", () => {
    runVisualTests({
        baseClass: "s-card",
        variants: ["muted"],
        children: {
            default: baseChild,
        },
        template: cardTemplate,
    });

    // Stacked
    runVisualTests({
        baseClass: "s-card",
        variants: ["stacked"], // dummy variant for testid differentiation
        children: {
            default: `<div class="s-card ps-relative b4 l4">${baseChild}</div>`,
        },
        attributes: {
            class: "p0",
        },
        template: cardTemplate,
        options: {
            includeNullVariant: false,
        },
    });
});
