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
        callToAction?: Snippet;
    }

    let {
        title,
        class: className,
        description,
        callToAction,
    }: Props = $props();
</script>

<div class={["s-empty-state", className]}>
    <Icon src={SpotEmpty} />
    {#if title}
        <h4 class="s-empty-state__title">{title}</h4>
    {/if}
    <p>{@render description()}</p>
    {#if callToAction}
        {@render callToAction()}
    {/if}
</div>
