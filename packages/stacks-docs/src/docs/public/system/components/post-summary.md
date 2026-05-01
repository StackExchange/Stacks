---
title: "Post summary"
description: "The post summary component summarizes various content and associated meta data into a highly configurable component."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-postsummary--docs"
---

<script lang="ts">
    import { PostSummary, PostSummaryAnswer, Tag } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-post-summary',                  parent: 'N/A',                       modifies: 'N/A',                        description: 'Base parent container for a post summary.' },
        { class: '.s-post-summary--answers',         parent: '.s-post-summary',           modifies: 'N/A',                        description: 'Container for the post summary answers.' },
        { class: '.s-post-summary--content',         parent: '.s-post-summary',           modifies: 'N/A',                        description: 'Container for the post summary content.' },
        { class: '.s-post-summary--stats',           parent: '.s-post-summary',           modifies: 'N/A',                        description: 'Container for the post summary stats.' },
        { class: '.s-post-summary--tags',            parent: '.s-post-summary',           modifies: 'N/A',                        description: 'Container for the post summary tags.' },
        { class: '.s-post-summary--title',           parent: '.s-post-summary',           modifies: 'N/A',                        description: 'Container for the post summary title.' },
        { class: '.s-post-summary--answer',          parent: '.s-post-summary--answers',  modifies: 'N/A',                        description: 'Container for a post summary answer.' },
        { class: '.s-post-summary--content-meta',    parent: '.s-post-summary--content',  modifies: 'N/A',                        description: 'A container for post meta data, things like tags and user cards.' },
        { class: '.s-post-summary--content-type',    parent: '.s-post-summary--content',  modifies: 'N/A',                        description: 'Container for the post summary content type.' },
        { class: '.s-post-summary--excerpt',         parent: '.s-post-summary--content',  modifies: 'N/A',                        description: 'Container for the post summary excerpt.' },
        { class: '.s-post-summary--stats-answers',   parent: '.s-post-summary--stats',    modifies: 'N/A',                        description: 'Container for the post summary answers stat.' },
        { class: '.s-post-summary--stats-bounty',    parent: '.s-post-summary--stats',    modifies: 'N/A',                        description: 'Container for the post summary bounty stat.' },
        { class: '.s-post-summary--stats-item',      parent: '.s-post-summary--stats',    modifies: 'N/A',                        description: 'A generic container for views, comments, read time, and other meta data which prepends a separator icon.' },
        { class: '.s-post-summary--stats-votes',     parent: '.s-post-summary--stats',    modifies: 'N/A',                        description: 'Container for the post summary votes stat.' },
        { class: '.s-post-summary--title-link',      parent: '.s-post-summary--title',    modifies: 'N/A',                        description: 'Link styling for the post summary title.' },
        { class: '.s-post-summary--title-icon',      parent: '.s-post-summary--title',    modifies: 'N/A',                        description: 'Icon styling for the post summary title.' },
        { class: '.s-post-summary--sm-hide',         parent: 'N/A',                       modifies: '.s-post-summary > *',        description: 'Hides the element on small screens.' },
        { class: '.s-post-summary--sm-show',         parent: 'N/A',                       modifies: '.s-post-summary > *',        description: 'Shows the element on small screens.' },
        { class: '.s-post-summary__answered',        parent: 'N/A',                       modifies: '.s-post-summary',            description: 'Adds the styling necessary for a question with an accepted answer.' },
        { class: '.s-post-summary__deleted',         parent: 'N/A',                       modifies: '.s-post-summary',            description: 'Adds the styling necessary for a deleted post.' },
        { class: '.s-post-summary--answer__accepted',parent: 'N/A',                       modifies: '.s-post-summary--answer',    description: 'Adds the styling necessary for an accepted answer.' },
    ];

    const excerpt = 'I have built a Retrieval-Augmented Generation (RAG) system using LangChain, a vector database, and an open-source LLM. While it works reasonably well, the model often hallucinates answers or cites sources that are only tangentially related to the user\'s query. My chunking strategy is set to a chunk size of 1000 tokens, which seems to be the sweet spot for the model.';
    const title = 'How to reduce hallucinations and improve source relevance in a RAG pipeline?';
    const base = {
        href: '#',
        title,
        excerpt,
        readableTimestamp: 'asked 2 hours ago',
        utcTimestamp: '2026-01-09T12:15:39Z',
        userAvatar: 'https://picsum.photos/32',
        userName: 'SofiaAlc',
        userProfileUrl: '#',
        userReputation: 1,
        votes: 24,
        answers: 1,
        views: 98,
    };
    const answerBase = {
        href: '#',
        excerpt,
        readableTimestamp: 'answered 1 hour ago',
        utcTimestamp: '2026-01-09T13:15:39Z',
        userAvatar: 'https://picsum.photos/33',
        userName: 'SofiaAlc',
        userProfileUrl: '#',
        userReputation: 1,
        votes: 12,
    };

    const excerptSizeLabels: Record<number, string> = {
        0: 'No excerpt',
        1: 'Small (1 line)',
        2: 'Medium (2 lines)',
        3: 'Large (3 lines)',
    };

    const stateItems = [
        { state: 'draft'    as const },
        { state: 'review'   as const },
        { state: 'closed'   as const },
        { state: 'archived' as const },
        { state: 'pinned'   as const },
    ];
    const contentTypeItems = [
        { name: 'announcement'    as const, url: '#' },
        { name: 'how-to-guide'    as const, url: '#' },
        { name: 'knowledge-article' as const, url: '#' },
        { name: 'policy'          as const, url: '#' },
    ];
</script>

## Classes

<ClassTable {classes} expandable />

## Examples

### Base

Use the post summary component to provide a concise summary of a question, article, or other content.

```html
<div class="s-post-summary">
    <div class="s-post-summary--stats s-post-summary--sm-hide">
        <div class="s-post-summary--stats-votes">…</div>
        <div class="s-post-summary--stats-answers">…</div>
    </div>
    <div class="s-post-summary--content">
        <div class="s-post-summary--content-meta">
            <div class="s-user-card s-user-card__sm">…</div>
            <div class="s-post-summary--stats s-post-summary--sm-show">…</div>
            <div class="s-post-summary--stats-item">… views</div>
        </div>
        <div class="s-post-summary--title">
            <a class="s-post-summary--title-link" href="…">…</a>
        </div>
        <p class="s-post-summary--excerpt v-truncate3">…</p>
        <div class="s-post-summary--tags">
            <a class="s-tag" href="…">…</a>
        </div>
    </div>
</div>
```

<Example>
    <PostSummary {...base}>
        {#snippet tags()}
            <Tag href="#">retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
        {/snippet}
    </PostSummary>
</Example>

### Answered

Add the `.s-post-summary__answered` modifier class to indicate that the post has an accepted answer.

```html
<div class="s-post-summary s-post-summary__answered">
    …
</div>
```

<Example>
    <PostSummary {...base} acceptedAnswer>
        {#snippet tags()}
            <Tag href="#">retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
        {/snippet}
    </PostSummary>
</Example>

### Bountied

Include the `.s-post-summary--stats-bounty` element to indicate that the post has a bounty.

```html
<div class="s-post-summary">
    <div class="s-post-summary--stats s-post-summary--sm-hide">
        <div class="s-post-summary--stats-votes">…</div>
        <div class="s-post-summary--stats-answers">…</div>
        <div class="s-post-summary--stats-bounty">
            +50 <span class="v-visible-sr">bounty</span>
        </div>
    </div>
    …
</div>
```

<Example>
    <PostSummary {...base} bounty={50}>
        {#snippet tags()}
            <Tag href="#">retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
        {/snippet}
    </PostSummary>
</Example>

### Ignored

Including an ignored tag will automatically apply custom ignored styling to the post summary.

```html
<div class="s-post-summary">
    …
    <div class="s-post-summary--tags">
        <a class="s-tag s-tag__ignored" href="…">…</a>
        …
    </div>
</div>
```

<Example>
    <PostSummary {...base} acceptedAnswer bounty={50}>
        {#snippet tags()}
            <Tag href="#" ignored>retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
            <Tag href="#">ai</Tag>
        {/snippet}
    </PostSummary>
</Example>

### Watched

Including a watched tag will automatically apply custom watched styling to the post summary.

```html
<div class="s-post-summary">
    …
    <div class="s-post-summary--tags">
        <a class="s-tag s-tag__watched" href="…">…</a>
        …
    </div>
</div>
```

<Example>
    <PostSummary {...base} acceptedAnswer>
        {#snippet tags()}
            <Tag href="#" watched>retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
            <Tag href="#">ai</Tag>
        {/snippet}
    </PostSummary>
</Example>

### Deleted

Include the `.s-post-summary__deleted` modifier class applies custom deleted styling to the post summary.

```html
<div class="s-post-summary s-post-summary__deleted">
    …
</div>
```

<Example>
    <PostSummary {...base} acceptedAnswer state="deleted">
        {#snippet tags()}
            <Tag href="#">retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
        {/snippet}
    </PostSummary>
</Example>

### State badges

Include the appropriate state badge to indicate the current state of the post.

```html
<!-- Draft -->
<div class="s-post-summary">
    <div class="s-post-summary--content">
        <div class="s-post-summary--sm-show">
            <span class="s-badge s-badge__sm s-badge__info">Draft</span>
        </div>
        <div class="s-post-summary--content-meta">
            …
            <span class="s-badge s-badge__info ml-auto s-post-summary--sm-hide">Draft</span>
        </div>
        …
    </div>
</div>
```

<Example>
    <div class="d-flex fd-column g32">
        {#each stateItems as item}
            <PostSummary {...base} state={item.state}>
                {#snippet tags()}
                    <Tag href="#">retrieval-augmented-generation</Tag>
                    <Tag href="#">langchain</Tag>
                    <Tag href="#">llm</Tag>
                    <Tag href="#">vector-database</Tag>
                {/snippet}
            </PostSummary>
        {/each}
    </div>
</Example>

### Content types

Include the appropriate content type badge to indicate the type of content the post represents.

```html
<!-- Announcement -->
<div class="s-post-summary">
    …
    <div class="s-post-summary--content">
        …
        <div class="s-post-summary--tags">
            <a class="s-post-summary--content-type" href="#">Announcement</a>
            …
        </div>
    </div>
</div>
```

<Example>
    <div class="d-flex fd-column g32">
        {#each contentTypeItems as ct}
            <PostSummary {...base} contentType={ct}>
                {#snippet tags()}
                    <Tag href="#">retrieval-augmented-generation</Tag>
                    <Tag href="#">langchain</Tag>
                {/snippet}
            </PostSummary>
        {/each}
    </div>
</Example>

### Excerpt sizes

Post summaries can be shown without an excerpt or with an excerpt with one, two, or three lines of text. Exclude the excerpt container to hide the excerpt or apply the appropriate truncation class to the excerpt container. See also [Truncation](/system/base/truncation/).

#### Classes

| Class | Description |
|---|---|
| `.v-truncate1` | Truncates the excerpt to 1 line of text. |
| `.v-truncate2` | Truncates the excerpt to 2 lines of text. |
| `.v-truncate3` | Truncates the excerpt to 3 lines of text. |

#### Examples

```html
<!-- No excerpt -->
<div class="s-post-summary">…</div>

<!-- 1-line excerpt -->
<div class="s-post-summary">
    …
    <p class="s-post-summary--excerpt v-truncate1">…</p>
    …
</div>

<!-- 2-line excerpt -->
<div class="s-post-summary">
    …
    <p class="s-post-summary--excerpt v-truncate2">…</p>
    …
</div>

<!-- 3-line excerpt -->
<div class="s-post-summary">
    …
    <p class="s-post-summary--excerpt v-truncate3">…</p>
    …
</div>
```

<Example>
    <div class="d-flex fd-column g32">
        {#each [0, 1, 2, 3] as lines}
            <div class="d-flex fd-column g8">
                <span class="ff-mono mb8">{excerptSizeLabels[lines]}</span>
                <PostSummary {...base} excerptLines={lines}>
                    {#snippet tags()}
                        <Tag href="#">retrieval-augmented-generation</Tag>
                        <Tag href="#">langchain</Tag>
                        <Tag href="#">llm</Tag>
                        <Tag href="#">vector-database</Tag>
                    {/snippet}
                </PostSummary>
            </div>
        {/each}
    </div>
</Example>

### Small container

Post summaries adapt to their container size. When shown with a container smaller than 448px, the post summary renders with a compact layout.

```html
<div class="s-post-summary">…</div>
```

<Example>
    <div class="d-flex fd-column g32 wmx3">
        <PostSummary {...base} excerptLines={2}>
            {#snippet tags()}
                <Tag href="#">retrieval-augmented-generation</Tag>
                <Tag href="#">langchain</Tag>
            {/snippet}
        </PostSummary>
        <PostSummary {...base} acceptedAnswer excerptLines={2}>
            {#snippet tags()}
                <Tag href="#">retrieval-augmented-generation</Tag>
                <Tag href="#">langchain</Tag>
            {/snippet}
        </PostSummary>
        <PostSummary {...base} bounty={50} excerptLines={2}>
            {#snippet tags()}
                <Tag href="#">retrieval-augmented-generation</Tag>
                <Tag href="#">langchain</Tag>
            {/snippet}
        </PostSummary>
    </div>
</Example>

### Answers

Answers to a question can be shown in a post summary. Include the `.s-post-summary--answers` container to show the answers.

For accepted answers, add the `.s-post-summary--answer__accepted` modifier class and display the `Accepted answer` text and icon as shown in the example below.

```html
<div class="s-post-summary">
    …
    <div class="s-post-summary--answers">
        <div class="s-post-summary--answer s-post-summary--answer__accepted">
            …
        </div>
        <div class="s-post-summary--answer">
            …
        </div>
    </div>
</div>
```

<Example>
    <PostSummary {...base} acceptedAnswer answers={2}>
        {#snippet tags()}
            <Tag href="#">retrieval-augmented-generation</Tag>
            <Tag href="#">langchain</Tag>
            <Tag href="#">llm</Tag>
            <Tag href="#">vector-database</Tag>
        {/snippet}
        {#snippet answerPreviews()}
            <PostSummaryAnswer {...answerBase} accepted votes={18} />
            <PostSummaryAnswer {...answerBase} votes={5} />
        {/snippet}
    </PostSummary>
</Example>
