---
title: Graphic
description: Image block variants for spot, hero, and strip placements.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Spot

140x140 left-aligned placeholder.

<StacksEmailEmbed kind="component" slug="graphic" />

### Hero

6000x315 constrained with left/right container padding.

<StacksEmailEmbed kind="component" slug="graphic-hero" showTokens={false} />

### Strip

600x140 full-bleed banner — spans the full email width with no side padding.

<StacksEmailEmbed kind="component" slug="graphic-strip" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="graphic" />
