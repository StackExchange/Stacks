<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import UserCard, { type Size } from "./UserCard.svelte";
    import UserCardTime from "./UserCardTime.svelte";
    import UserCardBadge from "./UserCardBadge.svelte";
    import UserCardBling from "./UserCardBling.svelte";
    import type { AwardBlings } from "./UserCard.svelte";

    const UserCardSizes: (Size | undefined)[] = [undefined, "sm", "lg"];
    const UserCardAwardBlings: AwardBlings[] = ["first", "second", "third"];
    const baseArgs = {
        avatar: "https://picsum.photos/128",
        profileUrl: "#",
        name: "SofiaAlc",
    };

    const { Story } = defineMeta({
        title: "Components/UserCard",
        component: UserCard,
        subcomponents: {
            // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
            UserCardTime,
            // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
            UserCardBadge,
            // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
            UserCardBling,
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
            <UserCardTime
                text="asked 2 hr ago"
                href="#"
                timestamp="2026-01-09 12:15:39Z"
            />
        {/snippet}
        {#snippet blings()}
            <UserCardBling name="reputation bling" type="rep" text="1,775" />
            <UserCardBling name="gold bling" type="gold" text={12} />
            <UserCardBling name="silver bling" type="silver" text={8} />
            <UserCardBling name="bronze bling" type="bronze" text={4} />
        {/snippet}
        <UserCard {...args} {time} {blings} />
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
                                <UserCardBadge
                                    type={badge as
                                        | "admin"
                                        | "moderator"
                                        | "staff"}
                                />
                            {/snippet}
                            <UserCard {...baseArgs} {badges} />
                        </td>
                    </tr>
                {/each}
                <tr>
                    <th scope="row" class="va-middle"> all </th>
                    <td class="va-middle px4">
                        {#snippet badges()}
                            <UserCardBadge type="admin" />
                            <UserCardBadge type="moderator" />
                            <UserCardBadge type="staff" />
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
                            <UserCardBadge type="moderator" />
                        {/snippet}
                        {#snippet recognition()}
                            <span>Recognized by</span>
                            <a href="…"> AudioBubble </a>
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

<Story name="States" args={baseArgs} asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">States</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="va-middle">Original Poster</th>
                    <td class="va-middle px4">
                        <UserCard {...baseArgs} originalPoster />
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">New Contributor</th>
                    <td class="va-middle px4">
                        {#snippet tooltip()}
                            <span>
                                <a
                                    href={baseArgs.profileUrl}
                                    class="s-link s-link__underlined"
                                    >{baseArgs.name}</a
                                >
                                is a new contributor to this site. Take care in asking
                                for clarification, commenting, and answering.
                                <a href="#">Check out our Code of Conduct</a>
                            </span>
                        {/snippet}
                        {#snippet badges()}
                            <UserCardBadge type="new" {tooltip} />
                        {/snippet}
                        <UserCard {...baseArgs} {badges} />
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">Deleted User</th>
                    <td class="va-middle px4">
                        <UserCard {...baseArgs} deleted />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>
<Story name="Additional Bling" args={baseArgs} asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Additional Bling</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each UserCardAwardBlings as award (award)}
                    <tr>
                        <th scope="row" class="va-middle">{award}</th>
                        <td class="va-middle px4">
                            <UserCard
                                {...baseArgs}
                                award={award as AwardBlings}
                            />
                        </td>
                    </tr>
                {/each}
                <tr>
                    <th scope="row" class="va-middle"
                        >Recognized Member (small)</th
                    >
                    <td class="va-middle px4">
                        {#snippet recognition()}
                            <span>Recognized by AudioBubble</span>
                        {/snippet}
                        <UserCard
                            {...baseArgs}
                            {recognition}
                            recognitionHref="#"
                            size="sm"
                        />
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle"
                        >Recognized Member (default)</th
                    >
                    <td class="va-middle px4">
                        {#snippet recognition()}
                            <span
                                >Recognized by <a href="…">AudioBubble</a></span
                            >
                        {/snippet}
                        <UserCard
                            {...baseArgs}
                            {recognition}
                            recognitionHref="#"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>
