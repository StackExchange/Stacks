import { runA11yTests } from "../../test/a11y-test-utils";
import { IconNotification } from "@stackoverflow/stacks-icons/icons";
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
    users: ["admin", "moderator", "staff", "ai", "bot"],
};

describe("badge", () => {
    // Badges with filled bling
    variants.blings.map((bling) => {
        runA11yTests({
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
        });
    });

    // Tag badges
    variants.tags.map((tag) => {
        runA11yTests({
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
        });
    });

    // State badges (with important and squared modifiers)
    runA11yTests({
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
    });

    // User badges
    runA11yTests({
        baseClass: "s-badge",
        variants: variants.users,
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
            primary: ["sm", "lg"],
        },
        children: {
            default: "size badge",
        },
        options: {
            testidSuffix: "size",
        },
        tag: "span",
    });
});
