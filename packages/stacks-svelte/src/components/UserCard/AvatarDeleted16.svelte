<script lang="ts">
    import Avatar from "../Avatar/Avatar.svelte";
    import avatarDeleted16Svg from "../../assets/img/avatar-deleted-16.svg?raw";
    import type { HTMLAnchorAttributes } from "svelte/elements";

    interface Props {
        /**
         * Account name for screen readers
         */
        name: string;

        /**
         * Render the tag as a link with the given href
         */
        href?: string;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    const {
        name,
        href,
        class: className = "",
        ...restProps
    }: Props & HTMLAnchorAttributes = $props();

    // Convert SVG to data URL for bundling
    const avatarDeleted16 = $derived(
        `data:image/svg+xml;charset=utf-8,${encodeURIComponent(avatarDeleted16Svg)}`
    );
</script>

<Avatar
    {name}
    {href}
    src={avatarDeleted16}
    size={16}
    class={className}
    {...restProps}
/>
