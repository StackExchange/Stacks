<script lang="ts">
    import Popover from "../Popover/Popover.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";

    interface Props {
        /**
         * Text to display in the user card time e.g. asked 2h ago
         */
        text: string;

        /**
         * Precise date and time of the post in ISO format
         */
        timestamp?: string;

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
            <time>
                {text}
            </time>
        </a>
    </PopoverReference>
    <PopoverContent>
        {timestamp}
    </PopoverContent>
</Popover>
