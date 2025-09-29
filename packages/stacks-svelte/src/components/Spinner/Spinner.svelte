<script module lang="ts">
    export type Size = "" | "xs" | "sm" | "md" | "lg";
</script>

<script lang="ts">
    /**
     * The accessible label for screen readers
     */
    export let label = "Loading…";

    /**
     * The size of the spinner
     */
    export let size: Size = "";

    /**
     * Additional CSS classes added to the element
     */
    let className = "";
    export { className as class };

    $: classes = getClasses(className, size);

    const getClasses = (className: string, size: string) => {
        let classes = "s-spinner";

        if (className) {
            classes += " " + className;
        }

        if (size) {
            classes += " s-spinner__" + size;
        }

        return classes;
    };
</script>

<div class={classes}>
    <div class="v-visible-sr">{label}</div>
</div>
