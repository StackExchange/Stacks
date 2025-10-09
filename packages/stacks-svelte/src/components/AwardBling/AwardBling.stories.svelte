<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { createRawSnippet, type Snippet } from "svelte";
    import AwardBling, { type Type } from "./AwardBling.svelte";
    const AwardBlingTypes: Type[] = ["gold", "silver", "bronze"];

    const createSnippet = (markup = "") =>
        createRawSnippet(() => ({
            render: () => markup,
        }));

    const { Story } = defineMeta({
        title: "Components/AwardBling",
        component: AwardBling,
        argTypes: {
            children: {
                control: "text",
            },
        },
    });
</script>

<Story
    name="Base"
    args={{
        type: "gold",
        name: "Award Bling",
        children: "23" as unknown as Snippet,
    }}
>
    {#snippet template(args)}
        <AwardBling type={args.type} name={args.name}>
            {@render createSnippet(args.children as unknown as string)()}
        </AwardBling>
    {/snippet}
</Story>

<Story name="Types" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each AwardBlingTypes as type (type)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {type}
                        </th>
                        <td class="va-middle px8">
                            <AwardBling name="{type} example" {type}>
                                23
                            </AwardBling>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>
