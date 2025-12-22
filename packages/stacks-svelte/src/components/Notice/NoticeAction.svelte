<script lang="ts">
    import type { Snippet } from "svelte";
    import Button from "../Button/Button.svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconCross } from "@stackoverflow/stacks-icons/icons";
    import type { Props as ButtonProps } from "../Button/Button.svelte";

    interface Props {
        /**
         * Type of notice action
         */
        type?: "close";
        /**
         * Title for the icon
         */
        i18nCloseButtonLabel?: string;
        /**
         * Snippet for the button content
         */
        children?: Snippet;
    }

    const {
        children,
        type,
        i18nCloseButtonLabel = "Close",
        class: className = "",
        ...restProps
    }: Omit<ButtonProps, "children" | "type"> & Props = $props();
</script>

<Button class={"s-notice--btn " + className} {...restProps}>
    {#if type === "close"}
        <Icon src={IconCross} title={i18nCloseButtonLabel}></Icon>
    {:else if children}
        {@render children()}
    {/if}
</Button>
