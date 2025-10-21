<script module lang="ts">
    export type Size = "" | "sm" | "lg";
    export type Type = "" | "activity" | "rep" | "gold" | "silver" | "bronze";
</script>

<script lang="ts">
    interface Props {
        /**
         * The accessible text provided for screen readers
         */
        name: string;

        /**
         * The type of the award bling
         */
        type?: Type;

        /**
         * Apply filled style to the award bling
         */
        filled?: boolean;

        /**
         * The size of the award bling. Only affects filled badges.
         */
        size?: Size;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    const { type, filled, size, name, class: className = "" }: Props = $props();

    const getClasses = (
        className: string,
        type?: Type,
        size?: Size,
        filled?: boolean
    ) => {
        let classes = "s-award-bling";

        if (className) {
            classes += " " + className;
        }

        if (type) {
            classes += " s-award-bling__" + type;
        }

        if (filled) {
            classes += " s-award-bling__filled";

            if (size) {
                classes += " s-award-bling__" + size;
            }
        }

        return classes;
    };

    const classes = $derived(getClasses(className, type, size, filled));
</script>

<span class={classes}>
    <span class="v-visible-sr">{name}</span>
</span>
