<script module lang="ts">
    import { getContext } from "svelte";
    export type Size = "" | "sm" | "md" | "lg" | "xl";
    export type State = "" | "error" | "success" | "warning";
    export type LabelPlacement = "top" | "left";

    export interface SelectState {
        selected: string | number | undefined;
    }

    const SELECT_CONTEXT_NAME = "select-context";

    export function useSelectContext(component: string): SelectState {
        const context = getContext<SelectState>(SELECT_CONTEXT_NAME);
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
    } from "@stackoverflow/stacks-icons-legacy/icons";
    import { setContext } from "svelte";
    import type { Snippet } from "svelte";
    import type { HTMLSelectAttributes } from "svelte/elements";

    // @ts-expect-error - HTMLSelectAttributes size is not compatible with our custom Size type.
    // Ideally we could use Omit<HTMLSelectAttributes, "size"> but doing that
    // causes Storybook autodocs to document all the select attributes.
    interface Props extends HTMLSelectAttributes {
        /**
         * `id` attribute of the select element
         */
        id: string;

        /**
         * The label associated with the select element
         */
        label: string;

        /**
         * Specify the initial selected item value
         */
        selected?: string | number | undefined;

        /**
         * Sets the disabled state
         */
        disabled?: boolean;

        /**
         * The visiblity of the label element
         */
        hideLabel?: boolean;

        /**
         * Name attribute of the select element
         */
        name?: string | undefined;

        /**
         * The size of the select
         */
        size?: Size;

        /**
         * The validation state of the select
         */
        state?: State;

        /**
         * The placement of the label relative to the select
         */
        labelPlacement?: LabelPlacement;

        /**
         * Snippet to render options as SelectItem components
         */
        children?: Snippet;

        /**
         * Snippet to render a description between the label and the select (only when label is visible and placed on top)
         */
        description?: Snippet;

        /**
         * Snippet to render a message after the select element
         */
        message?: Snippet;
    }

    let {
        id,
        label,
        selected = $bindable(undefined),
        disabled = false,
        hideLabel = false,
        name = undefined,
        size = "",
        state: vState = "",
        labelPlacement = "top",
        children,
        description,
        message,
        ...restProps
    }: Props = $props();

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

    let classes = $derived(getClasses(size, labelPlacement));

    let internalState = $state({
        selected,
    });

    $effect(() => {
        internalState.selected = selected;
    });

    setContext(SELECT_CONTEXT_NAME, internalState);

    const onChangeHandler = (
        event: Event & { currentTarget: EventTarget & HTMLSelectElement }
    ) => {
        const target = event.target as HTMLSelectElement;
        internalState.selected = target.value;
        selected = target.value;
        restProps.onchange?.(event);
    };
</script>

<div
    class={`d-flex ${labelPlacement === "top" ? " fd-column gy4" : "ai-center"}`}
    class:has-error={vState === "error"}
    class:has-success={vState === "success"}
    class:has-warning={vState === "warning"}
>
    <Label {id} class={hideLabel ? "v-visible-sr" : ""} {size}>
        {label}
    </Label>
    {#if description && !hideLabel && labelPlacement === "top"}
        <p class="s-description mb0 mtn2" id={`${id}-description`}>
            {@render description()}
        </p>
    {/if}
    <div class={classes}>
        <select
            {id}
            {name}
            {disabled}
            aria-describedby={message
                ? `${id}-message`
                : description
                  ? `${id}-description`
                  : undefined}
            aria-invalid={vState === "error"}
            onchange={onChangeHandler}
            {...restProps}
        >
            {@render children?.()}
        </select>
        {#if vState}
            <div class="s-input-icon">
                {#if vState === "error"}
                    <Icon src={IconAlertCircle} />
                {:else if vState === "success"}
                    <Icon src={IconCheckmark} />
                {:else}
                    <Icon src={IconAlert} />
                {/if}
            </div>
        {/if}
    </div>

    {#if message}
        <p class="s-input-message" id={`${id}-message`}>
            {@render message()}
        </p>
    {/if}
</div>
