<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import type { Snippet } from "svelte";
    import type { ClassValue } from "svelte/elements";
    import { SpotEmpty } from "@stackoverflow/stacks-icons/spots";
    interface Props {
        /**
         * The optional title to be shown
         */
        title?: string;

        /**
         * Html tag to use for the title
         */
        titleTag?: string;

        /**
         * Additional CSS classes added to the underlying outer HTML element
         */
        class?: ClassValue;

        /**
         * Snippet containing brief text
         * explaining the empty state
         */
        description: Snippet;

        /**
         * Optional snippet for actionable buttons
         */
        actions?: Snippet;
    }

    let {
        title,
        titleTag = "h4",
        class: className,
        description,
        actions,
    }: Props = $props();
</script>

<div class={["s-empty-state", className]}>
    <Icon src={SpotEmpty} native />
    {#if title}
        <svelte:element this={titleTag} class="s-empty-state--title">
            {title}
        </svelte:element>
    {/if}
    <p>{@render description()}</p>
    {#if actions}
        {@render actions()}
    {/if}
</div>
