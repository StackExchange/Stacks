<script lang="ts" module>
    import Notice, { type Variant } from "./Notice.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { parseClassValue } from "../../storybook-utils";
    import NoticeAction from "./NoticeAction.svelte";

    const NoticeVariants: Variant[] = [
        "",
        "info",
        "warning",
        "danger",
        "success",
        "featured",
        "activity",
    ];

    const titleCase = (str: string) => {
        return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
            return match.toUpperCase();
        });
    };

    const { Story } = defineMeta({
        title: "Components/Notice",
        component: Notice,
        // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
        subcomponents: { NoticeAction },
        argTypes: {
            variant: {
                control: "select",
                options: NoticeVariants,
            },
            role: {
                control: "text",
            },
            onDismiss: {
                control: false,
            },
            class: {
                control: "text",
            },
        },
    });
</script>

{#snippet content()}
    I am a notice
{/snippet}

{#snippet dismissibleContent()}
    I am a dismissible notice
{/snippet}

<Story name="Base">
    {#snippet template({ class: classArg, children: _storyChildren, ...args }) /* eslint-disable-line @typescript-eslint/no-unused-vars */}
        <Notice
            {...args}
            class={parseClassValue(
                typeof classArg === "string" ? classArg : undefined
            )}
            children={content}
        />
    {/snippet}
</Story>

<Story name="Dismissible">
    {#snippet template({ class: classArg, children: _storyChildren, ...args }) /* eslint-disable-line @typescript-eslint/no-unused-vars */}
        <Notice
            {...args}
            class={parseClassValue(
                typeof classArg === "string" ? classArg : undefined
            )}
            dismissible
            onDismiss={() => {
                alert("You clicked dismiss");
            }}
            children={dismissibleContent}
        />
    {/snippet}
</Story>

<Story name="Variants" asChild>
    <div class="d-flex fd-column g64">
        {#each NoticeVariants as variant (variant)}
            <div>
                <h2 class="fs-title ff-mono mb16">
                    {titleCase(variant || "Default")}
                </h2>
            </div>
            <table class="s-table s-table__bx-simple wmx7">
                <thead>
                    <tr>
                        <th scope="col" class="s-table--cell2">Base</th>
                        <th scope="col" class="s-table--cell2"
                            >Base important</th
                        >
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {#each [false, true] as important (important)}
                            <td>
                                <Notice {variant} {important}>
                                    <span>I am a notice</span>
                                </Notice>
                            </td>
                        {/each}
                    </tr>
                </tbody>
            </table>
        {/each}
    </div>
</Story>

<Story name="Actions" asChild>
    <Notice variant="info">
        <span>I am a notice with a Custom Action</span>
        {#snippet actions()}
            <NoticeAction
                class="pr8"
                onclick={() => {
                    alert("You triggered a custom action");
                }}>Click me</NoticeAction
            >
        {/snippet}
    </Notice>
</Story>
