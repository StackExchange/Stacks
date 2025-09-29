<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import ExpandingInput from "./ExpandingInput.svelte";
    import type { Variant } from "./ExpandingInput.svelte";

    const ExpandingInputVariants: Variant[] = ["default", "chat"];

    const { Story } = defineMeta({
        title: "Components/ExpandingInput",
        component: ExpandingInput,
        argTypes: {
            variant: {
                control: "select",
                options: ExpandingInputVariants,
            },
            placeholder: { table: { disable: true }, control: false },
        },
    });
</script>

<Story name="Base">
    {#snippet template(args)}
        <ExpandingInput placeholder="Enter your text here…" {...args} />
    {/snippet}
</Story>

<Story name="Variants" asChild>
    <h2 class="fs-title ff-mono ta-center mb32">Variants</h2>
    <div class="d-flex fd-column gy32">
        {#each ExpandingInputVariants as variant (variant)}
            <div class="d-flex fd-column ai-center gy24">
                <ExpandingInput
                    id={variant}
                    {variant}
                    placeholder="Enter your text here…"
                />
                <p class="fw-bold tt-capitalize">
                    {variant}
                </p>
            </div>
        {/each}
    </div>
</Story>
