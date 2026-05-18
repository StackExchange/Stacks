<script module lang="ts">
    export type Type = "legend" | "li";
</script>

<script lang="ts">
    import clsx from "clsx";
    import type { Snippet } from "svelte";
    import type { ClassValue } from "svelte/elements";

    interface Props {
        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;

        /**
         * Sets whether the menu title is rendered within a fieldset
         */
        type?: Type;

        /**
         * Snippet for the title content
         */
        children: Snippet;
    }

    let { class: className = "", type = "li", children }: Props = $props();

    const getClasses = (className: ClassValue) => {
        return clsx("s-menu--title", className);
    };

    const classes = $derived(getClasses(className));
</script>

<svelte:element
    this={type}
    class={classes}
    role={type === "li" ? "separator" : undefined}
>
    {@render children()}
</svelte:element>
