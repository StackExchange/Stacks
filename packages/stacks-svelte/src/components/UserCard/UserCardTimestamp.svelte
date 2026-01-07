<script lang="ts">
    interface Props {
        /**
         * Timestamp displayed in the user card generally used to indicate when a comment was posted
         */
        timestamp?: string;

        /**
         * Tooltip text for the timestamp
         * @default "Show activity on this post"
         */
        i18nTimestampTooltip?: string;
    }

    const {
        timestamp,
        i18nTimestampTooltip = "Show activity on this post",
    }: Props = $props();
</script>

{#if timestamp}
    <time
        class="s-user-card--time"
        title={i18nTimestampTooltip}
        data-controller="s-tooltip"
    >
        {timestamp}
    </time>
{/if}
