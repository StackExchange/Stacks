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

    function getClasses(lines: ExcerptLines, truncate: boolean) {
        if (lines === 0) {
            return "d-none";
        }

        return `s-post-summary--excerpt${truncate ? ` v-truncate${lines}` : ""}`;
    }
</script>

<p class={classes}>{excerpt}</p>
