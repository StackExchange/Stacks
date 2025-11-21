<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Checkbox from "./Checkbox.svelte";

    const { Story } = defineMeta({
        title: "Components/Checkbox",
        component: Checkbox,
        argTypes: {
            id: {
                control: "text",
            },
            name: {
                control: "text",
            },
            label: {
                control: "text",
            },
            checked: {
                control: "boolean",
            },
            disabled: {
                control: "boolean",
            },
            indeterminate: {
                control: "boolean",
            },
            value: {
                control: "text",
            },
        },
    });
</script>

<Story name="Base" args={{ id: "base-checkbox", label: "Default" }}>
    {#snippet template(args)}
        <Checkbox {...args} />
    {/snippet}
</Story>

<Story name="States" asChild>
    <div class="d-grid g16">
        <div class="d-flex fd-column">
            <h3 class="fs-body2 fw-bold mb8">Unchecked</h3>
            <div class="d-flex fd-column g8">
                <Checkbox id="unchecked-default" label="Default" />
                <Checkbox id="unchecked-disabled" label="Disabled" disabled />
            </div>
        </div>
        <div class="d-flex fd-column">
            <h3 class="fs-body2 fw-bold mb8">Checked</h3>
            <div class="d-flex fd-column g8">
                <Checkbox id="checked-default" label="Default" checked />
                <Checkbox
                    id="checked-disabled"
                    label="Disabled"
                    checked
                    disabled
                />
            </div>
        </div>
        <div class="d-flex fd-column">
            <h3 class="fs-body2 fw-bold mb8">Indeterminate</h3>
            <div class="d-flex fd-column g8">
                <Checkbox
                    id="indeterminate-default"
                    label="Default"
                    indeterminate
                />
                <Checkbox
                    id="indeterminate-disabled"
                    label="Disabled"
                    indeterminate
                    disabled
                />
            </div>
        </div>
    </div>
</Story>

<Story name="Checkbox group" asChild>
    <div class="d-flex fd-column g8">
        <Checkbox
            id="group-option-1"
            name="checkbox-group"
            label="Option 1"
            value="option1"
        />
        <Checkbox
            id="group-option-2"
            name="checkbox-group"
            label="Option 2"
            value="option2"
            checked
        />
        <Checkbox
            id="group-option-3"
            name="checkbox-group"
            label="Option 3"
            value="option3"
        />
        <Checkbox
            id="group-option-4"
            name="checkbox-group"
            label="Option 4 (disabled)"
            value="option4"
            disabled
        />
    </div>
</Story>

<Story name="With values" asChild>
    <div class="d-flex fd-column g8">
        <Checkbox
            id="value-string"
            name="values-group"
            label="String value"
            value="string-value"
        />
        <Checkbox
            id="value-number"
            name="values-group"
            label="Number value"
            value={42}
        />
        <Checkbox id="value-empty" name="values-group" label="No value" />
    </div>
</Story>

<Story name="Disabled" asChild>
    <div class="d-flex fd-column g8">
        <Checkbox
            id="disabled-unchecked"
            name="disabled-group"
            label="Disabled unchecked"
            disabled
        />
        <Checkbox
            id="disabled-checked"
            name="disabled-group"
            label="Disabled checked"
            checked
            disabled
        />
        <Checkbox
            id="disabled-indeterminate"
            name="disabled-group"
            label="Disabled indeterminate"
            indeterminate
            disabled
        />
    </div>
</Story>
