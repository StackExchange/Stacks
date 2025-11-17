<!-- NOTE: This component is not currently exposed to the consumer and is only used internally. It has been hidden from the Storybook docs with the `tags` meta property. -->
<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import {
        IconArchiveSm,
        IconCheckmarkSm,
        IconEyeSm,
        IconFilter,
        IconNotInterestedSm,
        IconPencilSm,
        IconTackSm,
        IconTrashSm,
    } from "@stackoverflow/stacks-icons-legacy/icons";
    import Badge, { type Award, type Size, type Variant } from "./Badge.svelte";

    const BadgeVariantGroups: {
        awards: Award[];
        counts: Variant[];
        states: Variant[];
        users: Variant[];
    } = {
        awards: ["gold", "silver", "bronze"],
        tags: ["gold", "silver", "bronze"],
        counts: ["answered", "bounty", "important", "rep", "rep-down", "votes"],
        states: ["danger", "info", "new", "muted", "warning"],
        users: ["admin", "moderator", "staff", "ai", "bot"],
    };
    const BadgeAwards: Award[] = [...BadgeVariantGroups.awards, undefined];
    const BadgeSizes: Size[] = ["sm", "lg", undefined];
    const BadgeVariants: Variant[] = [
        ...BadgeVariantGroups.counts,
        ...BadgeVariantGroups.states,
        ...BadgeVariantGroups.users,
        "tag",
        undefined,
    ];

    const { Story } = defineMeta({
        title: "Components/Badge",
        component: Badge,
        // tags: ["!autodocs", "!dev"], // This hides the stories and link in sidebar
        argTypes: {
            award: {
                control: "select",
                options: BadgeAwards,
            },
            size: {
                control: "select",
                options: BadgeSizes,
            },
            variant: {
                control: "select",
                options: BadgeVariants,
            },
        },
    });
</script>

<Story name="Base">
    {#snippet template({ children, ...args })}
        <Badge {...args}>{children ?? "1.23k"}</Badge>
    {/snippet}
</Story>

<Story name="Awards" asChild>
    <div class="d-flex fd-column g64">
        {#each [false, true] as includeVariant (includeVariant)}
            <div>
                <h2 class="fs-title ff-mono mb16">
                    {includeVariant ? "Award + tag variant" : "Award only"}
                </h2>
                <table class="s-table s-table__bx-simple wmx7">
                    <thead>
                        <tr>
                            <th scope="col">Award</th>
                            {#if includeVariant}
                                <th scope="col">Variant</th>
                            {/if}
                            <th scope="col">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each BadgeVariantGroups.tags as award (award)}
                            <tr>
                                <th scope="row" class="va-middle">
                                    {award}
                                </th>
                                {#if includeVariant}
                                    <th scope="row" class="va-middle"> tag </th>
                                {/if}
                                <td class="va-middle px8">
                                    <Badge
                                        {award}
                                        variant={includeVariant
                                            ? "tag"
                                            : undefined}
                                    >
                                        {#if award === "gold"}
                                            {#if includeVariant}python{:else}Great
                                                Question{/if}
                                        {:else if award === "silver"}
                                            {#if includeVariant}css{:else}Favorite
                                                Question{/if}
                                        {:else if award === "bronze"}
                                            {#if includeVariant}javascript{:else}Altruist{/if}
                                        {/if}
                                    </Badge>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {/each}
    </div>
</Story>

<Story name="Icon" asChild>
    <Badge icon={IconFilter}>Filtered</Badge>
</Story>

<Story name="Counts" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Variant</th>
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each BadgeVariantGroups.counts as variant (variant)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {variant}
                        </th>
                        <td class="va-middle px8">
                            {#if variant === "answered"}
                                <Badge {variant}>154</Badge>
                            {:else if variant === "bounty"}
                                <Badge {variant}>100</Badge>
                            {:else if variant === "important"}
                                <Badge {variant}>99+</Badge>
                            {:else if variant === "new"}
                                <Badge {variant}>New</Badge>
                            {:else if variant === "rep"}
                                <Badge {variant}>15</Badge>
                            {:else if variant === "rep-down"}
                                <Badge {variant}>-2</Badge>
                            {:else if variant === "votes"}
                                <Badge {variant}>15</Badge>
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="States" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Variant</th>
                    <th scope="col">Filled</th>
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each BadgeVariantGroups.states as variant (variant)}
                    <tr>
                        <th scope="row" class="va-middle">{variant}</th>
                        <th scope="row" class="va-middle">false</th>
                        <td class="va-middle px8">
                            {#if variant === "danger"}
                                <Badge {variant} icon={IconNotInterestedSm}>
                                    Closed
                                </Badge>
                            {:else if variant === "info"}
                                <Badge {variant} icon={IconPencilSm}>
                                    Draft
                                </Badge>
                            {:else if variant === "new"}
                                <Badge {variant}>New</Badge>
                            {:else if variant === "muted"}
                                <Badge {variant} icon={IconArchiveSm}>
                                    Archived
                                </Badge>
                            {:else if variant === "warning"}
                                <Badge {variant} icon={IconEyeSm}>Review</Badge>
                            {/if}
                        </td>
                    </tr>
                {/each}
                <tr>
                    <th scope="row" class="va-middle">answered</th>
                    <th scope="row" class="va-middle">false</th>
                    <td class="va-middle px8">
                        <Badge variant="answered" icon={IconCheckmarkSm}>
                            Accepted answer
                        </Badge>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">danger</th>
                    <th scope="row" class="va-middle">true</th>
                    <td class="va-middle px8">
                        <Badge variant="danger" filled icon={IconTrashSm}>
                            Deleted
                        </Badge>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">muted</th>
                    <th scope="row" class="va-middle">true</th>
                    <td class="va-middle px8">
                        <Badge variant="muted" filled icon={IconTackSm}>
                            Pinned
                        </Badge>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>

<Story name="Users" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Variant</th>
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each BadgeVariantGroups.users as variant (variant)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {variant}
                        </th>
                        <td class="va-middle px8">
                            {#if variant === "admin"}
                                <Badge {variant}>Admin</Badge>
                            {:else if variant === "moderator"}
                                <Badge {variant}>Moderator</Badge>
                            {:else if variant === "staff"}
                                <Badge {variant}>Staff</Badge>
                            {:else if variant === "ai"}
                                <Badge {variant}>AI</Badge>
                            {:else if variant === "bot"}
                                <Badge {variant}>Bot</Badge>
                            {/if}
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
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each BadgeSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {size || "default"}
                        </th>
                        <td class="va-middle px8">
                            <Badge {size}>{size || "default"}</Badge>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>
