<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Select, {
        type Size,
        type State,
        type LabelPlacement,
    } from "./Select.svelte";
    import SelectItem from "./SelectItem.svelte";

    const SelectSizes: Size[] = ["", "sm", "md", "lg", "xl"];
    const SelectStates: State[] = ["", "error", "success", "warning"];
    const SelectLabelPlacement: LabelPlacement[] = ["top", "left"];

    const { Story } = defineMeta({
        title: "Components/Select",
        component: Select,
        subcomponents: {
            // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
            SelectItem,
        },
        argTypes: {
            labelPlacement: {
                control: "select",
            },
            size: {
                control: "select",
            },
            state: {
                control: "select",
            },
        },
    });
</script>

<Story name="Base" args={{ id: "select-base", label: "Base" }}>
    {#snippet template(args)}
        <Select {...args}>
            <SelectItem value="relevance" text="Relevance" />
            <SelectItem value="newest" text="Newest" />
            <SelectItem value="active" text="Active" />
            <SelectItem value="score" text="Score" />
        </Select>
    {/snippet}
</Story>

<Story name="Label placement" asChild>
    <div class="d-flex fd-column g16">
        {#each SelectLabelPlacement as labelPlacement (labelPlacement)}
            <div>
                <Select
                    id={`select-label-${labelPlacement}`}
                    label={`Label placement: ${labelPlacement || "default"}`}
                    {labelPlacement}
                >
                    <SelectItem value="relevance" text="Relevance" />
                    <SelectItem value="newest" text="Newest" />
                    <SelectItem value="active" text="Active" />
                    <SelectItem value="score" text="Score" />
                </Select>
            </div>
        {/each}
    </div>
</Story>

<Story name="Sizes" asChild>
    <div class="d-flex fd-column g16">
        {#each SelectSizes as size (size)}
            <div>
                <Select
                    id={`select-${size}`}
                    label={`Size: ${size || "default"}`}
                    {size}
                >
                    <SelectItem value="relevance" text="Relevance" />
                    <SelectItem value="newest" text="Newest" />
                    <SelectItem value="active" text="Active" />
                    <SelectItem value="score" text="Score" />
                </Select>
            </div>
        {/each}
    </div>
</Story>

<Story name="State" asChild>
    <div class="d-flex fd-column g16">
        {#each SelectStates as state (state)}
            <div>
                <Select
                    id={`select-${state}`}
                    label={`State: ${state || "default"}`}
                    {state}
                >
                    <SelectItem value="relevance" text="Relevance" />
                    <SelectItem value="newest" text="Newest" />
                    <SelectItem value="active" text="Active" />
                    <SelectItem value="score" text="Score" />
                </Select>
            </div>
        {/each}
    </div>
</Story>

<Story name="With Description and Message" asChild>
    <Select
        id="select-with-description-and-message"
        label="With Description and Message"
    >
        <svelte:fragment slot="description">
            Select the sorting order
        </svelte:fragment>
        <SelectItem value="relevance" text="Relevance" />
        <SelectItem value="newest" text="Newest" />
        <SelectItem value="active" text="Active" />
        <SelectItem value="score" text="Score" />
        <svelte:fragment slot="message">
            The available sorting orders are Relevance, Newest, Active, and
            Score
        </svelte:fragment>
    </Select>
</Story>

<Story name="Disabled" asChild>
    <Select id="select-disabled" label="Disabled" disabled>
        <SelectItem value="relevance" text="Relevance" />
        <SelectItem value="newest" text="Newest" />
        <SelectItem value="active" text="Active" />
        <SelectItem value="score" text="Score" />
    </Select>
</Story>
