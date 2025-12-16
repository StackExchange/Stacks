<script module lang="ts">
    export type Variant = "default" | "chat";
</script>

<script lang="ts">
    interface Props {
        /**
         * The id to pair with a label
         * @type {string} Id
         */
        id: string;

        /**
         * The input's variant
         * @type {"default" | "chat"} Variant
         */
        variant?: Variant;

        /**
         * Initial value to pass to input
         */
        value?: string;
    }

    let { id, variant = "default", value = "" }: Props = $props();

    const getClasses = (variant: string) => {
        let common = "s-textarea ws-pre-wrap break-word hmx3 lh-lg";
        let textarea = `${common} ps-absolute i0 h100`;
        let grower = `${common} v-hidden overflow-hidden`;

        if (variant === "chat") {
            let chatCommon = " py12 pr64 hmn48";
            textarea += chatCommon;
            grower += chatCommon;
        }

        return { textarea, grower };
    };
    let classes = $derived(getClasses(variant));
</script>

<div class="d-flex ai-center ps-relative w100">
    <textarea class={classes.textarea} rows="1" bind:value {id}></textarea>
    <pre class={classes.grower} aria-hidden="true">{value}<br /></pre>
</div>

<style>
    .hmn48 {
        min-height: 48px;
    }
    textarea {
        resize: none;
    }
</style>
