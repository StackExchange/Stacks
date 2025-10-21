<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { createRawSnippet } from "svelte";
    import AwardBling, { type Type, type Size } from "./AwardBling.svelte";
    const AwardBlingSizes: Size[] = ["sm", "", "lg"];
    const AwardBlingTypes: Type[] = ["", "activity", "rep", "gold", "silver", "bronze"];

    const { Story } = defineMeta({
        title: "Components/AwardBling",
        component: AwardBling
    });
</script>

<Story
    name="Base"
    args={{
        type: "gold",
        name: "Award Bling",
    }}
>
    {#snippet template(args)}
        <AwardBling type={args.type} name={args.name} size={args.size} filled={args.filled} />
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
                            {type || "default"}
                        </th>
                        <td class="va-middle px8">
                            <AwardBling name="{type} example" {type} />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Filled" asChild>
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
                            {type || "default"}
                        </th>
                        <td class="va-middle px8">
                            <AwardBling name="{type} example" {type} filled />
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
                    <th scope="col">Type</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each AwardBlingSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {size || "default"}
                        </th>
                        <td class="va-middle px8">
                            <AwardBling name="{size} example" {size} filled />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>
