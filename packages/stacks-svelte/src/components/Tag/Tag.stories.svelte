<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { createRawSnippet, type Snippet } from "svelte";
    import Tag, { type Size, type Variant } from "./Tag.svelte";
    import Icon from "../Icon/Icon.svelte";
    import {
        IconMicrosoft,
        IconWave,
    } from "@stackoverflow/stacks-icons-legacy/icons";

    const TagSizes: Size[] = ["", "xs", "sm", "md", "lg"];
    const TagVariants: Variant[] = ["", "moderator", "required"];

    const createSnippet = (markup = "") =>
        createRawSnippet(() => ({
            render: () => markup,
        }));

    const titleCase = (str: string) => {
        return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
            return match.toUpperCase();
        });
    };

    const { Story } = defineMeta({
        title: "Components/Tag",
        component: Tag,
        argTypes: {
            children: {
                control: "text",
            },
            sponsor: {
                control: "select",
                options: ["no sponsor", "sponsor"],
                mapping: {
                    "no sponsor": "",
                    "sponsor": IconWave,
                },
            },
        },
    });
</script>

<Story
    name="Base"
    args={{
        children: "javascript" as unknown as Snippet,
    }}
>
    {#snippet template(args)}
        {@const { children, sponsor, ...restArgs } = args}
        <Tag
            sponsor={sponsor && createSnippet(sponsor as unknown as string)}
            children={createSnippet(children as unknown as string)}
            {...restArgs}
        />
    {/snippet}
</Story>

<Story name="Variants" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Variants</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each TagVariants as variant (variant)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {variant || "default"}
                        </th>
                        <td class="va-middle px4">
                            <Tag {variant}>{variant || "default"}</Tag>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Sizes" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Sizes</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each TagSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {size || "default"}
                        </th>
                        <td class="va-middle px4">
                            <Tag {size}>{size || "default"}</Tag>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Sponsor" asChild>
    <Tag>
        microsoft
        {#snippet sponsor()}
            <Icon src={IconMicrosoft} native class="as-center w16" />
        {/snippet}
    </Tag>
</Story>

<Story name="Additional styles" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each ["dismissable", "ignored", "watched"] as type (type)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {titleCase(type)}
                        </th>
                        <td class="va-middle px4">
                            {#if type === "dismissable"}
                                <Tag
                                    dismissable
                                    ondismiss={() => alert("dismiss clicked")}
                                >
                                    jquery
                                </Tag>
                            {:else if type === "ignored"}
                                <Tag ignored>react</Tag>
                            {:else if type === "watched"}
                                <Tag watched>svelte</Tag>
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>
