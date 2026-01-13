<script lang="ts">
    import Popover from "../Popover/Popover.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";

    interface Props {
        /**
         * Timestamp displayed in the user card generally used to indicate when a comment was posted UPDATE THIS
         */
        text?: string;

        /**
         * Tooltip text for the timestamp
         */
        preciseTimestamp?: string;

        /**
         * Link to post activity
         */
        href?: string;
    }

    const { text, preciseTimestamp, href }: Props = $props();
</script>

{#if text}
    <Popover id="user-card-time-popover" tooltip>
        <PopoverReference>
            <a {href} class="s-user-card--time">
                <time>
                    {text}
                </time>
            </a>
        </PopoverReference>
        <PopoverContent>
            {preciseTimestamp}
        </PopoverContent>
    </Popover>
{/if}
