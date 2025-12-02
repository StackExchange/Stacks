<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Vote from "./Vote.svelte";

    const { Story } = defineMeta({
        title: "Components/Vote",
        component: Vote,
    });
</script>

<Story name="Base" args={{}}>
    {#snippet template(args)}
        <Vote {...args} />
    {/snippet}
</Story>
