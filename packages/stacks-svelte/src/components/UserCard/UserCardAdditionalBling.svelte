<script lang="ts">
    import clsx from "clsx";
    import type { ClassValue } from "svelte/elements";
    import Icon from "../Icon/Icon.svelte";

    import Popover from "../Popover/Popover.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";

    interface Props {
        /**
         * The text for the tooltip
         */
        tooltipText: string;

        /**
         * Unique id for the popover
         */
        id: string;

        /**
         * The additional bling icon
         */
        icon: string;

        /**
         * Link for the additional bling element (e.g. leaderboard or collective landing page)
         */
        href?: string;

        /**
         * Additional CSS classes added to the element
         */
        class?: ClassValue;
    }

    const {
        tooltipText,
        id,
        icon,
        href,
        class: className = "",
    }: Props = $props();

    const getClasses = (className: ClassValue) => {
        const base = "s-user-card--group";
        return clsx(base, className);
    };

    const classes = $derived(getClasses(className));
</script>

<Popover {id} tooltip>
    <PopoverReference>
        <svelte:element
            this={href ? "a" : "div"}
            {href}
            aria-label={tooltipText}
            class={classes}
        >
            <Icon src={icon} />
        </svelte:element>
    </PopoverReference>
    <PopoverContent>
        <span>{tooltipText}</span>
    </PopoverContent>
</Popover>
