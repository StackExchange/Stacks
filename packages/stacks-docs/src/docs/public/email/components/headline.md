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

### Inverted

<StacksEmailEmbed kind="component" slug="headline-invert" />

### Highlight

Wraps the headline text in a highlighted background that reads as one continuous
block across multiple lines. Best for short, art-directed headlines.

Line breaks are author-controlled with `\n` in `textContent` and each line gets
its own highlighted span (joined with `<br/>`).

Vertical padding sits only on the
outer edges — the first line keeps its top padding, the last line keeps its
bottom padding, and interior lines get horizontal padding only — so the lines
join into a single block rather than separate pills.

Horizontal padding is
constant so the left/right edges align.

A single line with no `\n` is padded on
all sides.

<StacksEmailEmbed kind="component" slug="headline-highlight" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="headline" />
