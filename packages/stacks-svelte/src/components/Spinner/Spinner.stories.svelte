<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Spinner, { type Size } from "./Spinner.svelte";

    const SpinnerSizes: Size[] = ["", "xs", "sm", "md", "lg"];

    const { Story } = defineMeta({
        title: "Components/Spinner",
        component: Spinner,
        argTypes: {
            size: {
                control: "select",
                options: SpinnerSizes,
            },
        },
    });
</script>

<Story name="Base" />

<Story name="Sizes" asChild>
    <h2 class="fs-title ff-mono ta-center mb32">Sizes</h2>
    <div class="d-flex fw-wrap sm:fd-column g16 flex__allitems4">
        {#each SpinnerSizes as size (size)}
            <div class="d-flex fd-column ai-center">
                <Spinner {size} />
                <p>{size}</p>
            </div>
        {/each}
    </div>
</Story>

<Story name="Label" args={{ label: "Saving your changes…" }} />
<Story name="Class" args={{ class: "fc-theme-primary-500" }} />
