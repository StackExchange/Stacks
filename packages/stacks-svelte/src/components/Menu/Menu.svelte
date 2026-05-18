<script module lang="ts">
    export type Type = "fieldset" | "ul";
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
         * Sets whether the menu is rendered within a fieldset
         */
        type?: Type;

        /**
         * Snippet for the menu content
         */
        children: Snippet;
    }

    let { class: className = "", type = "ul", children }: Props = $props();

    const getClasses = (className: ClassValue) => {
        const base = "s-menu";
        return clsx(base, className);
    };

    const classes = $derived(getClasses(className));
</script>

<svelte:element
    this={type}
    class={classes}
    role={type !== "fieldset" ? "menu" : undefined}
>
    {@render children()}
</svelte:element>
