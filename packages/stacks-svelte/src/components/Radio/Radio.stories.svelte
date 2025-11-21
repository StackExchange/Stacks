<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Radio from "./Radio.svelte";

    const { Story } = defineMeta({
        title: "Components/Radio",
        component: Radio,
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
            value: {
                control: "text",
            },
        },
    });
</script>

<Story
    name="Base"
    args={{ id: "base-radio", name: "example-group", label: "Default" }}
/>

<Story name="States" asChild>
    <div class="d-grid g16">
        <div class="d-flex fd-column">
            <h3 class="fs-body2 fw-bold mb8">Unchecked</h3>
            <div class="d-flex fd-column g8">
                <Radio
                    id="unchecked-default"
                    name="states-group-1"
                    label="Default"
                />
                <Radio
                    id="unchecked-disabled"
                    name="states-group-1"
                    label="Disabled"
                    disabled
                />
            </div>
        </div>
        <div class="d-flex fd-column">
            <h3 class="fs-body2 fw-bold mb8">Checked</h3>
            <div class="d-flex fd-column g8">
                <Radio
                    id="checked-default"
                    name="states-group-2"
                    label="Default"
                    checked
                />
                <Radio
                    id="checked-disabled"
                    name="states-group-2"
                    label="Disabled"
                    checked
                    disabled
                />
            </div>
        </div>
    </div>
</Story>

<Story name="Radio group" asChild>
    <div class="d-flex fd-column g8">
        <Radio
            id="group-option-1"
            name="radio-group"
            label="Option 1"
            value="option1"
        />
        <Radio
            id="group-option-2"
            name="radio-group"
            label="Option 2"
            value="option2"
            checked
        />
        <Radio
            id="group-option-3"
            name="radio-group"
            label="Option 3"
            value="option3"
        />
        <Radio
            id="group-option-4"
            name="radio-group"
            label="Option 4 (disabled)"
            value="option4"
            disabled
        />
    </div>
</Story>

<Story name="With values" asChild>
    <div class="d-flex fd-column g8">
        <Radio
            id="value-string"
            name="values-group"
            label="String value"
            value="string-value"
        />
        <Radio
            id="value-number"
            name="values-group"
            label="Number value"
            value={42}
        />
        <Radio id="value-empty" name="values-group" label="No value" />
    </div>
</Story>

<Story name="Disabled" asChild>
    <div class="d-flex fd-column g8">
        <Radio
            id="disabled-unchecked"
            name="disabled-group"
            label="Disabled unchecked"
            disabled
        />
        <Radio
            id="disabled-checked"
            name="disabled-group"
            label="Disabled checked"
            checked
            disabled
        />
    </div>
</Story>
