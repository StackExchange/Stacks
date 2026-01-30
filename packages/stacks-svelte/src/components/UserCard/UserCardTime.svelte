<script lang="ts">
    import type { SvelteDate } from "svelte/reactivity";
    import { formatTime } from "@stackoverflow/stacks-utils";
    import Popover from "../Popover/Popover.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";

    interface Props {
        /**
         * Precise date and time of the post in ISO format
         */
        timestamp: Date | SvelteDate | string;

        /**
         * Link to post activity
         */
        href?: string;
    }

    const { timestamp, href }: Props = $props();
</script>

<Popover id="user-card-time-popover" tooltip>
    <PopoverReference>
        <a {href} class="s-user-card--time">
            <time>
                {formatTime(
                    typeof timestamp === "string"
                        ? timestamp
                        : (timestamp as Date).toISOString()
                )}
            </time>
        </a>
    </PopoverReference>
    <PopoverContent>
        {timestamp}
    </PopoverContent>
</Popover>
