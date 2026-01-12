<script lang="ts">
    interface Props {
        /**
         * Timestamp displayed in the user card generally used to indicate when a comment was posted UPDATE THIS
         */
        text?: string;

        /**
         * Tooltip text for the timestamp
         * @default "Show activity on this post"
         */
        tooltipText?: string;

        /**
         * Link to post activity
         */
        href?: string;
    }

    const {
        text,
        tooltipText = "Show activity on this post",
        href,
    }: Props = $props();
</script>

{#if text}
    <a
        {href}
        class="s-user-card--time"
        title={tooltipText}
        data-controller="s-tooltip"
    >
        <time>
            {text}
        </time>
    </a>
{/if}
