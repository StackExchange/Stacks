<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Loader, { type Size, type Variant } from "./Loader.svelte";

    const LoaderSizes: Size[] = [undefined, "sm", "lg"];
    const LoaderVariants: Variant[] = ["block"];

    const { Story } = defineMeta({
        title: "Components/Loader",
        component: Loader,
        argTypes: {
            size: {
                control: "select",
                options: LoaderSizes,
            },
            variant: {
                control: "select",
                options: LoaderVariants,
            },
        },
    });
</script>

<Story name="Base" args={{ label: "Loading…" }} />

<Story name="Sizes" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Sizes</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each LoaderSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {size || "default"}
                        </th>
                        <td class="va-middle px4">
                            <div class="d-inline-flex">
                                <Loader {size} />
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Variants" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Variants</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each LoaderVariants as variant (variant)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {variant}
                        </th>
                        <td class="va-middle px4">
                            <div class="d-inline-flex">
                                <Loader {variant} />
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>
