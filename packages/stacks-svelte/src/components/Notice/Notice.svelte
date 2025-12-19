<script module lang="ts">
    export type Variant =
        | ""
        | "danger"
        | "info"
        | "success"
        | "warning"
        | "featured"
        | "activity"
        | undefined;
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import Icon from "../Icon/Icon.svelte";
    import Button from "../Button/Button.svelte";
    import {
        IconAlert,
        IconAlertFill,
        IconInfo,
        IconCheck,
        IconStar,
        IconNotification,
        IconHelp,
    } from "@stackoverflow/stacks-icons/icons";
    import { IconClearSm } from "@stackoverflow/stacks-icons-legacy/icons";
    import type { AriaRole, MouseEventHandler } from "svelte/elements";

    interface Props {
        /**
         * The variant of the notice
         * @type {"" | "danger" | "info" | "success" | "warning" | "featured" | "activity"}
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
         * The title attribute for the icon
         */
        iconTitle?: string | undefined;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Whether to include a dismiss button on the notice or not
         */
        dismissible?: boolean;

        /**
         * Optional dismiss event handler
         */
        onDismiss?: () => void;

        /**
         * Dismiss button label override
         */
        i18nDismissButtonLabel?: string;

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
        variant = "",
        important = false,
        role = "status",
        iconTitle,
        class: className = "",
        dismissible = false,
        onDismiss = () => {},
        children,
        actions,
        i18nDismissButtonLabel = "Dismiss",
    }: Props = $props();

    let visible = $state(true);

    const handleDismiss = () => {
        visible = false;
        onDismiss?.();
    };

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

        return classes;
    };

    const getIcon = (variant?: Variant) => {
        if (variant == "danger") {
            return IconAlertFill;
        } else if (variant == "warning") {
            return IconAlert;
        } else if (variant == "info") {
            return IconInfo;
        } else if (variant == "success") {
            return IconCheck;
        } else if (variant == "featured") {
            return IconStar;
        } else if (variant == "activity") {
            return IconNotification;
        } else {
            return IconHelp;
        }
    };

    const classes = $derived(getClasses(className, variant, important));
    const icon = $derived(getIcon(variant));
</script>

{#if visible}
    <div class={classes} {role}>
        <span class="s-notice--icon">
            <Icon src={icon} title={iconTitle} />
        </span>
        {@render children()}
        {#if actions || dismissible}
            <div class="d-flex ml-auto">
                {#if actions}
                    {@render actions()}
                {/if}
                {#if dismissible}
                    <Button
                        link
                        class="s-notice--dismiss"
                        onclick={handleDismiss}
                        aria-label={i18nDismissButtonLabel}
                    >
                        <Icon src={IconClearSm} />
                    </Button>
                {/if}
            </div>
        {/if}
    </div>
{/if}
