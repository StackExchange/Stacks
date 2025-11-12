<script module lang="ts">
    export type Tag = "ul" | "div";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * The HTML tag to use for the menu container. Use "ul" for list-based menus, "div" for radio groups.
         * @type {"ul" | "div"}
         */
        tag?: Tag;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Snippet for the menu content
         */
        children: Snippet;
    }

    let { tag = "ul", class: className = "", children }: Props = $props();

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
    this={tag}
    class={classes}
    role={tag === "ul" ? "menu" : undefined}
>
    {@render children()}
</svelte:element>
