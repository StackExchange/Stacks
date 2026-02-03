<script module lang="ts">
    export type Size = "" | "sm" | "lg";
    export type State = "" | "error" | "success" | "warning";
</script>

<script lang="ts">
    import type { HTMLTextareaAttributes } from "svelte/elements";
    import type { Snippet } from "svelte";
    import type { BadgeState } from "../Badge/Badge.svelte";
    import Icon from "../Icon/Icon.svelte";
    import Label from "../Label/Label.svelte";
    import {
        IconAlert,
        IconAlertFill,
        IconCheck,
    } from "@stackoverflow/stacks-icons/icons";

    interface Props extends Omit<HTMLTextareaAttributes, "size"> {
        /**
         * `id` attribute of the text input
         */
        id: string;
        /**
         * The label associated with the input
         */
        label: string;
        /**
         * The optional status type of the label
         */
        labelStatus?: BadgeState;
        /**
         * The optional text to display for the label status
         */
        labelStatusText?: string;
        /**
         * Sets the disabled state of the input
         */
        disabled?: boolean;
        /**
         * The visiblity of the label element
         */
        hideLabel?: boolean;
        /**
         * Name attribute of the textarea
         */
        name?: string | undefined;
        /**
         * Placeholder text for the input
         */
        placeholder?: string;
        /**
         * Sets the readonly state of the input
         */
        readonly?: boolean;
        /**
         * Make the input required and show required label status
         */
        required?: boolean;
        /**
         * The size of the text input
         */
        size?: Size;
        /**
         * The size of the text input
         */
        state?: State;

        /**
         * Additional CSS classes added to the underlying HTML input element
         */
        class?: string;
        /**
         * Localized translation for the required label status text
         */
        i18nRequiredText?: string | undefined;

        /**
         * Optional description snippet rendered between the label and input.
         */
        description?: Snippet;

        /**
         * Optional message snippet rendered after the input.
         */
        message?: Snippet;
    }

    let {
        id,
        label,
        labelStatus,
        labelStatusText,
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
        status={labelStatus}
        statusText={labelStatusText}
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
                    <Icon src={IconAlertFill} />
                {:else if state === "success"}
                    <Icon src={IconCheck} />
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
