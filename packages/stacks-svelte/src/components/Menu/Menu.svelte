<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Snippet for the menu content
         */
        children: Snippet;
    }

    let { class: className = "", children }: Props = $props();

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

<ul class={classes} role="menu">
    {@render children()}
</ul>
