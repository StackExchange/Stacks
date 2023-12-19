import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import { getChildren } from "../../test/post-summary-test-utils";
import type { BadgeType, TruncationSizes } from "../../test/post-summary-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div class="d-flex ai-center jc-center p8 ws6" data-testid="${testid}">
        ${component}
    </div>
`;

describe("post-summary", () => {
    // Base, sparce
    runComponentTests({
        type: "visual",
        baseClass: "s-post-summary",
        modifiers: {
            primary: ["deleted", "ignored", "watched"], // variants described as modifiers to test colliding modifiers
            secondary: ["minimal"],
            global: ["w100"],
        },
        children: {
            default: getChildren({
                show: {
                    description: true,
                    menuBtn: true,
                    stats: true,
                    tags: true,
                    title: true,
                    user: true,
                }
            }),
            sparce: getChildren({
                show: {
                    stats: true,
                    tags: true,
                    title: true,
                    user: true,
                },
                tags: [{
                    text: "featured-request",
                    type: "required",
                }],
                title: "Short title",
            }),
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
        template,
    });

    // Truncated description sizes
    ["sm", "md", "lg"].forEach((size) => {
        runComponentTests({
            type: "visual",
            baseClass: "s-post-summary",
            modifiers: {
                global: ["w100"],
            },
            children: {
                [`description-${size}`]: getChildren({
                    show: {
                        description: true,
                        menuBtn: true,
                        stats: true,
                        tags: true,
                        title: true,
                        user: true,
                    },
                    description: {
                        truncation: size as TruncationSizes,
                    },
                }),
            },
            options: {
                ...defaultOptions,
                includeNullModifier: false,
            },
            template,
        });
    });

    // Stats - answers
    [
        {
            childName: "stats-unanswered",
            answers: 0,
        }, {
            childName: "stats-answered",
            answers: 1,
        }, {
            childName: "stats-answered-accepted",
            answers: 10,
            accepted: true,
        }
    ].forEach(({ childName, answers, accepted }) => {
        runComponentTests({
            type: "visual",
            baseClass: "s-post-summary",
            children: {
                [childName]: getChildren({
                    show: {
                        stats: true,
                    },
                    stats: {
                        answers,
                        votes: 1,
                        views: 20,
                        accepted,
                    },
                }),
            },
            template,
        });
    });

    // Stats - view hotness
    [
        {
            childName: "stats-views",
            views: 1,
        }, {
            childName: "stats-views-warm",
            views: 1001,
        }, {
            childName: "stats-views-hot",
            views: 10001,
        }, {
            childName: "stats-views-supernova",
            views: 100001,
        }
    ].forEach(({ childName, views }) => {
        runComponentTests({
            type: "visual",
            baseClass: "s-post-summary",
            children: {
                [childName]: getChildren({
                    show: {
                        stats: true,
                    },
                    stats: {
                        answers: 1,
                        votes: 1,
                        views,
                    },
                }),
            },
            template,
        });
    });

    // Badges
    ["danger", "danger-filled", "info", "muted", "muted-filled", "warning"].forEach((badge) => {
        runComponentTests({
            type: "a11y",
            baseClass: "s-post-summary",
            children: {
                [`badge-${badge}`]: getChildren({
                    show: {
                        stats: true,
                    },
                    stats: {
                        badge: badge as BadgeType,
                        answers: 0,
                        votes: 1,
                        views: 20,
                    },
                })
            },
            template,
        });
    });
});
