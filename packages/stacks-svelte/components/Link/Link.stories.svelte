<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Link, { type Variant } from "./Link.svelte";

    const LinkVariants: Variant[] = [
        "",
        "grayscale",
        "muted",
        "danger",
        "inherit",
    ];

    const { Story } = defineMeta({
        title: "Components/Link",
        component: Link,
        argTypes: {
            variant: {
                control: "select",
                options: LinkVariants,
            },
        },
    });
</script>

<Story name="Base" args={{ href: "#" }}>
    {#snippet template(args)}
        <Link {...args}>Click me</Link>
    {/snippet}
</Story>

<Story name="Dropdown" args={{ href: "#", dropdown: true }}>
    {#snippet template(args)}
        <Link {...args}>With dropdown</Link>
    {/snippet}
</Story>

<Story name="Disabled" args={{ href: "#", disabled: true }}>
    {#snippet template(args)}
        <Link {...args}>Disabled</Link>
    {/snippet}
</Story>

<Story name="Underlined" args={{ href: "#", underlined: true }}>
    {#snippet template(args)}
        <Link {...args}>Underlined</Link>
    {/snippet}
</Story>

<Story name="Visited" args={{ href: "#", visited: true }}>
    {#snippet template(args)}
        <Link {...args}>Visited</Link>
    {/snippet}
</Story>

<Story name="Variants" asChild>
    <div class="d-flex fw-wrap sm:fd-column g8">
        {#each LinkVariants as variant (variant)}
            <Link {variant} href="#">{variant || "default"}</Link>
        {/each}
    </div>
</Story>

<Story name="Button element">
    {#snippet template(args)}
        <Link {...args}>Click me</Link>
    {/snippet}
</Story>
