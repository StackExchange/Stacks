<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Checkbox, { type Checked, type State } from "./Checkbox.svelte";
    import CheckboxGroup, { type CheckboxOption } from "./CheckboxGroup.svelte";

    const CheckboxChecked: Checked[] = [true, false];
    const CheckboxStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/Checkbox",
        component: Checkbox,
    });

    // For CheckboxGroup stories
    let selectedValues = $state<string[]>([]);

    // For bindable value and onchange story
    let isChecked = $state(false);
    let changeCount = $state(0);
    const checkboxGroupOptions = (
        suffix: string = "checkbox"
    ): CheckboxOption[] => {
        return [
            {
                label: "Apples",
                value: `apples-${suffix}`,
                description: "Fresh red apples",
                id: `apples-${suffix}`,
            },
            {
                label: "Oranges",
                value: `oranges-${suffix}`,
                description: "Juicy oranges",
                id: `oranges-${suffix}`,
            },
            {
                label: "Bananas",
                value: `bananas-${suffix}`,
                description: "Yellow bananas",
                id: `bananas-${suffix}`,
            },
        ];
    };
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

<Story name="Bindable value and onchange" asChild>
    <div class="wmx2">
        <Checkbox
            name="bindable-checkbox"
            id="bindable-checkbox"
            label="Click me"
            bind:checked={isChecked}
            onchange={() => {
                changeCount++;
            }}
        />
        <p class="mt16">
            Checked: {isChecked ? "Yes" : "No"} | Changes: {changeCount}
        </p>
    </div>
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

<Story name="Using CheckboxGroup" asChild>
    <div class="d-flex fd-column g32 fw-wrap">
        <p>
            <code>CheckboxGroup</code> is a component that allows you to group multiple
            checkboxes together.
        </p>
        <div class="d-flex fw-wrap g32">
            <div class="wmx2">
                <h3>With bindable value</h3>
                <div class="s-card">
                    <CheckboxGroup
                        label="Which fruits do you like?"
                        name="fruit-preference"
                        options={checkboxGroupOptions()}
                        bind:value={selectedValues}
                    />
                    <p class="mt16">
                        Selected: {selectedValues.join(", ") || "None"}
                    </p>
                </div>
            </div>
            <div class="wmx2">
                <h3>Checkmark style</h3>
                <div class="s-card">
                    <CheckboxGroup
                        label="Which fruits do you like?"
                        name="fruit-checkmark"
                        options={checkboxGroupOptions("checkmark").map(
                            (opt) => ({
                                ...opt,
                                checkmark: true,
                            })
                        )}
                    />
                </div>
            </div>
            <div class="wmx2">
                <h3>Disabled</h3>
                <div class="s-card">
                    <CheckboxGroup
                        label="Which fruits do you like?"
                        name="fruit-disabled"
                        options={checkboxGroupOptions("disabled")}
                        disabled
                    />
                </div>
            </div>
            {#each CheckboxStates as state (state)}
                {#if state !== ""}
                    <div class="wmx2">
                        <h3>State: {state}</h3>
                        <div class="s-card">
                            <CheckboxGroup
                                label="Which fruits do you like?"
                                name="fruit-state-{state}"
                                options={checkboxGroupOptions(state)}
                                {state}
                            />
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</Story>
