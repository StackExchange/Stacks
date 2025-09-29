<script module lang="ts">
    export type Variant =
        | "answers"
        | "bounty"
        | "read-time"
        | "views"
        | "votes"
        | undefined;
</script>

<script lang="ts">
    import type { Hotness } from "./PostSummary.svelte";
    /**
     * Number to be displayed
     */
    export let number: string | number;

    /**
     * Label to be displayed as the unit of the number
     */
    export let unit: string;

    /**
     * Apply hotness styling
     * @type {"warm" | "hot" | "supernova" | undefined} Hotness
     */
    export let hotness: Hotness = undefined;

    /**
     * The variant of the stats item
     * @type {"answers" | "bounty" | "views" | "votes" | undefined} Variant
     */
    export let variant: Variant = undefined;

    /**
     * Additional CSS classes added to the element
     */
    let className = "";
    export { className as class };

    $: classes = getClasses(className, hotness, variant);

    const getClasses = (
        className: string,
        hotness: Hotness,
        variant: Variant
    ) => {
        const base = "s-post-summary--stats-item";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (variant === "answers" && number && Number(number) > 0) {
            classes += ` has-answers`;
        }

        if (hotness) {
            classes += ` is-${hotness}`;
        }

        if (variant === "bounty") {
            classes += ` s-badge s-badge__bounty`;
        }

        if (variant === "votes") {
            classes += ` ${base}__emphasized`;
        }

        return classes;
    };
</script>

<div class={classes}>
    <span class="s-post-summary--stats-item-number">
        {#if variant === "bounty"}+{/if}{number}
    </span>
    {#if variant !== "bounty"}
        <span class="s-post-summary--stats-item-unit">{unit}</span>
    {/if}
</div>
