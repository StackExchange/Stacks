<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Vote from "./Vote.svelte";

    const { Story } = defineMeta({
        title: "Components/Vote",
        component: Vote,
    });
</script>

<Story name="Base">
    {#snippet template(args)}
        <Vote {...args} />
    {/snippet}
</Story>

<!-- TODO SHINE add examples story here (base, 0 count, ≥ 1k, ≥ 1m) -->
<!-- TODO SHINE add expanded story -->
<!-- TODO SHINE add horizontal story -->
<!-- TODO SHINE add voted story (upvoted, downvoted, horizontal upvoted) -->
