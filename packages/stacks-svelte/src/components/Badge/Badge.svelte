<!-- NOTE: This component is not currently exposed to the consumer and is only used internally. See also https://github.com/StackEng/Stacks-Svelte/pull/368#pullrequestreview-2637283176 -->
<!-- TODO This component stays close to the Stacks Classic API but should be modified to provide useful abstractions to consumers before exposing it. -->
<script module lang="ts">
    export type Award = "gold" | "silver" | "bronze" | undefined;
    export type Size = "sm" | "lg" | undefined;
    export type Variant =
        | "answered"
        | "bounty"
        | "new"
        | "important"
        | "rep"
        | "rep-down"
        | "votes"
        | "danger"
        | "info"
        | "muted"
        | "warning"
        | "ai"
        | "bot"
        | "admin"
        | "moderator"
        | "staff"
        | "tag";
</script>

<script lang="ts">
    import Bling from "../Bling/Bling.svelte";
    import Icon from "../Icon/Icon.svelte";
    import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes } from "svelte/elements";

    interface Props {
        /**
         * The type of award
         * @type {"gold" | "silver" | "bronze"} Type
         */
        award?: Award;

        /**
         * Applies the filled style to "muted" or "danger" variants
         */
        filled?: boolean;

        /**
         * The icon to display within the badge
         */
        icon?: string | undefined;

        /**
         * The title attribute for the icon
         */
        iconTitle?: string | undefined;

        /**
         * The size of the badge
         * @type {"sm" | "lg" | undefined} Size
         */
        size?: Size;

        /**
         * The variant of the badge
         * @type {"answered" | "bounty" | "danger" | "muted" | "new" | "important" | "rep" | "rep-down" | "votes" | "ai" | "bot" | "admin" | "moderator" | "staff" | "tag" | undefined} Variant
         */
        variant?: Variant;

        /**
         * Descriptive text for the award
         */
        i18nAwardName?: string | undefined;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Snippet for the badge content
         */
        children?: Snippet;
    }

    const {
        award,
        filled = false,
        icon = undefined,
        iconTitle = undefined,
        size = undefined,
        variant = undefined,
        i18nAwardName = undefined,
        class: className = "",
        children,
    }: Props & HTMLAnchorAttributes = $props();

    const getClasses = (
        filled: boolean,
        icon: string | undefined,
        size: Size,
        variant: Variant
    ) => {
        const base = "s-badge";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (filled) {
            classes += ` ${base}__filled`;
        }

        if (icon) {
            classes += ` ${base}__icon`;
        }

        if (size) {
            classes += ` ${base}__${size}`;
        }

        if (variant) {
            if (variant === 'tag') {
                classes += ` ${base}__${award}`;
            } else {
                classes += ` ${base}__${variant}`;
            }
        }

        return classes;
    };

    const classes = $derived(getClasses(filled, icon, size, variant));
    const isTagVariant = $derived(() => variant === 'tag');
</script>

<span class={classes}>
    {#if award}
        <Bling type={award} name={i18nAwardName || award} filled={!isTagVariant()} />
        {@render children?.()}
    {:else}
        {#if icon}
            <Icon src={icon} title={iconTitle} />
        {/if}
        {#if !award}
            {@render children?.()}
        {/if}
    {/if}
</span>
