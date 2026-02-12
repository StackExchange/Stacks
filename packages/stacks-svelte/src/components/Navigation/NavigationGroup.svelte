<script lang="ts">
    import type { Snippet } from "svelte";
    import type { ClassValue } from "svelte/elements";

    interface Props {
        /**
         * The title of the navigation section
         */
        title: string;
        /**
         * Html tag to use for the title: h1, h2, h3, h4, etc.
         */
        titleTag?: string;
        /**
         * Additional CSS classes added to the outer element
         */
        class?: ClassValue;
        /**
         * Additional CSS classes added to the title element
         */
        titleClass?: ClassValue;
        /**
         * Optional content rendered at the end of the navigation title.
         */
        trailing?: Snippet;
        /**
         * The navigation items rendered inside the group
         */
        children: Snippet;
    }

    let {
        title,
        titleTag = "h4",
        class: className = "",
        titleClass = "",
        trailing,
        children,
    }: Props = $props();
</script>

<li class={className}>
    <div class={["s-navigation--title", "d-flex", titleClass]}>
        <svelte:element this={titleTag} class="mb0 fw-normal">
            {title}
        </svelte:element>
        {@render trailing?.()}
    </div>
    <ul>
        {@render children?.()}
    </ul>
</li>
