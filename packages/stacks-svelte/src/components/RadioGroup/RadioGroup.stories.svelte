<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import RadioGroup, {
        type State,
        type RadioOption,
    } from "./RadioGroup.svelte";

    const RadioGroupStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/RadioGroup",
        component: RadioGroup,
    });

    const baseOptions: RadioOption[] = [
        {
            label: "Apples",
            value: "apples",
            description: "Fresh red apples",
        },
        {
            label: "Oranges",
            value: "oranges",
            description: "Juicy oranges",
        },
        {
            label: "Bananas",
            value: "bananas",
            description: "Yellow bananas",
        },
    ];

    let selectedValue = $state("apples");
</script>

<Story
    name="Base"
    args={{
        label: "Which fruit do you prefer?",
        name: "fruit-preference",
        options: baseOptions,
    }}
>
    {#snippet template(args: any)}
        <div class="wmx2">
            <RadioGroup {...args} />
        </div>
    {/snippet}
</Story>

<Story name="With bindable value" asChild>
    <div class="wmx2">
        <RadioGroup
            label="Which fruit do you prefer?"
            name="fruit-bindable"
            options={baseOptions}
            bind:value={selectedValue}
        />
        <p class="mt16">Selected: {selectedValue}</p>
    </div>
</Story>

<Story name="Disabled" asChild>
    <div class="wmx2">
        <RadioGroup
            label="Which fruit do you prefer?"
            name="fruit-disabled"
            options={baseOptions}
            disabled
        />
    </div>
</Story>

<Story name="Horizontal" asChild>
    <div class="wmx2">
        <RadioGroup
            label="Which fruit do you prefer?"
            name="fruit-horizontal"
            options={baseOptions.map(({ description, ...opt }) => opt)}
            horizontal
        />
    </div>
</Story>

<Story name="Checkmark style" asChild>
    <div class="wmx2">
        <RadioGroup
            label="Which fruit do you prefer?"
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
                {#each RadioGroupStates as state (state)}
                    {#if state !== ""}
                        <tr>
                            <th scope="row" class="va-middle">
                                {state}
                            </th>
                            <td class="va-middle px8">
                                <RadioGroup
                                    label="Which fruit do you prefer?"
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
