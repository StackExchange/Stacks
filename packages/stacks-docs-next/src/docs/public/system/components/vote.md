---
title: "Vote"
description: "The vote component allows users to vote on the quality of content by casting an upvote or downvote."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-vote--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=617-18830&p=f&t=u4su1MPgebbjmcfI-0"
---

<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import {
        IconVote16Up, IconVote16Down,
        IconVote16UpFill, IconVote16DownFill,
    } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-vote',              parent: 'N/A',            modifies: 'N/A',   description: 'Base vote component.' },
        { class: '.s-vote--btn',         parent: '.s-vote',                           description: 'Vote button.' },
        { class: '.s-vote--votes',       parent: '.s-vote',                           description: 'Container for vote counts.' },
        { class: '.s-vote--downvotes',   parent: '.s-vote--votes',                    description: 'Downvote count.' },
        { class: '.s-vote--total',       parent: '.s-vote--votes',                    description: 'Total vote count.' },
        { class: '.s-vote--upvotes',     parent: '.s-vote--votes',                    description: 'Upvote count.' },
        { class: '.s-vote__expanded',    parent: 'N/A', modifies: '.s-vote',          description: 'Expanded vote style that shows upvote and downvote counts separately.' },
        { class: '.s-vote__horizontal',  parent: 'N/A', modifies: '.s-vote',          description: 'Horizontal vote style that arranges buttons and counts in a row. This layout does not officially support downvoting or expanded vote count.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

### Base

The base vote component includes an upvote button, a downvote button, and a vote count. When the vote count is zero and the current user has not voted, it should display `Vote` in place of a number. Otherwise, show the vote count and truncate large numbers (e.g., 1.2k).

```html
<div class="s-vote">
    <button class="s-vote--btn">
        <!-- Vote16Up icon -->
        <span class="v-visible-sr">upvote</span>
    </button>
    <span class="s-vote--votes">
        <span class="s-vote--total">12</span>
    </span>
    <button class="s-vote--btn">
        <!-- Vote16Down icon -->
        <span class="v-visible-sr">downvote</span>
    </button>
</div>
```

<Example>
    <div class="d-flex ai-start fw-wrap g64">
        <div class="d-flex fd-column ai-center g16">
            <span class="ff-mono">Base</span>
            <div class="s-vote">
                <button class="s-vote--btn">
                    <Icon src={IconVote16Up} /><span class="v-visible-sr">upvote</span>
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--total">12</span>
                </span>
                <button class="s-vote--btn">
                    <Icon src={IconVote16Down} /><span class="v-visible-sr">downvote</span>
                </button>
            </div>
        </div>
        <div class="d-flex fd-column ai-center g16">
            <span class="ff-mono">0 vote count</span>
            <div class="s-vote">
                <button class="s-vote--btn">
                    <Icon src={IconVote16Up} /><span class="v-visible-sr">upvote</span>
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--total">Vote</span>
                </span>
                <button class="s-vote--btn">
                    <Icon src={IconVote16Down} /><span class="v-visible-sr">downvote</span>
                </button>
            </div>
        </div>
        <div class="d-flex fd-column ai-center g16">
            <span class="ff-mono">≥ 1,000 votes</span>
            <div class="s-vote">
                <button class="s-vote--btn">
                    <Icon src={IconVote16Up} /><span class="v-visible-sr">upvote</span>
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--total">27.5K</span>
                </span>
                <button class="s-vote--btn">
                    <Icon src={IconVote16Down} /><span class="v-visible-sr">downvote</span>
                </button>
            </div>
        </div>
    </div>
</Example>

### Expanded

Include the `.s-vote__expanded` modifier to show upvote and downvote counts instead of the total vote count. This modifier hides `.s-vote--total` and shows `.s-vote--upvotes` and `.s-vote--downvotes` instead.

```html
<div class="s-vote s-vote__expanded">
    <button class="s-vote--btn">
        <!-- Vote16Up icon -->
        <span class="v-visible-sr">upvote</span>
    </button>
    <span class="s-vote--votes">
        <span class="s-vote--upvotes">+12</span>
        <span class="s-vote--total">20</span>
        <span class="s-vote--downvotes">-8</span>
    </span>
    <button class="s-vote--btn">
        <!-- Vote16Down icon -->
        <span class="v-visible-sr">downvote</span>
    </button>
</div>
```

<Example>
    <div class="s-vote s-vote__expanded">
        <button class="s-vote--btn">
            <Icon src={IconVote16Up} /><span class="v-visible-sr">upvote</span>
        </button>
        <span class="s-vote--votes">
            <span class="s-vote--upvotes">+12</span>
            <span class="s-vote--total">20</span>
            <span class="s-vote--downvotes">-8</span>
        </span>
        <button class="s-vote--btn">
            <Icon src={IconVote16Down} /><span class="v-visible-sr">downvote</span>
        </button>
    </div>
</Example>

### Horizontal

Apply the `.s-vote__horizontal` modifier to arrange the vote buttons and counts in a horizontal layout. This layout does not officially support expanded vote count. This configuration is best suited for scenarios such as comment voting, where a more compact design is preferred.

```html
<!-- Upvote only — count inside button -->
<div class="s-vote s-vote__horizontal">
    <button class="s-vote--btn">
        <!-- Vote16Up icon -->
        <span class="v-visible-sr">upvote</span>
        <span class="s-vote--votes">
            <span class="s-vote--total">5</span>
        </span>
    </button>
</div>

<!-- With downvote — count between buttons -->
<div class="s-vote s-vote__horizontal">
    <button class="s-vote--btn">
        <!-- Vote16Up icon -->
        <span class="v-visible-sr">upvote</span>
    </button>
    <span class="s-vote--votes">
        <span class="s-vote--total">10</span>
    </span>
    <button class="s-vote--btn">
        <!-- Vote16Down icon -->
        <span class="v-visible-sr">downvote</span>
    </button>
</div>
```

<Example>
    <div class="d-flex ai-start fw-wrap g16">
        <div class="s-vote s-vote__horizontal">
            <button class="s-vote--btn">
                <Icon src={IconVote16Up} /><span class="v-visible-sr">upvote</span>
                <span class="s-vote--votes">
                    <span class="s-vote--total">5</span>
                </span>
            </button>
        </div>
        <div class="s-vote s-vote__horizontal">
            <button class="s-vote--btn">
                <Icon src={IconVote16Up} /><span class="v-visible-sr">upvote</span>
            </button>
            <span class="s-vote--votes">
                <span class="s-vote--total">10</span>
            </span>
            <button class="s-vote--btn">
                <Icon src={IconVote16Down} /><span class="v-visible-sr">downvote</span>
            </button>
        </div>
    </div>
</Example>

### Voted

Use filled vote icons to indicate when the current user has upvoted or downvoted the content.

```html
<!-- Upvoted -->
<div class="s-vote">
    <button class="s-vote--btn">
        <!-- Vote16UpFill icon -->
        <span class="v-visible-sr">upvoted</span>
    </button>
    <span class="s-vote--votes">
        <span class="s-vote--total">12</span>
    </span>
    <button class="s-vote--btn">
        <!-- Vote16Down icon -->
        <span class="v-visible-sr">downvote</span>
    </button>
</div>
```

<Example>
    <div class="d-flex ai-start fw-wrap g64">
        <div class="d-flex fd-column ai-center g16">
            <span class="ff-mono">Upvoted</span>
            <div class="s-vote">
                <button class="s-vote--btn">
                    <Icon src={IconVote16UpFill} /><span class="v-visible-sr">upvoted</span>
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--total">27.5K</span>
                </span>
                <button class="s-vote--btn">
                    <Icon src={IconVote16Down} /><span class="v-visible-sr">downvote</span>
                </button>
            </div>
        </div>
        <div class="d-flex fd-column ai-center g16">
            <span class="ff-mono">Downvoted</span>
            <div class="s-vote">
                <button class="s-vote--btn">
                    <Icon src={IconVote16Up} /><span class="v-visible-sr">upvote</span>
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--total">11</span>
                </span>
                <button class="s-vote--btn">
                    <Icon src={IconVote16DownFill} /><span class="v-visible-sr">downvoted</span>
                </button>
            </div>
        </div>
        <div class="d-flex fd-column ai-center g16">
            <span class="ff-mono">Horizontal upvoted</span>
            <div class="s-vote s-vote__horizontal">
                <button class="s-vote--btn">
                    <Icon src={IconVote16UpFill} /><span class="v-visible-sr">upvoted</span>
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--total">6</span>
                </span>
            </div>
        </div>
        <div class="d-flex fd-column ai-center g16">
            <span class="ff-mono">Horizontal downvoted</span>
            <div class="s-vote s-vote__horizontal">
                <button class="s-vote--btn">
                    <Icon src={IconVote16Up} /><span class="v-visible-sr">upvote</span>
                </button>
                <span class="s-vote--votes">
                    <span class="s-vote--total">4</span>
                </span>
                <button class="s-vote--btn">
                    <Icon src={IconVote16DownFill} /><span class="v-visible-sr">downvoted</span>
                </button>
            </div>
        </div>
    </div>
</Example>
