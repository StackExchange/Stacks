import { tick } from "svelte";
import { expect } from "@open-wc/testing";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import sinon from "sinon";

import Vote from "./Vote.svelte";
import { createVoteState } from "./vote-state.svelte";

describe("Vote", () => {
    it("should render the vote component", () => {
        render(Vote, { total: 12 });
        expect(screen.getByText("12")).to.exist;
    });

    it("should render 'Vote' text when total is 0 ", () => {
        render(Vote, { total: 0 });
        expect(screen.getByText("Vote")).to.exist;
    });

    it("should format large numbers", () => {
        render(Vote, { total: 1234 });
        expect(screen.getByText("1.2k")).to.exist;
    });

    it("should render upvote and downvote buttons by default", () => {
        render(Vote, { total: 12 });
        const buttons = screen.getAllByRole("button");
        expect(buttons).to.have.lengthOf(2);
    });

    it("should render only upvote button when upvoteOnly is true", () => {
        render(Vote, { total: 12, upvoteOnly: true });
        const buttons = screen.getAllByRole("button");
        expect(buttons).to.have.lengthOf(1);
    });

    it("should apply horizontal class when horizontal prop is true", () => {
        const { container } = render(Vote, { total: 12, horizontal: true });
        const voteEl = container.querySelector(".s-vote");
        expect(voteEl).to.have.class("s-vote__horizontal");
    });

    it("should render upvotes and downvotes when provided", () => {
        render(Vote, { total: 12, upvotes: 20, downvotes: 8 });
        expect(screen.getByText("+20")).to.exist;
        expect(screen.getByText("-8")).to.exist;
    });

    it("should apply expanded class when expanded state is true", async () => {
        const { container } = render(Vote, {
            total: 12,
            upvotes: 20,
            downvotes: 8,
        });
        const votesBtn = container.querySelector(
            ".s-vote--votes"
        ) as HTMLElement;
        const user = userEvent.setup();

        await user.click(votesBtn);
        await tick();

        const voteEl = container.querySelector(".s-vote");
        expect(voteEl).to.have.class("s-vote__expanded");
    });

    it("should not be expandable in horizontal layout", () => {
        render(Vote, {
            total: 12,
            upvotes: 20,
            downvotes: 8,
            horizontal: true,
        });
        // Should render as span, not button
        const votesEl = screen.getByText("12").parentElement;
        expect(votesEl?.tagName).to.equal("SPAN");
    });

    it("should render filled upvote icon when status is upvoted", () => {
        const { container } = render(Vote, { total: 13, status: "upvoted" });
        const svg = container.querySelector("svg.IconVote16UpFill");
        expect(svg).to.exist;
    });

    it("should render filled downvote icon when status is downvoted", () => {
        const { container } = render(Vote, { total: 11, status: "downvoted" });
        const svg = container.querySelector("svg.IconVote16DownFill");
        expect(svg).to.exist;
    });

    it("should call onupvoteclick handler when upvote button is clicked", async () => {
        const onupvoteclick = sinon.stub();
        render(Vote, { total: 12, onupvoteclick });

        const user = userEvent.setup();
        const upvoteBtn = screen.getAllByRole("button")[0];

        await user.click(upvoteBtn);
        await tick();

        expect(onupvoteclick).to.have.been.calledOnce;
    });

    it("should call ondownvoteclick handler when downvote button is clicked", async () => {
        const ondownvoteclick = sinon.stub();
        render(Vote, { total: 12, ondownvoteclick });

        const user = userEvent.setup();
        const downvoteBtn = screen.getAllByRole("button")[1];

        await user.click(downvoteBtn);
        await tick();

        expect(ondownvoteclick).to.have.been.calledOnce;
    });

    it("should update count when upvoting with state utility", async () => {
        const onUpvote = sinon.stub().resolves();
        const voteState = createVoteState({ total: 12, onUpvote });
        render(Vote, voteState);

        const user = userEvent.setup();
        const upvoteBtn = screen.getAllByRole("button")[0];

        await user.click(upvoteBtn);
        await tick();

        expect(voteState.total).to.equal(13);
        expect(voteState.status).to.equal("upvoted");
    });

    it("should update count when downvoting with state utility", async () => {
        const onDownvote = sinon.stub().resolves();
        const voteState = createVoteState({ total: 12, onDownvote });
        render(Vote, voteState);

        const user = userEvent.setup();
        const downvoteBtn = screen.getAllByRole("button")[1];

        await user.click(downvoteBtn);
        await tick();

        expect(voteState.total).to.equal(11);
        expect(voteState.status).to.equal("downvoted");
    });

    it("should revert count on error with state utility", async () => {
        const onUpvote = sinon.stub().rejects(new Error("Failed"));
        const voteState = createVoteState({ total: 12, onUpvote });
        render(Vote, voteState);

        const user = userEvent.setup();
        const upvoteBtn = screen.getAllByRole("button")[0];

        await user.click(upvoteBtn);
        await tick();

        expect(voteState.total).to.equal(12);
        expect(voteState.status).to.equal(null);
    });

    it("should toggle vote when clicking same button again with state utility", async () => {
        const onUpvote = sinon.stub().resolves();
        const voteState = createVoteState({ total: 12, onUpvote });
        render(Vote, voteState);

        const user = userEvent.setup();
        const upvoteBtn = screen.getAllByRole("button")[0];

        // First click - upvote
        await user.click(upvoteBtn);
        await tick();
        expect(voteState.total).to.equal(13);
        expect(voteState.status).to.equal("upvoted");

        // Second click - remove upvote
        await user.click(upvoteBtn);
        await tick();
        expect(voteState.total).to.equal(12);
        expect(voteState.status).to.equal(null);
    });

    it("should switch from upvote to downvote with state utility", async () => {
        const onUpvote = sinon.stub().resolves();
        const onDownvote = sinon.stub().resolves();
        const voteState = createVoteState({ total: 12, onUpvote, onDownvote });
        render(Vote, voteState);

        const user = userEvent.setup();
        const upvoteBtn = screen.getAllByRole("button")[0];
        const downvoteBtn = screen.getAllByRole("button")[1];

        // Upvote
        await user.click(upvoteBtn);
        await tick();
        expect(voteState.total).to.equal(13);
        expect(voteState.status).to.equal("upvoted");

        // Downvote (should change by 2)
        await user.click(downvoteBtn);
        await tick();
        expect(voteState.total).to.equal(11);
        expect(voteState.status).to.equal("downvoted");
    });

    it("should apply custom class", () => {
        const { container } = render(Vote, {
            total: 12,
            class: "custom-class",
        });
        const voteEl = container.querySelector(".s-vote");
        expect(voteEl).to.have.class("custom-class");
    });

    it("should use custom i18n text for vote button", () => {
        render(Vote, { total: 0, i18nVote: "Votar" });
        expect(screen.getByText("Votar")).to.exist;
    });

    it("should use custom i18n text for screen readers", () => {
        render(Vote, {
            total: 12,
            upvotes: 20,
            downvotes: 8,
            i18nUpvote: "Vote up",
            i18nDownvote: "Vote down",
            i18nExpand: "Expand votes",
        });
        expect(screen.getByText("Vote up")).to.exist;
        expect(screen.getByText("Vote down")).to.exist;
        expect(screen.getByText("Expand votes")).to.exist;
    });

    it("should show count instead of 'Vote' text after voting on 0 count with state utility", async () => {
        const onUpvote = sinon.stub().resolves();
        const voteState = createVoteState({ total: 0, onUpvote });
        render(Vote, voteState);

        const user = userEvent.setup();
        const upvoteBtn = screen.getAllByRole("button")[0];

        await user.click(upvoteBtn);
        await tick();

        expect(voteState.total).to.equal(1);
        expect(voteState.status).to.equal("upvoted");
    });
});
