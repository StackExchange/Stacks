import { html } from "@open-wc/testing";
import {
    IconAchievementsSm,
    IconStarVerifiedSm,
} from "@stackoverflow/stacks-icons-legacy/icons";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

const avatarDisgusted24Svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24.0006" fill="#FF5E00"/><rect width="5.42018" height="6.01141" transform="translate(5.39673 6.18628)" fill="#EEEEEE"/><path d="M9.489 6.18628H6.64893V8.86966H9.489V6.18628Z" fill="#31070F"/><rect width="5.42018" height="6.01141" transform="translate(13.3613 6.18628)" fill="#EEEEEE"/><path d="M17.4536 6.18628H14.6135V8.86966H17.4536V6.18628Z" fill="#31070F"/><path d="M15.6151 16.9882L8.92792 18.6686L8.56311 17.2169L15.2503 15.5367L15.6151 16.9882Z" fill="#31070F"/></svg>`;
const avatarImageSrc = `data:image/svg+xml,${encodeURIComponent(avatarDisgusted24Svg)}`;

const repList = `
        <ul class="s-user-card--group">
            <li class="s-user-card--rep">
                <span class="s-bling s-bling__sm">
                    <span class="v-visible-sr">reputation bling</span>
                </span>
                1350
            </li>
            <li>
                <span class="s-bling s-bling__gold s-bling__sm">
                    <span class="v-visible-sr">gold bling</span>
                </span>
                8
            </li>
            <li>
                <span class="s-bling s-bling__silver s-bling__sm">
                    <span class="v-visible-sr">silver bling</span>
                </span>
                12
            </li>
            <li>
                <span class="s-bling s-bling__bronze s-bling__sm">
                    <span class="v-visible-sr">bronze bling</span>
                </span>
                4
            </li>
        </ul>`;

const timeLink = (title = "2026-01-09 12:15:39Z") =>
    `<a class="s-user-card--time" href="#" title="${title}" data-controller="s-tooltip">
            <time>asked 2 hours ago</time>
        </a>`;

const deletedAvatarSvg = `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="deleted avatar"><rect x="1.44543" y="1.44543" width="45.1091" height="45.1091" stroke="var(--black-300)" stroke-width="2.89086" stroke-dasharray="5.78 5.78"/><rect x="10" y="14" width="12" height="3.12" fill="var(--black-500)"/><rect x="26" y="14" width="12" height="3.12" fill="var(--black-500)"/><rect x="14" y="31.12" width="20" height="3.12" fill="var(--black-500)"/></svg>`;

const getChild = (child?: string): string => {
    const groupWithAvatar = `
        <a class="s-user-card--group" href="#">
            <span class="s-avatar s-avatar__24">
                <img class="s-avatar--image" alt="User avatar" src="${avatarImageSrc}" />
            </span>
            <span class="s-user-card--username">SofiaAlc</span>
        </a>`;
    const groupWithAvatarSm = `
        <a class="s-user-card--group" href="#">
            <span class="s-avatar">
                <img class="s-avatar--image" alt="User avatar" src="${avatarImageSrc}" />
            </span>
            <span class="s-user-card--username">SofiaAlc</span>
        </a>`;

    switch (child) {
        case "base":
            return `${groupWithAvatar}${repList}${timeLink()}`;

        case "small":
            return `${groupWithAvatarSm}
        ${repList}${timeLink()}`;

        case "with-badges":
            return `${groupWithAvatar}
        <div class="s-user-card--group">
            <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
        </div>
        ${repList}${timeLink()}`;

        case "original-poster":
            return `
        <a class="s-user-card--group" href="#">
            <span class="s-avatar s-avatar__24">
                <img class="s-avatar--image" alt="User avatar" src="${avatarImageSrc}" />
            </span>
            <span class="s-user-card--username s-user-card--username__op">SofiaAlc</span>
        </a>
        ${repList}${timeLink("Show activity on this post")}`;

        case "new-contributor":
            return `${groupWithAvatar}
        <div class="s-user-card--group">
            <span class="s-badge s-badge__sm s-badge__new">New</span>
        </div>
        ${repList}${timeLink("Show activity on this post")}`;

        case "deleted":
            return `
        <div class="s-user-card--group">
            ${deletedAvatarSvg}
            <span class="s-user-card--username">SofiaAlc</span>
        </div>
        ${timeLink("Show activity on this post")}`;

        case "large":
            return `
        <div class="s-user-card--row">
            <a class="s-avatar s-avatar__48" href="#">
                <img class="s-avatar--image" alt="User avatar" src="${avatarImageSrc}" />
            </a>
            <div class="s-user-card--column">
                <div class="s-user-card--row">
                    <a class="s-user-card--username" href="#">SofiaAlc</a>
                    <div class="s-user-card--group">
                        <span class="s-badge s-badge__sm s-badge__staff">Staff</span>
                        <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
                    </div>
                </div>
                ${repList}
            </div>
        </div>
        <div class="s-user-card--column">
            <div class="s-user-card--row s-user-card--recognition">
                ${IconStarVerifiedSm}
                <span>Recognized by <a href="#">AudioBubble</a></span>
            </div>
            <ul class="s-user-card--group s-user-card--group__split">
                <li>Senior Product Designer</li>
                <li>Vancouver, Canada</li>
            </ul>
            <div class="s-user-card--bio">Developer who believes in clean code, clear coffee, and the occasional snake pun.</div>
        </div>`;

        case "recognized-member":
            return `
        <div class="s-user-card--column">
            <div class="s-user-card--row">
                <a class="s-avatar s-avatar__24" href="#">
                    <img class="s-avatar--image" alt="User avatar" src="${avatarImageSrc}" />
                </a>
                <a class="s-user-card--group" href="#">
                    <span class="s-user-card--username">SofiaAlc</span>
                </a>
                <div class="s-user-card--group">
                    <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
                </div>
                ${repList}${timeLink()}
            </div>
            <div class="s-user-card--row">
                <div class="s-user-card--row s-user-card--recognition">
                    ${IconStarVerifiedSm}
                    <span>Recognized by <a href="#">AudioBubble</a></span>
                </div>
            </div>
        </div>`;

        case "recognized-member-sm":
            return `${groupWithAvatarSm}
        <a href="#" class="s-user-card--group s-user-card--recognition" title="Recognized by Audiobubble" data-controller="s-tooltip">
            ${IconStarVerifiedSm}
        </a>
        <div class="s-user-card--group">
            <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
        </div>
        ${repList}${timeLink()}`;

        case "awarded":
            return `${groupWithAvatar}
        <a class="s-user-card--group fc-orange-400" href="#" title="Awarded" aria-label="Awarded" data-controller="s-tooltip">
            ${IconAchievementsSm}
        </a>
        <div class="s-user-card--group">
            <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
        </div>
        ${repList}${timeLink()}`;

        default:
            return `${groupWithAvatar}${repList}${timeLink()}`;
    }
};

describe("user-card", () => {
    runVisualTests({
        baseClass: "s-user-card",
        variants: ["sm", "lg", "deleted"],
        children: {
            "base": getChild("base"),
            "small": getChild("small"),
            "with-badges": getChild("with-badges"),
            "original-poster": getChild("original-poster"),
            "new-contributor": getChild("new-contributor"),
            "deleted": getChild("deleted"),
            "large": getChild("large"),
            "recognized-member": getChild("recognized-member"),
            "recognized-member-sm": getChild("recognized-member-sm"),
            "awarded": getChild("awarded"),
        },
        excludedTestids: [
            /^s-user-card-(?=.*-large$)(?!.*-lg-).*$/, // large child only with lg variant
            /^s-user-card-(?=.*-small$)(?!.*-sm-).*$/, // small child only with sm variant
            /^s-user-card-.+-lg-(?!large$).+$/, // lg variant only with large child
            /^s-user-card-.+-sm-(?!small$).+$/, // sm variant only with small child
            /^s-user-card-.+-sm-recognized-member$/, // recognized-member only with default (not sm)
            /^s-user-card-(?!.*-sm-).*-recognized-member-sm$/, // recognized-member-sm only with sm variant
            /^s-user-card-(?!.*-deleted-).*-deleted$/, // deleted child only with deleted variant
            /^s-user-card-.+-deleted-(?!deleted$).+$/, // deleted variant only with deleted child
        ],
        template: ({ component, testid }) => html`
            <div
                data-testid="${testid}"
                class="d-inline-flex ai-center jc-center hmn1 wmn1 p8"
            >
                ${component}
            </div>
        `,
    });
});
