<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import CheckGroup, { type State } from "./CheckGroup.svelte";
    import Check, { type Type as CheckType } from "../Check/Check.svelte";
    const CheckGroupStates: State[] = ["", "error", "success", "warning"];
    const CheckTypes: CheckType[] = ["checkbox", "radio"];

    const { Story } = defineMeta({
        title: "Components/CheckGroup",
        component: CheckGroup,
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
        label: "Legend text",
    }}
>
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
    {#snippet template({ children, ...args })}
        <div class="wmx2">
            <CheckGroup {...args}>
                {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                    <Check
                        name="Check-{label}"
                        id="Check-{label}"
                        {label}
                        type="checkbox"
                    />
                {/each}
            </CheckGroup>
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
                {#each CheckGroupStates as state (state)}
                    {#if state !== ""}
                        <tr>
                            <th scope="row" class="va-middle">
                                {state}
                            </th>
                            <td class="va-middle px8">
                                <CheckGroup label="Legend text" {state}>
                                    {#each ["checkbox", "radio", "checkmark"] as type (type)}
                                        <Check
                                            name="Check-{type}"
                                            id="Check-{type}-{state}"
                                            label={titleCase(type)}
                                            type={type === "radio"
                                                ? "radio"
                                                : "checkbox"}
                                            description="{titleCase(
                                                type
                                            )} example."
                                            checkmark={type === "checkmark"}
                                        />
                                    {/each}
                                </CheckGroup>
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
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">State</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each CheckTypes as type (type)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {titleCase(type)}
                        </th>
                        <td class="va-middle px8">
                            <CheckGroup label="Legend text" horizontal>
                                {#each ["Apples", "Oranges", "Bananas"] as label (label)}
                                    <Check
                                        name="Check-{type}"
                                        id="Check-{label}-{type}"
                                        {label}
                                        {type}
                                    />
                                {/each}
                            </CheckGroup>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>
