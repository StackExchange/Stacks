<script module lang="ts">
    export type Type = "gold" | "silver" | "bronze";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * The type of the award bling
         */
        type: Type;

        /**
         * The accessible text provided for screen readers
         */
        name: string;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Optional snippet of content to display along with the award bling
         */
        children?: Snippet;
    }

    const { type, name, class: className = "", children }: Props = $props();

    const getClasses = (className: string, type: Type) => {
        let classes = "s-award-bling";

        if (className) {
            classes += " " + className;
        }

        if (type) {
            classes += " s-award-bling__" + type;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, type));
</script>

<span class={classes}>
    {@render children?.()}
    <span class="v-visible-sr">{name}</span>
</span>
