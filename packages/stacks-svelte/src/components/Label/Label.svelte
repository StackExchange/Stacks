<!-- NOTE: This component is not currently exposed to the consumer and is only used internally. -->
<script module lang="ts">
    export type Size = "" | "sm" | "lg";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import type { BadgeState } from "../Badge/Badge.svelte";
    import Badge from "../Badge/Badge.svelte";

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
         * Shows required symbol
         */
        required?: boolean;

        /**
         * The type of status to display
         */
        status?: BadgeState;

        /**
         * The text to display for the status
         */
        statusText?: string;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;

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
        required = false,
        status,
        statusText = undefined,
        class: className = "",
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
    {#if required}
        <abbr class="s-required-symbol" title={i18nRequiredText}>*</abbr>
    {/if}
    {#if statusText}
        <Badge type="state" state={status} text={statusText} />
    {/if}
</label>
