<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import {
        IconDocument,
        IconCompose,
        IconEye,
        IconFlag,
        IconChallenge,
        IconKey,
        IconCheck,
        IconStar,
        IconVoteUp,
        IconNotification,
    } from "@stackoverflow/stacks-icons/icons";
    import Badge from "./Badge.svelte";

    const BadgeTypes = [
        "",
        "reputation",
        "activity",
        "achievement",
        "tag",
        "state",
        "user",
    ] as const;
    const BadgeStates = [
        "info",
        "warning",
        "danger",
        "critical",
        "tonal",
        "success",
        "featured",
    ] as const;
    const BadgeSizes = ["sm", "", "lg"] as const;
    const BadgeUserTypes = [
        "admin",
        "moderator",
        "staff",
        "ai",
        "bot",
    ] as const;

    const { Story } = defineMeta({
        title: "Components/Badge",
        component: Badge,
        argTypes: {
            text: {
                control: "text",
            },
            label: {
                control: "text",
            },
            type: {
                control: "select",
                options: BadgeTypes,
            },
            size: {
                control: "select",
                options: BadgeSizes,
            },
            state: {
                control: "select",
                options: BadgeStates,
            },
            icon: {
                control: "text",
            },
            squared: {
                control: "boolean",
            },
            important: {
                control: "boolean",
            },
        },
    });
</script>

<Story name="Base">
    {#snippet template({ text, ...args })}
        <Badge text={text ?? "1.23k"} {...args} />
    {/snippet}
</Story>

<Story name="General" asChild>
    <Badge type="general" text="general" />
</Story>

<Story name="Reputation" asChild>
    <Badge type="reputation" text="99 rep" />
</Story>

<Story name="Activity" asChild>
    <Badge type="activity" text="new message" label="Activity badge" />
</Story>

<Story name="Achievement" asChild>
    <table class="s-table s-table__bx-simple wmx7">
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col">Props</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="achievement"
                        award="gold"
                        text="Great Question"
                        label="Gold badge"
                    />
                </td>
                <td class="va-middle">
                    <code>type="achievement" award="gold"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="achievement"
                        award="silver"
                        text="Favorite Question"
                        label="Silver badge"
                    />
                </td>
                <td class="va-middle">
                    <code>type="achievement" award="silver"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="achievement"
                        award="bronze"
                        text="Altruist"
                        label="Bronze badge"
                    />
                </td>
                <td class="va-middle">
                    <code>type="achievement" award="bronze"</code>
                </td>
            </tr>
        </tbody>
    </table>
</Story>

<Story name="Tag" asChild>
    <table class="s-table s-table__bx-simple wmx7">
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col">Props</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="tag"
                        award="gold"
                        text="python"
                        label="Gold tag badge"
                    />
                </td>
                <td class="va-middle">
                    <code>type="tag" award="gold"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="tag"
                        award="silver"
                        text="css"
                        label="Silver tag badge"
                    />
                </td>
                <td class="va-middle">
                    <code>type="tag" award="silver"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="tag"
                        award="bronze"
                        text="javascript"
                        label="Bronze tag badge"
                    />
                </td>
                <td class="va-middle">
                    <code>type="tag" award="bronze"</code>
                </td>
            </tr>
        </tbody>
    </table>
</Story>

<Story name="States" asChild>
    <table class="s-table s-table__bx-simple wmx7">
        <thead>
            <tr>
                <th scope="col" class="s-table--cell4">Example</th>
                <th scope="col" class="s-table--cell4">Props</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="va-middle pr8">
                    <Badge type="state" text="Archived" icon={IconDocument} />
                    <Badge type="state" text="Archived" class="ml2" />
                </td>
                <td class="va-middle">
                    <code>type="state"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="info"
                        text="Draft"
                        icon={IconCompose}
                    />
                    <Badge type="state" state="info" text="Draft" class="ml2" />
                </td>
                <td class="va-middle">
                    <code>type="state" state="info"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="warning"
                        text="Review"
                        icon={IconEye}
                    />
                    <Badge
                        type="state"
                        state="warning"
                        text="Review"
                        class="ml2"
                    />
                </td>
                <td class="va-middle">
                    <code>type="state" state="warning"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="danger"
                        text="Closed"
                        icon={IconFlag}
                    />
                    <Badge
                        type="state"
                        state="danger"
                        text="Closed"
                        class="ml2"
                    />
                </td>
                <td class="va-middle">
                    <code>type="state" state="danger"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="critical"
                        text="Deleted"
                        icon={IconChallenge}
                    />
                    <Badge
                        type="state"
                        state="critical"
                        text="Deleted"
                        class="ml2"
                    />
                </td>
                <td class="va-middle">
                    <code>type="state" state="critical"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="tonal"
                        text="Pinned"
                        icon={IconKey}
                    />
                    <Badge
                        type="state"
                        state="tonal"
                        text="Pinned"
                        class="ml2"
                    />
                </td>
                <td class="va-middle">
                    <code>type="state" state="tonal"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="success"
                        text="Success"
                        icon={IconCheck}
                    />
                    <Badge
                        type="state"
                        state="success"
                        text="Success"
                        class="ml2"
                    />
                </td>
                <td class="va-middle">
                    <code>type="state" state="success"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="featured"
                        text="New"
                        icon={IconStar}
                    />
                    <Badge type="state" state="featured" text="New" />
                </td>
                <td class="va-middle">
                    <code>type="state" state="featured"</code>
                </td>
            </tr>
        </tbody>
    </table>
</Story>

<Story name="Squared" asChild>
    <table class="s-table s-table__bx-simple wmx7">
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col">Props</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="success"
                        squared
                        text="Accepted answer"
                        icon={IconCheck}
                    />
                </td>
                <td class="va-middle">
                    <code>{`type="state" state="success" squared={true}`}</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="featured"
                        squared
                        text="Earn badge"
                        icon={IconVoteUp}
                    />
                </td>
                <td class="va-middle">
                    <code>{`type="state" state="featured" squared={true}`}</code
                    >
                </td>
            </tr>
        </tbody>
    </table>
</Story>

<Story name="Important" asChild>
    <table class="s-table s-table__bx-simple wmx7">
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col">Props</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="warning"
                        squared={true}
                        important={true}
                        icon={IconNotification}
                        text="Needs attention"
                    />
                </td>
                <td class="va-middle">
                    <code
                        >{`type="state" state="warning" squared={true} important={true}`}</code
                    >
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="danger"
                        important={true}
                        icon={IconVoteUp}
                        text="Ending soon"
                    />
                </td>
                <td class="va-middle">
                    <code>{`type="state" state="danger" important={true}`}</code
                    >
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="critical"
                        important={true}
                        text="Spam"
                    />
                </td>
                <td class="va-middle">
                    <code
                        >{`type="state" state="critical" important={true}`}</code
                    >
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="info"
                        size="sm"
                        important={true}
                        text="+100"
                    />
                </td>
                <td class="va-middle">
                    <code
                        >{`type="state" state="info" size="sm" important={true}`}</code
                    >
                </td>
            </tr>
        </tbody>
    </table>
</Story>

<Story name="User" asChild>
    <table class="s-table s-table__bx-simple wmx7">
        <thead>
            <tr>
                <th scope="col">Examples</th>
                <th scope="col">Type</th>
            </tr>
        </thead>
        <tbody>
            {#each BadgeUserTypes as userType (userType)}
                <tr>
                    <td class="va-middle pr8">
                        <Badge
                            type="user"
                            {userType}
                            text={userType.charAt(0).toUpperCase() +
                                userType.slice(1)}
                        />
                    </td>
                    <td class="va-middle">
                        <code>type="user" userType="{userType}"</code>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</Story>

<Story name="Sizes" asChild>
    <table class="wmn5 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Examples</th>
                <th scope="col">Size</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="success"
                        size="sm"
                        text="Small"
                    />
                </td>
                <td class="va-middle">
                    <code>size="sm"</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge
                        type="state"
                        state="warning"
                        size=""
                        text="Default"
                    />
                </td>
                <td class="va-middle">
                    <code>size=""</code>
                </td>
            </tr>
            <tr>
                <td class="va-middle pr8">
                    <Badge type="state" state="danger" size="lg" text="Large" />
                </td>
                <td class="va-middle">
                    <code>size="lg"</code>
                </td>
            </tr>
        </tbody>
    </table>
</Story>
