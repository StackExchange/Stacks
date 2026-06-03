---
title: Callout
description: A padded callout box with an off-white surface and an optional 40x40 icon.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

Body copy in a padded box on an off-white surface — the same styling as
[Text](text), with container padding and an `inner-background-color`. It can
optionally show an icon in a left column.

## Variants

### Default

<StacksEmailEmbed kind="component" slug="callout" showTokens={false} />

### With icon

A 32x32 icon in a left column beside the copy.

<StacksEmailEmbed kind="component" slug="callout-icon" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="callout" />
