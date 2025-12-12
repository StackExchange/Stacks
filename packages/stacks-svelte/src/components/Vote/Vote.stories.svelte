<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Vote, { type Status } from "./Vote.svelte";

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
    {#snippet template(args)}
        <Vote {...args} />
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
