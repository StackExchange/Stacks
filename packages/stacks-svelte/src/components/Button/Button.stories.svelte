<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Button from "./Button.svelte";
    import type { Brand, Size, Variant, Weight } from "./Button.svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconTrash } from "@stackoverflow/stacks-icons/icons";

    const ButtonBrands: Brand[] = ["", "facebook", "github", "google"];
    const ButtonSizes: Size[] = ["", "xs", "sm", "lg"];
    const ButtonVariants: Variant[] = ["", "danger", "featured", "tonal"];
    const ButtonWeights: Weight[] = ["", "clear"];

    const titleCase = (str: string) => {
        return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
            return match.toUpperCase();
        });
    };

    const { Story } = defineMeta({
        title: "Components/Button",
        component: Button,
        argTypes: {
            branding: {
                control: "select",
                options: ButtonBrands,
            },
            size: {
                control: "select",
                options: ButtonSizes,
            },
            variant: {
                control: "select",
                options: ButtonVariants,
            },
            weight: {
                control: "select",
                options: ButtonWeights,
            },
            children: {
                control: "text",
            },
        },
    });
</script>

<Story name="Base">
    {#snippet template({ children, ...args })}
        <Button {...args}>{children ?? "Ask question"}</Button>
    {/snippet}
</Story>

<Story name="Variants" asChild>
    <div class="d-flex fd-column g64">
        {#each ButtonVariants as variant (variant)}
            <div>
                <h2 class="fs-title ff-mono mb16">
                    {titleCase(variant || "Secondary")}
                </h2>

                <table class="s-table s-table__bx-simple wmx7">
                    <thead>
                        <tr>
                            <th scope="col" class="s-table--cell4">Weight</th>
                            <th scope="col" class="ta-center">Default</th>
                            <th scope="col" class="ta-center">Selected</th>
                            <th scope="col" class="ta-center">Disabled</th>
                        </tr>
                    </thead>

                    <tbody>
                        {#each ButtonWeights as weight (weight)}
                            {#if !(weight === "clear" && (variant === "featured" || variant === "tonal"))}
                                <tr>
                                    <th scope="row" class="va-middle">
                                        {titleCase(weight || "default")}
                                    </th>
                                    {#each [null, "selected", "disabled"] as state (state)}
                                        <td class="va-middle ta-center px4">
                                            <Button
                                                {weight}
                                                selected={state === "selected"}
                                                disabled={state === "disabled"}
                                                {variant}
                                            >
                                                Ask question
                                            </Button>
                                        </td>
                                    {/each}
                                </tr>
                            {/if}
                        {/each}
                    </tbody>
                </table>
            </div>
        {/each}
    </div>
</Story>

<Story name="Loading" asChild>
    <div class="d-flex fd-column g64">
        <div>
            <table class="s-table s-table__bx-simple wmx7">
                <thead>
                    <tr>
                        <th scope="col" class="s-table--cell2">Variant</th>
                        <th scope="col" class="s-table--cell2">Weight</th>
                        <th scope="col" class="ta-center">Default</th>
                        <th scope="col" class="ta-center">Selected</th>
                        <th scope="col" class="ta-center">Disabled</th>
                    </tr>
                </thead>

                <tbody>
                    {#each ButtonVariants as variant (variant)}
                        {#each ButtonWeights as weight (weight)}
                            {#if !(weight === "clear" && (variant === "featured" || variant === "tonal"))}
                                <tr>
                                    <th scope="row" class="va-middle">
                                        {titleCase(variant || "secondary")}
                                    </th>
                                    <th scope="row" class="va-middle">
                                        {titleCase(weight || "base")}
                                    </th>
                                    {#each [null, "selected", "disabled"] as state (state)}
                                        <td class="va-middle ta-center px4">
                                            <Button
                                                loading={true}
                                                {weight}
                                                selected={state === "selected"}
                                                disabled={state === "disabled"}
                                                {variant}
                                            >
                                                Ask question
                                            </Button>
                                        </td>
                                    {/each}
                                </tr>
                            {/if}
                        {/each}
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</Story>

<Story name="Dropdown" asChild>
    <div class="d-flex fd-column g64">
        <div>
            <table class="s-table s-table__bx-simple wmx7">
                <thead>
                    <tr>
                        <th scope="col" class="s-table--cell2">Variant</th>
                        <th scope="col" class="s-table--cell2">Weight</th>
                        <th scope="col" class="ta-center">Default</th>
                        <th scope="col" class="ta-center">Selected</th>
                        <th scope="col" class="ta-center">Disabled</th>
                    </tr>
                </thead>

                <tbody>
                    {#each ButtonVariants as variant (variant)}
                        {#each ButtonWeights as weight (weight)}
                            {#if !(weight === "clear" && (variant === "featured" || variant === "tonal"))}
                                <tr>
                                    <th scope="row" class="va-middle">
                                        {titleCase(variant || "secondary")}
                                    </th>
                                    <th scope="row" class="va-middle">
                                        {titleCase(weight || "base")}
                                    </th>
                                    <td class="va-middle ta-center px4">
                                        <Button dropdown {weight} {variant}>
                                            Ask question
                                        </Button>
                                    </td>
                                    <td class="va-middle ta-center px4">
                                        <Button
                                            dropdown
                                            {weight}
                                            selected
                                            {variant}
                                        >
                                            Ask question
                                        </Button>
                                    </td>
                                    <td class="va-middle ta-center px4">
                                        <Button
                                            dropdown
                                            {weight}
                                            disabled
                                            {variant}
                                        >
                                            Ask question
                                        </Button>
                                    </td>
                                </tr>
                            {/if}
                        {/each}
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</Story>

<Story name="Badges" asChild>
    <div class="d-flex fd-column g64">
        <div>
            <table class="s-table s-table__bx-simple wmx7">
                <thead>
                    <tr>
                        <th scope="col" class="s-table--cell2">Variant</th>
                        <th scope="col" class="s-table--cell2">Weight</th>
                        <th scope="col" class="ta-center">Default</th>
                        <th scope="col" class="ta-center">Selected</th>
                        <th scope="col" class="ta-center">Disabled</th>
                    </tr>
                </thead>

                <tbody>
                    {#each ButtonVariants as variant (variant)}
                        {#each ButtonWeights as weight (weight)}
                            {#if !(weight === "clear" && (variant === "featured" || variant === "tonal"))}
                                {#snippet badge()}
                                    198
                                {/snippet}
                                <tr>
                                    <th scope="row" class="va-middle">
                                        {titleCase(variant || "secondary")}
                                    </th>
                                    <th scope="row" class="va-middle">
                                        {titleCase(weight || "base")}
                                    </th>
                                    {#each [null, "selected", "disabled"] as state (state)}
                                        <td class="va-middle ta-center px4">
                                            <Button
                                                {weight}
                                                selected={state === "selected"}
                                                disabled={state === "disabled"}
                                                {variant}
                                                {badge}
                                            >
                                                Ask question
                                            </Button>
                                        </td>
                                    {/each}
                                </tr>
                            {/if}
                        {/each}
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</Story>

<Story name="Sizes" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Size</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each ButtonSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {titleCase(size || "base")}
                        </th>
                        <td class="va-middle px4">
                            <Button {size}>Ask question</Button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Additional styles" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row" class="va-middle">Icon</th>
                    <td class="va-middle px4">
                        <Button icon variant="danger">
                            <Icon src={IconTrash} />
                            Ask question
                        </Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">Link</th>
                    <td class="va-middle px4">
                        <Button link>Ask question</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">Unset</th>
                    <td class="va-middle px4">
                        <Button unset>Ask question</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>
