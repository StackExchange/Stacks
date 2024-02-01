import { runVisualTests } from "../../test/visual-test-utils";
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
            includeNullModifier: false,
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
        includeNullModifier: false,
    },
    tag: "span",
    template,
});

// Icon badges
runVisualTests({
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
    template,
});

// Filled badges
runVisualTests({
    baseClass: "s-badge",
    variants: variants.states.filled,
    children: {
        default: "filled",
        //     icon: Icons.IconEyeOffSm,  // TODO fix the icon imports
    },
    options: {
        includeNullModifier: false,
        includeNullVariant: false,
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
