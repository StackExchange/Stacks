---
title: "Activity indicator"
description: "Stacks provides a small jewel for indicating new activity."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-activityindicator--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18796"
---

<script lang="ts">
    import { ActivityIndicator, Icon } from '@stackoverflow/stacks-svelte';
    import { IconNotification, IconShieldXSm } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        {
            class: '.s-activity-indicator',
            modifies: 'N/A',
            description: 'Base activity indicator element with theme-aware coloring',
        },
        {
            class: '.s-activity-indicator__success',
            modifies: '.s-activity-indicator',
            description: 'Applies success state styling',
        },
        {
            class: '.s-activity-indicator__warning',
            modifies: '.s-activity-indicator',
            description: 'Applies warning state styling',
        },
        {
            class: '.s-activity-indicator__danger',
            modifies: '.s-activity-indicator',
            description: 'Applies danger state styling',
        },
        {
            class: '.s-activity-indicator__sm',
            modifies: '.s-activity-indicator',
            description: 'Renders the indicator at a smaller size',
        },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

### Default

By default, the indicator has no positioning applied — use [atomic positioning classes](/system/base/position) as needed. Always include a visually-hidden label using the [`v-visible-sr`](/system/base/visibility) class so screen readers announce the indicator's purpose.

```html
<div class="s-activity-indicator">
    <div class="v-visible-sr">New activity</div>
</div>

<div class="s-activity-indicator">
    3
    <div class="v-visible-sr">New activity</div>
</div>

<!-- On an avatar -->
<a href="#" class="s-link s-link__muted">
    <div class="s-avatar bg-red-400 ps-relative">
        <div class="s-avatar--indicator s-activity-indicator s-activity-indicator__sm">
            <div class="v-visible-sr">New activity</div>
        </div>
        <div class="s-avatar--letter">G</div>
        <!-- badge icon -->
    </div>
    <span class="pl4">Grayson</span>
</a>

<!-- On a notification icon -->
<div class="ps-relative">
    <!-- notification icon -->
    <div class="s-activity-indicator s-activity-indicator__sm ps-absolute tn4 rn4 ba baw2 bc-white box-content">
        <div class="v-visible-sr">New activity</div>
    </div>
</div>

<!-- On a notification icon with a count -->
<div class="ps-relative">
    <!-- notification icon -->
    <div class="ps-absolute ba baw2 bc-white bar-pill lh-xs tn8 rn8">
        <div class="s-activity-indicator">
            3
            <div class="v-visible-sr">New activity</div>
        </div>
    </div>
</div>
```

<div class="d-flex g24 ai-center fw-wrap">
    <ActivityIndicator label="New activity" />
    <ActivityIndicator label="New activity" content={3} />
    <ActivityIndicator label="New activity" content={12} />
    <ActivityIndicator label="New activity" content={370} />
    <ActivityIndicator label="New activity" content="new" />

    <a href="#" class="s-link s-link__muted">
        <div class="s-avatar bg-red-400 d:bg-red-200 ps-relative">
            <ActivityIndicator label="New activity" size="sm" class="s-avatar--indicator" />
            <div class="s-avatar--letter">G</div>
            <Icon src={IconShieldXSm} class="native s-avatar--badge" />
        </div>
        <span class="pl4">Grayson</span>
    </a>

    <div class="fc-medium ps-relative">
        <Icon src={IconNotification} />
        <ActivityIndicator label="New activity" size="sm" class="ps-absolute tn4 rn4 ba baw2 bc-white box-content" />
    </div>

    <div class="fc-medium ps-relative">
        <Icon src={IconNotification} />
        <div class="ps-absolute ba baw2 bc-white bar-pill lh-xs tn8 rn8">
            <ActivityIndicator label="New activity" content={3} />
        </div>
    </div>
</div>

### Variations

Stacks also provides alternative styling for success, warning, and danger states.

```html
<div class="s-activity-indicator s-activity-indicator__success">
    <div class="v-visible-sr">New activity</div>
</div>
<div class="s-activity-indicator s-activity-indicator__warning">
    <div class="v-visible-sr">New activity</div>
</div>
<div class="s-activity-indicator s-activity-indicator__danger">
    <div class="v-visible-sr">New activity</div>
</div>
```

<div class="d-flex fd-column g24">
    {#each [
        { variant: 'success', bg: 'bg-blue-400 d:bg-blue-200' },
        { variant: 'warning', bg: 'bg-yellow-400 d:bg-yellow-200' },
        { variant: 'danger',  bg: 'bg-red-400 d:bg-red-200' },
    ] as { variant, bg }}
        <div class="d-flex g24 ai-center fw-wrap">
            <ActivityIndicator label="New activity" {variant} />
            <ActivityIndicator label="New activity" {variant} content={3} />
            <ActivityIndicator label="New activity" {variant} content={12} />
            <ActivityIndicator label="New activity" {variant} content={370} />
            <ActivityIndicator label="New activity" {variant} content="new" />

            <a href="#" class="s-link s-link__muted">
                <div class="s-avatar {bg} ps-relative">
                    <ActivityIndicator label="New activity" {variant} size="sm" class="s-avatar--indicator" />
                    <div class="s-avatar--letter">G</div>
                    <Icon src={IconShieldXSm} class="native s-avatar--badge" />
                </div>
                <span class="pl4">Grayson</span>
            </a>

            <div class="fc-medium ps-relative">
                <Icon src={IconNotification} />
                <ActivityIndicator label="New activity" {variant} size="sm" class="ps-absolute tn4 rn4 ba baw2 bc-white box-content" />
            </div>

            <div class="fc-medium ps-relative">
                <Icon src={IconNotification} />
                <div class="ps-absolute ba baw2 bc-white bar-pill lh-xs tn8 rn8">
                    <ActivityIndicator label="New activity" {variant} content={3} />
                </div>
            </div>
        </div>
    {/each}
</div>
