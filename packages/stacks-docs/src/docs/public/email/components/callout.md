---
title: Callout
description: A padded callout box with an optional icon.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Default

<StacksEmailEmbed kind="component" slug="callout" showTokens={false} />

### With icon

A 32x32 icon in a left column beside the copy.

<StacksEmailEmbed kind="component" slug="callout-icon" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="callout" />
