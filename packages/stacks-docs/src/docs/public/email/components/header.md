---
title: Header
description: Brand strip and utility-nav email header scaffolds.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Transactional

<StacksEmailEmbed kind="component" slug="header" />

### Brand

<StacksEmailEmbed kind="component" slug="header-brand" showTokens={false} />

### Center

<StacksEmailEmbed kind="component" slug="header-brand-center" showTokens={false} />

### Inverted

<StacksEmailEmbed kind="component" slug="header-inverted" showTokens={false} />

### Stack Overflow Business

<StacksEmailEmbed kind="component" slug="header-business" showTokens={false} />

## Options

<EmailOptionsTable componentSlug="header" />
