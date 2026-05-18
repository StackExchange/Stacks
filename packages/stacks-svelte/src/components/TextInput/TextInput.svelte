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
    import clsx from "clsx";
    import type { ClassValue, HTMLInputAttributes } from "svelte/elements";
    import type { Snippet } from "svelte";
    import type { BadgeState } from "../Badge/Badge.svelte";
    import Icon from "../Icon/Icon.svelte";
    import Label from "../Label/Label.svelte";

    import {
        IconAlert,
        IconAlertFill,
        IconCheck,
        IconSearch,
    } from "@stackoverflow/stacks-icons/icons";

    import { IconCreditCard } from "@stackoverflow/stacks-icons-legacy/icons";

    interface Props extends Omit<
        HTMLInputAttributes,
        "size" | "type" | "class"
    > {
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
         * Where to place the input fill element
         */
        fillSide?: FillSide;

        /**
         * Name attribute of the input
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
         * The type of the text input
         */
        type?: Type;

        /**
         * Additional CSS classes added to the underlying HTML input element
         */
        class?: ClassValue;

        /**
         * Localized translation for the required label status text
         */
        i18nRequiredText?: string | undefined;

        /**
         * Optional description snippet rendered between the label and input.
         */
        description?: Snippet;

        /**
         * Optional fill snippet rendered either before or after the input based on the value of `fillSide`.
         */
        fill?: Snippet;

        /**
         * Optional message snippet rendered after the input.
         */
        message?: Snippet;

        /**
         * value of the text input.
         */
        value?: string;
    }

    let {
        id,
        label,
        labelStatus,
        labelStatusText,
        disabled = false,
        hideLabel = false,
        fillSide = "prepend",
        name = undefined,
        placeholder = "",
        readonly = false,
        required = false,
        size = "",
        state = "",
        type = "text",
        class: className = "",
        i18nRequiredText = undefined,
        description,
        fill,
        message,
        value = $bindable(undefined),
        ...rest
    }: Props = $props();

    const getClasses = (className: ClassValue, size: Size) => {
        const base = "s-input";
        const classes = [size]
            .filter(Boolean)
            .map((modifier) => `${base}__${modifier}`);
        return clsx(base, className, classes);
    };
    let classes = $derived(getClasses(className, size));
</script>

<div
    class="s-form-group"
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
        <p class="s-description" id={`${id}-description`}>
            {@render description()}
        </p>
    {/if}

    <div class="d-flex">
        {#if fill}
            <div
                class="s-input-fill"
                class:order-first={fillSide === "prepend"}
                class:order-last={fillSide === "append"}
            >
                <!-- Fill element appended or prepended based on the value of `fillSide` -->
                {@render fill()}
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
                aria-describedby={message
                    ? `${id}-message`
                    : description
                      ? `${id}-description`
                      : undefined}
                aria-invalid={state === "error"}
                class={classes}
                class:s-input__creditcard={type === "credit-card"}
                class:s-input__search={type === "search"}
                class:blr0={fill && fillSide === "prepend"}
                class:brr0={fill && fillSide === "append"}
                type={type === "credit-card" ? "text" : type}
                {disabled}
                {name}
                {placeholder}
                {readonly}
                {required}
                bind:value
                {...rest}
            />

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
    </div>

    {#if message}
        <!-- Renders a message after the input. -->
        <p class="s-input-message" id={`${id}-message`}>
            {@render message()}
        </p>
    {/if}
</div>
