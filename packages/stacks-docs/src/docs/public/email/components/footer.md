---
title: Footer
description: Footer scaffolds for dark and light email shells.
---

<script lang="ts">
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Variants

### Default

No reason copy shown.

<StacksEmailEmbed kind="component" slug="footer" />

### Reason

Includes recipient reason copy.

<StacksEmailEmbed kind="component" slug="footer-reason" />

### Social

Includes reason copy plus social links.

<StacksEmailEmbed kind="component" slug="footer-social" />

## Options

<EmailOptionsTable componentSlug="footer" />
