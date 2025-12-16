<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import RadioGroup, { type State } from "./RadioGroup.svelte";
    import Radio from "../Radio/Radio.svelte";
    const RadioGroupStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/RadioGroup",
        component: RadioGroup,
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
            <RadioGroup {...args}>
                {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                    <Radio name="Radio-group" id="Radio-{label}" {label} />
                {/each}
            </RadioGroup>
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
                {#each RadioGroupStates as state (state)}
                    {#if state !== ""}
                        <tr>
                            <th scope="row" class="va-middle">
                                {state}
                            </th>
                            <td class="va-middle px8">
                                <RadioGroup label="Legend text" {state}>
                                    <Radio
                                        name="Radio-state"
                                        id="Radio-state-{state}"
                                        label="Radio"
                                        description="Radio example."
                                    />
                                </RadioGroup>
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
            <RadioGroup label="Legend text" horizontal>
                {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                    <Radio
                        name="Radio-horizontal"
                        id="Radio-{label}-horizontal"
                        {label}
                    />
                {/each}
            </RadioGroup>
        </div>
    </div>
</Story>
