import { html } from "@open-wc/testing";
import {
    IconArchiveSm,
    IconDocumentAlt,
    IconShield,
} from "@stackoverflow/stacks-icons-legacy";
import type { TestVariationArgs } from "../../test/test-utils";
import "../../index";
import { IconAnswer16, IconAnswer16Fill, IconCompose } from "@stackoverflow/stacks-icons/icons";

// ISO timestamp used for the user time tooltip (title)
const USER_TIME_ISO = "2026-01-15T12:00:00.000Z";

type Stats = {
    votes: number | string;
    views: number | string;
    answers: number | string;
    accepted?: boolean;
    bounty?: number | string;
    badge?: boolean;
};

type Tags = {
    text: string;
    type?: "ignored" | "watched";
}[];

const getBadge = () => {
    return `<span class="s-badge s-badge__info">${IconCompose} Draft</span>`;
};

// Stats block for wide containers
const getStatsSmHide = ({
    votes,
    answers,
    accepted,
    bounty,
}: Stats) => `
    <div class="s-post-summary--stats s-post-summary--sm-hide">
        <div class="s-post-summary--stats-votes">
            ${Number(votes) > 0 ? "+" : ""}${votes}
            <span class="v-visible-sr">${votes === 1 ? "vote" : "votes"}</span>
        </div>
        <div class="s-post-summary--stats-answers">
            ${accepted ? IconAnswer16Fill : IconAnswer16}
            ${answers}
            <span class="v-visible-sr">${answers === 1 ? "answer" : "answers"}</span>
        </div>
        ${bounty ? `
            <div class="s-post-summary--stats-bounty">
                <span>+</span>
                ${bounty}
                <span class="v-visible-sr">bounty</span>
            </div>
        ` : ""}
    </div>
`;

// Stats block for small containers
const getStatsSmShow = ({ votes, answers, accepted, bounty }: Stats) => `
    <div class="s-post-summary--stats s-post-summary--sm-show">
        <div class="s-post-summary--stats-votes">
            ${votes}
            <span class="v-visible-sr">votes</span>
        </div>
        <div class="s-post-summary--stats-answers">
            ${accepted ? IconAnswer16Fill : IconAnswer16}
            ${answers}
            <span class="v-visible-sr">${answers === 1 ? "answer" : "answers"}</span>
        </div>
        ${bounty ? `
            <div class="s-post-summary--stats-bounty">
                <span>+</span>
                ${bounty}
                <span class="v-visible-sr">bounty</span>
            </div>
        ` : ""}
    </div>
`;

// Tags
const DEFAULT_TAGS: Tags = [
    { text: "llm" },
    { text: "database" },
    { text: "open-source" },
];

const getTags = (tags?: Tags, contentType?: string) => {
    const tagsArr = tags ?? DEFAULT_TAGS;

    const contentTypeLink = contentType
        ? `<a class="s-post-summary--content-type" href="#">${IconDocumentAlt} ${contentType}</a>`
        : "";

    const tagsHTML = tagsArr
        .map(({ text, type }) => {
            const sr =
                type === "ignored"
                    ? '<div class="v-visible-sr">Ignored tag</div>'
                    : type === "watched"
                      ? '<div class="v-visible-sr">Watched tag</div>'
                      : "";
            return `<a class="s-tag ${type ? `s-tag__${type}` : ""}" href="#">${sr}${text}</a>`;
        })
        .join("");

    return `<div class="s-post-summary--tags">${contentTypeLink}${tagsHTML}</div>`;
};

// Answers
const getAnswerBlock = ({
    accepted,
    excerpt,
}: {
    accepted: boolean;
    excerpt: string;
}) => `
    <div class="s-post-summary--answer ${accepted ? "s-post-summary--answer__accepted" : ""}">
        <div class="s-post-summary--content-meta">
            ${getUser()}
            <div class="s-post-summary--stats">
                <div class="s-post-summary--stats-votes">24</div>
                ${accepted ? `
                    <div class="s-post-summary--stats-answers">
                        <span class="s-post-summary--stats-answers--icon">
                            ${IconAnswer16Fill}
                        </span>
                        Accepted answer
                    </div>
                ` : ""}
            </div>
        </div>
        <p class="s-post-summary--excerpt v-truncate3">${excerpt}</p>
    </div>
`;

const DEFAULT_ANSWER_EXCERPT =
    "I have built a Retrieval-Augmented Generation (RAG) system using LangChain, a vector database, and an open-source LLM. While it works reasonably well, the model often hallucinates answers or cites sources that are only tangentially related to the user's query.";

const getAnswersBlock = () => `
  <div class="s-post-summary--answers">
      ${getAnswerBlock({
          accepted: true,
          excerpt: DEFAULT_ANSWER_EXCERPT,
      })}
      ${getAnswerBlock({
          accepted: false,
          excerpt: DEFAULT_ANSWER_EXCERPT,
      })}
  </div>
`;

// User card
const getUser = () => `
    <div class="s-user-card s-user-card__sm">
        <a class="s-user-card--group" href="#">
            <span class="s-avatar">
                <img class="s-avatar--image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAE8CAMAAABq2/00AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/3IA/////44y/8OS/+fU//Xs/6tn/9e2EhvbMQAABH9JREFUeNrs3e1y2ygAhWELJHH/d7zuJpN1XAnxoe408Ly/6xnnHXEOIEwfDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gbAGEhrZl2VloY20PIk8tAzZbfkXA7eeuHyysVfdFMsXiY66ptiWF8Re05BdxF7HkBV7PUNW7FVx4E7sVSwrDjBw2+pC7NWwHtkTe3ULM7En9v6O2ONF7Ik9sSf2IPbEntgTexB7t8feTsynniD2Oh6tXex1hFoUe02kaxVi72JMZs+Rib0LLdkXFGLvaECWjkOxdxVmUex1rB6S2Kss2lcytSH2LnVkakPsXQ7E8xwTe5fuMrUh9vKj8CP4xN7lNOXc3mnwib1M2X7Z28VeS93mg0/sFZTG6WCMVSE51fqsYL4s9jpqQ+yV1caxErHXUxtir6c2xF5HbYRF7LXXhtjrqQ2x11MbYu9tLG4VtSH2empD7BUNxpPaSGKvPPh2sdcxX45i78baEHs18+X32hB7NfPl99oQex21MVHsxViaR8W1MU3s/XpMSvWF0tqYJfY+BmMq01dcG+scP6/6enTK9BW+1J0j9l5aYN0rP5BzM0XsbSUnAlpqY4LYezexFeRSbpslH3uDXdF64OG6est258PohXE8BK+7o6g29rJTQsPt1F3qK9qdTwMP2Wz2X1Vv0UvdbeQ53nl2Xesr2Z0Pww7Zs5lsafWW1MY+6JDNxv5/+kLb5/fXfzLirRdhKSGnr6A2tkGvJoxLGZnqva6NkAbdgA+pUN9a+QuWYYPu+98ee/W1/PJgoMG7lek7nW3UHiEdbKpcqu+kO2L9b4aG0rcWjt5jfWf2Z7kCeE891XtSG/O86A5d+tbZj1h0VW+c/ja90FG9uxMCFdWb/+SkZ1Oaq/d1vjzvXfvF+tLp+aiZT5S1Vm90lrFj02B3bW1d9X7T92u+7Aq9qk2D+Fob/v/Myu7YostC76xe9K966evfr5+7ekuXHVy1V6+R275pEMd3kPbGB+Syeod/8D7Sf41NBvPdMf7a4uXpaTGY0zd+4r0vDlKtwdPqHf/BOzzf8zQYqvRtcz54mXfUNUVyUL0T7AhcrBbKY/C36p1geVEy1y00+F3fBA9eKFxnlRXJa/XOcKxnqeF6Pv1VvTPc7RuXai6K5LN6Z9hQSUsb2Rh86pviUultaScTg/sMD15YeqmcT8/bFx1Foi/umk9P3hcMfqTenrabBT5j8DGTwHivwelOCTwNrnfJm/Ol2U0GZ74WdE+dBn9+Z/z2J9UZ7IjB7dZv8gPl9RRJIq89BiN57QZ38trn04G8k62E6xjcHuQ1D+JEXrvBnbz2+XQgr30+/SCveT69ktceg4m8doOBvDG/CXnkkTezvOXPQB555JFHHnnkkUceeeSRRx555JFHHnnkkWcnmTzyyCOPPPLII4888sgjjzzfhDzyyCOPPPL+9Ff+eyCPPPLII4888sgjjzzyyCOPPPLII4888sgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy//CPAAPiZOI3BPDFQAAAAAElFTkSuQmCC" />
            </span>
            <span class="s-user-card--username">Tracy Smith</span>
        </a>
        <ul class="s-user-card--group">
            <li class="s-user-card--rep">
                <span class="s-bling s-bling__sm">
                    <span class="v-visible-sr">reputation bling</span>
                </span>
                1350
            </li>
        </ul>
        <a class="s-user-card--time" href="#" title="${USER_TIME_ISO}" data-controller="s-tooltip">
            <time>asked 2 hours ago</time>
        </a>
    </div>
`;

const getChildren = ({
    show = {
        stats: false,
        tags: false,
        title: false,
        user: false,
    },
    stats: statsParam,
    tags,
    title,
    badge,
    contentType,
    gated = false,
    answers: includeAnswers = false,
}: {
    show?: {
        stats?: boolean;
        tags?: boolean;
        title?: boolean;
        user?: boolean;
    };
    stats?: Stats;
    tags?: Tags;
    title?: string;
    badge?: boolean;
    contentType?: string;
    gated?: boolean;
    answers?: boolean;
} = {}) => {
    const stats: Stats = statsParam ?? {
        votes: 95,
        views: "104,123",
        answers: 5,
        accepted: true,
    };
    const tagsEl = getTags(tags, contentType);
    const userEl = getUser();
    const answersEl = includeAnswers ? getAnswersBlock() : "";

    const titleEl = `
        <div class="s-post-summary--title">
            ${gated ? `<span class="s-post-summary--title-icon">${IconShield}</span><span class="v-visible-sr">gated</span>` : ""}
            <a class="s-post-summary--title-link" href="#">Network graph of popular tags on Stack Overflow</a>
        </div>
    `;

    const descriptionEl = `
        <p class="s-post-summary--excerpt v-truncate3">
            I wanted to see how different tags related to each other. The below graph depicts associations between popular tags on our site. Description of analysis: I started looking at the 1000 most popular tags on questions in 2021. I created a list of tags cross joined by the question ID (so if a question contains tags for both Python and Numpy, it would show up in my list). I scaled up by the number of answers each question received (noting that some tag combos had 0 answers) -and then counted each distinct combination of each tag. Due to limitations in graphing, I only displayed the top ~2500 tag combinations - which accounts for tags combos that had more than 40 answers over the entire year.
        </p>
    `;

    const contentMetaEl = `
            <div class="s-post-summary--content-meta">
                ${userEl}
                ${statsParam ? getStatsSmShow(stats) : ""}
                <div class="s-post-summary--stats-item">${stats.views} ${stats.views === 1 ? "view" : "views"}</div>
                ${badge ? `<div class="s-post-summary--sm-hide ml-auto">${getBadge()}</div>` : ""}
            </div>
        `;

    return `
        ${statsParam ? getStatsSmHide(stats) : ""}
        <div class="s-post-summary--content">
            ${badge ? `<div class="s-post-summary--sm-show">${getBadge()}</div>` : ""}
            ${contentMetaEl}
            ${titleEl}
            ${descriptionEl}
            ${tagsEl}
            ${answersEl}
        </div>
    `;
};

// Full base
const fullBaseOptions = {
    show: {
        stats: true,
        tags: true,
        title: true,
        user: true,
    },
    stats: {
        votes: 95,
        views: "104,123",
        answers: 5,
        accepted: true,
    },
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div class="d-flex ai-center jc-center p8 ws6 ${(testid as string).includes("small-container") ? "wmx3" : ""}" data-testid="${testid}">
        ${component}
    </div>
`;

const testArgs: TestVariationArgs = {
    baseClass: "s-post-summary",
    modifiers: {
        primary: ["answered", "deleted"],
        global: [""],
    },
    children: {
        default: getChildren(fullBaseOptions),
        bounty: getChildren({
            ...fullBaseOptions,
            stats: { ...fullBaseOptions.stats, bounty: 50 },
        }),
        "ignored-tag": getChildren({
            ...fullBaseOptions,
            tags: [...DEFAULT_TAGS, { text: "ai", type: "ignored" }],
        }),
        "watched-tag": getChildren({
            ...fullBaseOptions,
            tags: [...DEFAULT_TAGS, { text: "ai", type: "watched" }],
        }),
        "draft-badge": getChildren({
            ...fullBaseOptions,
            badge: true,
        }),
        "announcement-content-type": getChildren({
            ...fullBaseOptions,
            contentType: "Announcement",
        }),
        "small-container": getChildren(fullBaseOptions),
        "with-answers": getChildren({
            ...fullBaseOptions,
            answers: true,
        }),
        gated: getChildren({
            ...fullBaseOptions,
            gated: true,
        }),
    },
    options: {
        includeNullModifier: false,
    },
    template,
};

export default testArgs;
