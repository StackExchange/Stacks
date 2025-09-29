<!-- NOTE: This component is not currently exposed to the consumer and is only used internally. -->
<script module lang="ts">
    export type Size = "" | "sm" | "md" | "lg" | "xl";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /**
         * The id of the associated input to be used as the `for` attribute of the label
         */
        id: string;

        /**
         * The size of the label
         */
        size?: Size;

        /**
         * Shows optional status
         */
        optional?: boolean;

        /**
         * Shows required status
         */
        required?: boolean;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

        /**
         * Localized translation for the optional text
         */
        i18nOptionalText?: string;

        /**
         * Localized translation for the required text
         */
        i18nRequiredText?: string;

        /**
         * Snippet containing the label text
         */
        children: Snippet;
    }

    const {
        id,
        size = "",
        optional = false,
        required = false,
        class: className = "",
        i18nOptionalText = "Optional",
        i18nRequiredText = "Required",
        children,
    }: Props = $props();

    const getClasses = (className: string, size: Size) => {
        const base = "s-label";
        let classes = base;

        if (className) {
            classes += " " + className;
        }

        if (size) {
            classes += ` ${base}__${size}`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, size));
</script>

<label class={classes} for={id}>
    {@render children()}
    {#if optional}
        <span class="s-label--status">{i18nOptionalText}</span>
    {/if}{#if required}
        <abbr class="s-required-symbol" title={i18nRequiredText}>*</abbr>
    {/if}
</label>
