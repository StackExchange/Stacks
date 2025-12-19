<script lang="ts">
    import type { Snippet } from "svelte";
    import Button from "../Button/Button.svelte";
    import type { Props as ButtonProps } from "../Button/Button.svelte";
    import type { ClassValue } from "svelte/elements";

    interface Props {
        /**
         * Snippet for the button content
         */
        children: Snippet;

        /**
         * Modifier describing if the button should be styled as a link
         */
        link: boolean;

        /**
         * Additional CSS class for the button
         */
        class?: ClassValue;
    }

    const {
        children,
        link = true,
        class: className = "",
        ...restProps
    }: Omit<ButtonProps, "children"> & Props = $props();

    const underlineLinksClass = $derived(link ? " s-link__underlined" : "");
</script>

<Button {link} class={className + underlineLinksClass} {...restProps}>
    {@render children()}
</Button>
