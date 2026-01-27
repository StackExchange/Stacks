<script module lang="ts">
    export type Size = undefined | "sm" | "lg";
    export type Variant = "block";
</script>

<script lang="ts">
    import Icon from "../Icon/Icon.svelte";
    import { SpotLoading } from "@stackoverflow/stacks-icons/spots";

    interface Props {
        /**
         * The accessible label for screen readers
         */
        label?: string;

        /**
         * The size of the spinner
         */
        size?: Size;

        /**
         * The variant of the loader
         */
        variant?: Variant;
    }

    const {
        label = "Loading…",
        size = undefined,
        variant = "block",
    }: Props = $props();

    const getClasses = (variant: Variant, size: Size) => {
        const base = `s-loader--${variant}`;
        let classes = base;

        if (size) {
            classes += ` ${base}__${size}`;
        }
        return classes;
    };

    const classes = $derived(getClasses(variant, size));
</script>

<div class={classes}>
    <div class="v-visible-sr">{label}</div>
    <Icon src={SpotLoading} native />
</div>
