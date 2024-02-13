import { runA11yTests } from "../../test/a11y-test-utils";
import { IconEyeSm } from "@stackoverflow/stacks-icons/icons";
import "../../index";

const variants = {
    blings: ["gold", "silver", "bronze"],
    numbers: ["answered", "bounty", "important", "rep", "rep-down", "votes"],
    filled: ["danger", "muted"],
    states: ["danger", "muted", "info", "new", "warning"],
    users: ["admin", "moderator", "staff"],
};

describe("badge", () => {
    // Base badge
    runA11yTests({
        baseClass: "s-badge",
        children: {
            default: `base badge`,
        },
        tag: "span",
    });

    // Award badges
    variants.blings.map((bling) => {
        runA11yTests({
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
        });
    });

    // Number counts
    runA11yTests({
        baseClass: "s-badge",
        variants: variants.numbers,
        children: {
            default: "123",
        },
        options: {
            includeNullVariant: false,
        },
        tag: "span",
    });

    // State badges
    runA11yTests({
        baseClass: "s-badge",
        variants: variants.states,
        children: {
            default: `badge`,
        },
        tag: "span",
        skippedTestids: ["s-badge-dark-new"],
    });

    // State badges w/ filled modifier
    runA11yTests({
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
    });

    // State badges w/ filled modifier and icon
    runA11yTests({
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
    });

    // State badges w/ icon
    runA11yTests({
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
    });

    // User badges
    runA11yTests({
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
    });

    // Sizes
    runA11yTests({
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
    });
});
