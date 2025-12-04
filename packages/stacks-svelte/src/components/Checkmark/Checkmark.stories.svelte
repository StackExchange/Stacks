<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Checkmark from "./Checkmark.svelte";
    import type { InputType } from "./Checkmark.svelte";
    import { IconDashboard } from "@stackoverflow/stacks-icons/icons";

    const CheckmarkInputTypes: InputType[] = ["radio", "checkbox"];

    const { Story } = defineMeta({
        title: "Components/Checkmark",
        component: Checkmark,
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
            type: {
                control: "select",
                options: CheckmarkInputTypes,
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
            icon: {
                control: "text",
            },
            iconTitle: {
                control: "text",
            },
        },
    });
</script>

<Story
    name="Base"
    args={{ id: "base-checkmark", name: "example-group", label: "Default" }}
>
    {#snippet template(args)}
        <div class="w128">
            <Checkmark {...args} />
        </div>
    {/snippet}
</Story>

<Story name="With icon" asChild>
    <div class="d-flex fd-column g8">
        <div class="w128">
            <Checkmark
                id="with-icon-unchecked"
                name="icon-group"
                label="Unchecked with icon"
                icon={IconDashboard}
                iconTitle="Dashboard icon"
            />
        </div>
        <div class="w128">
            <Checkmark
                id="with-icon-checked"
                name="icon-group"
                label="Checked with icon"
                checked
                icon={IconDashboard}
                iconTitle="Dashboard icon"
            />
        </div>
        <div class="w128">
            <Checkmark
                id="with-icon-disabled"
                name="icon-group"
                label="Disabled with icon"
                disabled
                icon={IconDashboard}
                iconTitle="Dashboard icon"
            />
        </div>
    </div>
</Story>

<Story name="Checkmark group (radio)" asChild>
    <div class="d-flex fd-column g8">
        <div class="w128">
            <Checkmark
                id="group-option-1"
                name="checkmark-group"
                label="Option 1"
                value="option1"
            />
        </div>
        <div class="w128">
            <Checkmark
                id="group-option-2"
                name="checkmark-group"
                label="Option 2"
                value="option2"
                checked
            />
        </div>
        <div class="w128">
            <Checkmark
                id="group-option-3"
                name="checkmark-group"
                label="Option 3"
                value="option3"
            />
        </div>
        <div class="w128">
            <Checkmark
                id="group-option-4"
                name="checkmark-group"
                label="Option 4 (disabled)"
                value="option4"
                disabled
            />
        </div>
    </div>
</Story>

<Story name="Checkmark group (checkbox)" asChild>
    <div class="d-flex fd-column g8">
        <div class="w128">
            <Checkmark
                id="checkbox-group-option-1"
                name="checkbox-group"
                type="checkbox"
                label="Option 1"
                value="option1"
            />
        </div>
        <div class="w128">
            <Checkmark
                id="checkbox-group-option-2"
                name="checkbox-group"
                type="checkbox"
                label="Option 2"
                value="option2"
                checked
            />
        </div>
        <div class="w128">
            <Checkmark
                id="checkbox-group-option-3"
                name="checkbox-group"
                type="checkbox"
                label="Option 3"
                value="option3"
                checked
            />
        </div>
        <div class="w128">
            <Checkmark
                id="checkbox-group-option-4"
                name="checkbox-group"
                type="checkbox"
                label="Option 4 (disabled)"
                value="option4"
                disabled
            />
        </div>
    </div>
</Story>

<Story name="With values" asChild>
    <div class="d-flex fd-column g8">
        <div class="w128">
            <Checkmark
                id="value-string"
                name="values-group"
                label="String value"
                value="string-value"
            />
        </div>
        <div class="w128">
            <Checkmark
                id="value-number"
                name="values-group"
                label="Number value"
                value={42}
            />
        </div>
        <div class="w128">
            <Checkmark id="value-empty" name="values-group" label="No value" />
        </div>
    </div>
</Story>

<Story name="Disabled" asChild>
    <div class="d-flex fd-column g8">
        <div class="w128">
            <Checkmark
                id="disabled-unchecked"
                name="disabled-group"
                label="Disabled unchecked"
                disabled
            />
        </div>
        <div class="w128">
            <Checkmark
                id="disabled-checked"
                name="disabled-group"
                label="Disabled checked"
                checked
                disabled
            />
        </div>
    </div>
</Story>
