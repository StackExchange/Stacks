import type { Status } from "./Vote.svelte";

/**
 * Optional response from vote hooks containing server-authoritative values.
 * When returned, these values override the optimistic update.
 */
export interface VoteServerResponse {
    /**
     * Server-authoritative total vote count
     */
    total?: number;

    /**
     * Server-authoritative upvotes count
     */
    upvotes?: number;

    /**
     * Server-authoritative downvotes count
     */
    downvotes?: number;

    /**
     * Server-authoritative vote status
     */
    status?: Status;
}

export interface VoteStateOptions {
    /**
     * Initial total vote count
     */
    total: number;

    /**
     * Initial upvotes count (optional, for expandable mode)
     */
    upvotes?: number;

    /**
     * Initial downvotes count (optional, for expandable mode)
     */
    downvotes?: number;

    /**
     * Initial vote status
     */
    status?: Status;

    /**
     * Hook called when user upvotes.
     * - Return nothing to keep the optimistic update
     * - Return VoteServerResponse to override with server values
     * - Throw an error to rollback to previous state
     */
    onUpvote?: () =>
        | Promise<VoteServerResponse | void>
        | VoteServerResponse
        | void;

    /**
     * Hook called when user downvotes.
     * - Return nothing to keep the optimistic update
     * - Return VoteServerResponse to override with server values
     * - Throw an error to rollback to previous state
     */
    onDownvote?: () =>
        | Promise<VoteServerResponse | void>
        | VoteServerResponse
        | void;
}

/**
 * Creates a reactive vote state manager that can be spread to the Vote component.
 *
 * Features:
 * - Automatic state management for total, upvotes, downvotes, and status
 * - Optimistic updates with rollback on error
 * - Server sync hooks (onUpvote, onDownvote) with optional server response handling
 * - When hooks return VoteServerResponse, those values override the optimistic update
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *   import Vote from "./Vote.svelte";
 *   import { createVoteState } from "./vote-state.svelte";
 *
 *   const voteState = createVoteState({
 *     total: 12,
 *     onUpvote: async () => {
 *       const res = await fetch("/api/vote", {
 *         method: "POST",
 *         body: JSON.stringify({ vote: "up" })
 *       });
 *       const data = await res.json();
 *       // Return server values to override optimistic update
 *       return { total: data.total, upvotes: data.upvotes, downvotes: data.downvotes };
 *     },
 *     onDownvote: async () => {
 *       const res = await fetch("/api/vote", {
 *         method: "POST",
 *         body: JSON.stringify({ vote: "down" })
 *       });
 *       const data = await res.json();
 *       return { total: data.total };
 *     },
 *   });
 * </script>
 *
 * <Vote {...voteState} />
 * ```
 */
type VoteAction = "upvote" | "downvote";

export function createVoteState(options: VoteStateOptions) {
    let total = $state(options.total);
    let upvotes = $state(options.upvotes);
    let downvotes = $state(options.downvotes);
    let status = $state<Status>(options.status ?? null);

    /**
     * Captures current state for potential rollback
     */
    const captureState = () => ({
        total,
        upvotes,
        downvotes,
        status,
    });

    /**
     * Restores state from a captured snapshot
     */
    const restoreState = (snapshot: ReturnType<typeof captureState>) => {
        total = snapshot.total;
        upvotes = snapshot.upvotes;
        downvotes = snapshot.downvotes;
        status = snapshot.status;
    };

    /**
     * Applies server response values, overriding optimistic updates
     */
    const applyServerResponse = (response: VoteServerResponse) => {
        if (response.total !== undefined) total = response.total;
        if (response.upvotes !== undefined) upvotes = response.upvotes;
        if (response.downvotes !== undefined) downvotes = response.downvotes;
        if (response.status !== undefined) status = response.status;
    };

    /**
     * Applies optimistic update based on action and current status
     */
    const applyOptimisticUpdate = (action: VoteAction) => {
        const isUpvote = action === "upvote";
        const targetStatus: Status = isUpvote ? "upvoted" : "downvoted";
        const oppositeStatus: Status = isUpvote ? "downvoted" : "upvoted";

        if (status === targetStatus) {
            // Toggle off current vote
            total += isUpvote ? -1 : 1;
            if (isUpvote && upvotes !== undefined) upvotes -= 1;
            if (!isUpvote && downvotes !== undefined) downvotes -= 1;
            status = null;
        } else if (status === oppositeStatus) {
            // Switch vote
            total += isUpvote ? 2 : -2;
            if (upvotes !== undefined) upvotes += isUpvote ? 1 : -1;
            if (downvotes !== undefined) downvotes += isUpvote ? -1 : 1;
            status = targetStatus;
        } else {
            // New vote
            total += isUpvote ? 1 : -1;
            if (isUpvote && upvotes !== undefined) upvotes += 1;
            if (!isUpvote && downvotes !== undefined) downvotes += 1;
            status = targetStatus;
        }
    };

    /**
     * Handles vote action with optimistic update, hook execution, and rollback on error
     */
    const handleVote = async (action: VoteAction) => {
        const previousState = captureState();
        const hook =
            action === "upvote" ? options.onUpvote : options.onDownvote;

        applyOptimisticUpdate(action);

        if (hook) {
            try {
                const response = await hook();
                if (response) {
                    applyServerResponse(response);
                }
            } catch {
                restoreState(previousState);
            }
        }
    };

    return {
        // Getters for reactive state
        get total() {
            return total;
        },
        get upvotes() {
            return upvotes;
        },
        get downvotes() {
            return downvotes;
        },
        get status() {
            return status;
        },

        // Click handlers for the Vote component
        onupvoteclick: () => handleVote("upvote"),
        ondownvoteclick: () => handleVote("downvote"),

        // Programmatic setters for external updates
        setTotal(value: number) {
            total = value;
        },
        setUpvotes(value: number | undefined) {
            upvotes = value;
        },
        setDownvotes(value: number | undefined) {
            downvotes = value;
        },
        setStatus(value: Status) {
            status = value;
        },
    };
}
