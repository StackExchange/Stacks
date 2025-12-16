<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import CheckboxGroup, { type State } from "./CheckboxGroup.svelte";
    import Checkbox from "../Checkbox/Checkbox.svelte";
    const CheckboxGroupStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/CheckboxGroup",
        component: CheckboxGroup,
    });
</script>

<Story
    name="Base"
    args={{
        label: "Legend text",
    }}
>
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
    {#snippet template({ children, ...args })}
        <div class="wmx2">
            <CheckboxGroup {...args}>
                {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                    <Checkbox
                        name="Checkbox-{label}"
                        id="Checkbox-{label}"
                        {label}
                    />
                {/each}
            </CheckboxGroup>
        </div>
    {/snippet}
</Story>

<Story name="States" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">State</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each CheckboxGroupStates as state (state)}
                    {#if state !== ""}
                        <tr>
                            <th scope="row" class="va-middle">
                                {state}
                            </th>
                            <td class="va-middle px8">
                                <CheckboxGroup label="Legend text" {state}>
                                    <Checkbox
                                        name="Checkbox-state"
                                        id="Checkbox-state-{state}"
                                        label="Checkbox"
                                        description="Checkbox example."
                                    />
                                </CheckboxGroup>
                            </td>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Horizontal" asChild>
    <div class="d-flex fd-column g64">
        <div class="wmx2">
            <CheckboxGroup label="Legend text" horizontal>
                {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                    <Checkbox
                        name="Checkbox-horizontal"
                        id="Checkbox-{label}-horizontal"
                        {label}
                    />
                {/each}
            </CheckboxGroup>
        </div>
    </div>
</Story>
