<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import UserCard, { type Size } from "./UserCard.svelte";
    import UserCardBadges from "./UserCardBadges.svelte";
    import UserCardAwards from "./UserCardAwards.svelte";
    import UserCardRecognition from "./UserCardRecognition.svelte";
    import UserCardMeta from "./UserCardMeta.svelte";
    import UserCardBio from "./UserCardBio.svelte";

    const UserCardSizes: (Size | undefined)[] = [undefined, "sm", "lg"];

    const baseArgs = {
        avatar: "https://picsum.photos/128",
        href: "#",
        username: "SofiaAlc",
        timestamp: "asked 2 hr ago",
        reputation: "1,775",
        gold: 12,
        silver: 8,
        bronze: 4,
    };

    const { Story } = defineMeta({
        title: "Components/UserCard",
        component: UserCard,
        subcomponents: {
            // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
            UserCardBadges,
            UserCardAwards,
            UserCardRecognition,
            UserCardMeta,
            UserCardBio,
        },
        argTypes: {
            size: {
                control: "select",
                options: UserCardSizes,
            },
        },
    });
</script>

<Story name="Base" args={baseArgs}>
    {#snippet template(args)}
        <UserCard {...args} />
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
                <tr>
                    <th scope="row" class="va-middle">lg (full example)</th>
                    <td class="va-middle px4">
                        <UserCard
                            {...baseArgs}
                            size="lg"
                            moderator
                            recognition="Recognized by"
                            recognitionHref="#"
                            recognitionLinkText="AudioBubble"
                            role="Senior Product Designer"
                            location="Vancouver, Canada"
                            bio="Developer who believes in clean code, clear coffee, and the occasional snake pun. Automating the boring stuff one script at a time."
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>
