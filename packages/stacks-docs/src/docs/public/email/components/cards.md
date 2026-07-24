---
title: Cards
description: Content cards with an optional image, a selectable background surface, and vertical or horizontal layouts.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Vertical

The default layout — the image is stacked above the content.

<StacksEmailEmbed kind="component" slug="card" showTokens={false} />

### Horizontal

A 1:1 image beside the content. `horizontal-left` places the image first;
`horizontal-right` places it after the content. Horizontal layouts assume a
square (1:1) image.

<StacksEmailEmbed kind="component" slug="card-horizontal-left" showTokens={false} />

### Link

A compact link row — title and an arrow CTA only, with no image or body. The
title is 18px (not bold) and the CTA uses the off-black arrow square.

<StacksEmailEmbed kind="component" slug="card-link" showTokens={false} />

### Link (inverted)

The link row on an off-black surface: a dark-grey inner background, white title,
and an off-white arrow square.

<StacksEmailEmbed kind="component" slug="card-link-inverted" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="card" />
