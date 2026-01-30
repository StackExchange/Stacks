import { expect } from "@open-wc/testing";
import { flushSync } from "svelte";
import sinon from "sinon";

import { createVoteState } from "./vote-state.svelte";

describe("createVoteState", () => {
    describe("initialization", () => {
        it("should initialize with provided total", () => {
            const state = createVoteState({ total: 42 });
            expect(state.total).to.equal(42);
        });

        it("should initialize with provided upvotes and downvotes", () => {
            const state = createVoteState({
                total: 20,
                upvotes: 28,
                downvotes: 8,
            });
            expect(state.total).to.equal(20);
            expect(state.upvotes).to.equal(28);
            expect(state.downvotes).to.equal(8);
        });

        it("should initialize with provided status", () => {
            const state = createVoteState({ total: 10, status: "upvoted" });
            expect(state.status).to.equal("upvoted");
        });

        it("should default status to null", () => {
            const state = createVoteState({ total: 10 });
            expect(state.status).to.equal(null);
        });

        it("should have undefined upvotes/downvotes when not provided", () => {
            const state = createVoteState({ total: 10 });
            expect(state.upvotes).to.be.undefined;
            expect(state.downvotes).to.be.undefined;
        });
    });

    describe("upvote - no prior vote", () => {
        it("should increment total by 1", async () => {
            const state = createVoteState({ total: 10 });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
        });

        it("should set status to upvoted", async () => {
            const state = createVoteState({ total: 10 });
            await state.onupvoteclick();
            flushSync();
            expect(state.status).to.equal("upvoted");
        });

        it("should increment upvotes when provided", async () => {
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
            });
            await state.onupvoteclick();
            flushSync();
            expect(state.upvotes).to.equal(16);
            expect(state.downvotes).to.equal(5);
        });

        it("should call onUpvote hook", async () => {
            const onUpvote = sinon.stub().resolves();
            const state = createVoteState({ total: 10, onUpvote });
            await state.onupvoteclick();
            expect(onUpvote).to.have.been.calledOnce;
        });
    });

    describe("upvote - already upvoted (toggle off)", () => {
        it("should decrement total by 1", async () => {
            const state = createVoteState({ total: 10, status: "upvoted" });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(9);
        });

        it("should set status to null", async () => {
            const state = createVoteState({ total: 10, status: "upvoted" });
            await state.onupvoteclick();
            flushSync();
            expect(state.status).to.equal(null);
        });

        it("should decrement upvotes when provided", async () => {
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                status: "upvoted",
            });
            await state.onupvoteclick();
            flushSync();
            expect(state.upvotes).to.equal(14);
            expect(state.downvotes).to.equal(5);
        });
    });

    describe("upvote - currently downvoted (switch)", () => {
        it("should increment total by 2", async () => {
            const state = createVoteState({ total: 10, status: "downvoted" });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(12);
        });

        it("should set status to upvoted", async () => {
            const state = createVoteState({ total: 10, status: "downvoted" });
            await state.onupvoteclick();
            flushSync();
            expect(state.status).to.equal("upvoted");
        });

        it("should update upvotes and downvotes when provided", async () => {
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                status: "downvoted",
            });
            await state.onupvoteclick();
            flushSync();
            expect(state.upvotes).to.equal(16);
            expect(state.downvotes).to.equal(4);
        });
    });

    describe("downvote - no prior vote", () => {
        it("should decrement total by 1", async () => {
            const state = createVoteState({ total: 10 });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(9);
        });

        it("should set status to downvoted", async () => {
            const state = createVoteState({ total: 10 });
            await state.ondownvoteclick();
            flushSync();
            expect(state.status).to.equal("downvoted");
        });

        it("should increment downvotes when provided", async () => {
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
            });
            await state.ondownvoteclick();
            flushSync();
            expect(state.upvotes).to.equal(15);
            expect(state.downvotes).to.equal(6);
        });

        it("should call onDownvote hook", async () => {
            const onDownvote = sinon.stub().resolves();
            const state = createVoteState({ total: 10, onDownvote });
            await state.ondownvoteclick();
            expect(onDownvote).to.have.been.calledOnce;
        });
    });

    describe("downvote - already downvoted (toggle off)", () => {
        it("should increment total by 1", async () => {
            const state = createVoteState({ total: 10, status: "downvoted" });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
        });

        it("should set status to null", async () => {
            const state = createVoteState({ total: 10, status: "downvoted" });
            await state.ondownvoteclick();
            flushSync();
            expect(state.status).to.equal(null);
        });

        it("should decrement downvotes when provided", async () => {
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                status: "downvoted",
            });
            await state.ondownvoteclick();
            flushSync();
            expect(state.upvotes).to.equal(15);
            expect(state.downvotes).to.equal(4);
        });
    });

    describe("downvote - currently upvoted (switch)", () => {
        it("should decrement total by 2", async () => {
            const state = createVoteState({ total: 10, status: "upvoted" });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(8);
        });

        it("should set status to downvoted", async () => {
            const state = createVoteState({ total: 10, status: "upvoted" });
            await state.ondownvoteclick();
            flushSync();
            expect(state.status).to.equal("downvoted");
        });

        it("should update upvotes and downvotes when provided", async () => {
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                status: "upvoted",
            });
            await state.ondownvoteclick();
            flushSync();
            expect(state.upvotes).to.equal(14);
            expect(state.downvotes).to.equal(6);
        });
    });

    describe("error rollback", () => {
        it("should rollback total on upvote error", async () => {
            const onUpvote = sinon.stub().rejects(new Error("Server error"));
            const state = createVoteState({ total: 10, onUpvote });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(10);
            expect(state.status).to.equal(null);
        });

        it("should rollback total on downvote error", async () => {
            const onDownvote = sinon.stub().rejects(new Error("Server error"));
            const state = createVoteState({ total: 10, onDownvote });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(10);
            expect(state.status).to.equal(null);
        });

        it("should rollback all state on upvote error", async () => {
            const onUpvote = sinon.stub().rejects(new Error("Server error"));
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                status: "downvoted",
                onUpvote,
            });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(10);
            expect(state.upvotes).to.equal(15);
            expect(state.downvotes).to.equal(5);
            expect(state.status).to.equal("downvoted");
        });

        it("should rollback all state on downvote error", async () => {
            const onDownvote = sinon.stub().rejects(new Error("Server error"));
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                status: "upvoted",
                onDownvote,
            });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(10);
            expect(state.upvotes).to.equal(15);
            expect(state.downvotes).to.equal(5);
            expect(state.status).to.equal("upvoted");
        });
    });

    describe("server response override", () => {
        it("should override total with server value on upvote", async () => {
            const onUpvote = sinon.stub().resolves({ total: 100 });
            const state = createVoteState({ total: 10, onUpvote });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(100);
        });

        it("should override total with server value on downvote", async () => {
            const onDownvote = sinon.stub().resolves({ total: 50 });
            const state = createVoteState({ total: 10, onDownvote });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(50);
        });

        it("should override all values with server response", async () => {
            const onUpvote = sinon.stub().resolves({
                total: 100,
                upvotes: 120,
                downvotes: 20,
                status: "upvoted" as const,
            });
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                onUpvote,
            });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(100);
            expect(state.upvotes).to.equal(120);
            expect(state.downvotes).to.equal(20);
            expect(state.status).to.equal("upvoted");
        });

        it("should handle concurrent vote scenario (different total from server)", async () => {
            // Simulate: user upvotes (optimistic: 11), but server says someone else
            // also upvoted so actual total is 15
            const onUpvote = sinon.stub().resolves({
                total: 15,
                upvotes: 20,
                status: "upvoted" as const,
            });
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                onUpvote,
            });

            // Before vote
            expect(state.total).to.equal(10);

            await state.onupvoteclick();
            flushSync();

            // Server returned different values due to concurrent votes
            expect(state.total).to.equal(15);
            expect(state.upvotes).to.equal(20);
            expect(state.status).to.equal("upvoted");
        });

        it("should partially override with server response", async () => {
            // Server only returns total, not upvotes/downvotes
            const onUpvote = sinon.stub().resolves({ total: 50 });
            const state = createVoteState({
                total: 10,
                upvotes: 15,
                downvotes: 5,
                onUpvote,
            });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(50);
            // Optimistic update kept for upvotes
            expect(state.upvotes).to.equal(16);
            expect(state.downvotes).to.equal(5);
        });

        it("should keep optimistic update when hook returns void", async () => {
            const onUpvote = sinon.stub().resolves();
            const state = createVoteState({ total: 10, onUpvote });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
            expect(state.status).to.equal("upvoted");
        });

        it("should keep optimistic update when hook returns undefined", async () => {
            const onUpvote = sinon.stub().resolves(undefined);
            const state = createVoteState({ total: 10, onUpvote });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
        });
    });

    describe("programmatic setters", () => {
        it("should allow setting total externally", () => {
            const state = createVoteState({ total: 10 });
            state.setTotal(50);
            flushSync();
            expect(state.total).to.equal(50);
        });

        it("should allow setting upvotes externally", () => {
            const state = createVoteState({ total: 10, upvotes: 15 });
            state.setUpvotes(25);
            flushSync();
            expect(state.upvotes).to.equal(25);
        });

        it("should allow setting downvotes externally", () => {
            const state = createVoteState({ total: 10, downvotes: 5 });
            state.setDownvotes(10);
            flushSync();
            expect(state.downvotes).to.equal(10);
        });

        it("should allow setting status externally", () => {
            const state = createVoteState({ total: 10 });
            state.setStatus("upvoted");
            flushSync();
            expect(state.status).to.equal("upvoted");
        });

        it("should allow clearing upvotes", () => {
            const state = createVoteState({ total: 10, upvotes: 15 });
            state.setUpvotes(undefined);
            flushSync();
            expect(state.upvotes).to.be.undefined;
        });
    });

    describe("without hooks", () => {
        it("should work without onUpvote hook", async () => {
            const state = createVoteState({ total: 10 });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
            expect(state.status).to.equal("upvoted");
        });

        it("should work without onDownvote hook", async () => {
            const state = createVoteState({ total: 10 });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(9);
            expect(state.status).to.equal("downvoted");
        });
    });

    describe("synchronous hooks", () => {
        it("should work with synchronous onUpvote hook", async () => {
            const onUpvote = sinon.stub().returns({ total: 100 });
            const state = createVoteState({ total: 10, onUpvote });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(100);
        });

        it("should work with synchronous onDownvote hook", async () => {
            const onDownvote = sinon.stub().returns({ total: 50 });
            const state = createVoteState({ total: 10, onDownvote });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(50);
        });

        it("should rollback on synchronous error", async () => {
            const onUpvote = sinon.stub().throws(new Error("Sync error"));
            const state = createVoteState({ total: 10, onUpvote });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(10);
            expect(state.status).to.equal(null);
        });
    });

    describe("edge cases", () => {
        it("should handle negative totals", async () => {
            const state = createVoteState({ total: 0 });
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(-1);
        });

        it("should handle zero total with upvote", async () => {
            const state = createVoteState({ total: 0 });
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(1);
        });

        it("should handle multiple consecutive upvotes correctly", async () => {
            const state = createVoteState({ total: 10 });

            // First upvote
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
            expect(state.status).to.equal("upvoted");

            // Second upvote (toggle off)
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(10);
            expect(state.status).to.equal(null);

            // Third upvote
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
            expect(state.status).to.equal("upvoted");
        });

        it("should handle upvote -> downvote -> upvote sequence", async () => {
            const state = createVoteState({ total: 10 });

            // Upvote
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
            expect(state.status).to.equal("upvoted");

            // Downvote (switch)
            await state.ondownvoteclick();
            flushSync();
            expect(state.total).to.equal(9);
            expect(state.status).to.equal("downvoted");

            // Upvote (switch back)
            await state.onupvoteclick();
            flushSync();
            expect(state.total).to.equal(11);
            expect(state.status).to.equal("upvoted");
        });
    });
});
