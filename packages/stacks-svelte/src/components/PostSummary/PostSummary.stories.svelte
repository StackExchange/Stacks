<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import PostSummary from "./PostSummary.svelte";
    import PostSummaryAnswer from "./PostSummaryAnswer.svelte";
    import type {
        ContentTypeName,
        ExcerptSize,
        Hotness,
        State,
    } from "./PostSummary.svelte";
    import Answer from "./PostSummaryAnswer.svelte";
    import Tag from "../Tag/Tag.svelte";

    const baseArgs = {
        answers: 1,
        href: "#",
        timestamp: "1 hour ago",
        userAvatar: "https://avatars.githubusercontent.com/u/1",
        userName: "John Doe",
        userProfileUrl: "#john-doe",
        userReputation: "1,000",
        views: 100,
        votes: 10,
        title: "Network graph of popular tags on Stack Overflow",
        excerpt:
            "I wanted to see how different tags related to each other. The below graph depicts associations between popular tags on our site. Description of analysis: I started looking at the 1000 most popular tags on questions in 2021. I created a list of tags cross joined by the question ID (so if a question contains tags for both Python and Numpy, it would show up in my list). I scaled up by the number of answers each question received (noting that some tag combos had 0 answers) -and then counted each distinct combination of each tag. Due to limitations in graphing, I only displayed the top ~2500 tag combinations - which accounts for tags combos that had more than 40 answers over the entire year.",
    };
    const answerArgs = {
        excerpt: baseArgs.excerpt,
        href: "#",
        timestamp: "10 minutes ago",
        userAvatar: "https://avatars.githubusercontent.com/u/2",
        userName: "Jane Smith",
        userProfileUrl: "#jane-smith",
        userReputation: "1,000",
    };

    const contentTypeOptions = {
        "announcement": {
            name: "announcement",
            url: "#",
        },
        "how-to-guide": {
            name: "how-to-guide",
            url: "#",
        },
        "knowledge-article": {
            name: "knowledge-article",
            url: "#",
        },
        "policy": {
            name: "policy",
            url: "#",
        },
        "undefined": undefined,
    };
    const ContentTypeNames: ContentTypeName[] = [
        "announcement",
        "how-to-guide",
        "knowledge-article",
        "policy",
    ];
    const ExcerptSizeTypes: ExcerptSize[] = [undefined, "sm", "md", "lg"];
    const HotnessTypes: Hotness[] = [undefined, "warm", "hot", "supernova"];
    const StateTypes: State[] = [
        undefined,
        "archived",
        "closed",
        "draft",
        "deleted",
        "pinned",
        "review",
    ];

    const { Story } = defineMeta({
        title: "Components/PostSummary",
        component: PostSummary,
        subcomponents: {
            // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
            PostSummaryAnswer,
        },
        argTypes: {
            contentType: {
                options: [undefined, ...ContentTypeNames],
                mapping: {
                    "undefined": { name: undefined, url: undefined },
                    "announcement": { name: "announcement", url: "#" },
                    "how-to-guide": { name: "how-to-guide", url: "#" },
                    "knowledge-article": {
                        name: "knowledge-article",
                        url: "#",
                    },
                    "policy": { name: "policy", url: "#" },
                },
                contentTypeOptions,
                control: {
                    type: "select",
                },
            },
            excerptSize: {
                control: "select",
                options: ExcerptSizeTypes,
            },
            hotness: {
                control: "select",
                options: HotnessTypes,
            },
            state: {
                control: "select",
                options: StateTypes,
            },
        },
    });
</script>

<Story name="Base" args={baseArgs}>
    {#snippet template(args)}
        <PostSummary {...baseArgs} {...args}>
            <svelte:fragment slot="tags">
                <Tag href="#">data</Tag>
                <Tag href="#">data-insights</Tag>
            </svelte:fragment>
        </PostSummary>
    {/snippet}
</Story>

<Story name="Minimal" asChild>
    <!-- `minimal` prop is true -->
    <PostSummary {...baseArgs} minimal>
        <svelte:fragment slot="tags">
            <Tag href="#">data</Tag>
            <Tag href="#">data-insights</Tag>
        </svelte:fragment>
    </PostSummary>
</Story>

<Story name="Excerpt Size" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col">Size</th>
                    <th scope="col" class="s-table--cell10">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each ExcerptSizeTypes as excerptSize (excerptSize)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {excerptSize || "default"}
                        </th>
                        <td class="va-middle px4">
                            <PostSummary {...baseArgs} {excerptSize}>
                                <svelte:fragment slot="tags">
                                    <Tag href="#">data</Tag>
                                    <Tag href="#">data-insights</Tag>
                                </svelte:fragment>
                            </PostSummary>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="New activity" asChild>
    <!-- `activityIndicator` prop is true -->
    <PostSummary {...baseArgs} activityIndicator>
        <svelte:fragment slot="tags">
            <Tag href="#">data</Tag>
            <Tag href="#">data-insights</Tag>
        </svelte:fragment>
    </PostSummary>
</Story>

<Story name="Gated" asChild>
    <!-- `gated` prop is true -->
    <PostSummary {...baseArgs} gated>
        <svelte:fragment slot="tags">
            <Tag href="#">data</Tag>
            <Tag href="#">data-insights</Tag>
        </svelte:fragment>
    </PostSummary>
</Story>

<Story name="Answered" asChild>
    <!-- `bounty` prop included -->
    <PostSummary {...baseArgs} acceptedAnswer>
        <svelte:fragment slot="tags">
            <Tag href="#">data</Tag>
            <Tag href="#">data-insights</Tag>
        </svelte:fragment>
    </PostSummary>
</Story>

<Story name="Bounty" asChild>
    <!-- `bounty` prop included -->
    <PostSummary {...baseArgs} bounty={50}>
        <svelte:fragment slot="tags">
            <Tag href="#">data</Tag>
            <Tag href="#">data-insights</Tag>
        </svelte:fragment>
    </PostSummary>
</Story>

<Story name="Read Time" asChild>
    <!-- `readTime` prop included -->
    <PostSummary {...baseArgs} readTime="5 minute read">
        <svelte:fragment slot="tags">
            <Tag href="#">data</Tag>
            <Tag href="#">data-insights</Tag>
        </svelte:fragment>
    </PostSummary>
</Story>

<Story name="Hotness" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col">Hotness</th>
                    <th scope="col" class="s-table--cell10">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each HotnessTypes as hotness (hotness)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {hotness || "default"}
                        </th>
                        <td class="va-middle px4">
                            <PostSummary {...baseArgs} {hotness}>
                                <svelte:fragment slot="tags">
                                    <Tag href="#">data</Tag>
                                    <Tag href="#">data-insights</Tag>
                                </svelte:fragment>
                            </PostSummary>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Content Type" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col">Content Type</th>
                    <th scope="col" class="s-table--cell10">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each ContentTypeNames as contentTypeName (contentTypeName)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {contentTypeName}
                        </th>
                        <td class="va-middle px4">
                            <PostSummary
                                {...baseArgs}
                                contentType={{
                                    name: contentTypeName,
                                    url: "#",
                                }}
                            >
                                <svelte:fragment slot="tags">
                                    <Tag href="#">data</Tag>
                                    <Tag href="#">data-insights</Tag>
                                </svelte:fragment>
                            </PostSummary>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Ignored" asChild>
    <!-- `ignored` prop is true -->
    <PostSummary {...baseArgs} ignored>
        <svelte:fragment slot="tags">
            <Tag href="#" ignored>data</Tag>
            <Tag href="#">data-insights</Tag>
        </svelte:fragment>
    </PostSummary>
</Story>

<Story name="Watched" asChild>
    <!-- `watched` prop is true -->
    <PostSummary {...baseArgs} watched>
        <svelte:fragment slot="tags">
            <Tag href="#" watched>data</Tag>
            <Tag href="#">data-insights</Tag>
        </svelte:fragment>
    </PostSummary>
</Story>

<Story name="States" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col">State</th>
                    <th scope="col" class="s-table--cell10">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each StateTypes as state (state)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {state || "default"}
                        </th>
                        <td class="va-middle px4">
                            <PostSummary {...baseArgs} {state}>
                                <svelte:fragment slot="tags">
                                    <Tag href="#">data</Tag>
                                    <Tag href="#">data-insights</Tag>
                                </svelte:fragment>
                            </PostSummary>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Optional slots" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col">Slot name</th>
                    <th scope="col" class="s-table--cell10">Example</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row" class="va-middle">answerPreviews</th>
                    <td class="va-middle px4">
                        <PostSummary {...baseArgs}>
                            <svelte:fragment slot="answerPreviews">
                                <Answer {...answerArgs} accepted votes={5} />
                                <Answer {...answerArgs} votes={1} />
                            </svelte:fragment>
                        </PostSummary>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">actionMenu</th>
                    <td class="va-middle px4">
                        <PostSummary {...baseArgs}>
                            <div slot="actionMenu">
                                <ul class="s-menu" role="menu">
                                    <li role="menuitem">
                                        <button
                                            class="s-block-link s-block-link__danger"
                                            >Delete</button
                                        >
                                    </li>
                                </ul>
                            </div>
                        </PostSummary>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">tags</th>
                    <td class="va-middle px4">
                        <PostSummary {...baseArgs}>
                            <svelte:fragment slot="tags">
                                <Tag href="#">data</Tag>
                                <Tag href="#">data-insights</Tag>
                            </svelte:fragment>
                        </PostSummary>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>
