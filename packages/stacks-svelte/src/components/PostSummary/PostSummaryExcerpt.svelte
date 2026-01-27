<script lang="ts">
    import type { ExcerptSize } from "./PostSummary.svelte";

    /**
     * The excerpt text to be displayed
     */
    export let excerpt: string;

    /**
     * The size of the excerpt text
     * @type {"none" | "sm" | "md" | "lg"} ExcerptSize
     */
    export let size: ExcerptSize = "lg";

    $: classes = getClasses(size);

    const getClasses = (size: ExcerptSize) => {
        const base = "s-post-summary--content-excerpt";
        let classes = base;

        if (size === "sm" || size === "md" || size === "lg") {
            const lineCount = size === "sm" ? 1 : size === "md" ? 2 : 3;
            classes += ` v-truncate${lineCount}`;
        } else if (size === "none") {
            classes = "d-none";
        }

        return classes;
    };
</script>

<p class={classes}>{excerpt}</p>
