<script module lang="ts">
    import type { Snippet } from "svelte";

    export type State = "" | "error" | "success" | "warning";
    export type Type = "checkbox" | "radio";

    export type CheckGroupProps = {
        /**
         * The label text for the legend element
         */
        label: string;

        /**
         * The type of check group
         */
        type: Type;

        /**
         * Sets the disabled state of the fieldset
         */
        disabled?: boolean;

        /**
         * Applies the horizontal layout to check controls
         */
        horizontal?: boolean;

        /**
         * The validation state of the fieldset
         */
        state?: State;

        /**
         * Additional CSS classes added to the check group container
         */
        class?: string;

        /**
         * Snippet for the check content
         */
        children: Snippet;
    };
</script>

<script lang="ts">
    type Props = CheckGroupProps;

    const {
        label,
        type,
        disabled = false,
        horizontal = false,
        state = "",
        class: className = "",
        children,
    }: Props = $props();

    const getClasses = (
        className: string,
        horizontal: boolean,
        state: State,
        type: Type
    ) => {
        const base = `s-${type}-group`;
        let classes = base;

        if (className) {
            classes += " " + className;
        }

        if (horizontal) {
            classes += ` ${base}__horizontal`;
        }

        if (state) {
            classes += ` has-${state}`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, horizontal, state, type));
</script>

<fieldset class={classes} {disabled}>
    <legend class="s-label">{label}</legend>
    {@render children()}
</fieldset>
