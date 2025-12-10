<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import CheckControl, {
        type Checked,
        type State,
        type Type,
    } from "./CheckControl.svelte";
    const CheckControlChecked: Checked[] = [true, false, "indeterminate"];
    const CheckControlStates: State[] = ["", "error", "success", "warning"];
    const CheckControlTypes: Type[] = ["checkbox", "radio"];

    const { Story } = defineMeta({
        title: "Components/CheckControl",
        component: CheckControl,
    });

    const titleCase = (str: string) => {
        return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
            return match.toUpperCase();
        });
    };
</script>

<Story
    name="Base"
    args={{
        name: "CheckControl",
        id: "checkcontrol-1",
        label: "CheckControl label",
        type: "checkbox",
    }}
>
    {#snippet template(args)}
        <div class="wmx2">
            <CheckControl {...args} />
        </div>
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
                {#each CheckControlTypes as type (type)}
                    <tr>
                        <th scope="row" class="va-middle">{titleCase(type)}</th>
                        <td class="va-middle px8">
                            <CheckControl
                                name="{type} example"
                                id="checkcontrol-{type}-example"
                                label="{titleCase(type)} example"
                                {type}
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Checkmark (checked)" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each CheckControlTypes as type (type)}
                    <tr>
                        <th scope="row" class="va-middle">{titleCase(type)}</th>
                        <td class="va-middle px8">
                            <CheckControl
                                name="{type} example"
                                id="checkcontrol-{type}-example"
                                label="{titleCase(type)} example"
                                {type}
                                checkmark
                                checked
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Checked states" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    {#each CheckControlChecked as checked (checked)}
                        <th scope="col">
                            {#if checked === true}
                                Checked
                            {:else if checked === false}
                                Unchecked
                            {:else}
                                {checked}
                            {/if}
                        </th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each [false, true] as checkmark (checkmark)}
                    {#each CheckControlTypes as type (type)}
                        <tr>
                            <th scope="row" class="va-middle">
                                {checkmark
                                    ? `Checkmark (type: "${type}")`
                                    : titleCase(type)}
                            </th>
                            {#each CheckControlChecked as checked (checked)}
                                {#if checked === "indeterminate" && (type !== "checkbox" || checkmark)}
                                    <td class="va-middle px16">N/A</td>
                                {:else}
                                    <td class="va-middle p16">
                                        <CheckControl
                                            name="{type} {checkmark
                                                ? ' checkmark'
                                                : ''}"
                                            id="checkcontrol-{type}-checked{checkmark
                                                ? '-checkmark'
                                                : ''}"
                                            label="Label"
                                            {type}
                                            {checked}
                                            {checkmark}
                                        />
                                    </td>
                                {/if}
                            {/each}
                        </tr>
                    {/each}
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
                    <th scope="col">Type</th>
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each [false, true] as checkmark (checkmark)}
                    {#each CheckControlTypes as type (type)}
                        <tr>
                            <th scope="row" class="va-middle">
                                {checkmark
                                    ? `Checkmark (type: "${type}")`
                                    : titleCase(type)}
                            </th>
                            <td class="va-middle p16">
                                <CheckControl
                                    name="description {type} example"
                                    id="checkcontrol-{type}-description-example{checkmark
                                        ? '-checkmark'
                                        : ''}"
                                    label="Label"
                                    description="This is a description for the CheckControl."
                                    {type}
                                    {checkmark}
                                />
                            </td>
                        </tr>
                    {/each}
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="State" asChild>
    <div class="d-flex fw-wrap g64">
        {#each [false, true] as checkmark (checkmark)}
            {#each CheckControlTypes as type (type)}
                {#if type !== "radio" || !checkmark}
                    <fieldset class="s-check-group wmx2">
                        <legend class="s-label">
                            {checkmark ? `checkmark` : type}
                        </legend>
                        {#each CheckControlStates as state (state)}
                            {#if state !== ""}
                                <CheckControl
                                    name="description {type} {state} example"
                                    id="checkcontrol-{type}-{state}-example{checkmark
                                        ? '-checkmark'
                                        : ''}"
                                    label="Label"
                                    description="CheckControl with {state}."
                                    {type}
                                    {checkmark}
                                    {state}
                                />
                            {/if}
                        {/each}
                    </fieldset>
                {/if}
            {/each}
        {/each}
    </div>
</Story>
