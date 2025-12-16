<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import EmptyState from "./EmptyState.svelte";
    import Link from "../Link/Link.svelte";

    const { Story } = defineMeta({
        title: "Components/EmptyState",
        component: EmptyState,
        tags: ["labs"],
        argTypes: {
            title: {
                control: "text",
            },
            class: {
                control: "text",
            },
        },
    });
</script>

<Story name="Base" args={{ title: "No items found" }}>
    {#snippet template(args)}
        <EmptyState title={args.title} class={args.class}>
            {#snippet description()}
                There are no items to display at this time.
            {/snippet}
            {#snippet callToAction()}
                <button class="s-btn s-btn__filled">Add New Item</button>
            {/snippet}
        </EmptyState>
    {/snippet}
</Story>

<Story name="Minimal">
    {#snippet template(args)}
        <EmptyState title={args.title} class={args.class}>
            {#snippet description()}
                No data found. <Link href="#" underlined>Check back</Link> later.
            {/snippet}
        </EmptyState>
    {/snippet}
</Story>
