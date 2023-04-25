import { defaultOptions, runComponentTests } from "../../test/test-utils";
// import { Icons } from "@stackoverflow/stacks-icons";
import "../../index";
import { html } from "@open-wc/testing";

const variants = {
    blings: ["gold", "silver", "bronze"],
    numbers: ["answered", "bounty", "important", "rep", "rep-down", "votes"],
    states: {
        filled: ["danger", "muted"],
        other: ["info", "warning"],
    },
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
    // Award badges (Default/badge counts)
    variants.blings.map((bling) => {
        runComponentTests({
            type: "visual",
            baseClass: "s-badge",
            variants: [bling],
            children: {
                default: `<span class="s-award-bling s-award-bling__${bling}">
                    Altruist
                </span>`,
            },
            tag: "span",
            template,
        });
    });

    // Number counts
    runComponentTests({
        type: "visual",
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
        template,
    });

    // Icon badges
    runComponentTests({
        type: "visual",
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
        template,
    });

    // Filled badges
    runComponentTests({
        type: "visual",
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
        template,
    });

    // User badges
    runComponentTests({
        type: "visual",
        baseClass: "s-badge",
        variants: variants.users,
        modifiers: {
            primary: ["xs", "sm"],
        },
        children: {
            default: "user badge",
        },
        tag: "span",
        template,
    });

    // Sizes
    runComponentTests({
        type: "visual",
        baseClass: "s-badge",
        modifiers: {
            primary: ["xs", "sm"],
        },
        children: {
            default: "size badge",
        },
        tag: "span",
        template,
    });
});
