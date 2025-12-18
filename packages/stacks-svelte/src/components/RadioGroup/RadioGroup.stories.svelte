<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Radio from "./Radio.svelte";
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
    {#snippet template(args)}
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
            options={baseOptions.map(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                ({ description, ...opt }) => opt
            )}
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

<Story name="Standalone Radio component" asChild>
    <div class="d-flex fd-column g32 fw-wrap">
        <p>
            <code>Radio</code> is a component that allows you to render a standalone
            radio button.
        </p>
        <div class="d-flex fw-wrap g32">
            <div class="wmx2">
                <h3>Base</h3>
                <div class="s-card d-flex fd-column g16">
                    <Radio
                        name="radio-standalone-base"
                        label="Base radio"
                        id="radio-standalone"
                    />
                    <Radio
                        name="radio-standalone-base"
                        label="Checked radio"
                        id="radio-standalone-checked"
                        checked
                    />
                </div>
            </div>
            <div class="wmx2">
                <h3>Disabled</h3>
                <div class="s-card d-flex fd-column g16">
                    <Radio
                        name="radio-standalone-disabled"
                        label="Disabled radio"
                        id="radio-standalone-disabled"
                        disabled
                    />
                    <Radio
                        name="radio-standalone-disabled"
                        label="Disabled checked radio"
                        id="radio-standalone-disabled-checked"
                        disabled
                        checked
                    />
                </div>
            </div>
            <div class="wmx2">
                <h3>Checkmark</h3>
                <div class="s-card d-flex fd-column g16">
                    <Radio
                        name="radio-standalone-checkmark"
                        label="Checkmark radio"
                        id="radio-standalone-checkmark"
                        checkmark
                    />
                    <Radio
                        name="radio-standalone-checkmark"
                        label="Checked checkmark radio"
                        id="radio-standalone-checkmark-checked"
                        checkmark
                        checked
                    />
                </div>
            </div>
            <div class="wmx2">
                <h3>With description</h3>
                <div class="s-card d-flex fd-column g16">
                    <Radio
                        name="radio-standalone-description"
                        label="Description radio"
                        id="radio-standalone-description"
                        description="This is a description for the radio."
                    />
                    <Radio
                        name="radio-standalone-description"
                        label="Checked description radio"
                        id="radio-standalone-description-checked"
                        description="This is a description for the radio."
                        checked
                    />
                </div>
            </div>
            <div class="wmx2">
                <h3>State</h3>
                <div class="s-card d-flex fd-column g16">
                    <Radio
                        name="radio-standalone-state"
                        label="Success state radio"
                        id="radio-standalone-state"
                        description="This is a description for the radio."
                        state="success"
                    />
                    <Radio
                        name="radio-standalone-state"
                        label="Warning state radio"
                        id="radio-standalone-state-checked"
                        state="warning"
                        description="This is a description for the radio."
                    />
                    <Radio
                        name="radio-standalone-state"
                        label="Error state radio"
                        id="radio-standalone-state-checked"
                        state="error"
                        description="This is a description for the radio."
                    />
                </div>
            </div>
        </div>
    </div>
</Story>
