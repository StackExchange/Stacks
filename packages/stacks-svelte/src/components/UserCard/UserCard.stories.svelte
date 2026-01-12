<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { IconStarVerifiedSm } from "@stackoverflow/stacks-icons-legacy/icons";
    import UserCard, { type Size } from "./UserCard.svelte";
    import UserCardMeta from "./UserCardMeta.svelte";
    import UserCardTime from "./UserCardTime.svelte";
    import Badge, { type UserType } from "../Badge/Badge.svelte";
    import Bling from "../Bling/Bling.svelte";
    import Icon from "../Icon/Icon.svelte";

    const UserCardSizes: (Size | undefined)[] = [undefined, "sm", "lg"];

    const baseArgs = {
        avatar: "https://picsum.photos/128",
        profileUrl: "#",
        name: "SofiaAlc",
        reputation: "1,775",
    };

    const { Story } = defineMeta({
        title: "Components/UserCard",
        component: UserCard,
        subcomponents: {
            UserCardMeta,
            // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
            UserCardTime,
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
        {#snippet time()}
            <UserCardTime text="asked 2 hr ago" href="#" />
        {/snippet}
        {#snippet awards()}
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <Bling name="reputation bling" type="rep" size="sm" />
                    {args.reputation}
                </li>
                <li>
                    <Bling name="gold bling" type="gold" size="sm" />
                    12
                </li>
                <li>
                    <Bling name="silver bling" type="silver" size="sm" />
                    8
                </li>
                <li>
                    <Bling name="bronze bling" type="bronze" size="sm" />
                    4
                </li>
            </ul>
        {/snippet}
        <UserCard {...args} {time} {awards} />
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
                            {#snippet badges()}
                                <div class="s-user-card--group">
                                    <Badge
                                        text={badge}
                                        type="user"
                                        userType={badge as UserType}
                                        size="sm"
                                    />
                                </div>
                            {/snippet}
                            <UserCard {...baseArgs} {badges} />
                        </td>
                    </tr>
                {/each}
                <tr>
                    <th scope="row" class="va-middle"> all </th>
                    <td class="va-middle px4">
                        {#snippet badges()}
                            <div class="s-user-card--group">
                                <Badge
                                    text="admin"
                                    type="user"
                                    userType="admin"
                                    size="sm"
                                />
                                <Badge
                                    text="moderator"
                                    type="user"
                                    userType="moderator"
                                    size="sm"
                                />
                                <Badge
                                    text="staff"
                                    type="user"
                                    userType="staff"
                                    size="sm"
                                />
                            </div>
                        {/snippet}
                        <UserCard {...baseArgs} {badges} />
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
                        {#snippet badges()}
                            <div class="s-user-card--group">
                                <Badge
                                    text="moderator"
                                    type="user"
                                    userType="moderator"
                                    size="sm"
                                />
                            </div>
                        {/snippet}
                        {#snippet recognition()}
                            <div
                                class="s-user-card--row s-user-card--recognition"
                            >
                                <Icon src={IconStarVerifiedSm} />
                                <span>Recognized by</span>
                                <a href="#"> AudioBubble </a>
                            </div>
                        {/snippet}
                        {#snippet bio()}
                            <p class="s-user-card--bio">
                                Developer who believes in clean code, clear
                                coffee, and the occasional snake pun. Automating
                                the boring stuff one script at a time.
                            </p>
                        {/snippet}
                        <UserCard
                            {...baseArgs}
                            size="lg"
                            {badges}
                            {recognition}
                            designation="Senior Product Designer"
                            location="Vancouver, Canada"
                            {bio}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>
