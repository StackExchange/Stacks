import { runVisualTests } from "../../test/visual-test-utils";
import { IconNotification } from "@stackoverflow/stacks-icons/icons";
import { html } from "@open-wc/testing";
import "../../index";

const variants = {
    blings: ["default", "activity", "rep", "gold", "silver", "bronze"],
    tags: ["gold", "silver", "bronze"],
    states: [
        "info",
        "warning",
        "danger",
        "critical",
        "tonal",
        "success",
        "featured",
    ],
    users: ["admin", "moderator", "staff", "ai", "bot", "new"],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div
        class="d-inline-flex ai-center jc-center hs1 ws2 p8"
        data-testid="${testid}"
    >
        ${component}
    </div>
`;

describe("badge", () => {
    // Badges with filled bling
    variants.blings.map((bling) => {
        runVisualTests({
            baseClass: "s-badge",
            children: {
                default: `<span class="s-bling s-bling__filled s-bling__${bling}">
                    <span class="v-visible-sr">${bling} badge</span>
                </span>
                ${bling} Badge`,
            },
            options: {
                testidSuffix: bling,
            },
            tag: "span",
            template,
        });
    });

    // Tag badges
    variants.tags.map((tag) => {
        runVisualTests({
            baseClass: "s-badge",
            variants: [tag],
            children: {
                default: `<span class="s-bling s-bling__${tag}">
                    <span class="v-visible-sr">${tag} tag badge</span>
                </span>
                tag`,
            },
            options: {
                includeNullVariant: false,
                testidSuffix: "tag",
            },
            tag: "span",
            template,
        });
    });

    // State badges (with important and squared modifiers)
    runVisualTests({
        baseClass: "s-badge",
        variants: variants.states,
        modifiers: {
            primary: ["important"],
            secondary: ["squared"],
        },
        children: {
            default: `state badge`,
            icon: `${IconNotification} icon badge`,
        },
        options: {
            testidSuffix: "state",
        },
        tag: "span",
        template,
    });

    // User badges
    runVisualTests({
        baseClass: "s-badge",
        variants: variants.users,
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
            primary: ["sm", "lg"],
        },
        children: {
            default: "size badge",
        },
        options: {
            testidSuffix: "size",
        },
        tag: "span",
        template,
    });
});
