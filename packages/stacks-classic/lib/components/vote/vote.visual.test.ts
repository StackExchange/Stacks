import { runVisualTests } from "../../test/visual-test-utils";
import {
    IconVote16Up,
    IconVote16Down,
} from "@stackoverflow/stacks-icons/icons";
import "../../index";

describe("vote", () => {
    runVisualTests({
        baseClass: "s-vote",
        modifiers: {
            primary: ["expanded"],
        },
        children: {
            default: `
                <button class="s-vote--btn">
                    ${IconVote16Up}
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--upvotes">+20</span>
                    <span class="s-vote--total">12</span>
                    <span class="s-vote--downvotes">-8</span>
                </span>
                <button class="s-vote--btn">
                    ${IconVote16Down}
                </button>
            `,
        },
    });

    // Horizontal without downvote button
    runVisualTests({
        baseClass: "s-vote",
        modifiers: {
            primary: ["horizontal"],
        },
        options: {
            includeNullModifier: false,
        },
        children: {
            default: `
                <button class="s-vote--btn">
                    ${IconVote16Up}
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--upvotes">+20</span>
                    <span class="s-vote--total">12</span>
                    <span class="s-vote--downvotes">-8</span>
                </span>
            `,
        },
    });
});
