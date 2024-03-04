import { html } from "@open-wc/testing";
import {
    IconArchiveSm,
    IconCheckmarkSm,
    IconEllipsisVertical,
    IconEyeSm,
    IconNotInterested,
    IconPencilSm,
    IconTackSm,
    IconTrashSm,
} from "@stackoverflow/stacks-icons/icons";
import type { TestVariationArgs } from "../../test/test-utils";
import "../../index";

type BadgeType =
    | "danger"
    | "danger-filled"
    | "info"
    | "muted"
    | "muted-filled"
    | "warning";

type Stats = {
    votes: number;
    views: number;
    answers: number;
    accepted?: boolean;
    bounty?: number;
    badge?: BadgeType;
};

type Tags = { text: string; type?: "required" | "moderator" }[];

type TruncationSizes = "sm" | "md" | "lg" | "";

const formatNumber = (num: number) => {
    switch (true) {
        case num > 10000090:
            return (num / 1000000).toFixed(0) + "m";
        case num > 1000000:
            return (num / 1000000).toFixed(1) + "m";
        case num > 10000:
            return (num / 1000).toFixed(0) + "k";
        case num > 1000:
            return (num / 1000).toFixed(1) + "k";
        default:
            return num.toString();
    }
};

const getBadge = (type: BadgeType) => {
    const badgeClasses = type
        .split("-")
        .map((modifier) => `s-badge__${modifier}`)
        .join(" ");
    const getIcon = () => {
        switch (type) {
            case "danger":
                return IconNotInterested;
            case "danger-filled":
                return IconTrashSm;
            case "info":
                return IconPencilSm;
            case "muted":
                return IconArchiveSm;
            case "muted-filled":
                return IconTackSm;
            case "warning":
                return IconEyeSm;
            default:
                return "";
        }
    };

    const getText = () => {
        switch (type) {
            case "danger":
                return "Closed";
            case "danger-filled":
                return "Deleted";
            case "info":
                return "Draft";
            case "muted":
                return "Archived";
            case "muted-filled":
                return "Pinned";
            case "warning":
                return "Review";
            default:
                return "";
        }
    };

    return `
      <div
          class="s-post-summary--stats-item s-badge s-badge__icon ${badgeClasses}"
      >
          ${getIcon()}
          ${getText()}
      </div>`;
};

const getDescription = (truncation?: TruncationSizes, text?: string) => `
  <p class="s-post-summary--content-excerpt
      ${truncation ? `s-post-summary--content-excerpt__${truncation}` : ""}
  ">
      ${text ? text : "In the spirit of type safety associated with the CriteriaQuery JPA 2.0 also has an API to support Metamodel representation of entities. Is anyone aware of a fully functional implementation of this API (to generate the Metamodel as opposed to creating the metamodel classes manually)? It would be awesome if someone also knows the steps for setting this up in Eclipse (I assume it's as simple as setting up an annotation processor, but you never know)."}
  </p>
`;

const getHotnessClass = (num: number) => {
    switch (true) {
        case num > 100000:
            return "is-supernova";
        case num > 10000:
            return "is-hot";
        case num > 1000:
            return "is-warm";
        default:
            return "";
    }
};

const getStats = ({
    votes,
    views,
    answers,
    accepted,
    bounty,
    badge,
}: Stats) => `
  <div class="s-post-summary--stats">
      ${badge ? getBadge(badge) : ""}
      <div class="s-post-summary--stats-item s-post-summary--stats-item__emphasized">
          <span class="s-post-summary--stats-item-number">${formatNumber(votes)}</span>
          <span class="s-post-summary--stats-item-unit">${votes === 1 ? "vote" : "votes"}</span>
      </div>
      <div class="s-post-summary--stats-item ${accepted ? "has-accepted-answer" : ""} ${answers > 0 ? "has-answers" : ""}">
          ${accepted ? IconCheckmarkSm : ""}
          <span class="s-post-summary--stats-item-number">${formatNumber(answers)}</span>
          <span class="s-post-summary--stats-item-unit">${answers === 1 ? "answer" : "answers"}</span>
      </div>
      <div class="s-post-summary--stats-item ${getHotnessClass(views)}">
          <span class="s-post-summary--stats-item-number">${formatNumber(views)}</span>
          <span class="s-post-summary--stats-item-unit">${views === 1 ? "view" : "views"}</span>
      </div>
      ${
          bounty
              ? `
          <div class="s-post-summary--stats-item s-badge s-badge__bounty">
              +${bounty}
          </div>
      `
              : ""
      }
  </div>
`;

const getTags = (tags?: Tags) => {
    const tagsArr = tags ?? [
        {
            text: "feature-request",
            type: "required",
        },
        {
            text: "status-complete",
            type: "moderator",
        },
        {
            text: "design",
        },
    ];

    const tagsHTML = tagsArr
        .map(
            ({ text, type }) => `
    <a class="s-tag ${type ? `s-tag__${type}` : ""}" href="/">${text}</a>
  `
        )
        .join("");

    return `<div class="s-post-summary--meta-tags">${tagsHTML}</div>`;
};

const getUser = () => `
  <div class="s-user-card s-user-card__minimal">
      <a href="#" class="s-avatar s-user-card--avatar">
          <img class="s-avatar--image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAE8CAMAAABq2/00AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/3IA/////44y/8OS/+fU//Xs/6tn/9e2EhvbMQAABH9JREFUeNrs3e1y2ygAhWELJHH/d7zuJpN1XAnxoe408Ly/6xnnHXEOIEwfDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gbAGEhrZl2VloY20PIk8tAzZbfkXA7eeuHyysVfdFMsXiY66ptiWF8Re05BdxF7HkBV7PUNW7FVx4E7sVSwrDjBw2+pC7NWwHtkTe3ULM7En9v6O2ONF7Ik9sSf2IPbEntgTexB7t8feTsynniD2Oh6tXex1hFoUe02kaxVi72JMZs+Rib0LLdkXFGLvaECWjkOxdxVmUex1rB6S2Kss2lcytSH2LnVkakPsXQ7E8xwTe5fuMrUh9vKj8CP4xN7lNOXc3mnwib1M2X7Z28VeS93mg0/sFZTG6WCMVSE51fqsYL4s9jpqQ+yV1caxErHXUxtir6c2xF5HbYRF7LXXhtjrqQ2x11MbYu9tLG4VtSH2empD7BUNxpPaSGKvPPh2sdcxX45i78baEHs18+X32hB7NfPl99oQex21MVHsxViaR8W1MU3s/XpMSvWF0tqYJfY+BmMq01dcG+scP6/6enTK9BW+1J0j9l5aYN0rP5BzM0XsbSUnAlpqY4LYezexFeRSbpslH3uDXdF64OG6est258PohXE8BK+7o6g29rJTQsPt1F3qK9qdTwMP2Wz2X1Vv0UvdbeQ53nl2Xesr2Z0Pww7Zs5lsafWW1MY+6JDNxv5/+kLb5/fXfzLirRdhKSGnr6A2tkGvJoxLGZnqva6NkAbdgA+pUN9a+QuWYYPu+98ee/W1/PJgoMG7lek7nW3UHiEdbKpcqu+kO2L9b4aG0rcWjt5jfWf2Z7kCeE891XtSG/O86A5d+tbZj1h0VW+c/ja90FG9uxMCFdWb/+SkZ1Oaq/d1vjzvXfvF+tLp+aiZT5S1Vm90lrFj02B3bW1d9X7T92u+7Aq9qk2D+Fob/v/Myu7YostC76xe9K966evfr5+7ekuXHVy1V6+R275pEMd3kPbGB+Syeod/8D7Sf41NBvPdMf7a4uXpaTGY0zd+4r0vDlKtwdPqHf/BOzzf8zQYqvRtcz54mXfUNUVyUL0T7AhcrBbKY/C36p1geVEy1y00+F3fBA9eKFxnlRXJa/XOcKxnqeF6Pv1VvTPc7RuXai6K5LN6Z9hQSUsb2Rh86pviUultaScTg/sMD15YeqmcT8/bFx1Foi/umk9P3hcMfqTenrabBT5j8DGTwHivwelOCTwNrnfJm/Ol2U0GZ74WdE+dBn9+Z/z2J9UZ7IjB7dZv8gPl9RRJIq89BiN57QZ38trn04G8k62E6xjcHuQ1D+JEXrvBnbz2+XQgr30+/SCveT69ktceg4m8doOBvDG/CXnkkTezvOXPQB555JFHHnnkkUceeeSRRx555JFHHnnkkWcnmTzyyCOPPPLII4888sgjjzzfhDzyyCOPPPL+9Ff+eyCPPPLII4888sgjjzzyyCOPPPLII4888sgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy//CPAAPiZOI3BPDFQAAAAAElFTkSuQmCC" alt="placeholder avatar">
          <span class="v-visible-sr">Tracy Smith</span>
      </a>
      <a href="#" class="s-user-card--link">Tracy Smith</a>
      <ul class="s-user-card--awards">
          <li class="s-user-card--rep">1350</li>
      </ul>
      <time class="s-user-card--time">asked just now</time>
  </div>
`;

const getChildren = ({
    show = {
        description: false,
        menuBtn: false,
        stats: false,
        tags: false,
        title: false,
        user: false,
    },
    description = {
        truncation: "",
        text: "",
    },
    stats,
    tags,
    title,
}: {
    show?: {
        description?: boolean;
        menuBtn?: boolean;
        stats?: boolean;
        tags?: boolean;
        title?: boolean;
        user?: boolean;
    };
    description?: {
        truncation?: TruncationSizes;
        text?: string;
    };
    stats?: Stats;
    tags?: Tags;
    title?: string;
}) => {
    const titleEl =
        show.title || title
            ? `
        <h3 class="s-post-summary--content-title">
            ${title ? title : "How to generate the JPA entity Metamodel?"}
        </h3>
    `
            : "";
    const descriptionEl =
        show.description || description.truncation || description.text
            ? description
                ? getDescription(description.truncation, description.text)
                : getDescription()
            : "";
    const tagsEl = show.tags || tags ? getTags(tags) : "";
    const userEl = show.user ? getUser() : "";
    const menuBtnEl = show.menuBtn
        ? `
        <a href="#" class="s-btn s-btn__muted s-post-summary--content-menu-button">
            ${IconEllipsisVertical}
            <span class="v-visible-sr">menu</span>
        </a>
    `
        : "";

    return `
    ${
        show.stats || stats
            ? getStats(
                  stats
                      ? stats
                      : {
                            votes: 95,
                            views: 104123,
                            answers: 5,
                            accepted: true,
                            bounty: 50,
                        }
              )
            : ""
    }
    ${
        titleEl || descriptionEl || tagsEl || userEl || menuBtnEl
            ? `
      <div class="s-post-summary--content">
          ${titleEl}
          ${descriptionEl}
          <div class="s-post-summary--meta">
              ${tagsEl}
              ${userEl}
          </div>
          ${menuBtnEl}
      </div>`
            : ""
    }
  `;
};

const getBadgeChildren = (badge: BadgeType) => {
    return getChildren({
        show: {
            stats: true,
        },
        stats: {
            badge: badge as BadgeType,
            answers: 0,
            votes: 1,
            views: 20,
        },
    });
};

const getSizeChildren = (size: string) => {
    return getChildren({
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
    });
};

const getStatsChildren = ({
    accepted = false,
    answers = 1,
    views = 20,
}: {
    accepted?: boolean;
    answers?: number;
    views?: number;
}) =>
    getChildren({
        show: {
            stats: true,
        },
        stats: {
            votes: 1,
            answers,
            accepted,
            views,
        },
    });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div class="d-flex ai-center jc-center p8 ws6" data-testid="${testid}">
        ${component}
    </div>
`;

const testArgs: {
    [key: string]: TestVariationArgs;
} = {
    base: {
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
                },
            }),
            sparce: getChildren({
                show: {
                    stats: true,
                    tags: true,
                    title: true,
                    user: true,
                },
                tags: [
                    {
                        text: "featured-request",
                        type: "required",
                    },
                ],
                title: "Short title",
            }),
        },
        options: {
            includeNullModifier: false,
        },
        template,
    },
    badges: {
        baseClass: "s-post-summary",
        children: {
            "badge-danger": getBadgeChildren("danger"),
            "badge-danger-filled": getBadgeChildren("danger-filled"),
            "badge-info": getBadgeChildren("info"),
            "badge-muted": getBadgeChildren("muted"),
            "badge-muted-filled": getBadgeChildren("muted-filled"),
            "badge-warning": getBadgeChildren("warning"),
        },
        template,
    },
    sizes: {
        baseClass: "s-post-summary",
        modifiers: {
            global: ["w100"],
        },
        children: {
            "description-sm": getSizeChildren("sm"),
            "description-md": getSizeChildren("md"),
            "description-lg": getSizeChildren("lg"),
        },
        options: {
            includeNullModifier: false,
        },
        template,
    },
    stats: {
        baseClass: "s-post-summary",
        children: {
            "stats-unanswered": getStatsChildren({ answers: 0 }),
            "stats-answered": getStatsChildren({ answers: 1 }),
            "stats-answered-accepted": getStatsChildren({
                answers: 10,
                accepted: true,
            }),
            "stats-views": getStatsChildren({ views: 1 }),
            "stats-views-warm": getStatsChildren({ views: 1001 }),
            "stats-views-hot": getStatsChildren({ views: 10001 }),
            "stats-views-supernova": getStatsChildren({ views: 100001 }),
        },
        template,
    },
};

export default testArgs;
