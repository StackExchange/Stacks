<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import TextInput from "./TextInput.svelte";
    import type { FillSide, Size, State, Type } from "./TextInput.svelte";

    const TextInputFillSides: FillSide[] = ["prepend", "append"];
    const TextInputSizes: Size[] = ["", "sm", "lg"];
    const TextInputTypes: Type[] = [
        "credit-card",
        "date",
        "datetime-local",
        "email",
        "month",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "time",
        "url",
        "week",
    ];
    const TextInputStates: State[] = ["", "error", "success", "warning"];

    const { Story } = defineMeta({
        title: "Components/TextInput",
        component: TextInput,
        argTypes: {
            id: {
                control: "text",
            },
            label: {
                control: "text",
            },
            fillSide: {
                control: "select",
                options: TextInputFillSides,
            },
            name: {
                control: "text",
            },
            size: {
                control: "select",
                options: TextInputSizes,
            },
            state: {
                control: "select",
                options: TextInputStates,
            },
            type: {
                control: "select",
                options: TextInputTypes,
            },
        },
    });
</script>

<Story name="Base" args={{ id: "base-example-input", label: "Username" }} />

<Story name="Input fill" asChild>
    <div class="d-grid g16">
        {#each TextInputFillSides as fillSide (fillSide)}
            <div class="d-flex fd-column">
                <TextInput
                    id={`${fillSide}ed-fill-input`}
                    label="{fillSide}ed fill"
                    {fillSide}
                >
                    <span slot="fill">{fillSide}ed fill</span>
                </TextInput>
            </div>
        {/each}
    </div>
</Story>

<Story name="Label visibility" asChild>
    <div class="d-grid g16">
        {#each [false, true] as hideLabel (hideLabel)}
            <div class="d-flex fd-column">
                <TextInput
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
        {#each TextInputSizes as size (size)}
            <div class="d-flex fd-column">
                <TextInput
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
        {#each TextInputStates as state (state)}
            <div class="d-flex fd-column">
                <TextInput
                    id={`${state || "default"}-state-input`}
                    placeholder="Email"
                    label={`${state || "default"} input`}
                    {state}
                >
                    <span slot="message">{state || "default"} message</span>
                </TextInput>
            </div>
        {/each}
    </div>
</Story>

<Story name="Status" asChild>
    <div class="d-grid g16">
        <div class="d-flex fd-column">
            <TextInput
                id="optional-status-input"
                placeholder="Age"
                label="optional input"
                optional
            />
        </div>
        <div class="d-flex fd-column">
            <TextInput
                id="required-status-input"
                placeholder="Full name"
                label="required input"
                required
            />
        </div>
    </div>
</Story>

<Story name="Types" asChild>
    <div class="d-grid g16">
        {#each TextInputTypes as type (type)}
            <div class="d-flex fd-column">
                <TextInput
                    id={`${type || "default"}-status-input`}
                    placeholder={type.replace("-", " ")}
                    label={`${type || "default"} input`.replace("-", " ")}
                    {type}
                />
            </div>
        {/each}
    </div>
</Story>

<Story name="Disabled and readonly" asChild>
    <p class="s-description mb24">
        `disabled` and `readonly` props add a custom style to the input. All
        other props are proxied to the underlying HTML input element.
    </p>
    <hr class="fc-black-050 mb24" />
    <div class="d-grid g16">
        <div class="d-flex fd-column">
            <TextInput
                id="disabled-input"
                label="disabled input"
                placeholder="Disabled input"
                disabled
            />
        </div>
        <div class="d-flex fd-column">
            <TextInput
                id="readonly-input"
                label="readonly input"
                placeholder="Readonly input"
                readonly
            />
        </div>
    </div>
</Story>

<Story name="Slots" asChild>
    <div class="d-grid g16">
        <div class="d-flex fd-column">
            <TextInput id="description-slot-input" label="Description slot">
                <span slot="description">
                    This TextInput includes a description slot.
                </span>
            </TextInput>
        </div>
        <div class="d-flex fd-column">
            <TextInput id="message-slot-input" label="Message slot">
                <span slot="message">
                    This TextInput includes a message slot.
                </span>
            </TextInput>
        </div>
        <div class="d-flex fd-column">
            <TextInput id="fill-slot-input" label="Fill slot">
                <span slot="fill">https://</span>
            </TextInput>
        </div>
    </div>
</Story>
