import { runVisualTests } from "../../test/visual-test-utils";
import { IconEyeSm } from "@stackoverflow/stacks-icons/icons";
import "../../index";
import { html } from "@open-wc/testing";

const variants = {
    blings: ["gold", "silver", "bronze"],
    numbers: ["answered", "bounty", "important", "rep", "rep-down", "votes"],
    filled: ["danger", "muted"],
    states: ["danger", "muted", "info", "new", "warning"],
    users: ["admin", "moderator", "staff"],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div
        class="d-inline-flex ai-center jc-center hs1 ws1 p8"
        data-testid="${testid}"
    >
        ${component}
    </div>
`;

describe("badge", () => {
    // Base badge
    runVisualTests({
        baseClass: "s-badge",
        children: {
            default: `base badge`,
        },
        tag: "span",
        template,
    });

    // Award badges
    variants.blings.map((bling) => {
        runVisualTests({
            baseClass: "s-badge",
            variants: [bling],
            children: {
                default: `<span class="s-award-bling s-award-bling__${bling}">
                    with bling
                </span>`,
            },
            options: {
                includeNullVariant: false,
            },
            tag: "span",
            template,
        });
    });

    // Number counts
    runVisualTests({
        baseClass: "s-badge",
        variants: variants.numbers,
        children: {
            default: "123",
        },
        options: {
            includeNullVariant: false,
        },
        tag: "span",
        template,
    });

    // State badges
    runVisualTests({
        baseClass: "s-badge",
        variants: variants.states,
        children: {
            default: `state badge`,
        },
        tag: "span",
        options: {
            includeNullVariant: false,
        },
        template,
    });

    // State badges w/ filled modifier
    runVisualTests({
        baseClass: "s-badge",
        variants: variants.filled,
        modifiers: {
            primary: ["filled"],
        },
        children: {
            default: `filled badge`,
        },
        options: {
            includeNullModifier: false,
        },
        tag: "span",
        template,
    });

    // State badges w/ filled modifier and icon
    runVisualTests({
        baseClass: "s-badge",
        variants: variants.filled,
        modifiers: {
            primary: ["filled"],
            secondary: ["icon"],
        },
        children: {
            default: `${IconEyeSm} icon badge`,
        },
        options: {
            includeNullModifier: false,
        },
        tag: "span",
        template,
    });

    // State badges w/ icon
    runVisualTests({
        baseClass: "s-badge",
        variants: variants.states.filter((state) => state !== "new"),
        modifiers: {
            primary: ["icon"],
        },
        children: {
            default: `${IconEyeSm} icon badge`,
        },
        options: {
            includeNullModifier: false,
        },
        tag: "span",
        template,
    });

    // User badges
    runVisualTests({
        baseClass: "s-badge",
        variants: variants.users,
        modifiers: {
            primary: ["xs", "sm"],
        },
        children: {
            default: "user badge",
        },
        options: {
            includeNullVariant: false,
        },
        tag: "span",
        template,
    });

    // Sizes
    runVisualTests({
        baseClass: "s-badge",
        modifiers: {
            primary: ["xs", "sm"],
        },
        children: {
            default: "size badge",
        },
        options: {
            includeNullModifier: false,
        },
        tag: "span",
        template,
    });
});
