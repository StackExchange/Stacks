import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockLinkTemplate = ({ component, testid }: any) =>
    html`<div
        class="d-inline-flex ai-center jc-center hs1 ws2 p8"
        data-testid="${testid}"
    >
        ${component}
    </div>`;

describe("block-link", () => {
    // Base block link
    runComponentTests({
        type: "a11y",
        baseClass: "s-block-link",
        modifiers: {
            global: ["is-selected"],
        },
        children: {
            default: `block link`,
        },
        template: blockLinkTemplate,
    });

    // Base + danger
    runComponentTests({
        type: "a11y",
        baseClass: "s-block-link",
        modifiers: {
            primary: ["danger"],
        },
        children: {
            default: `block link`,
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
        template: blockLinkTemplate,
    });

    // All left and rignt variants
    runComponentTests({
        type: "a11y",
        baseClass: "s-block-link",
        variants: ["left is-selected", "right is-selected"],
        modifiers: {
            primary: ["danger"],
        },
        children: {
            default: `block link`,
        },
        options: {
            ...defaultOptions,
            includeNullVariant: false,
        },
        template: blockLinkTemplate,
    });
});
