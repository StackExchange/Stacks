<script module lang="ts">
    export type FillSide = "prepend" | "append";
    export type Size = "" | "sm" | "lg";
    export type State = "" | "error" | "success" | "warning";
    export type Type =
        | "credit-card"
        | "date"
        | "datetime-local"
        | "email"
        | "month"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";
</script>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import Label from "../Label/Label.svelte";
    import {
        IconAlert,
        IconAlertCircle,
        IconCheckmark,
        IconCreditCard,
        IconSearch,
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
     * Where to place the input fill element
     * @type {"prepend" | "append"} FillSide
     */
    export let fillSide: FillSide = "prepend";

    /**
     * Name attribute of the input
     * @type {string | undefined}
     */
    export let name: string | undefined = undefined;

    /**
     * Shows optional label status
     * @type {boolean}
     */
    export let optional: boolean = false;

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
     * The type of the text input
     * @type {"credit-card" | "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week"}
     */
    export let type: Type = "text";

    /**
     * Additional CSS classes added to the underlying HTML input element
     * @type {string}
     */
    let className = "";
    export { className as class };

    /**
     * Localized translation for the optional label status text
     */
    export let i18nOptionalText: string | undefined = undefined;

    /**
     * Localized translation for the required label status text
     */
    export let i18nRequiredText: string | undefined = undefined;

    $: classes = getClasses(className, size);

    const getClasses = (className: string, size: Size) => {
        const base = "s-input";
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
        {optional}
        {i18nOptionalText}
    >
        {label}
    </Label>

    {#if $$slots.description}
        <!-- Renders a description between the label and input. -->
        <p class="s-description mb0 mtn2" id={`${id}-description`}>
            <slot name="description" />
        </p>
    {/if}

    <div class="d-flex">
        {#if $$slots.fill}
            <div
                class="s-input-fill"
                class:order-first={fillSide === "prepend"}
                class:order-last={fillSide === "append"}
            >
                <!-- Fill element appended or prepended based on the value of `fillSide` -->
                <slot name="fill" />
            </div>
        {/if}

        <div class="ps-relative w100">
            <!-- Prepended search/credit-card icon -->
            {#if type === "search" || type === "credit-card"}
                <div
                    class="s-input-icon"
                    class:s-input-icon__creditcard={type === "credit-card"}
                    class:s-input-icon__search={type === "search"}
                >
                    <Icon
                        src={type === "credit-card"
                            ? IconCreditCard
                            : IconSearch}
                    />
                </div>
            {/if}

            <input
                {id}
                aria-describedby={$$slots.message
                    ? `${id}-message`
                    : $$slots.description
                      ? `${id}-description`
                      : undefined}
                aria-invalid={state === "error"}
                class={classes}
                class:s-input__creditcard={type === "credit-card"}
                class:s-input__search={type === "search"}
                class:blr0={$$slots.fill && fillSide === "prepend"}
                class:brr0={$$slots.fill && fillSide === "append"}
                type={type === "credit-card" ? "text" : type}
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
            >

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
    </div>

    {#if $$slots.message}
        <!-- Renders a message after the input. -->
        <p class="s-input-message" id={`${id}-message`}>
            <slot name="message" />
        </p>
    {/if}
</div>
