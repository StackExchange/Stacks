import { runA11yTests } from "../../test/a11y-test-utils";
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
        runA11yTests({
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
    runA11yTests({
        baseClass: "s-badge",
        variants: variants.numbers,
        children: {
            default: "123",
        },
        options: {
            includeNullModifier: false,
        },
        tag: "span",
    });

    // Icon badges
    runA11yTests({
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
            includeNullModifier: false,
        },
        tag: "span",
    });

    // Filled badges
    runA11yTests({
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
            includeNullModifier: false,
            includeNullVariant: false,
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
            default: "user",
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
        tag: "span",
    });
});
