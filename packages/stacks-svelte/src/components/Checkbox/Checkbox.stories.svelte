<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Checkbox, { type Checked, type State } from "./Checkbox.svelte";
    const CheckboxChecked: Checked[] = [true, false];
    const CheckboxStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/Checkbox",
        component: Checkbox,
    });
</script>

<Story
    name="Base"
    args={{
        name: "Checkbox",
        id: "Checkbox-1",
        label: "Checkbox label",
    }}
>
    {#snippet template(args)}
        <div class="wmx2">
            <Checkbox {...args} />
        </div>
    {/snippet}
</Story>

<Story name="Checkmark (checked)" asChild>
    <div class="d-flex fd-column g64">
        <div class="wmx2">
            <Checkbox
                name="checkbox checkmark example"
                id="Checkbox-checkmark-example"
                label="Checkbox example"
                checkmark
                checked
            />
        </div>
    </div>
</Story>

<Story name="Checked states" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Style</th>
                    {#each CheckboxChecked as checked (checked)}
                        <th scope="col">
                            {#if checked === true}
                                Checked
                            {:else}
                                Unchecked
                            {/if}
                        </th>
                    {/each}
                    <th scope="col">Indeterminate</th>
                </tr>
            </thead>
            <tbody>
                {#each [false, true] as checkmark (checkmark)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {checkmark ? "Checkmark" : "Default"}
                        </th>
                        {#each CheckboxChecked as checked (checked)}
                            <td class="va-middle p16">
                                <Checkbox
                                    name="checkbox {checkmark
                                        ? ' checkmark'
                                        : ''}"
                                    id="Checkbox-checked{checkmark
                                        ? '-checkmark'
                                        : ''}-{checked}"
                                    label="Label"
                                    {checked}
                                    {checkmark}
                                />
                            </td>
                        {/each}
                        <td class="va-middle p16">
                            <Checkbox
                                name="checkbox {checkmark
                                    ? ' checkmark'
                                    : ''} indeterminate"
                                id="Checkbox-indeterminate{checkmark
                                    ? '-checkmark'
                                    : ''}"
                                label="Label"
                                indeterminate
                                {checkmark}
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Description" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Style</th>
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each [false, true] as checkmark (checkmark)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {checkmark ? "Checkmark" : "Default"}
                        </th>
                        <td class="va-middle p16">
                            <Checkbox
                                name="description checkbox example"
                                id="Checkbox-description-example{checkmark
                                    ? '-checkmark'
                                    : ''}"
                                label="Label"
                                description="This is a description for the Checkbox."
                                {checkmark}
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="State" asChild>
    <div class="d-flex fw-wrap g64">
        <fieldset class="s-form-group wmx2">
            <legend class="s-label"> Checkbox Group </legend>
            {#each CheckboxStates as state (state)}
                {#if state !== ""}
                    <Checkbox
                        name="description checkbox {state} example"
                        id="Checkbox-{state}-example"
                        label="Label"
                        description="Checkbox with {state}."
                        {state}
                    />
                {/if}
            {/each}
        </fieldset>
    </div>
</Story>
