---
title: "Badges"
description: "Badges are labels used for flags, earned achievements, and number totals."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-badge--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18799&p=f&m=dev"
---

<script lang="ts">
    import { Badge } from '@stackoverflow/stacks-svelte';
    import {
        IconDocument, IconCompose, IconEye, IconFlag,
        IconChallenge, IconKey, IconCheck, IconStar,
        IconNotification, IconVoteUp,
    } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import ExampleTable from '$components/ExampleTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';
    import type { ExampleTableRow } from '$components/ExampleTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-badge',            modifies: 'N/A',      description: 'Base badge element.' },
        { class: '.s-badge__gold',      modifies: '.s-badge', description: 'Badge indicating a gold award.' },
        { class: '.s-badge__silver',    modifies: '.s-badge', description: 'Badge indicating a silver award.' },
        { class: '.s-badge__bronze',    modifies: '.s-badge', description: 'Badge indicating a bronze award.' },
        { class: '.s-badge__important', modifies: '.s-badge', description: 'Applies important styling to the badge.' },
        { class: '.s-badge__squared',   modifies: '.s-badge', description: 'Applies a background color to the badge\'s icon.' },
        { class: '.s-badge__info',      modifies: '.s-badge', description: 'Badge indicating an info status.' },
        { class: '.s-badge__warning',   modifies: '.s-badge', description: 'Badge indicating a warning status.' },
        { class: '.s-badge__danger',    modifies: '.s-badge', description: 'Badge indicating a danger status.' },
        { class: '.s-badge__critical',  modifies: '.s-badge', description: 'Badge indicating a critical status.' },
        { class: '.s-badge__tonal',     modifies: '.s-badge', description: 'Badge indicating a tonal status.' },
        { class: '.s-badge__success',   modifies: '.s-badge', description: 'Badge indicating a success status.' },
        { class: '.s-badge__featured',  modifies: '.s-badge', description: 'Badge indicating a featured status.' },
        { class: '.s-badge__sm',        modifies: '.s-badge', description: 'Applies a small size to the badge.' },
        { class: '.s-badge__lg',        modifies: '.s-badge', description: 'Applies a large size to the badge.' },
    ];

    const achievementRows: ExampleTableRow[] = [
        { classes: [], award: 'gold',   text: 'Great Question',    description: 'Gold badge achievement that a user earns within a community.' },
        { classes: [], award: 'silver', text: 'Favorite Question', description: 'Silver badge achievement that a user earns within a community.' },
        { classes: [], award: 'bronze', text: 'Altruist',          description: 'Bronze badge achievement that a user earns within a community.' },
    ];

    const tagRows: ExampleTableRow[] = [
        { classes: ['.s-badge__gold'],   award: 'gold',   text: 'python',     description: 'Gold badge achievement that a user earns for a specific tag within a community.' },
        { classes: ['.s-badge__silver'], award: 'silver', text: 'css',        description: 'Silver badge achievement that a user earns for a specific tag within a community.' },
        { classes: ['.s-badge__bronze'], award: 'bronze', text: 'javascript', description: 'Bronze badge achievement that a user earns for a specific tag within a community.' },
    ];

    const statesRows: ExampleTableRow[] = [
        { classes: ['N/A'],              state: undefined,    icon: IconDocument, label: 'Archived', description: "Neutral badge styling. Can be used to indicate an inactive state that requires minimal visual emphasis." },
        { classes: ['.s-badge__info'],    state: 'info',      icon: IconCompose,  label: 'Draft',    description: 'Info badge styling.' },
        { classes: ['.s-badge__warning'], state: 'warning',   icon: IconEye,      label: 'Review',   description: 'Warning badge styling.' },
        { classes: ['.s-badge__danger'],  state: 'danger',    icon: IconFlag,     label: 'Closed',   description: 'Danger badge styling.' },
        { classes: ['.s-badge__critical'],state: 'critical',  icon: IconChallenge,label: 'Deleted',  description: 'Critical badge styling.' },
        { classes: ['.s-badge__tonal'],   state: 'tonal',     icon: IconKey,      label: 'Pinned',   description: 'Tonal badge styling.' },
        { classes: ['.s-badge__success'], state: 'success',   icon: IconCheck,    label: 'Success',  description: 'Success badge styling.' },
        { classes: ['.s-badge__featured'],state: 'featured',  icon: IconStar,     label: 'New',      description: 'Featured badge styling. Can be used to draw attention to the new features and changes.' },
    ];

    const squaredRows: ExampleTableRow[] = [
        { classes: ['.s-badge__squared', '.s-badge__success'], state: 'success', icon: IconCheck,  label: 'Accepted answer', description: 'Success badge styling in squared variant.' },
        { classes: ['.s-badge__squared', '.s-badge__featured'],state: 'featured',icon: IconVoteUp, label: 'Earn badge',      description: 'Featured badge styling in squared variant.' },
    ];

    const importantRows: ExampleTableRow[] = [
        { classes: ['.s-badge__warning', '.s-badge__squared', '.s-badge__important'], state: 'warning',  squared: true,  icon: IconNotification, label: 'Needs attention', description: 'Warning badge styling in squared variant with important styling.' },
        { classes: ['.s-badge__danger',  '.s-badge__important'],                      state: 'danger',   squared: false, icon: IconVoteUp,       label: 'Ending soon',     description: 'Danger badge styling with important styling.' },
        { classes: ['.s-badge__critical','.s-badge__important'],                      state: 'critical', squared: false, icon: undefined,        label: 'Spam',            description: 'Critical badge styling with important styling.' },
        { classes: ['.s-badge__info',    '.s-badge__important'],                      state: 'info',     squared: false, icon: undefined,        label: '+100',            description: 'Info badge styling in small size with important styling.', size: 'sm' },
    ];

    const userRows: ExampleTableRow[] = [
        { classes: ['.s-badge__admin'],     userType: 'admin',     label: 'Admin',     description: 'Badge indicating user is an admin.' },
        { classes: ['.s-badge__moderator'], userType: 'moderator', label: 'Moderator', description: 'Badge indicating user is an moderator.' },
        { classes: ['.s-badge__staff'],     userType: 'staff',     label: 'Staff',     description: 'Badge indicating user is staff.' },
        { classes: ['.s-badge__ai'],        userType: 'ai',        label: 'AI',        description: 'Badge indicating content is AI generated.' },
        { classes: ['.s-badge__bot'],       userType: 'bot',       label: 'Bot',       description: 'Badge indicating user is a bot.' },
        { classes: ['.s-badge__new'],       userType: 'new',       label: 'New',       description: 'Badge indicating new user.' },
    ];

    const sizesRows: ExampleTableRow[] = [
        { classes: ['.s-badge__sm'], size: 'sm',      label: 'Small',   description: 'The badge in small size.' },
        { classes: [],               size: undefined, label: 'Default', description: 'The badge in default size.' },
        { classes: ['.s-badge__lg'], size: 'lg',      label: 'Large',   description: 'The badge in large size.' },
    ];
</script>

## Classes

<ClassTable {classes} expandable />

## Styles

### Default

```html
<span class="s-badge">
    default
</span>
```

<Example>
    <Badge text="default" />
</Example>

### General

A general-purpose badge used for functional information and system-level status updates.

```html
<span class="s-badge">
    <span class="s-bling s-bling__filled">
        <span class="v-visible-sr">Badge</span>
    </span>
    general
</span>
```

<Example>
    <Badge text="general" type="general" label="Badge" />
</Example>

### Reputation

A reputation badge to display a user's total rep count.

```html
<span class="s-badge">
    <span class="s-bling s-bling__filled s-bling__rep">
        <span class="v-visible-sr">Rep badge</span>
    </span>
    99 rep
</span>
```

<Example>
    <Badge text="99 rep" type="reputation" label="Rep badge" />
</Example>

### Activity

An activity badge to signal real-time events and draw attention.

```html
<span class="s-badge">
    <span class="s-bling s-bling__filled s-bling__activity">
        <span class="v-visible-sr">Activity badge</span>
    </span>
    new message
</span>
```

<Example>
    <Badge text="new message" type="activity" label="Activity badge" />
</Example>

### Achievement

Badges that provide information about user achievements.

```html
<span class="s-badge">
    <span class="s-bling s-bling__filled s-bling__gold">
        <span class="v-visible-sr">Gold badge</span>
    </span>
    Great Question
</span>
<span class="s-badge">
    <span class="s-bling s-bling__filled s-bling__silver">
        <span class="v-visible-sr">Silver badge</span>
    </span>
    Favorite Question
</span>
<span class="s-badge">
    <span class="s-bling s-bling__filled s-bling__bronze">
        <span class="v-visible-sr">Bronze badge</span>
    </span>
    Altruist
</span>
```

<ExampleTable rows={achievementRows} showClasses={false}>
    {#snippet example(row)}
        <Badge text={row.text} type="achievement" award={row.award} label="{row.award} badge" />
    {/snippet}
</ExampleTable>

### Tag

Badges that display achievements a user has earned for their contributions within a specific topic/tag.

```html
<span class="s-badge s-badge__gold">
    <span class="s-bling s-bling__gold">
        <span class="v-visible-sr">Gold tag badge</span>
    </span>
    python
</span>
<span class="s-badge s-badge__silver">
    <span class="s-bling s-bling__silver">
        <span class="v-visible-sr">Silver tag badge</span>
    </span>
    css
</span>
<span class="s-badge s-badge__bronze">
    <span class="s-bling s-bling__bronze">
        <span class="v-visible-sr">Bronze tag badge</span>
    </span>
    javascript
</span>
```

<ExampleTable rows={tagRows} columnLabel="Modifier class">
    {#snippet example(row)}
        <Badge text={row.text} type="tag" award={row.award} label="{row.award} tag badge" />
    {/snippet}
</ExampleTable>

### States

Use State badges to communicate semantic status or severity, such as success, warning, or danger. These variants apply specific system colors to convey meaning and can be configured with or without icons.

```html
<span class="s-badge">
    @Svg.Document
    Archived
</span>
<span class="s-badge s-badge__info">
    @Svg.Compose
    Draft
</span>
<span class="s-badge s-badge__warning">
    @Svg.Eye
    Review
</span>
<span class="s-badge s-badge__danger">
    @Svg.Flag
    Closed
</span>
<span class="s-badge s-badge__critical">
    @Svg.Challenge
    Deleted
</span>
<span class="s-badge s-badge__tonal">
    @Svg.Key
    Pinned
</span>
<span class="s-badge s-badge__success">
    @Svg.Check
    Success
</span>
<span class="s-badge s-badge__featured">
    @Svg.Star
    New
</span>
```

<ExampleTable rows={statesRows} columnLabel="Modifier class">
    {#snippet example(row)}
        <Badge text={row.label} type="state" state={row.state} icon={row.icon} />
    {/snippet}
</ExampleTable>

### Squared

Use the squared variant sparingly to provide additional emphasis, reserving it primarily for states related to gamification or achievements.

```html
<span class="s-badge s-badge__squared s-badge__success">
    @Svg.Check
    Accepted answer
</span>
<span class="s-badge s-badge__squared s-badge__featured">
    @Svg.VoteUp
    Earn badge
</span>
```

<ExampleTable rows={squaredRows} columnLabel="Modifier classes">
    {#snippet example(row)}
        <Badge text={row.label} type="state" state={row.state} squared icon={row.icon} />
    {/snippet}
</ExampleTable>

### Important

Emboldens the above visual styles by strengthening the background saturation. This should be used for time-sensitive, pressing information that needs to be noticed by the user.

```html
<span class="s-badge s-badge__warning s-badge__squared s-badge__important">
    @Svg.Notification
    Needs attention
</span>
<span class="s-badge s-badge__danger s-badge__important">
    @Svg.VoteUp
    Ending soon
</span>
<span class="s-badge s-badge__critical s-badge__important">
    Spam
</span>
<span class="s-badge s-badge__info s-badge__sm s-badge__important">
    +100
</span>
```

<ExampleTable rows={importantRows} columnLabel="Modifier classes">
    {#snippet example(row)}
        <Badge text={row.label} type="state" state={row.state} important
            squared={row.squared} icon={row.icon} size={row.size} />
    {/snippet}
</ExampleTable>

### User

```html
<span class="s-badge s-badge__admin">Admin</span>
<span class="s-badge s-badge__moderator">Moderator</span>
<span class="s-badge s-badge__staff">Staff</span>
<span class="s-badge s-badge__bot">Bot</span>
<span class="s-badge s-badge__ai">AI</span>
<span class="s-badge s-badge__new">New</span>
```

<ExampleTable rows={userRows} columnLabel="Class">
    {#snippet example(row)}
        <Badge text={row.label} type="user" userType={row.userType} />
    {/snippet}
</ExampleTable>

### Sizes

Badges come in three sizes.

```html
<span class="s-badge s-badge__sm">
    Small
</span>
<span class="s-badge">
    Default
</span>
<span class="s-badge s-badge__lg">
    Large
</span>
```

<ExampleTable rows={sizesRows} columnLabel="Modifier class">
    {#snippet example(row)}
        <Badge text={row.label} size={row.size} />
    {/snippet}
</ExampleTable>
