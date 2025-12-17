<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import FormGroup, { type State } from "./FormGroup.svelte";
    import Checkbox from "../Checkbox/Checkbox.svelte";
    import Radio from "../Radio/Radio.svelte";
    const FormGroupStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/FormGroup",
        component: FormGroup,
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
            <FormGroup {...args}>
                {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                    <Checkbox
                        name="FormGroup-{label}"
                        id="FormGroup-{label}"
                        {label}
                        description="Checkbox example."
                    />
                {/each}
            </FormGroup>
        </div>
    {/snippet}
</Story>

<Story name="Disabled" asChild>
    <div class="d-flex fw-wrap g64">
        <FormGroup label="Checkbox group" disabled>
            {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                <Checkbox
                    name="Checkbox-disabled"
                    id="Checkbox-{label}-disabled"
                    {label}
                    description="Checkbox example."
                />
            {/each}
        </FormGroup>
        <FormGroup label="Radio group" disabled>
            {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                <Radio
                    name="Radio-disabled"
                    id="Radio-{label}-disabled"
                    {label}
                    description="Radio example."
                />
            {/each}
        </FormGroup>
    </div>
</Story>

<Story name="Horizontal" asChild>
    <div class="d-flex fw-wrap g64">
        <FormGroup label="Checkbox group" horizontal>
            {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                <Checkbox
                    name="Checkbox-horizontal"
                    id="Checkbox-{label}-horizontal"
                    {label}
                />
            {/each}
        </FormGroup>
        <FormGroup label="Radio group" horizontal>
            {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                <Radio
                    name="Radio-horizontal"
                    id="Radio-{label}-horizontal"
                    {label}
                />
            {/each}
        </FormGroup>
    </div>
</Story>

<Story name="States" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx8">
            <thead>
                <tr>
                    <th scope="col" class="s-table--cell2">State</th>
                    <th scope="col" class="s-table--cell3">Checkbox</th>
                    <th scope="col" class="s-table--cell3">Radio</th>
                </tr>
            </thead>
            <tbody>
                {#each FormGroupStates as state (state)}
                    {#if state !== ""}
                        <tr>
                            <th scope="row" class="va-middle">
                                {state}
                            </th>
                            <td class="va-middle px8">
                                <FormGroup label="Legend text" {state}>
                                    <Checkbox
                                        name="Checkbox-state"
                                        id="Checkbox-state-{state}"
                                        label="Checkbox"
                                        description="Checkbox example."
                                    />
                                </FormGroup>
                            </td>
                            <td class="va-middle px8">
                                <FormGroup label="Legend text" {state}>
                                    <Radio
                                        name="Radio-state"
                                        id="Radio-state-{state}"
                                        label="Radio"
                                        description="Radio example."
                                    />
                                </FormGroup>
                            </td>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </div>
</Story>
