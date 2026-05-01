---
title: "Sidebar widgets"
description: "Sidebar widgets are flexible containers that provide a lot of patterns that are helpful in a variety of sidebar uses."
---

<script lang="ts">
    import { Notice, Icon } from '@stackoverflow/stacks-svelte';
    import { IconAward, IconPlus } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-sidebarwidget',          parent: 'N/A',                  modifies: 'N/A', description: 'Base sidebar widget style.' },
        { class: '.s-sidebarwidget--content', parent: '.s-sidebarwidget',     modifies: 'N/A', description: 'Container for the sidebar widget content.' },
        { class: '.s-sidebarwidget--header',  parent: '.s-sidebarwidget',     modifies: 'N/A', description: 'Container for the sidebar widget header.' },
        { class: '.s-sidebarwidget--footer',  parent: '.s-sidebarwidget',     modifies: 'N/A', description: 'Container for the sidebar widget footer.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Basic style

In its simplest form, `.s-sidebarwidget` is comprised of a `.s-sidebarwidget--content` section and optional `.s-sidebarwidget--header` and `.s-sidebarwidget--footer` sections. Together these classes create a widget with appropriate inner spacing for you to put whatever you want into it.

<Notice variant="info" role="presentation" class="s-anchors s-anchors__inherit s-anchors__underlined">
    <p>By default the content is a flex container. If you require <code>display: block</code> instead, add the <code>d-block</code> class.</p>
</Notice>

<Notice variant="warning" role="presentation" class="s-anchors s-anchors__inherit s-anchors__underlined">
    <p>The examples of <code>s-sidebarwidget--header</code> are shown with <code>h2</code> elements, but the appropriate heading level may differ depending on context. Please use the appropriate heading level for your context to ensure heading levels only increase by 1.</p>
</Notice>

```html
<div class="s-sidebarwidget">
    <div class="s-sidebarwidget--header">
        <h2>…</h2>
        <a class="s-btn s-btn__xs s-btn__clear s-sidebarwidget--action">…</a>
    </div>
    <div class="s-sidebarwidget--content">
        …
        <button class="s-btn s-btn__tonal s-sidebarwidget--action">…</button>
    </div>
    <div class="s-sidebarwidget--footer">
        <button class="s-btn s-btn__tonal s-sidebarwidget--action">…</button>
    </div>
</div>
```

<Example>
    <div class="s-sidebarwidget wmx3 mx-auto">
        <div class="s-sidebarwidget--header">
            <div class="mr8"><Icon src={IconAward} /></div>
            <h2>Community Achievements</h2>
            <a href="#" class="s-btn s-btn__xs s-btn__clear s-sidebarwidget--action">
                <Icon src={IconPlus} class="mr4" />Track
            </a>
        </div>
        <div class="s-sidebarwidget--content">
            <span>You've earned 3 new badges this week! Keep contributing to unlock more achievements and privileges within the community.</span>
            <button class="s-btn s-btn__tonal s-sidebarwidget--action">View all badges</button>
        </div>
        <div class="s-sidebarwidget--footer">
            <button class="s-btn s-btn__tonal s-sidebarwidget--action">See your progress</button>
        </div>
    </div>
</Example>
