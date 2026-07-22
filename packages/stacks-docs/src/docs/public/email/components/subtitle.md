---
title: Subtitle
description: A small heading level with a colored square marker, in medium and small weights.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Medium

The default — 16px, bold.

<StacksEmailEmbed kind="component" slug="subtitle" showTokens={false} />

### Small

14px, normal weight.

<StacksEmailEmbed kind="component" slug="subtitle-small" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="subtitle" />
