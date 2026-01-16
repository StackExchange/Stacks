<script lang="ts">
    import type { Snippet } from "svelte";
    import Badge, { type UserType } from "../Badge/Badge.svelte";
    import Popover from "../Popover/Popover.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";
    interface Props {
        /**
         * The type of user badge
         */
        type: UserType;

        /**
         * Snippet used to display tooltip content
         */
        tooltip?: Snippet;
    }
    const { type, tooltip }: Props = $props();
</script>

<li>
    {#if tooltip && type === "new"}
        <Popover id="user-card-badge-new-popover" tooltip>
            <PopoverReference>
                <Badge text={type} type="user" userType={type} size="sm" />
            </PopoverReference>
            <PopoverContent>
                {@render tooltip()}
            </PopoverContent>
        </Popover>
    {:else}
        <Badge text={type} type="user" userType={type} size="sm" />
    {/if}
</li>
