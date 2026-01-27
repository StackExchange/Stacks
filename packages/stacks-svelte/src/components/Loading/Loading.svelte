<script module lang="ts">
    export type Size = undefined | "sm" | "lg";
</script>

<script lang="ts">
    interface Props {
        /**
         * The accessible label for screen readers
         */
        label?: string;

        /**
         * The size of the spinner
         */
        size?: Size;
    }

    const { label = "Loading…", size = undefined }: Props = $props();

    const getClasses = (size: Size) => {
        const base = `s-loading`;
        let classes = base;

        if (size) {
            classes += ` ${base}__${size}`;
        }
        return classes;
    };

    const classes = $derived(getClasses(size));
</script>

<div class={classes}>
    <div class="s-loading--block"></div>
    <div class="v-visible-sr">{label}</div>
</div>
