<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Snippet for the title content
         */
        children: Snippet;
    }

    let { class: className = "", children }: Props = $props();

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

<li class={classes} role="separator">
    {@render children()}
</li>
