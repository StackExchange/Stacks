<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import EmptyState from "./EmptyState.svelte";
    import Link from "../Link/Link.svelte";
    import Button from "../Button/Button.svelte";

    const { Story } = defineMeta({
        title: "Components/EmptyState",
        component: EmptyState,
    });
</script>

<Story name="Base" args={{ title: "No items found" }}>
    {#snippet template(args)}
        <EmptyState {...args}>
            {#snippet description()}
                There are no items to display at this time.
            {/snippet}
            {#snippet actions()}
                <Button variant="tonal">Add New Item</Button>
            {/snippet}
        </EmptyState>
    {/snippet}
</Story>

<Story name="Minimal">
    {#snippet template(args)}
        <EmptyState {...args}>
            {#snippet description()}
                No data found. <Link href="#" underlined>Check back</Link> later.
            {/snippet}
        </EmptyState>
    {/snippet}
</Story>
