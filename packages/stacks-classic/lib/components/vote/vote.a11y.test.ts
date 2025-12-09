import { runA11yTests } from "../../test/a11y-test-utils";
import {
    IconVote16Up,
    IconVote16Down,
} from "@stackoverflow/stacks-icons/icons";
import "../../index";

const children = {
    default: `
        <button class="s-vote--btn">
            ${IconVote16Up}
            <span class="v-visible-sr">upvote</span>
        </button>
        <span class="s-vote--votes">
            <span class="s-vote--total">12</span>
            <span class="s-vote--upvotes">+20</span>
            <span class="s-vote--downvotes">-8</span>
        </span>
        <button class="s-vote--btn">
            ${IconVote16Down}
            <span class="v-visible-sr">downvote</span>
        </button>
    `,
    upvoteOnly: `
        <button class="s-vote--btn">
            ${IconVote16Up}
            <span class="v-visible-sr">upvote</span>
        </button>
        <span class="s-vote--votes">
            <span class="s-vote--total">12</span>
            <span class="s-vote--upvotes">+20</span>
            <span class="s-vote--downvotes">-8</span>
        </span>
    `
};

describe("vote", () => {
    runA11yTests({
        baseClass: "s-vote",
        modifiers: {
            primary: ["expanded"],
        },
        children: {
            default: children.default,
        },
    });

    // Horizontal with and without downvote
    runA11yTests({
        baseClass: "s-vote",
        modifiers: {
            primary: ["horizontal"],
        },
        options: {
            includeNullModifier: false,
        },
        children,
    });
});
