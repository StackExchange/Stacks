<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Icon from "../Icon/Icon.svelte";
    import Button from "../Button/Button.svelte";
    import { IconNotification } from "@stackoverflow/stacks-icons/icons";
    import ActivityIndicator, {
        type Variant,
        type Size,
    } from "./ActivityIndicator.svelte";

    const ActivityIndicatorVariants: Variant[] = [
        "",
        "success",
        "warning",
        "danger",
    ];
    const ActivityIndicatorSizes: Size[] = ["", "sm"];

    const { Story } = defineMeta({
        title: "Components/ActivityIndicator",
        component: ActivityIndicator,
        argTypes: {
            variant: {
                control: "select",
                options: ActivityIndicatorVariants,
            },
            size: {
                control: "select",
                options: ActivityIndicatorSizes,
            },
        },
    });
</script>

<Story name="Base" args={{ label: "New activities", content: 99 }} />

<Story name="Variants" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Variant</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each ActivityIndicatorVariants as variant (variant)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {variant || "default"}
                        </th>
                        <td class="va-middle px4">
                            <ActivityIndicator
                                label="{variant || 'default'} activity"
                                {variant}
                                content={3}
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
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
                {#each ActivityIndicatorSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {size || "default"}
                        </th>
                        <td class="va-middle px4">
                            <ActivityIndicator
                                label="{size || 'default'} size activity"
                                {size}
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Content types" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Content</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row" class="va-middle">Number (3)</th>
                    <td class="va-middle px4">
                        <ActivityIndicator
                            label="3 new activities"
                            content={3}
                        />
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">Number (12)</th>
                    <td class="va-middle px4">
                        <ActivityIndicator
                            label="12 new activities"
                            content={12}
                        />
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">Number (370)</th>
                    <td class="va-middle px4">
                        <ActivityIndicator
                            label="370 new activities"
                            content={370}
                        />
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">Text ("new")</th>
                    <td class="va-middle px4">
                        <ActivityIndicator label="New activity" content="new" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>

<Story name="With Custom Classes" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Content</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row" class="va-middle">Notifications</th>
                    <td class="va-middle px4 d-flex g16">
                        <Button
                            aria-label="Notifications"
                            link
                            class="fc-black-400 h:fc-black-500 f:fc-black-500"
                        >
                            <div class="ps-relative">
                                <Icon src={IconNotification} />
                                <ActivityIndicator
                                    label="New notifications"
                                    variant="danger"
                                    size="sm"
                                    class="ps-absolute tn4 rn4 ba baw2 bc-white box-content"
                                />
                            </div>
                        </Button>
                        <Button
                            aria-label="Notifications"
                            link
                            class="fc-black-400 h:fc-black-500 f:fc-black-500"
                        >
                            <div class="ps-relative">
                                <Icon src={IconNotification} />
                                <div
                                    class="ps-absolute ba baw2 bc-white bar-pill lh-xs tn8 rn8"
                                >
                                    <ActivityIndicator
                                        label="New notifications"
                                        variant="danger"
                                        content="1"
                                    />
                                </div>
                            </div>
                        </Button>
                        <Button
                            aria-label="Notifications"
                            link
                            class="fc-black-400 h:fc-black-500 f:fc-black-500"
                        >
                            <div class="ps-relative">
                                <Icon src={IconNotification} />
                                <div
                                    class="ps-absolute ba baw2 bc-white bar-pill lh-xs tn8 rn8"
                                >
                                    <ActivityIndicator
                                        label="New notifications"
                                        variant="danger"
                                        content="99"
                                    />
                                </div>
                            </div>
                        </Button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>
