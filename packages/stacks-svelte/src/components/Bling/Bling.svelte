<script module lang="ts">
    export type Size = "" | "sm" | "lg";
    export type Type = "" | "activity" | "rep" | "gold" | "silver" | "bronze";
</script>

<script lang="ts">
    import clsx from "clsx";
    import type { ClassValue } from "svelte/elements";

    interface Props {
        /**
         * The accessible text provided for screen readers
         */
        name: string;

        /**
         * The type of the bling
         */
        type?: Type;

        /**
         * Apply filled style to the bling
         */
        filled?: boolean;

        /**
         * The size of the bling. Only affects filled badges.
         */
        size?: Size;

        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;
    }

    const { type, filled, size, name, class: className = "" }: Props = $props();

    const getClasses = (
        className: ClassValue,
        type?: Type,
        size?: Size,
        filled?: boolean
    ) => {
        const base = "s-bling";
        const classes = [type, size]
            .filter(Boolean)
            .map((modifier) => `${base}__${modifier}`);
        if (filled) {
            classes.push(`${base}__filled`);
        }
        return clsx(base, className, classes);
    };

    const classes = $derived(getClasses(className, type, size, filled));
</script>

<span class={classes}>
    <span class="v-visible-sr">{name}</span>
</span>
