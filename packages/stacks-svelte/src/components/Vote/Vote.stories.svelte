<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Vote, { type Status } from "./Vote.svelte";
    import { createVoteState } from "./vote-state.svelte";

    const VoteStatuses: Status[] = [null, "upvoted", "downvoted"];

    const { Story } = defineMeta({
        title: "Components/Vote",
        component: Vote,
        argTypes: {
            status: {
                control: { type: "select" },
                options: VoteStatuses,
            },
        },
    });
</script>

<Story name="Base">
    {#snippet template({ total, ...args })}
        <Vote total={total ?? 0} {...args} />
    {/snippet}
</Story>

<Story name="Counts">
    {#snippet template()}
        <div class="d-flex ai-center g64 fw-wrap">
            <Vote total={0} />
            <Vote total={12} />
            <Vote total={25789} />
            <Vote total={50234567} />
            <Vote total={-1} />
        </div>
    {/snippet}
</Story>

<Story name="Expandable">
    {#snippet template()}
        <div class="d-flex ai-center g64 fw-wrap">
            <Vote total={20} upvotes={28} downvotes={8} />
            <Vote total={5234} upvotes={5642} downvotes={408} />
        </div>
    {/snippet}
</Story>

<Story name="Horizontal">
    {#snippet template()}
        <div class="d-flex ai-center g64 fw-wrap">
            <Vote total={12} horizontal />
            <Vote total={25789} horizontal />
            <Vote total={0} horizontal />
        </div>
    {/snippet}
</Story>

<Story name="Voted">
    {#snippet template()}
        <div class="d-flex ai-center g64 fw-wrap">
            <Vote total={13} status="upvoted" />
            <Vote total={11} status="downvoted" />
            <Vote total={13} status="upvoted" horizontal />
        </div>
    {/snippet}
</Story>

<Story name="Upvote only">
    {#snippet template()}
        <div class="d-flex ai-center g64 fw-wrap">
            <Vote total={13} upvoteOnly horizontal />
        </div>
    {/snippet}
</Story>

<Story name="With State Utility" asChild>
    {@const voteState = createVoteState({
        total: 42,
        upvotes: 50,
        downvotes: 8,
        onUpvote: async () => {
            // Simulate server delay
            await new Promise((resolve) => setTimeout(resolve, 300));
            console.log("Upvote sent to server");
        },
        onDownvote: async () => {
            await new Promise((resolve) => setTimeout(resolve, 300));
            console.log("Downvote sent to server");
        },
    })}
    <div class="d-flex fd-column g16">
        <Vote {...voteState} />
        <p class="fs-caption fc-medium">
            Click the vote buttons - state is managed automatically with
            optimistic updates
        </p>
    </div>
</Story>

<Story name="With Error Rollback" asChild>
    {@const voteState = createVoteState({
        total: 10,
        onUpvote: async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            throw new Error("Server error - vote rolled back");
        },
        onDownvote: async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            throw new Error("Server error - vote rolled back");
        },
    })}
    <div class="d-flex fd-column g16">
        <Vote {...voteState} />
        <p class="fs-caption fc-medium">
            Votes will rollback after 500ms (simulated server error)
        </p>
    </div>
</Story>
