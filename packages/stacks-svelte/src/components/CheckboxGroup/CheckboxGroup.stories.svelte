<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import CheckboxGroup, {
        type State,
        type CheckboxOption,
    } from "./CheckboxGroup.svelte";
    const CheckboxGroupStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/CheckboxGroup",
        component: CheckboxGroup,
    });

    const baseOptions: CheckboxOption[] = [
        {
            label: "Apples",
            value: "apples",
            description: "Fresh red apples",
            id: "apples",
        },
        {
            label: "Oranges",
            value: "oranges",
            description: "Juicy oranges",
            id: "oranges",
        },
        {
            label: "Bananas",
            value: "bananas",
            description: "Yellow bananas",
            id: "bananas",
        },
    ];

    let selectedValues = $state<string[]>([]);

    const baseOptionsWithoutDescription: CheckboxOption[] = [
        {
            label: "Apples",
            value: "apples",
            id: "apples",
        },
        {
            label: "Oranges",
            value: "oranges",
            id: "oranges",
        },
        {
            label: "Bananas",
            value: "bananas",
            id: "bananas",
        },
    ];
</script>

<Story name="Base" asChild>
    <div class="wmx2">
        <CheckboxGroup
            label="Which fruits do you like?"
            name="fruit-preference"
            options={baseOptions}
        />
    </div>
</Story>

<Story name="With bindable value" asChild>
    <div class="wmx2">
        <CheckboxGroup
            label="Which fruits do you like?"
            name="fruit-bindable"
            options={baseOptions}
            bind:value={selectedValues}
        />
        <p class="mt16">Selected: {selectedValues.join(", ") || "None"}</p>
    </div>
</Story>

<Story name="Disabled" asChild>
    <div class="wmx2">
        <CheckboxGroup
            label="Which fruits do you like?"
            name="fruit-disabled"
            options={baseOptions}
            disabled
        />
    </div>
</Story>

<Story name="Horizontal" asChild>
    <div class="wmx2">
        <CheckboxGroup
            label="Which fruits do you like?"
            name="fruit-horizontal"
            options={baseOptionsWithoutDescription}
            horizontal
        />
    </div>
</Story>

<Story name="Checkmark style" asChild>
    <div class="wmx2">
        <CheckboxGroup
            label="Which fruits do you like?"
            name="fruit-checkmark"
            options={baseOptions.map((opt) => ({ ...opt, checkmark: true }))}
        />
    </div>
</Story>

<Story name="States" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx8">
            <thead>
                <tr>
                    <th scope="col" class="s-table--cell2">State</th>
                    <th scope="col" class="s-table--cell3">Example</th>
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
                                <CheckboxGroup
                                    label="Which fruits do you like?"
                                    name="fruit-state-{state}"
                                    options={baseOptions}
                                    {state}
                                />
                            </td>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </div>
</Story>
