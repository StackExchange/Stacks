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
        class: className,
        description,
        actions,
    }: Props = $props();
</script>

<div class={["s-empty-state", className]}>
    <Icon src={SpotEmpty} native />
    {#if title}
        <h4 class="s-empty-state--title">{title}</h4>
    {/if}
    <p>{@render description()}</p>
    {#if actions}
        {@render actions()}
    {/if}
</div>
