---
title: "Activity indicator"
description: "Stacks provides a small jewel for indicating new activity."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-activityindicator--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18796"
---

<script lang="ts">
    import { ActivityIndicator } from '@stackoverflow/stacks-svelte';
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

<div class="d-flex g24 ai-center fw-wrap">
    <ActivityIndicator label="New activity" />
    <ActivityIndicator label="New activity" content={3} />
    <ActivityIndicator label="New activity" content={12} />
    <ActivityIndicator label="New activity" content={370} />
    <ActivityIndicator label="New activity" content="new" />
</div>

```html
<div class="s-activity-indicator">
    <div class="v-visible-sr">New activity</div>
</div>

<div class="s-activity-indicator">
    3
    <div class="v-visible-sr">3 new items</div>
</div>
```

### Variations

Stacks provides alternative styling for success, warning, and danger states.

<div class="d-flex g24 ai-center fw-wrap">
    <ActivityIndicator label="New activity" />
    <ActivityIndicator label="New activity" variant="success" />
    <ActivityIndicator label="New activity" variant="warning" />
    <ActivityIndicator label="New activity" variant="danger" />
</div>

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
