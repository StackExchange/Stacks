<script module lang="ts">
    export type Size = "" | "sm" | "lg";
    export type State = "" | "error" | "success" | "warning";
</script>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import Label from "../Label/Label.svelte";
    import {
        IconAlert,
        IconAlertCircle,
        IconCheckmark,
    } from "@stackoverflow/stacks-icons-legacy/icons";

    /**
     * `id` attribute of the text input
     * @type {string}
     */
    export let id: string;

    /**
     * The label associated with the input
     * @type {string}
     */
    export let label: string;

    /**
     * Sets the disabled state of the input
     * @type {boolean}
     */
    export let disabled: boolean = false;

    /**
     * The visiblity of the label element
     * @type {boolean}
     */
    export let hideLabel: boolean = false;

    /**
     * Name attribute of the textarea
     * @type {string | undefined}
     */
    export let name: string | undefined = undefined;

    /**
     * Placeholder text for the input
     * @type {string}
     */
    export let placeholder: string = "";

    /**
     * Sets the readonly state of the input
     * @type {boolean}
     */
    export let readonly: boolean = false;

    /**
     * Make the input required and show required label status
     * @type {boolean}
     */
    export let required: boolean = false;

    /**
     * The size of the text input
     * @type {"" | "sm" | "lg"} Size
     */
    export let size: Size = "";

    /**
     * The size of the text input
     * @type {"" | "error" | "success" | "warning"} State
     */
    export let state: State = "";

    /**
     * Additional CSS classes added to the underlying HTML input element
     * @type {string}
     */
    let className = "";
    export { className as class };

    /**
     * Localized translation for the required label status text
     */
    export let i18nRequiredText: string | undefined = undefined;

    $: classes = getClasses(className, size);

    const getClasses = (className: string, size: Size) => {
        const base = "s-textarea";
        let classes = base;

        if (className) {
            classes += " " + className;
        }

        if (size) {
            classes += ` ${base}__${size}`;
        }

        return classes;
    };
</script>

<div
    class="d-flex fd-column gy4"
    class:has-error={state === "error"}
    class:has-success={state === "success"}
    class:has-warning={state === "warning"}
>
    <Label
        {id}
        class={hideLabel ? "v-visible-sr" : ""}
        {size}
        {required}
        {i18nRequiredText}
    >
        {label}
    </Label>

    {#if $$slots.description}
        <!-- Renders a description between the label and input. -->
        <p class="s-description mb0 mtn2" id={`${id}-description`}>
            <slot name="description" />
        </p>
    {/if}

    <div class="ps-relative w100 d-flex">
        <textarea
            {id}
            aria-describedby={$$slots.message
                ? `${id}-message`
                : $$slots.description
                  ? `${id}-description`
                  : undefined}
            aria-invalid={state === "error"}
            class={classes}
            {disabled}
            {name}
            {placeholder}
            {readonly}
            {required}
            {...$$restProps}
            on:change
            on:input
            on:keydown
            on:keyup
            on:focus
            on:blur
            on:paste
        />

        {#if state}
            <div class="s-input-icon">
                {#if state === "error"}
                    <Icon src={IconAlertCircle} />
                {:else if state === "success"}
                    <Icon src={IconCheckmark} />
                {:else}
                    <Icon src={IconAlert} />
                {/if}
            </div>
        {/if}
    </div>

    {#if $$slots.message}
        <!-- Renders a message after the input. -->
        <p class="s-input-message" id={`${id}-message`}>
            <slot name="message" />
        </p>
    {/if}
</div>
