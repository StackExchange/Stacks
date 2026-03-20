<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { parseClassValue } from "../../storybook-utils";
    import PostSummary from "./PostSummary.svelte";
    import PostSummaryAnswer from "./PostSummaryAnswer.svelte";
    import type {
        ContentTypeName,
        ExcerptLines,
        State,
    } from "./PostSummary.svelte";
    import Answer from "./PostSummaryAnswer.svelte";
    import Tag from "../Tag/Tag.svelte";
    import { SvelteDate } from "svelte/reactivity";
    import { formatTime } from "@stackoverflow/stacks-utils";

    const dateNow = new SvelteDate();
    const dateTwoHoursAgo = new SvelteDate(
        dateNow.setHours(dateNow.getHours() - 2)
    );
    const readableTimestamp = `asked ${formatTime(dateTwoHoursAgo.toISOString())}`;
    const utcTimestamp = dateTwoHoursAgo.toISOString();

    const baseArgs = {
        answers: 1,
        href: "#",
        readableTimestamp,
        utcTimestamp,
        userAvatar: "https://avatars.githubusercontent.com/u/1",
        userName: "John Doe",
        userProfileUrl: "#john-doe",
        userReputation: 1000, // TODO SHINE does formatCount need to add commas/periods?
        views: 12345,
        votes: 10,
        title: "Network graph of popular tags on Stack Overflow",
        excerpt:
            "I wanted to see how different tags related to each other. The below graph depicts associations between popular tags on our site. Description of analysis: I started looking at the 1000 most popular tags on questions in 2021. I created a list of tags cross joined by the question ID (so if a question contains tags for both Python and Numpy, it would show up in my list). I scaled up by the number of answers each question received (noting that some tag combos had 0 answers) -and then counted each distinct combination of each tag. Due to limitations in graphing, I only displayed the top ~2500 tag combinations - which accounts for tags combos that had more than 40 answers over the entire year.",
        tags,
    };
    const answerArgs = {
        excerpt: baseArgs.excerpt,
        href: "#",
        utcTimestamp,
        readableTimestamp,
        userAvatar: "https://avatars.githubusercontent.com/u/2",
        userName: "Jane Smith",
        userProfileUrl: "#jane-smith",
        userReputation: 1000,
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
    const ExcerptLinesTypes: ExcerptLines[] = [0, 1, 2, 3];
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
            excerptLines: {
                control: "select",
                options: ExcerptLinesTypes,
            },
            state: {
                control: "select",
                options: StateTypes,
            },
            class: {
                control: "text",
            },
        },
    });
</script>

{#snippet tags()}
    <Tag href="#">retrieval-augmented-generation</Tag>
    <Tag href="#">langchain</Tag>
    <Tag href="#">llm</Tag>
    <Tag href="#">vector-database</Tag>
    <Tag href="#">ai</Tag>
{/snippet}

<Story name="Base" args={baseArgs}>
    {#snippet template({ class: classArg, ...args })}
        <PostSummary
            {...baseArgs}
            {...args}
            class={parseClassValue(typeof classArg === "string" ? classArg : undefined)}
        />
    {/snippet}
</Story>

<Story name="Excerpt Lines" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col">Size</th>
                    <th scope="col" class="s-table--cell10">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each ExcerptLinesTypes as excerptLines (excerptLines)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {excerptLines}
                        </th>
                        <td class="va-middle px4">
                            <PostSummary {...baseArgs} {excerptLines} />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Gated" asChild>
    <!-- `gated` prop is true -->
    <PostSummary {...baseArgs} gated />
</Story>

<Story name="Answered" asChild>
    <!-- `bounty` prop included -->
    <PostSummary {...baseArgs} acceptedAnswer />
</Story>

<Story name="Bounty" asChild>
    <!-- `bounty` prop included -->
    <PostSummary {...baseArgs} bounty={50} />
</Story>

<Story name="Comments" asChild>
    <!-- `comments` prop included -->
    <PostSummary {...baseArgs} comments={10} />
</Story>

<Story name="Read Time" asChild>
    <!-- `readTime` prop included -->
    <PostSummary {...baseArgs} readTime="5 minute read" />
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
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story name="Ignored" asChild>
    <!-- `ignored` tag included in tags snippet -->
    <PostSummary {...baseArgs}>
        {#snippet tags()}
            <Tag href="#" ignored>retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
            <Tag href="#">ai</Tag>
        {/snippet}
    </PostSummary>
</Story>

<Story name="Watched" asChild>
    <!-- `watched` tag included in tags snippet -->
    <PostSummary {...baseArgs}>
        {#snippet tags()}
            <Tag href="#" watched>retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
            <Tag href="#">ai</Tag>
            <Tag href="#">data-insights</Tag>
        {/snippet}
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
                            <PostSummary {...baseArgs} {state} />
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
                    <td class="va-middle p16">
                        <PostSummary {...baseArgs} acceptedAnswer>
                            {#snippet answerPreviews()}
                                <Answer {...answerArgs} accepted votes={5} />
                                <Answer {...answerArgs} votes={1} />
                            {/snippet}
                        </PostSummary>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="va-middle">tags</th>
                    <td class="va-middle p16">
                        <PostSummary {...baseArgs} />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Story>
