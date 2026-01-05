<script module lang="ts">
    export type Type = "legend" | "li";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * Additional CSS classes added to the element
         */
        class?: string;

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

    const getClasses = (className: string) => {
        const base = "s-menu--title";
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
    role={type === "li" ? "separator" : undefined}
>
    {@render children()}
</svelte:element>
