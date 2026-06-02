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

## Backgrounds

The `background` option selects the card surface. `light-blue` is the default;
`off-white`, `white`, and `off-black` are also available. On `off-black` the body
copy is rendered in the inverted (light) text color.

## Image

`imageSrc` is optional — leave it empty to render a text-only card. `imageAspect`
documents the source asset's ratio (`16:9` or `1:1`); MJML can't crop, so the
ratio is determined by the asset itself, and horizontal layouts expect `1:1`.

## Options

<EmailOptionsTable componentSlug="card" />
