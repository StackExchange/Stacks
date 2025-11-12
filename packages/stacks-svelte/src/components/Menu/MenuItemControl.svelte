<script module lang="ts">
    export type ControlType = "radio" | "checkbox";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLLabelAttributes } from "svelte/elements";

    interface Props extends Omit<HTMLLabelAttributes, "for" | "class"> {
        /**
         * The type of control: "radio" or "checkbox"
         */
        type: ControlType;

        /**
         * The id of the input element (also used for the label's for attribute)
         */
        id: string;

        /**
         * The name attribute for the input element
         */
        name: string;

        /**
         * Whether the input is checked
         */
        checked?: boolean;

        /**
         * Whether the input is disabled
         */
        disabled?: boolean;

        /**
         * Snippet for the label text (wrapped in s-label div)
         */
        label: Snippet;

        /**
         * Optional snippet for the description text (wrapped in s-description div)
         */
        description?: Snippet;

        /**
         * Additional CSS classes added to the label element
         */
        class?: string;
    }

    let {
        type,
        id,
        name,
        checked = false,
        disabled = false,
        label,
        description,
        class: className = "",
        ...restProps
    }: Props = $props();

    const getItemClasses = (className: string) => {
        let classes = "s-menu--item s-check-control";
        if (className) {
            classes += ` ${className}`;
        }
        return classes;
    };

    const getInputClass = (type: ControlType) => {
        return type === "radio" ? "s-radio" : "s-checkbox";
    };

    const getRole = (type: ControlType) => {
        return type === "radio" ? "menuitemradio" : "menuitemcheckbox";
    };

    const itemClasses = $derived(getItemClasses(className));
    const inputClass = $derived(getInputClass(type));
    const role = $derived(getRole(type));
</script>

<label class={itemClasses} for={id} {...restProps}>
    <input class={inputClass} {type} {name} {id} {checked} {disabled} {role} />
    <div>
        <div class="s-label">
            {@render label()}
        </div>
        {#if description}
            <div class="s-description mt2">
                {@render description()}
            </div>
        {/if}
    </div>
</label>
