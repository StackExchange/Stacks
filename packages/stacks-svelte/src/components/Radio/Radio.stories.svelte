<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Radio, { type State } from "./Radio.svelte";
    const RadioChecked: boolean[] = [true, false];
    const RadioStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/Radio",
        component: Radio,
    });
</script>

<Story
    name="Base"
    args={{
        name: "Radio",
        id: "Radio-1",
        label: "Radio label",
    }}
>
    {#snippet template(args)}
        <div class="wmx2">
            <Radio {...args} />
        </div>
    {/snippet}
</Story>

<Story name="Checkmark (checked)" asChild>
    <div class="d-flex fd-column g64">
        <div class="wmx2">
            <Radio
                name="radio checkmark example"
                id="Radio-checkmark-example"
                label="Radio example"
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
                    {#each RadioChecked as checked (checked)}
                        <th scope="col">
                            {#if checked === true}
                                Checked
                            {:else}
                                Unchecked
                            {/if}
                        </th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each [false, true] as checkmark (checkmark)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {checkmark ? "Checkmark" : "Default"}
                        </th>
                        {#each RadioChecked as checked (checked)}
                            <td class="va-middle p16">
                                <Radio
                                    name="radio {checkmark ? ' checkmark' : ''}"
                                    id="Radio-checked{checkmark
                                        ? '-checkmark'
                                        : ''}-{checked}"
                                    label="Label"
                                    {checked}
                                    {checkmark}
                                />
                            </td>
                        {/each}
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
                            <Radio
                                name="description radio example"
                                id="Radio-description-example{checkmark
                                    ? '-checkmark'
                                    : ''}"
                                label="Label"
                                description="This is a description for the Radio."
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
        {#each [false, true] as checkmark (checkmark)}
            <fieldset class="s-check-group wmx2">
                <legend class="s-label">
                    {checkmark ? "checkmark" : "radio"}
                </legend>
                {#each RadioStates as state (state)}
                    {#if state !== ""}
                        <Radio
                            name="description radio {checkmark
                                ? 'checkmark'
                                : 'radio'} example"
                            id="Radio-{state}-example{checkmark
                                ? '-checkmark'
                                : ''}"
                            label="Label"
                            description="Radio with {state}."
                            {checkmark}
                            {state}
                        />
                    {/if}
                {/each}
            </fieldset>
        {/each}
    </div>
</Story>
