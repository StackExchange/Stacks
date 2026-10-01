<script lang="ts" module>
    import Notice, { type Variant } from "./Notice.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { parseClassValue } from "../../storybook-utils";
    import NoticeAction from "./NoticeAction.svelte";
    import { IconInfo } from "@stackoverflow/stacks-icons/icons";

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
            icon: {
                control: "text",
                description:
                    "Trusted SVG string to use instead of the variant icon. Untitled icons are decorative.",
            },
            iconTitle: {
                control: "text",
                description:
                    "Accessible icon title. Default icons use the variant title; custom icons are decorative when this is omitted or empty.",
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
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
    {#snippet template({ class: classArg, children: _storyChildren, ...args })}
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
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
    {#snippet template({ class: classArg, children: _storyChildren, ...args })}
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

<Story name="Custom icon" args={{ icon: IconInfo }}>
    {#snippet template({ children: _storyChildren, ...args })}
        <div class="d-flex fd-column g8">
            <Notice {...args}>
                <span>A neutral notice with a custom info icon</span>
            </Notice>
            <p>
                Custom icons replace only the icon source. Keep the established
                icon pairings for semantic variants, and provide <code
                    >iconTitle</code
                > when a custom icon conveys meaning; otherwise it is decorative.
            </p>
        </div>
    {/snippet}
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
