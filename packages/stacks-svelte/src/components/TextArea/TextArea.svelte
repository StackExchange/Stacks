<script module lang="ts">
    export type Size = "" | "sm" | "lg";
    export type State = "" | "error" | "success" | "warning";
</script>

<script lang="ts">
    import type { HTMLTextareaAttributes } from "svelte/elements";
    import Icon from "../Icon/Icon.svelte";
    import Label from "../Label/Label.svelte";
    import {
        IconAlert,
        IconAlertCircle,
        IconCheckmark,
    } from "@stackoverflow/stacks-icons-legacy/icons";

    interface Props extends Omit<HTMLTextareaAttributes, 'size'> {
        /**
         * `id` attribute of the text input
         * @type {string}
         */
        id: string;
        /**
         * The label associated with the input
         * @type {string}
         */
        label: string;
        /**
         * Sets the disabled state of the input
         * @type {boolean}
         */
        disabled?: boolean;
        /**
         * The visiblity of the label element
         * @type {boolean}
         */
        hideLabel?: boolean;
        /**
         * Name attribute of the textarea
         * @type {string | undefined}
         */
        name?: string | undefined;
        /**
         * Placeholder text for the input
         * @type {string}
         */
        placeholder?: string;
        /**
         * Sets the readonly state of the input
         * @type {boolean}
         */
        readonly?: boolean;
        /**
         * Make the input required and show required label status
         * @type {boolean}
         */
        required?: boolean;
        /**
         * The size of the text input
         * @type {"" | "sm" | "lg"} Size
         */
        size?: Size;
        /**
         * The size of the text input
         * @type {"" | "error" | "success" | "warning"} State
         */
        state?: State;

        /**
         * Additional CSS classes added to the underlying HTML input element
         * @type {string}
         */
        class?: string;
        /**
         * Localized translation for the required label status text
         */
        i18nRequiredText?: string | undefined;

        /**
         * Optional description snippet rendered between the label and input.
         */
        description?: import("svelte").Snippet;

        /**
         * Optional message snippet rendered after the input.
         */
        message?: import("svelte").Snippet;
    }

    let {
        id,
        label,
        disabled = false,
        hideLabel = false,
        name = undefined,
        placeholder = "",
        readonly = false,
        required = false,
        size = "",
        state = "",
        class: className = "",
        i18nRequiredText = undefined,
        description,
        message,
        ...rest
    }: Props = $props();

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
    let classes = $derived(getClasses(className, size));
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

    {#if description}
        <!-- Renders a description between the label and input. -->
        <p class="s-description mb0 mtn2" id={`${id}-description`}>
            {@render description()}
        </p>
    {/if}

    <div class="ps-relative w100 d-flex">
        <textarea
            {id}
            aria-describedby={message
                ? `${id}-message`
                : description
                  ? `${id}-description`
                  : undefined}
            aria-invalid={state === "error"}
            class={classes}
            {disabled}
            {name}
            {placeholder}
            {readonly}
            {required}
            {...rest}
        ></textarea>

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

    {#if message}
        <!-- Renders a message after the input. -->
        <p class="s-input-message" id={`${id}-message`}>
            {@render message()}
        </p>
    {/if}
</div>
