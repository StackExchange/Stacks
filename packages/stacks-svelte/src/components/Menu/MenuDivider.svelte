<script lang="ts">
    import clsx from "clsx";
    import type { ClassValue } from "svelte/elements";

    interface Props {
        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;
    }

    let { class: className = "" }: Props = $props();

    const getClasses = (className: ClassValue) => {
        return clsx("s-menu--divider", className);
    };

    const classes = $derived(getClasses(className));
</script>

<li class={classes} role="separator"></li>
