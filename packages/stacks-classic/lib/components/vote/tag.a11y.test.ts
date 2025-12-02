import { Chevron16Up, Chevron16Down } from "@stackoverflow/stacks-icons";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

const children = {
    default: `
        <button class="s-vote--btn">${Chevron16Up}</button>
        <span class="s-vote--count">
            <span class="s-vote--positive">+20</span>
            <span class="s-vote--neutral">12</span>
            <span class="s-vote--negative">-8</span>
        </span>
        <button class="s-vote--btn">${Chevron16Down}</button>
    `,
    noVotes: `
        <button class="s-vote--btn">${Chevron16Up}</button>
        <span class="s-vote--count">
            <span class="s-vote--neutral">Vote</span>
        </span>
        <button class="s-vote--btn">${Chevron16Down}</button>
    `,
    noDownvote: `
        <button class="s-vote--btn">${Chevron16Up}</button>
        <span class="s-vote--count">
            <span class="s-vote--positive">+20</span>
            <span class="s-vote--neutral">12</span>
            <span class="s-vote--negative">-8</span>
        </span>
    `
};

describe("vote", () => {
    runA11yTests({
        baseClass: "s-vote",
        variants: ["expanded"],
        children: {
            default: children.default,
            noVotes: children.noVotes,
            // upvoted: children.upvoted, // TODO SHINE add upvoted
            // noDownvote: children.noDownvote, // TODO SHINE add no downvote
        },
    });

    runA11yTests({
        baseClass: "s-vote",
        variants: ["horizontal"],
        children: {
            default: children.noDownvote,
            // upvoted: children.noDownvoteUpvoted, // TODO SHINE add upvoted
        },
        options: {
            includeNullModifier: false,
        },
    });
});
