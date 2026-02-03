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
            children: {
                control: "text",
            },
        },
    });
</script>

<Story name="Base">
    {#snippet template({ children, ...args })}
        <Link {...args}>{children ?? "Click me"}</Link>
    {/snippet}
</Story>

<Story name="Dropdown" asChild>
    <Link href="#" dropdown>With dropdown</Link>
</Story>

<Story name="Disabled" asChild>
    <Link href="#" disabled>Disabled</Link>
</Story>

<Story name="Underlined" asChild>
    <Link href="#" underlined>Underlined</Link>
</Story>

<Story name="Visited" asChild>
    <Link href="#" visited>Visited</Link>
</Story>

<Story name="Variants" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Variant</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each LinkVariants as variant (variant)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {variant || "default"}
                        </th>
                        <td class="va-middle px4">
                            <Link {variant} href="#"
                                >{variant || "default"}</Link
                            >
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Button element" asChild>
    <Link>Click me</Link>
</Story>
