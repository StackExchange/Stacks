<script module lang="ts">
    export type Variant =
        | ""
        | "danger"
        | "info"
        | "success"
        | "warning"
        | undefined;
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import Icon from "../Icon/Icon.svelte";
    import type { AriaRole } from "svelte/elements";

    interface Props {
        /**
         * The variant of the notice
         * @type {"" | "danger" | "info" | "success" | "warning"}
         */
        variant?: Variant;

        /**
         * Apply important styling to for extra emphasis
         */
        important?: boolean;

        /**
         * Underlying ARIA role attribute (see https://stackoverflow.design/product/components/notices/)
         */
        role?: AriaRole | undefined | null;

        /**
         * The icon to display within the badge
         */
        icon?: string | undefined;
        /**
         * The title attribute for the icon
         */
        iconTitle?: string | undefined;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Snippet for the button content
         */
        children: Snippet;

        /**
         * Snippet for notice actions
         */
        actions?: Snippet;
    }

    const {
        variant = undefined,
        important = false,
        role = "status",
        icon = undefined,
        iconTitle = undefined,
        class: className = "",
        children,
        actions,
    }: Props = $props();

    const getClasses = (
        className: string,
        variant: Variant,
        important: boolean
    ) => {
        const base = "s-notice";
        let classes = base;

        if (className) {
            classes += ` ${className}`;
        }

        if (variant) {
            classes += ` ${base}__${variant}`;
        }

        if (important) {
            classes += ` ${base}__important`;
        }

        if (icon || actions) {
            classes += ` d-flex ai-center gx8`;
        }

        if (actions) {
            classes += `  p8 pl16`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, variant, important));
</script>

<div class={classes} {role}>
    {#if icon}
        <Icon src={icon} title={iconTitle} />
    {/if}
    <p class="m0 fl-grow1">{@render children()}</p>
    {#if actions}
        <div class="d-flex">
            {@render actions()}
        </div>
    {/if}
</div>
