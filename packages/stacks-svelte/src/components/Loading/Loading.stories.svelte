<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Loading, { type Size } from "./Loading.svelte";

    const LoadingSizes: Size[] = [undefined, "sm", "lg"];

    const { Story } = defineMeta({
        title: "Components/Loading",
        component: Loading,
        argTypes: {
            size: {
                control: "select",
                options: LoadingSizes,
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
                {#each LoadingSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {size || "default"}
                        </th>
                        <td class="va-middle px4">
                            <div class="d-inline-flex">
                                <Loading {size} />
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>
