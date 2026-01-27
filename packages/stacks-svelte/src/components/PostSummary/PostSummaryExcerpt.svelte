<script lang="ts">
    import type { ExcerptLines } from "./PostSummary.svelte";

    /**
     * The excerpt text to be displayed
     */
    export let excerpt: string;

    /**
     * The number of lines to truncate the excerpt text
     */
    export let lines: ExcerptLines = 3;

    /**
     * Whether to truncate the excerpt text
     */
    export let truncate: boolean = true;

    $: classes = getClasses(lines, truncate);

    const getClasses = (lines: ExcerptLines, truncate: boolean) => {
        const base = "s-post-summary--excerpt";
        let classes = base;

        if (lines === 0) {
            classes = "d-none";
        } else {
            if (truncate) {
                classes += ` v-truncate${lines}`;
            }
        }

        return classes;
    };
</script>

<p class={classes}>{excerpt}</p>
