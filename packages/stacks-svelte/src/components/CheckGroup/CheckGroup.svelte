<script module lang="ts">
    export type State = "" | "error" | "success" | "warning";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * The label text for the legend element
         */
        label: string;

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
         * Additional CSS classes added to the check control container
         */
        class?: string;

        /**
         * Snippet for the badge content
         */
        children: Snippet;
    }

    const {
        label,
        disabled = false,
        horizontal = false,
        state = "",
        class: className = "",
        children,
    }: Props = $props();

    const getClasses = (
        className: string,
        horizontal: boolean,
        state: State
    ) => {
        const base = "s-check-group";
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

    const classes = $derived(getClasses(className, horizontal, state));
</script>

<fieldset class={classes} {disabled}>
    <legend class="s-label">{label}</legend>
    {@render children()}
</fieldset>
