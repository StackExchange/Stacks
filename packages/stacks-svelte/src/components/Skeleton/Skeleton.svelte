<script context="module" lang="ts">
    export type Variant = "" | "ai";
</script>

<script lang="ts">
    /**
     * The accessible label for screen readers
     * @type {string} Label
     */
    export let label: string = "Loading…";

    /**
     * The variant of the skeleton
     * @type {"" | "ai"} Variant
     */
    export let variant: Variant = "";

    const getClasses = (variant: Variant) => {
        const base = "s-skeleton";
        let classes = base;

        if (variant) {
            classes += ` ${base}__${variant}`;
        }

        return classes;
    };

    $: classes = getClasses(variant);
</script>

<div class={classes}>
    <div class="v-visible-sr">{label}</div>
</div>
