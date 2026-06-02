---
title: Cards
description: Multi-card content block documentation is in progress.
---

<script lang="ts">
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";

    const unavailableRows = [
        {
            argument: "variant",
            type: "N/A",
            defaultValue: "N/A",
            renderDefaultValueAsCode: false,
            description: "Coming soon.",
        },
    ];
</script>

## Variants

Coming soon.

## Options

<EmailOptionsTable rows={unavailableRows} />
