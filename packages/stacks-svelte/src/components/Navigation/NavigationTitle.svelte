<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        /**
         * The title of the navigation section
         */
        title: string;
        /**
         * Additional CSS classes added to the element
         */
        class?: string;
        /**
         * Optional content rendered at the end of the navigation title.
         */
        trailing?: Snippet;
    }
    let { title, class: className = "", trailing }: Props = $props();
    const getClasses = (className: string) => {
        const base = "s-navigation--title";
        let classes = "d-flex jc-space-between " + base;
        if (className) {
            classes += ` ${className}`;
        }
        return classes;
    };
    const classes = $derived(getClasses(className));
</script>

<li class={classes} role="separator">
    {title}
    {@render trailing?.()}
</li>
