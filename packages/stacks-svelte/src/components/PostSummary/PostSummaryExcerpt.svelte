<script lang="ts">
    import type { ExcerptSize } from "./PostSummary.svelte";

    /**
     * The excerpt text to be displayed
     */
    export let excerpt: string;

    /**
     * The size of the excerpt text
     * @type {"sm" | "md" | "lg" | undefined} ExcerptSize
     */
    export let size: ExcerptSize = undefined;

    $: classes = getClasses(size);

    const getClasses = (size: ExcerptSize) => {
        const base = "s-post-summary--content-excerpt";
        let classes = base;

        if (size) {
            classes += ` ${base}__${size}`;
        }

        return classes;
    };
</script>

<p class={classes}>{excerpt}</p>
