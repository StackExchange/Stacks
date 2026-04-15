---
title: "Empty states"
description: "Empty states are used when there is no data to show. Ideally they orient the user by providing feedback based on the the user's last interaction or communicate the benefits of a feature. When appropriate, they should explain the next steps the user should take and provide guidance with a clear call-to-action."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-emptystate--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18807&p=f&m=dev"
---

<script lang="ts">
    import { EmptyState, Button } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-empty-state', modifies: 'N/A', description: 'Base empty state style.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## No data or results

Typical use-case for an empty state is when a feature has no data or a search/filter operation yields no results.

### Actionable

If the user is able to address the situation resulting in an empty state, it is appropriate to include a button for them to do so.

```html
<div class="s-empty-state wmx4 p48">
    @Svg.Spot.Empty.With("native")
    <h4 class="s-empty-state--title">No questions match your result.</h4>
    <p>Try refining your search term or trying something more general.</p>
    <button class="s-btn s-btn__tonal">Clear filters</button>
</div>
```

<Example>
    <EmptyState title="No questions match your result.">
        {#snippet description()}
            Try refining your search term or trying something more general.
        {/snippet}
        {#snippet actions()}
            <Button variant="tonal">Clear filters</Button>
        {/snippet}
    </EmptyState>
</Example>

### Non-actionable

If the user can't take an action to fix the situation, it's appropriate to set expectations.

```html
<div class="s-empty-state wmx4 p48">
    @Svg.Spot.Empty.With("native")
    <h4 class="s-empty-state--title">User trends not ready</h4>
    <p>Please check back in a few days.</p>
</div>
```

<Example>
    <EmptyState title="User trends not ready">
        {#snippet description()}
            Please check back in a few days.
        {/snippet}
    </EmptyState>
</Example>

### Minimal

If desired, both the title and call-to-action may be omitted for a minimal look.

```html
<div class="s-empty-state wmx4 p48">
    @Svg.Spot.Empty.With("native")
    <p>There's no data associated with <a href="#" class="s-link s-link__underlined">this account</a>.</p>
</div>
```

<Example>
    <EmptyState>
        {#snippet description()}
            There's no data associated with <a href="#" class="s-link s-link__underlined">this account</a>.
        {/snippet}
    </EmptyState>
</Example>
