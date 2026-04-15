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
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

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

    const states = [
        { state: 'info',     icon: IconCompose,   label: 'Draft' },
        { state: 'warning',  icon: IconEye,        label: 'Review' },
        { state: 'danger',   icon: IconFlag,       label: 'Closed' },
        { state: 'critical', icon: IconChallenge,  label: 'Deleted' },
        { state: 'tonal',    icon: IconKey,        label: 'Pinned' },
        { state: 'success',  icon: IconCheck,      label: 'Success' },
        { state: 'featured', icon: IconStar,       label: 'New' },
    ] as const;
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

<Example>
    <div class="d-flex g8 ai-center fw-wrap">
        <Badge text="Great Question"    type="achievement" award="gold"   label="Gold badge" />
        <Badge text="Favorite Question" type="achievement" award="silver" label="Silver badge" />
        <Badge text="Altruist"          type="achievement" award="bronze" label="Bronze badge" />
    </div>
</Example>

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

<Example>
    <div class="d-flex g8 ai-center fw-wrap">
        <Badge text="python"     type="tag" award="gold"   label="Gold tag badge" />
        <Badge text="css"        type="tag" award="silver" label="Silver tag badge" />
        <Badge text="javascript" type="tag" award="bronze" label="Bronze tag badge" />
    </div>
</Example>

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

<Example>
    <div class="d-flex g8 ai-center fw-wrap">
        <Badge text="Archived" type="state" icon={IconDocument} />
        {#each states as { state, icon, label }}
            <Badge text={label} type="state" {state} {icon} />
        {/each}
    </div>
</Example>

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

<Example>
    <div class="d-flex g8 ai-center fw-wrap">
        <Badge text="Accepted answer" type="state" state="success" squared icon={IconCheck} />
        <Badge text="Earn badge"      type="state" state="featured" squared icon={IconVoteUp} />
    </div>
</Example>

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

<Example>
    <div class="d-flex g8 ai-center fw-wrap">
        <Badge text="Needs attention" type="state" state="warning"  squared important icon={IconNotification} />
        <Badge text="Ending soon"     type="state" state="danger"   important icon={IconVoteUp} />
        <Badge text="Spam"            type="state" state="critical" important />
        <Badge text="+100"            type="state" state="info"     important size="sm" />
    </div>
</Example>

### User

```html
<span class="s-badge s-badge__admin">Admin</span>
<span class="s-badge s-badge__moderator">Moderator</span>
<span class="s-badge s-badge__staff">Staff</span>
<span class="s-badge s-badge__bot">Bot</span>
<span class="s-badge s-badge__ai">AI</span>
<span class="s-badge s-badge__new">New</span>
```

<Example>
    <div class="d-flex g8 ai-center fw-wrap">
        <Badge text="Admin"     type="user" userType="admin" />
        <Badge text="Moderator" type="user" userType="moderator" />
        <Badge text="Staff"     type="user" userType="staff" />
        <Badge text="Bot"       type="user" userType="bot" />
        <Badge text="AI"        type="user" userType="ai" />
        <Badge text="New"       type="user" userType="new" />
    </div>
</Example>

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

<Example>
    <div class="d-flex g8 ai-center fw-wrap">
        <Badge text="Small"   size="sm" />
        <Badge text="Default" />
        <Badge text="Large"   size="lg" />
    </div>
</Example>
