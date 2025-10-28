<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { createRawSnippet } from "svelte";
    import Tag from "../Tag/Tag.svelte";
    import UserCard, { type Size } from "./UserCard.svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconStarVerifiedSm } from "@stackoverflow/stacks-icons-legacy/icons";

    const createSnippet = (markup = "") =>
        createRawSnippet(() => ({
            render: () => markup,
        }));

    const UserCardSizes: (Size | undefined)[] = [
        undefined,
        "full",
        "small",
        "minimal",
    ];

    const baseArgs = {
        avatar: "https://picsum.photos/128",
        href: "#",
        name: "Josephine Doe",
        timestamp: "asked 2 hours ago",
        reputation: "1,226",
        gold: 12,
        silver: 23,
        bronze: 86,
    };

    const { Story } = defineMeta({
        title: "Components/UserCard",
        component: UserCard,
        argTypes: {
            size: {
                control: "select",
                options: UserCardSizes,
            },
            tags: {
                control: "select",
                options: ["no tags", "tags"],
                mapping: {
                    "no tags": "",
                    "tags": '<a href="#" class="s-tag s-tag__xs">javascript</a>',
                },
            },
            type: {
                control: "select",
                options: ["no type", "type"],
                mapping: {
                    "no type": "",
                    "type": `<span>${IconStarVerifiedSm} Recognized by Hum</span>`,
                },
            },
        },
    });
</script>

<Story name="Base" args={baseArgs}>
    {#snippet template(args)}
        {@const { tags, type, ...restArgs } = args}
        <UserCard
            tags={tags && createSnippet(tags as unknown as string)}
            type={type && createSnippet(type as unknown as string)}
            {...restArgs}
        />
    {/snippet}
</Story>

<Story name="Badges" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Sizes</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each ["admin", "moderator", "staff"] as badge (badge)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {badge}
                        </th>
                        <td class="va-middle px4">
                            <UserCard
                                {...baseArgs}
                                admin={badge === "admin"}
                                moderator={badge === "moderator"}
                                staff={badge === "staff"}
                            />
                        </td>
                    </tr>
                {/each}
                <tr>
                    <th scope="row" class="va-middle"> all </th>
                    <td class="va-middle px4">
                        <UserCard {...baseArgs} admin moderator staff />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>

<Story name="Deleted" asChild>
    <div class="d-inline-flex">
        <UserCard {...baseArgs} deleted />
    </div>
</Story>

<Story name="Highlighted" asChild>
    <div class="d-inline-flex">
        <UserCard {...baseArgs} highlighted />
    </div>
</Story>

<Story name="Role and location" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Property</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each ["role", "location", "both"] as prop (prop)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {prop}
                        </th>
                        <td class="va-middle px4">
                            <UserCard
                                {...baseArgs}
                                size="full"
                                location={prop === "location" || prop === "both"
                                    ? "San Francisco, CA"
                                    : ""}
                                role={prop === "role" || prop === "both"
                                    ? "Software engineer"
                                    : ""}
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="All Sizes" args={baseArgs} asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Sizes</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each UserCardSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {size || "default"}
                        </th>
                        <td class="va-middle px4">
                            <div class="d-inline-flex">
                                <UserCard {...baseArgs} {size} />
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="With Tags" asChild>
    <div class="d-inline-flex">
        <UserCard {...baseArgs}>
            {#snippet tags()}
                <Tag href="#" size="xs">css</Tag>
                <Tag href="#" size="xs">reactjs</Tag>
                <Tag href="#" size="xs">javascript</Tag>
            {/snippet}
        </UserCard>
    </div>
</Story>

<Story name="With Type" asChild>
    <div class="d-inline-flex">
        <UserCard {...baseArgs}>
            {#snippet type()}
                <Icon src={IconStarVerifiedSm}></Icon> Recognized by Hum
            {/snippet}
        </UserCard>
    </div>
</Story>
