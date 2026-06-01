---
title: Headline
description: Large headline block with default and highlighted background treatments.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Default

<StacksEmailEmbed kind="component" slug="headline" />

### Highlight

Inline highlighted `<span>` wrapper

<StacksEmailEmbed kind="component" slug="headline-highlight" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="headline" />
