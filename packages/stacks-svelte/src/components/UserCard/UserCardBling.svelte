<script lang="ts" module>
    export type BlingType = "rep" | "gold" | "silver" | "bronze";
</script>

<script lang="ts">
    import Bling from "../Bling/Bling.svelte";
    interface Props {
        /**
         * The type of bling
         */
        type: BlingType;

        /**
         * The accessible text provided for screen readers
         */
        name: string;

        /**
         * The text to display next to the bling
         */
        text: string | number;
    }
    const { type, name, text }: Props = $props();
</script>

<li class={type === "rep" ? "s-user-card--rep" : ""}>
    <Bling {name} {type} size="sm" />
    {text}
</li>
