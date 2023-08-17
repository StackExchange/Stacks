import { defaultOptions, runComponentTests } from "../../test/test-utils";
// import { Icons } from "@stackoverflow/stacks-icons";
import "../../index";

const variants = {
    blings: ["gold", "silver", "bronze"],
    numbers: ["answered", "bounty", "important", "rep", "rep-down", "votes"],
    states: {
        filled: ["danger", "muted"],
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
            // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
            skippedTestids: [
                "s-badge-dark",
                "s-badge-dark-gold",
                "s-badge-dark",
                "s-badge-dark-silver",
                "s-badge-dark",
                "s-badge-dark-bronze",
            ],
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
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            "s-badge-dark-answered",
            "s-badge-dark-important",
            "s-badge-dark-rep-down",
            "s-badge-light-answered",
            "s-badge-light-rep",
            "s-badge-dark",
            "s-badge-dark-bounty",
            "s-badge-dark-rep",
            "s-badge-dark-votes",
            "s-badge-light-rep-down",
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
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            "s-badge-dark-danger-icon",
            "s-badge-dark-icon",
            "s-badge-light-danger-icon",
            "s-badge-light-warning-icon",
        ],
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
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            "s-badge-dark-danger-icon",
            "s-badge-light-danger-icon",
        ],
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
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            /^s-badge-dark-admin.*/,
            "s-badge-dark",
            "s-badge-dark-sm",
            "s-badge-dark-xs",
            "s-badge-light-admin",
            "s-badge-light-admin-sm",
            "s-badge-light-admin-xs",
            "s-badge-light-staff",
            "s-badge-light-staff-sm",
            "s-badge-light-staff-xs",
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
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: ["s-badge-dark", "s-badge-dark-sm", "s-badge-dark-xs"],
    });
});
