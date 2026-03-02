<script module lang="ts">
    export type Type = "fieldset" | "ul";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * Additional CSS classes added to the element
         */
        class?: string;

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

    const getClasses = (className: string) => {
        const base = "s-menu";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        return classes;
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
