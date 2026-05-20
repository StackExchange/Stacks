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
    import clsx from "clsx";
    import type { Snippet } from "svelte";
    import type { AriaRole, ClassValue } from "svelte/elements";
    import Icon from "../Icon/Icon.svelte";
    import Link from "../Link/Link.svelte";
    import {
        IconAlert,
        IconAlertFill,
        IconInfo,
        IconCheck,
        IconStar,
        IconNotification,
        IconHelp,
        IconCross,
    } from "@stackoverflow/stacks-icons/icons";

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
        class?: ClassValue;

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
        className: ClassValue,
        variant: Variant,
        important: boolean
    ) => {
        const base = "s-notice";
        const classes = [variant]
            .filter(Boolean)
            .map((modifier) => `${base}__${modifier}`);
        if (important) {
            classes.push(`${base}__important`);
        }
        return clsx(base, className, classes);
    };

    const getIcon = (variant?: Variant) => {
        if (variant == "danger") {
            return {
                icon: IconAlertFill,
                title: iconTitle || "Danger",
            };
        } else if (variant == "warning") {
            return {
                icon: IconAlert,
                title: iconTitle || "Warning",
            };
        } else if (variant == "info") {
            return {
                icon: IconInfo,
                title: iconTitle || "Information",
            };
        } else if (variant == "success") {
            return {
                icon: IconCheck,
                title: iconTitle || "Success",
            };
        } else if (variant == "featured") {
            return {
                icon: IconStar,
                title: iconTitle || "Featured",
            };
        } else if (variant == "activity") {
            return {
                icon: IconNotification,
                title: iconTitle || "Activity",
            };
        } else {
            return {
                icon: IconHelp,
                title: iconTitle || "Help",
            };
        }
    };

    const classes = $derived(getClasses(className, variant, important));
    const iconInfo = $derived(getIcon(variant));
</script>

{#if visible}
    <div class={classes} {role}>
        <span class="s-notice--icon">
            <Icon src={iconInfo.icon} title={iconInfo.title} />
        </span>
        {@render children()}
        {#if actions || dismissible}
            <div class="s-notice--actions">
                {#if actions}
                    {@render actions()}
                {/if}
                {#if dismissible}
                    <Link
                        class="s-notice--dismiss"
                        onclick={handleDismiss}
                        aria-label={i18nDismissButtonLabel}
                    >
                        <Icon src={IconCross} />
                    </Link>
                {/if}
            </div>
        {/if}
    </div>
{/if}
