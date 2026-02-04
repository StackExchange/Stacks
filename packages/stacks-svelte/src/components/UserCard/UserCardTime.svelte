<script lang="ts">
    import type { SvelteDate } from "svelte/reactivity";
    import { formatTime } from "@stackoverflow/stacks-utils";
    import Popover from "../Popover/Popover.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";

    interface Props {
        /**
         * Text to display instead of the formatted time
         */
        text?: string;

        /**
         * Precise date and time of the post in ISO format
         */
        timestamp?: Date | SvelteDate | string;

        /**
         * Link to post activity
         */
        href?: string;
    }

    const { text, timestamp, href }: Props = $props();
</script>

<Popover id="user-card-time-popover" tooltip>
    <PopoverReference>
        <a {href} class="s-user-card--time">
            {text ||
                formatTime(
                    typeof timestamp === "string"
                        ? timestamp
                        : (timestamp as Date).toISOString()
                )}
        </a>
    </PopoverReference>
    {#if timestamp}
        <PopoverContent>
            <time>{timestamp}</time>
        </PopoverContent>
    {/if}
</Popover>
