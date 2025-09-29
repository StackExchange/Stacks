<script module lang="ts">
    import { getContext } from "svelte";
    export type Size = "" | "sm" | "md" | "lg" | "xl";
    export type State = "" | "error" | "success" | "warning";
    export type LabelPlacement = "top" | "left";

    export interface SelectState {
        selected: string | number | undefined;
    }

    const SELECT_CONTEXT_NAME = "select-context";

    export function useSelectContext(component: string): Writable<SelectState> {
        const context = getContext<Writable<SelectState>>(SELECT_CONTEXT_NAME);
        if (context === undefined) {
            throw new Error(
                `<${component} /> is missing a parent <Select /> component.`
            );
        }
        return context;
    }
</script>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import Label from "../Label/Label.svelte";
    import {
        IconAlert,
        IconAlertCircle,
        IconCheckmark,
    } from "@stackoverflow/stacks-icons/icons";
    import { setContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { writable } from "svelte/store";

    /**
     * `id` attribute of the select element
     * @type {string}
     */
    export let id: string;

    /**
     * The label associated with the select element
     * @type {string}
     */
    export let label: string;

    /**
     * Specify the initial selected item value
     * @type {string | number}
     */
    export let selected: string | number | undefined = undefined;

    /**
     * Sets the disabled state
     * @type {boolean}
     */
    export let disabled: boolean = false;

    /**
     * The visiblity of the label element
     * @type {boolean}
     */
    export let hideLabel: boolean = false;

    /**
     * Name attribute of the select element
     * @type {string | undefined}
     */
    export let name: string | undefined = undefined;

    /**
     * The size of the select
     * @type {"" | "sm" | "md" | "lg" | "xl"} Size
     */
    export let size: Size = "";

    /**
     * The state of the select
     * @type {"" | "error" | "success" | "warning"} State
     */
    export let state: State = "";

    /**
     * The placement of the label relative to the select
     * @type {"top" | "left"}
     */
    export let labelPlacement: LabelPlacement = "top";

    $: classes = getClasses(size, labelPlacement);

    const getClasses = (size: Size, placement: LabelPlacement) => {
        const base = "s-select";
        let classes = base;

        if (size) {
            classes += ` ${base}__${size}`;
        }

        if (placement === "left") {
            classes += ` ml8`;
        }

        return classes;
    };

    const selectState = writable<SelectState>({
        selected,
    });

    setContext(SELECT_CONTEXT_NAME, selectState);

    const onChangeHandler = (event: Event) => {
        const target = event.target as HTMLSelectElement;
        selectState.set({ selected: target.value });
    };
</script>

<div
    class={`d-flex ${labelPlacement === "top" ? " fd-column gy4" : "ai-center"}`}
    class:has-error={state === "error"}
    class:has-success={state === "success"}
    class:has-warning={state === "warning"}
>
    <Label {id} class={hideLabel ? "v-visible-sr" : ""} {size}>
        {label}
    </Label>
    {#if $$slots.description && !hideLabel && labelPlacement === "top"}
        <!-- Renders a description between the label and the select (only when label is visible and placed on top). -->
        <p class="s-description mb0 mtn2" id={`${id}-description`}>
            <slot name="description" />
        </p>
    {/if}
    <div class={classes}>
        <select
            {id}
            {name}
            {disabled}
            aria-describedby={$$slots.message
                ? `${id}-message`
                : $$slots.description
                  ? `${id}-description`
                  : undefined}
            aria-invalid={state === "error"}
            on:change={onChangeHandler}
            on:change
            on:focus
            on:blur
        >
            <!-- Renders the options (SelectItem). -->
            <slot />
        </select>
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
        <!-- Renders a message after the select element. -->
        <p class="s-input-message" id={`${id}-message`}>
            <slot name="message" />
        </p>
    {/if}
</div>
