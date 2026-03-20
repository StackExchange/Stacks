<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { parseClassValue } from "../../storybook-utils";
    import TextArea from "./TextArea.svelte";
    import type { Size, State } from "./TextArea.svelte";

    const TextAreaSizes: Size[] = ["", "sm", "lg"];
    const TextAreaStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/TextArea",
        component: TextArea,
        argTypes: {
            id: {
                control: "text",
            },
            label: {
                control: "text",
            },
            name: {
                control: "text",
            },
            size: {
                control: "select",
                options: TextAreaSizes,
            },
            state: {
                control: "select",
                options: TextAreaStates,
            },
        },
    });
</script>

<Story
    name="Base"
    args={{
        id: "base-example-input",
        label: "Question body",
        placeholder:
            "e.g. The Stack Overflow glyph used to have 6 bars, but now…",
    }}
>
    {#snippet template({ class: classArg, ...args })}
        <TextArea
            {...args}
            class={parseClassValue(
                typeof classArg === "string" ? classArg : undefined
            )}
        />
    {/snippet}
</Story>

<Story name="Label visibility" asChild>
    <div class="d-grid g16">
        {#each [false, true] as hideLabel (hideLabel)}
            <div class="d-flex fd-column">
                <TextArea
                    id={`${hideLabel ? "hidden" : "visible"}-label-input`}
                    placeholder="Label is {hideLabel ? 'hidden' : 'visible'}"
                    label="Label is {hideLabel ? 'hidden' : 'visible'}"
                    {hideLabel}
                />
            </div>
        {/each}
    </div>
</Story>

<Story name="Sizes" asChild>
    <div class="d-grid g16">
        {#each TextAreaSizes as size (size)}
            <div class="d-flex fd-column">
                <TextArea
                    id={`${size || "default"}-input`}
                    placeholder="Username"
                    label={`${size || "default"} input`}
                    {size}
                />
            </div>
        {/each}
    </div>
</Story>

<Story name="States" asChild>
    <div class="d-grid g16">
        {#each TextAreaStates as state (state)}
            <div class="d-flex fd-column">
                <TextArea
                    id={`${state || "default"}-state-input`}
                    placeholder="Email"
                    label={`${state || "default"} input`}
                    {state}
                >
                    {#snippet message()}
                        <span>{state || "default"} message</span>
                    {/snippet}
                </TextArea>
            </div>
        {/each}
    </div>
</Story>

<Story name="Status" asChild>
    <div class="d-grid g16">
        <div class="d-flex fd-column">
            <TextArea
                id="required-status-input"
                placeholder="Full name"
                label="required input"
                required
            >
                {#snippet description()}
                    <span>this input has been marked required.</span>
                {/snippet}
            </TextArea>
        </div>
    </div>
</Story>

<Story name="Label status" asChild>
    <div class="d-grid g32">
        <TextArea
            id="label-status-danger-input"
            placeholder="Placeholder text should not replace labels"
            label="Question title"
            labelStatus="danger"
            labelStatusText="Required"
        />
        <TextArea
            id="label-status-tonal-input"
            placeholder="Placeholder text should not replace labels"
            label="Question tags"
            labelStatusText="Optional"
        />
        <TextArea
            id="label-status-saved-input"
            placeholder="Placeholder text should not replace labels"
            label="What is your favourite animal?"
            labelStatus="info"
            labelStatusText="Saved for later"
        />
        <TextArea
            id="label-status-info-input"
            placeholder="e.g. user@example.com"
            label="Notify people"
            labelStatus="featured"
            labelStatusText="New feature"
        />
    </div>
</Story>

<Story name="Disabled and readonly" asChild>
    <p class="s-description mb24">
        `disabled` and `readonly` props add a custom style to the textarea. All
        other props are proxied to the underlying textarea element.
    </p>
    <hr class="fc-black-050 mb24" />
    <div class="d-grid g16">
        <div class="d-flex fd-column">
            <TextArea
                id="disabled-input"
                label="disabled input"
                placeholder="Disabled input"
                disabled
            />
        </div>
        <div class="d-flex fd-column">
            <TextArea
                id="readonly-input"
                label="readonly input"
                placeholder="Readonly input"
                readonly
            />
        </div>
    </div>
</Story>

<Story name="Snippets" asChild>
    <p>The examples below show all the snippets this component supports.</p>
    <div class="d-grid g16">
        <div class="d-flex fd-column">
            <TextArea
                id="description-snippet-input"
                label="Description snippet"
            >
                {#snippet description()}
                    <span>This TextArea includes a description snippet.</span>
                {/snippet}
            </TextArea>
        </div>
        <div class="d-flex fd-column">
            <TextArea id="message-snippet-input" label="Message snippet">
                {#snippet message()}
                    <span>This TextArea includes a message snippet.</span>
                {/snippet}
            </TextArea>
        </div>
    </div>
</Story>
