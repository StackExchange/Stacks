<script module lang="ts">
    export type BadgeType =
        | "general"
        | "reputation"
        | "activity"
        | "achievement"
        | "tag"
        | "state"
        | "user";
    export type BadgeSize = "sm" | "" | "lg";
    export type BadgeState =
        | "info"
        | "warning"
        | "danger"
        | "critical"
        | "tonal"
        | "success"
        | "featured";
    export type Award = "gold" | "silver" | "bronze";
    export type UserType =
        | "admin"
        | "moderator"
        | "staff"
        | "ai"
        | "bot"
        | "new";
</script>

<script lang="ts">
    import Bling from "../Bling/Bling.svelte";
    import Icon from "../Icon/Icon.svelte";
    interface Props {
        /**
         * The text content of the badge
         */
        text: string;

        /**
         * Text to convey the badge's purpose to assistive technologies
         */
        label?: string;

        /**
         * The type of badge
         */
        type?: BadgeType;

        /**
         * The size of the badge
         * @type {"sm" | "" | "lg"}
         */
        size?: BadgeSize;

        /**
         * The svg icon to display within the badge (generally provided as a reference to our icon package)
         */
        icon?: string;

        /**
         * Whether to use squared variant (only relevant if an icon is specified)
         */
        squared?: boolean;

        /**
         * Whether to use important styling
         */
        important?: boolean;

        /**
         * The state variant
         * Only used when type is "state"
         */
        state?: BadgeState;

        /**
         * Award level for achievement badges (gold, silver, bronze)
         * Only used when type is "achievement" or "tag"
         */
        award?: Award;

        /**
         * User type for user badges (admin, moderator, staff, ai, bot)
         * Only used when type is "user"
         */
        userType?: UserType;

        /**
         * Additional CSS classes added to the badge element
         */
        class?: string;
    }

    const {
        text,
        label = undefined,
        type = undefined,
        size = "",
        icon = undefined,
        squared = false,
        important = false,
        state = undefined,
        award = undefined,
        userType = undefined,
        class: className = "",
    }: Props = $props();

    const classes = $derived(() => {
        const base = "s-badge";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (size) {
            classes += ` ${base}__${size}`;
        }

        if (squared) {
            classes += ` ${base}__squared`;
        }

        if (important) {
            classes += ` ${base}__important`;
        }

        if (type === "state" && state) {
            classes += ` ${base}__${state}`;
        } else if (type === "user" && userType) {
            classes += ` ${base}__${userType}`;
        } else if (type === "tag" && award) {
            classes += ` ${base}__${award}`;
        }

        return classes;
    });

    const needsBling = $derived(() => {
        return (
            type === "general" ||
            type === "reputation" ||
            type === "activity" ||
            (type === "achievement" && award !== undefined)
        );
    });

    const blingType = $derived(() => {
        if (type === "reputation") {
            return "rep" as const;
        }
        if (type === "activity") {
            return "activity" as const;
        }
        if (type === "achievement" && award) {
            return award;
        }
        return "" as const;
    });

    const blingFilled = $derived(() => {
        // tag badges are not filled, the rest are
        if (type === "tag" && award) {
            return false;
        }
        return true;
    });
</script>

<span class={classes()}>
    {#if needsBling()}
        <Bling
            type={blingType()}
            filled={blingFilled()}
            name={label ?? "badge"}
            {size}
        />
    {/if}
    {#if icon}
        <Icon src={icon} />
    {/if}
    {text}
</span>
