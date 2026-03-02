<script module lang="ts">
    export type Variant = "" | "success" | "warning" | "danger";
    export type Size = "" | "sm";
</script>

<script lang="ts">
    interface Props {
        /**
         * Screen reader text for accessibility
         */
        label: string;

        /**
         * Color variant of the indicator
         */
        variant?: Variant;

        /**
         * Size variant of the indicator
         */
        size?: Size;

        /**
         * Optional simple text/number content for the indicator (e.g., "3", "new")
         * Note: content is ignored when size is "sm"
         */
        content?: string | number;

        /**
         * Additional CSS classes added to the element
         */
        class?: string;
    }

    const {
        label,
        variant = "",
        size = "",
        content,
        class: className = "",
    }: Props = $props();

    const getClasses = (
        className: string,
        variant: Variant,
        size: Size
    ): string => {
        const base = "s-activity-indicator";
        let classes = base;

        if (variant) {
            classes += ` ${base}__${variant}`;
        }

        if (size) {
            classes += ` ${base}__${size}`;
        }

        if (className) {
            classes += ` ${className}`;
        }

        return classes;
    };

    const classes = $derived(getClasses(className, variant, size));
</script>

<div class={classes}>
    {#if content && size !== "sm"}{content}{/if}
    <div class="v-visible-sr">{label}</div>
</div>
