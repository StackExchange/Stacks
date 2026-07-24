---
title: Title
description: Section title block with default and inverted background treatments.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Default

<StacksEmailEmbed kind="component" slug="title" />

### Invert

<StacksEmailEmbed kind="component" slug="title-invert" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="title" />
