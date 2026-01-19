<script lang="ts" module>
    export type AdditionalBlingType =
        | "first"
        | "second"
        | "third"
        | "recognized member";
</script>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";

    import Popover from "../Popover/Popover.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";

    interface Props {
        /**
         * The type of additional bling
         * @type {"first" | "second" | "third" | "recognized member"}
         */
        type: AdditionalBlingType;

        /**
         * The text for the tooltip
         */
        tooltipText: string;

        /**
         * Unique id for the popover
         */
        popoverId: string;

        /**
         * The additional bling icon
         */
        icon: string;

        /**
         * href for the link to leaderboard or collective landing page
         */
        href?: string;
    }

    const { type, tooltipText, popoverId, icon, href }: Props = $props();

    const getClasses = (type: AdditionalBlingType) => {
        const base = "s-user-card--group";
        let classes = base;

        switch (type) {
            case "first":
                classes += " s-user-card--awarded-first";
                break;
            case "second":
                classes += " s-user-card--awarded-second";
                break;
            case "third":
                classes += " s-user-card--awarded-third";
                break;
            case "recognized member":
                classes += " s-user-card--recognition-additional-bling";
                break;
        }

        return classes;
    };

    const classes = $derived(getClasses(type));
</script>

<Popover id={popoverId} tooltip>
    <PopoverReference>
        <svelte:element this={href ? "a" : "div"} {href} class={classes}>
            <Icon src={icon} />
        </svelte:element>
    </PopoverReference>
    <PopoverContent>
        <span>{tooltipText}</span>
    </PopoverContent>
</Popover>
