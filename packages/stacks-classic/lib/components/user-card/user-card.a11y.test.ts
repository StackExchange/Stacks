import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

const AVATAR_SRC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAE8CAMAAABq2/00AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/3IA/////44y/8OS/+fU//Xs/6tn/9e2EhvbMQAABH9JREFUeNrs3e1y2ygAhWELJHH/d7zuJpN1XAnxoe408Ly/6xnnHXEOIEwfDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gbAGEhrZl2VloY20PIk8tAzZbfkXA7eeuHyysVfdFMsXiY66ptiWF8Re05BdxF7HkBV7PUNW7FVx4E7sVSwrDjBw2+pC7NWwHtkTe3ULM7En9v6O2ONF7Ik9sSf2IPbEntgTexB7t8feTsynniD2Oh6tXex1hFoUe02kaxVi72JMZs+Rib0LLdkXFGLvaECWjkOxdxVmUex1rB6S2Kss2lcytSH2LnVkakPsXQ7E8xwTe5fuMrUh9vKj8CP4xN7lNOXc3mnwib1M2X7Z28VeS93mg0/sFZTG6WCMVSE51fqsYL4s9jpqQ+yV1caxErHXUxtir6c2xF5HbYRF7LXXhtjrqQ2x11MbYu9tLG4VtSH2empD7BUNxpPaSGKvPPh2sdcxX45i78baEHs18+X32hB7NfPl99oQex21MVHsxViaR8W1MU3s/XpMSvWF0tqYJfY+BmMq01dcG+scP6/6enTK9BW+1J0j9l5aYN0rP5BzM0XsbSUnAlpqY4LYezexFeRSbpslH3uDXdF64OG6est258PohXE8BK+7o6g29rJTQsPt1F3qK9qdTwMP2Wz2X1Vv0UvdbeQ53nl2Xesr2Z0Pww7Zs5lsafWW1MY+6JDNxv5/+kLb5/fXfzLirRdhKSGnr6A2tkGvJoxLGZnqva6NkAbdgA+pUN9a+QuWYYPu+98ee/W1/PJgoMG7lek7nW3UHiEdbKpcqu+kO2L9b4aG0rcWjt5jfWf2Z7kCeE891XtSG/O86A5d+tbZj1h0VW+c/ja90FG9uxMCFdWb/+SkZ1Oaq/d1vjzvXfvF+tLp+aiZT5S1Vm90lrFj02B3bW1d9X7T92u+7Aq9qk2D+Fob/v/Myu7YostC76xe9K966evfr5+7ekuXHVy1V6+R275pEMd3kPbGB+Syeod/8D7Sf41NBvPdMf7a4uXpaTGY0zd+4r0vDlKtwdPqHf/BOzzf8zQYqvRtcz54mXfUNUVyUL0T7AhcrBbKY/C36p1geVEy1y00+F3fBA9eKFxnlRXJa/XOcKxnqeF6Pv1VvTPc7RuXai6K5LN6Z9hQSUsb2Rh86pviUultaScTg/sMD15YeqmcT8/bFx1Foi/umk9P3hcMfqTenrabBT5j8DGTwHivwelOCTwNrnfJm/Ol2U0GZ74WdE+dBn9+Z/z2J9UZ7IjB7dZv8gPl9RRJIq89BiN57QZ38trn04G8k62E6xjcHuQ1D+JEXrvBnbz2+XQgr30+/SCveT69ktceg4m8doOBvDG/CXnkkTezvOXPQB555JFHHnnkkUceeeSRRx555JFHHnnkkWcnmTzyyCOPPPLII4888sgjjzzfhDzyyCOPPPL+9Ff+eyCPPPLII4888sgjjzzyyCOPPPLII4888sgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy//CPAAPiZOI3BPDFQAAAAAElFTkSuQmCC";

const getChild = (child?: string): string => {
    const groupWithAvatar = `
        <a class="s-user-card--group" href="#">
            <span class="s-avatar s-avatar__24">
                <img class="s-avatar--image" alt="User avatar" src="${AVATAR_SRC}" />
            </span>
            <span class="s-user-card--username">Tracy Smith</span>
        </a>`;
    const repAndTime = `
        <ul class="s-user-card--group">
            <li class="s-user-card--rep">
                <span class="s-bling s-bling__rep s-bling__sm">
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
        </ul>
        <a class="s-user-card--time" href="#" title="2026-01-15T12:00:00.000Z">
            <time>asked 2 hours ago</time>
        </a>`;
    switch (child) {
        case "original-poster":
            return `
        <a class="s-user-card--group" href="#">
            <span class="s-avatar s-avatar__24">
                <img class="s-avatar--image" alt="User avatar" src="${AVATAR_SRC}" />
            </span>
            <span class="s-user-card--username s-user-card--username__op">Tracy Smith</span>
        </a>
        <ul class="s-user-card--group">
            <li class="s-user-card--rep">
                <span class="s-bling s-bling__rep s-bling__sm">
                    <span class="v-visible-sr">reputation bling</span>
                </span>
                1350
            </li>
        </ul>
        <a class="s-user-card--time" href="#" title="2026-01-15T12:00:00.000Z">
            <time>asked 2 hours ago</time>
        </a>`;
        case "with-badges":
            return `${groupWithAvatar}
        <div class="s-user-card--group">
            <span class="s-badge s-badge__moderator">Mod</span>
        </div>
        <ul class="s-user-card--group">
            <li class="s-user-card--rep">
                <span class="s-bling s-bling__sm">
                    <span class="v-visible-sr">reputation bling</span>
                </span>
                1350
            </li>
        </ul>
        <a class="s-user-card--time" href="#" title="2026-01-15T12:00:00.000Z">
            <time>asked 2 hours ago</time>
        </a>`;
        case "new-contributor":
            return `${groupWithAvatar}
        <div class="s-user-card--group">
            <span class="s-badge s-badge__new">New</span>
        </div>
        <ul class="s-user-card--group">
            <li class="s-user-card--rep">
                <span class="s-bling s-bling__sm">
                    <span class="v-visible-sr">reputation bling</span>
                </span>
                1350
            </li>
        </ul>
        <a class="s-user-card--time" href="#" title="2026-01-15T12:00:00.000Z">
            <time>asked 2 hours ago</time>
        </a>`;
        case "deleted":
            return `${groupWithAvatar}
        <a class="s-user-card--time" href="#" title="2026-01-15T12:00:00.000Z">
            <time>asked 2 hours ago</time>
        </a>`;
        case "large":
            return `
        <a class="s-user-card--group" href="#">
            <span class="s-avatar s-avatar__48">
                <img class="s-avatar--image" alt="User avatar" src="${AVATAR_SRC}" />
            </span>
            <span class="s-user-card--username">Tracy Smith</span>
        </a>
        <div class="s-user-card--column">
            <p class="s-user-card--bio">Developer who believes in clean code and the occasional snake pun.</p>
            <div class="s-user-card--recognition">
                <a href="#">Recognized by AudioBubble</a>
            </div>
            <ul class="s-user-card--group s-user-card--group__split">
                <li>Senior Product Designer</li>
                <li>Vancouver, Canada</li>
            </ul>
        </div>
        <ul class="s-user-card--group">
            <li class="s-user-card--rep">
                <span class="s-bling s-bling__sm">
                    <span class="v-visible-sr">reputation bling</span>
                </span>
                1350
            </li>
        </ul>`;
        case "recognized-member":
            return `${groupWithAvatar}
        <div class="s-user-card--recognition-additional-bling">
            <a href="#">Recognized Member</a>
        </div>
        <ul class="s-user-card--group">
            <li class="s-user-card--rep">
                <span class="s-bling s-bling__sm">
                    <span class="v-visible-sr">reputation bling</span>
                </span>
                1350
            </li>
        </ul>
        <a class="s-user-card--time" href="#" title="2026-01-15T12:00:00.000Z">
            <time>asked 2 hours ago</time>
        </a>`;
        default:
            return `${groupWithAvatar}${repAndTime}`;
    }
};

describe("user-card", () => {
    runA11yTests({
        baseClass: "s-user-card",
        variants: ["sm", "lg"],
        children: {
            "base": getChild(),
            "original-poster": getChild("original-poster"),
            "with-badges": getChild("with-badges"),
            "new-contributor": getChild("new-contributor"),
            "deleted": getChild("deleted"),
            "large": getChild("large"),
            "recognized-member": getChild("recognized-member"),
        },
    });
});
