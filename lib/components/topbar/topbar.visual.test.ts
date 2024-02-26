import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";
import {
    IconAchievements,
    IconAlert,
    IconHelp,
    IconInbox,
    IconModerator,
    IconReviewQueue,
    IconSearch,
    IconStackExchange,
} from "@stackoverflow/stacks-icons/icons";
import { html } from "@open-wc/testing";

const base64Image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAE8CAMAAABq2/00AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/3IA/////44y/8OS/+fU//Xs/6tn/9e2EhvbMQAABH9JREFUeNrs3e1y2ygAhWELJHH/d7zuJpN1XAnxoe408Ly/6xnnHXEOIEwfDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gbAGEhrZl2VloY20PIk8tAzZbfkXA7eeuHyysVfdFMsXiY66ptiWF8Re05BdxF7HkBV7PUNW7FVx4E7sVSwrDjBw2+pC7NWwHtkTe3ULM7En9v6O2ONF7Ik9sSf2IPbEntgTexB7t8feTsynniD2Oh6tXex1hFoUe02kaxVi72JMZs+Rib0LLdkXFGLvaECWjkOxdxVmUex1rB6S2Kss2lcytSH2LnVkakPsXQ7E8xwTe5fuMrUh9vKj8CP4xN7lNOXc3mnwib1M2X7Z28VeS93mg0/sFZTG6WCMVSE51fqsYL4s9jpqQ+yV1caxErHXUxtir6c2xF5HbYRF7LXXhtjrqQ2x11MbYu9tLG4VtSH2empD7BUNxpPaSGKvPPh2sdcxX45i78baEHs18+X32hB7NfPl99oQex21MVHsxViaR8W1MU3s/XpMSvWF0tqYJfY+BmMq01dcG+scP6/6enTK9BW+1J0j9l5aYN0rP5BzM0XsbSUnAlpqY4LYezexFeRSbpslH3uDXdF64OG6est258PohXE8BK+7o6g29rJTQsPt1F3qK9qdTwMP2Wz2X1Vv0UvdbeQ53nl2Xesr2Z0Pww7Zs5lsafWW1MY+6JDNxv5/+kLb5/fXfzLirRdhKSGnr6A2tkGvJoxLGZnqva6NkAbdgA+pUN9a+QuWYYPu+98ee/W1/PJgoMG7lek7nW3UHiEdbKpcqu+kO2L9b4aG0rcWjt5jfWf2Z7kCeE891XtSG/O86A5d+tbZj1h0VW+c/ja90FG9uxMCFdWb/+SkZ1Oaq/d1vjzvXfvF+tLp+aiZT5S1Vm90lrFj02B3bW1d9X7T92u+7Aq9qk2D+Fob/v/Myu7YostC76xe9K966evfr5+7ekuXHVy1V6+R275pEMd3kPbGB+Syeod/8D7Sf41NBvPdMf7a4uXpaTGY0zd+4r0vDlKtwdPqHf/BOzzf8zQYqvRtcz54mXfUNUVyUL0T7AhcrBbKY/C36p1geVEy1y00+F3fBA9eKFxnlRXJa/XOcKxnqeF6Pv1VvTPc7RuXai6K5LN6Z9hQSUsb2Rh86pviUultaScTg/sMD15YeqmcT8/bFx1Foi/umk9P3hcMfqTenrabBT5j8DGTwHivwelOCTwNrnfJm/Ol2U0GZ74WdE+dBn9+Z/z2J9UZ7IjB7dZv8gPl9RRJIq89BiN57QZ38trn04G8k62E6xjcHuQ1D+JEXrvBnbz2+XQgr30+/SCveT69ktceg4m8doOBvDG/CXnkkTezvOXPQB555JFHHnnkkUceeeSRRx555JFHHnnkkWcnmTzyyCOPPPLII4888sgjjzzfhDzyyCOPPPL+9Ff+eyCPPPLII4888sgjjzzyyCOPPPLII4888sgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy//CPAAPiZOI3BPDFQAAAAAElFTkSuQmCC";

// Children
const children = {
    hamburger: {
        unselected: `<a href="#" class="s-topbar--menu-btn" aria-label="menu"><span></span></a>`,
        selected: `<a href="#" class="s-topbar--menu-btn is-selected" aria-label="menu"><span></span></a>`,
    },
    logo: `<a href="#" class="s-topbar--logo" aria-label="logo">${IconStackExchange}</a>`,
    notice: {
        default: `<a href="#" class="s-topbar--notice">old</a>`,
        unread: `<a href="#" class="s-topbar--notice is-unread">new</a>`,
    },
    navigation: {
        minimal: `<ol class="s-navigation fw-nowrap"><li><a href="#" class="s-navigation--item">Products</a></li></ol>`,
        full: `<ol class="s-navigation fw-nowrap sm:d-none">
            <li><a href="#" class="s-navigation--item">About</a></li>
            <li><a href="#" class="s-navigation--item is-selected">Products</a></li>
            <li><a href="#" class="s-navigation--item">For Teams</a></li>
        </ol>`,
    },
    searchbar: {
        input: `<div class="s-topbar--searchbar--input-group">
            <input type="text" placeholder="Search…" value="" autocomplete="off" class="s-input s-input__search">
            ${IconSearch.replace("svg-icon iconSearch", "s-input-icon s-input-icon__search svg-icon iconSearch")}
        </div>`,
        select: `<div class="s-select">
            <select aria-label="Search scope">
                <option selected="selected">All</option>
                <option>Public</option>
                <option>Private Team 1</option>
            </select>
        </div>`,
    },
    content: {
        items: `
            <li>
                <a href="#" class="s-topbar--item" aria-label="Inbox">
                    ${IconInbox} <span class="s-activity-indicator s-activity-indicator__danger">3</span>
                </a>
            </li>
            <li>
                <a href="#" class="s-topbar--item" aria-label="Achievements">
                    ${IconAchievements} <span class="s-activity-indicator s-activity-indicator__success">+10</span>
                </a>
            </li>
            <li>
                <a href="#" class="s-topbar--item" aria-label="Review queues">
                    ${IconReviewQueue}
                    <div class="s-activity-indicator s-activity-indicator__danger">
                        <div class="v-visible-sr">New activity</div>
                    </div>
                </a>
            </li>
            <li><a href="#" class="s-topbar--item" aria-label="Help center">${IconHelp}</a></li>
            <li><a href="#" class="s-topbar--item" aria-label="Site switcher">${IconStackExchange}</a></li>
            <li><a href="#" class="s-topbar--item" title="Moderator inbox">${IconModerator}</a></li>
            <li>
                <a href="#" class="s-topbar--item" title="8 posts flagged for moderator attention">
                    <span class="s-badge s-badge__bounty">8</span>
                </a>
            </li>
            `,
        unset: `<li><a href="#" class="s-topbar--item" aria-label="Unset item">${IconAlert}</a></li>`,
        loggedOut: `
            <li>
                <a href="#" class="s-topbar--item s-topbar--item__unset s-btn s-btn__outlined ws-nowrap">Log in</a>
            </li>
            <li>
                <a href="#" class="s-topbar--item s-topbar--item__unset s-btn s-btn__filled ws-nowrap">Sign up</a>
            </li>
        `,
        loggedIn: `<li>
            <a href="#" class="s-topbar--item s-user-card s-user-card__small">
                <span class="s-avatar s-avatar__24 s-user-card--avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="${base64Image}">
                    <span class="v-visible-sr">John Doe</span>
                </span>
                <div class="s-user-card--info">
                    <ul class="s-user-card--awards">
                        <li class="s-user-card--rep">3,145</li>
                        <li class="s-award-bling s-award-bling__gold">3</li>
                        <li class="s-award-bling s-award-bling__silver">9</li>
                        <li class="s-award-bling s-award-bling__bronze">20</li>
                    </ul>
                </div>
            </a>
        </li>`,
    },
};

const topbarChildren = ({
    hamburger = "",
    loggedIn = true,
    navigation = "",
    notice = "",
    searchInput = false,
    searchSelect = false,
    unsetItem = false,
}: {
    hamburger?: "" | "selected" | "unselected";
    loggedIn?: boolean;
    navigation?: "" | "minimal" | "full";
    notice?: "" | "default" | "unread";
    searchInput?: boolean;
    searchSelect?: boolean;
    unsetItem?: boolean;
}) => {
    return `
        <div class="s-topbar--container">
            ${hamburger ? (hamburger === "unselected" ? children.hamburger.unselected : children.hamburger.selected) : ""}
            ${children.logo}
            ${notice ? (notice === "default" ? children.notice.default : children.notice.unread) : ""}
            ${
                navigation
                    ? `
                <nav aria-label="Demo primary navigation" role="presentation">
                    <ol class="s-navigation fw-nowrap sm:d-none">
                        ${navigation === "minimal" ? children.navigation.minimal : children.navigation.full}
                    </ol>
                </nav>
            `
                    : ""
            }
            ${
                searchInput
                    ? `
                <form class="s-topbar--searchbar" autocomplete="off">
                    ${searchSelect ? children.searchbar.select : ""}
                    ${children.searchbar.input}
                </form>
            `
                    : ""
            }
            <nav class="s-topbar--navigation" aria-label="Demo secondary navigation" role="presentation">
                <ol class="s-topbar--content">
                    ${unsetItem ? children.content.unset : ""}
                    ${children.content.items}
                    ${loggedIn ? children.content.loggedIn : children.content.loggedOut}
                </ol>
            </nav>
        </div>
    `;
};

// Configurations
const topbars = {
    default: topbarChildren({ hamburger: "unselected" }),
    advanced: topbarChildren({
        navigation: "minimal",
        notice: "default",
        searchInput: true,
        searchSelect: true,
        unsetItem: true,
    }),
    input: topbarChildren({ navigation: "minimal", searchInput: true }),
    alt: topbarChildren({
        hamburger: "selected",
        navigation: "full",
        notice: "unread",
        searchInput: true,
        searchSelect: true,
        unsetItem: true,
    }),
};

describe("topbar", () => {
    runVisualTests({
        baseClass: "s-topbar",
        tag: "header",
        children: topbars,
        variants: ["dark variant", "light variant"], // `variant` added to make file labeling clearer
    });

    // Custom theme variables
    runVisualTests({
        baseClass: "s-topbar",
        children: {
            themed: topbars.default,
        },
        template: ({ component, testid }) => html`
            <div data-testid="${testid}">
                <style type="text/css">
                    .s-topbar {
                        --theme-topbar-accent-border: red;
                        --theme-topbar-background-color: green;
                        --theme-topbar-bottom-border: blue;
                        --theme-topbar-height: 80px;
                        --theme-topbar-item-color: yellow;
                        --theme-topbar-search-background: pink;
                        --theme-topbar-search-border: purple;
                        --theme-topbar-search-placeholder: white;
                        --theme-topbar-select-background: lightblue;
                        --theme-topbar-select-color: magenta;
                    }
                </style>
                ${component}
            </div>
        `,
    });
});
