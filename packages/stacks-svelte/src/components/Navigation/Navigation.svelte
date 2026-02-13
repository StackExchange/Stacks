<script lang="ts">
    import type { Snippet } from "svelte";
    import type { ClassValue } from "svelte/elements";

    type Orientation = "horizontal" | "vertical";
    type Overflow = "wrap" | "scroll";
    type Size = "" | "sm";
    interface Props {
        /**
         * The aria-label for the navigation
         */
        label: string;
        /**
         * The orientation of the navigation
         */
        orientation?: "horizontal" | "vertical";
        /**
         * The overflow behavior of the navigation items
         */
        overflow?: "wrap" | "scroll";
        /**
         * The size of the navigation items
         */
        size?: "" | "sm";
        /**
         * Additional CSS classes added to the outer navigation element
         */
        class?: ClassValue;
        /**
         * Additional CSS classes added to the inner list element
         */
        listClass?: ClassValue;
        /**
         * Snippet for the navigation children
         */
        children: Snippet;
    }
    let {
        label,
        orientation = "horizontal",
        overflow = "wrap",
        size = "",
        class: className = "",
        listClass = "",
        children,
    }: Props = $props();
    const getClasses = (
        orientation: Orientation,
        overflow: Overflow,
        size: Size
    ): string => {
        const base = "s-navigation";
        let classes = base;
        if (orientation === "vertical") {
            classes += ` ${base}__vertical`;
        }
        if (overflow === "scroll") {
            classes += ` ${base}__scroll`;
        }
        if (size) {
            classes += ` ${base}__${size}`;
        }
        return classes;
    };
    const classes = $derived(getClasses(orientation, overflow, size));
</script>

<nav aria-label={label} class={className}>
    <ul class={[listClass, classes]}>
        {@render children()}
    </ul>
</nav>
