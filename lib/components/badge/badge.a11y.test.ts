import { defaultOptions, runComponentTests } from "../../test/test-utils";
// import { Icons } from "@stackoverflow/stacks-icons";
import "../../index";

const variants = {
    blings: ["gold", "silver", "bronze"],
    numbers: ["answered", "bounty", "important", "rep", "rep-down", "votes"],
    states: {
        filled: ["danger", "muted",],
        other: ["info", "warning"],
    },
    users: ["admin", "moderator", "staff"],
};

describe("badge", () => {
    // Award badges (Default/badge counts)
    variants.blings.map((bling) => {
        runComponentTests({
            type: "a11y",
            baseClass: "s-badge",
            variants: [bling],
            children: {
                default: `<span class="s-award-bling s-award-bling__${bling}">
                    Altruist
                </span>`,
            },
            tag: "span",
        });
    });

    // Number counts
    runComponentTests({
        type: "a11y",
        baseClass: "s-badge",
        variants: variants.numbers,
        children: {
            default: "123",
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
        tag: "span",
        skippedTestids: [
            "s-badge-dark-answered", // TODO remove when contrast bugs are fixed
            "s-badge-dark-important", // TODO remove when contrast bugs are fixed
            "s-badge-dark-rep-down", // TODO remove when contrast bugs are fixed
            "s-badge-light-answered", // TODO remove when contrast bugs are fixed
            "s-badge-light-rep", // TODO remove when contrast bugs are fixed
        ],
    });

    // Icon badges
    runComponentTests({
        type: "a11y",
        baseClass: "s-badge",
        variants: [...variants.states.filled, ...variants.states.other],
        modifiers: {
            primary: ["icon"],
        },
        children: {
            default: "with icon",
        //     icon: Icons.IconEyeSm,  // TODO fix the icon imports
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
        tag: "span",
    });

    // Filled badges
    runComponentTests({
        type: "a11y",
        baseClass: "s-badge",
        variants: variants.states.filled,
        modifiers: {
            primary: ["icon"],
        },
        children: {
            default: "filled",
        //     icon: Icons.IconEyeOffSm,  // TODO fix the icon imports
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
            includeNullVariant: false,
        },
        tag: "span",
    });

    // User badges
    runComponentTests({
        type: "a11y",
        baseClass: "s-badge",
        variants: variants.users,
        modifiers: {
            primary: ["xs", "sm"],
        },
        children: {
            default: "user",
        },
        tag: "span",
        skippedTestids: [
            /^s-badge-dark-admin.*/, // TODO remove when contrast bugs are fixed
        ],
    });

    // Sizes
    runComponentTests({
        type: "a11y",
        baseClass: "s-badge",
        modifiers: {
            primary: ["xs", "sm"],
        },
        children: {
            default: "size badge",
        },
        tag: "span",
    });
});
