---
title: Graphic
description: Image block variants for spot and hero placements.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Spot

140x140 left-aligned PNG placeholder.

<StacksEmailEmbed kind="component" slug="graphic" />

### Hero

1200x630 full-width placeholder with left/right container padding.

<StacksEmailEmbed kind="component" slug="graphic-hero" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="graphic" />
