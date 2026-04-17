---
title: "User cards"
description: "User cards are a combination of a user and metadata about the user or post"
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-usercard--docs"
---

<script lang="ts">
    import { Notice } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-user-card',                               parent: 'N/A', modifies: 'N/A',                       description: 'Base user card container that applies the basic style.' },
        { class: '.s-user-card--column',                       parent: '.s-user-card',                               description: 'A container for column elements.' },
        { class: '.s-user-card--row',                          parent: '.s-user-card',                               description: 'A container for row elements.' },
        { class: '.s-user-card--group',                        parent: '.s-user-card',                               description: 'A container for group elements.' },
        { class: '.s-user-card--bio',                          parent: 'N/A', modifies: 'N/A',                       description: "Container for the user's bio." },
        { class: '.s-user-card--recognition',                  parent: 'N/A', modifies: 'N/A',                       description: 'Container for recognition by a collective.' },
        { class: '.s-user-card--rep',                          parent: 'N/A', modifies: 'N/A',                       description: "Container for the user's reputation." },
        { class: '.s-user-card--time',                         parent: 'N/A', modifies: 'N/A',                       description: "Container for the user's timestamp." },
        { class: '.s-user-card--username',                     parent: 'N/A', modifies: 'N/A',                       description: "Container for the user's username." },
        { class: '.s-user-card--group__split',                 parent: 'N/A', modifies: '.s-user-card--group',       description: 'Inserts a separator between each element.' },
        { class: '.s-user-card__sm',                           parent: 'N/A', modifies: '.s-user-card',              description: 'Use the small variant for space-constrained areas, such as post summaries, or to establish visual hierarchy for secondary content like comments and replies.' },
        { class: '.s-user-card__lg',                           parent: 'N/A', modifies: '.s-user-card',              description: 'Use the large variant when space permits and more detailed information is desired.' },
        { class: '.s-user-card--username__op',                 parent: 'N/A', modifies: '.s-user-card--username',    description: 'Identifies the author of the primary post when they appear in secondary contexts, like comment threads.' },
        { class: '.s-user-card__deleted',                      parent: 'N/A', modifies: '.s-user-card',              description: "When a user is deleted, we still need to show their name, but we strip the metadata." },
        { class: '.s-user-card--recognition-additional-bling', parent: 'N/A', modifies: 'N/A',                       description: 'This label appears within a Collective question post to signal that they are a Recognized Member.' },
    ];

    const sizes: ClassTableRow[] = [
        { class: '.s-user-card__sm', parent: 'small', description: 'Use the small variant for space-constrained areas, such as post summaries, or to establish visual hierarchy for secondary content like comments and replies.' },
        { class: 'N/A',              parent: 'N/A',   description: 'Use the default variant when the user needs a more primary focus of the content. This style features a larger avatar to establish top-level hierarchy like question and answer authors.' },
        { class: '.s-user-card__lg', parent: 'large', description: 'Use the large variant when space permits and more detailed information is desired.' },
    ];

    const states: ClassTableRow[] = [
        { class: '.s-user-card--username__op', parent: 'Original Poster',  description: 'This label identifies the author of the primary post (such as the Question asker) when they appear in secondary contexts, like comment threads.' },
        { class: 'N/A',                        parent: 'New Contributor',  description: 'This label appears on a user\'s first-ever question or answer to signal that they are new to the platform.' },
        { class: '.s-user-card__deleted',      parent: 'Deleted user',     description: 'When a user is deleted, we still need to show their name, but we strip the meta data.' },
    ];

    const additionalBling: ClassTableRow[] = [
        { class: '.s-user-card--recognition-additional-bling', parent: 'Recognized Member', description: 'This label appears within a Collective question post to signal that they are a Recognized Member.' },
        { class: 'N/A',                                        parent: 'Awarded',           description: 'This icon appears next to a user when they are within the top 3 positions of a Collective\'s leaderboard.' },
    ];

    const svgStarVerifiedSm = `<svg aria-hidden="true" class="svg-icon iconStarVerifiedSm" width="14" height="14" viewBox="0 0 14 14"><path d="M7.7.72c-.4-.3-.94-.3-1.34 0l-1.26.92q-.23.17-.5.2l-1.54.25c-.49.07-.87.45-.95.94l-.23 1.55q-.05.27-.2.5L.74 6.32c-.3.4-.3.94 0 1.34l.92 1.26q.17.21.2.5l.24 1.54c.08.49.46.87.95.94l1.54.24q.27.05.5.2l1.26.93c.4.3.94.3 1.34 0l1.26-.92q.21-.16.5-.21l1.54-.24c.48-.07.87-.45.94-.94l.24-1.55q.05-.27.2-.5l.93-1.25c.3-.4.3-.94 0-1.34l-.93-1.26q-.15-.21-.2-.5l-.24-1.54A1.1 1.1 0 0 0 11 2.1l-1.55-.24q-.27-.05-.5-.2zm-.4 1.72.9 2.5q.07.17.27.2l2.65.08c.28 0 .4.36.17.53L9.21 7.38a.3.3 0 0 0-.1.32l.74 2.54a.3.3 0 0 1-.46.33L7.19 9.1a.3.3 0 0 0-.33 0l-2.19 1.48a.3.3 0 0 1-.46-.33l.74-2.54a.3.3 0 0 0-.1-.32l-2.1-1.63a.3.3 0 0 1 .18-.53l2.65-.09a.3.3 0 0 0 .27-.2l.9-2.49a.3.3 0 0 1 .56 0"/></svg>`;
    const svgAchievementsSm = `<svg aria-hidden="true" class="svg-icon iconAchievementsSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11 2V1H3v1H0v3c0 1.6 1.4 3 3 3 0 0 .5 2 3 2v1H4s-1 1.5-1 2h8c0-.4-1-2-1-2H8v-1c2.5 0 3-2 3-2 1.6-.2 3-1.4 3-3V2zM3 6c-.5 0-1-.5-1-1V4h1zm9-1c0 .5-.5 1-1 1V4h1zM7 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/></svg>`;
</script>

## Classes

<ClassTable {classes} expandable />

## Examples

### Default

The base style is the standard variant used to connect a user to their content, appearing most frequently in post-summary lists and on question pages. This view is flexible, allowing various metadata fields to be shown or hidden as needed.

<Notice variant="info" class="s-anchors s-anchors__inherit s-anchors__underlined">
    <p><strong>Note on timestamps:</strong> Hovering over the timestamp displays a popover with precise dates and a link to the post's /timeline. For authors, this shows the post creation date; for editors, it shows the last modification date.</p>
</Notice>

```html
<div class="s-user-card">
    <a class="s-user-card--group" href="…">
        <!-- Note: Default variant includes avatar size modifier (s-avatar__24) -->
        <span class="s-avatar s-avatar__24">
            <img class="s-avatar--image" alt="…" src="…" />
        </span>
        <span class="s-user-card--username">…</span>
    </a>
    <ul class="s-user-card--group">
        <li class="s-user-card--rep">
            <span class="s-bling s-bling__sm">
                <span class="v-visible-sr">reputation bling</span>
            </span>
            …
        </li>
        <li>
            <span class="s-bling s-bling__gold s-bling__sm">
                <span class="v-visible-sr">gold bling</span>
            </span>
            …
        </li>
        <li>
            <span class="s-bling s-bling__silver s-bling__sm">
                <span class="v-visible-sr">silver bling</span>
            </span>
            …
        </li>
        <li>
            <span class="s-bling s-bling__bronze s-bling__sm">
                <span class="v-visible-sr">bronze bling</span>
            </span>
            …
        </li>
    </ul>
    <a class="s-user-card--time" href="…" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
        <time>…</time>
    </a>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li><span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span></li>
                <li><span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span></li>
                <li><span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span></li>
            </ul>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
    </div>
</Example>

### With badges

Adds the [User badge](/system/components/badges#user) indicator to the usercard. Use this to signify the official role, status, or origin of the account (such as Moderator, Staff, or Bot) directly alongside the user's name.

```html
<div class="s-user-card">
    <a class="s-user-card--group" href="…">
        <span class="s-avatar s-avatar__24">
            <img class="s-avatar--image" alt="…" src="…" />
        </span>
        <span class="s-user-card--username">…</span>
    </a>
    <div class="s-user-card--group">
        <span class="s-badge s-badge__sm">…</span>
    </div>
    <ul class="s-user-card--group">
        <li class="s-user-card--rep">
            <span class="s-bling s-bling__sm">
                <span class="v-visible-sr">reputation bling</span>
            </span>
            …
        </li>
        …
    </ul>
    <a class="s-user-card--time" href="…" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
        <time>…</time>
    </a>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">Community</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__bot">Bot</span>
            </div>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
            </div>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__staff">Staff</span>
                <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
            </div>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
            </div>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li><span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span></li>
                <li><span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span></li>
                <li><span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span></li>
            </ul>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__staff">Staff</span>
                <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
            </div>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
    </div>
</Example>

### Sizes

<ClassTable classes={sizes} headings={{ parent: 'Size' }} />

#### Small

Use the small variant for space-constrained areas, such as post summaries, or to establish visual hierarchy for secondary content like comments and replies. Note that the small variant does not include an avatar size modifier.

```html
<div class="s-user-card s-user-card__sm">
    <a class="s-user-card--group" href="…">
        <!-- Note: Small variant does not include avatar size modifier -->
        <span class="s-avatar">
            <img class="s-avatar--image" alt="…" src="…" />
        </span>
        <span class="s-user-card--username">…</span>
    </a>
    <ul class="s-user-card--group">
        <li class="s-user-card--rep">
            <span class="s-bling s-bling__sm">
                <span class="v-visible-sr">reputation bling</span>
            </span>
            …
        </li>
        …
    </ul>
    <a class="s-user-card--time" href="…" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
        <time>…</time>
    </a>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="s-user-card s-user-card__sm">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-16.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card s-user-card__sm">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-16.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card s-user-card__sm">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-16.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
            </div>
            <a class="s-user-card--time" href="#" title="2026-01-09 12:15:39Z" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
    </div>
</Example>

#### Large

Use the large variant when space permits and more detailed information is desired. The large variant uses a different structural layout with `s-user-card--row` and `s-user-card--column` to accommodate an expanded avatar and additional profile details.

```html
<div class="s-user-card s-user-card__lg">
    <div class="s-user-card--row">
        <a class="s-avatar s-avatar__48" href="…">
            <img class="s-avatar--image" alt="…" src="…" />
        </a>
        <div class="s-user-card--column">
            <div class="s-user-card--row">
                <a class="s-user-card--username" href="…">…</a>
                <div class="s-user-card--group">
                    <span class="s-badge s-badge__moderator s-badge__sm">…</span>
                </div>
            </div>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm">
                        <span class="v-visible-sr">reputation bling</span>
                    </span>
                    …
                </li>
                …
            </ul>
        </div>
    </div>
    <div class="s-user-card--column">
        <div class="s-user-card--row s-user-card--recognition">
            <!-- StarVerifiedSm icon -->
            <span>…</span>
        </div>
        <ul class="s-user-card--group s-user-card--group__split">
            <li>…</li>
            <li>…</li>
        </ul>
        <div class="s-user-card--bio">…</div>
    </div>
</div>
```

<Example>
    <div class="d-flex g32 fw-wrap">
        <div class="s-user-card s-user-card__lg wmx3">
            <div class="s-user-card--row">
                <a class="s-avatar s-avatar__48" href="#">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-48.svg" />
                </a>
                <div class="s-user-card--column">
                    <div class="s-user-card--row">
                        <a class="s-user-card--username" href="#">SofiaAlc</a>
                        <div class="s-user-card--group">
                            <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
                        </div>
                    </div>
                    <ul class="s-user-card--group">
                        <li class="s-user-card--rep">
                            <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                            1,775
                        </li>
                        <li>
                            <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                            8
                        </li>
                        <li>
                            <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                            12
                        </li>
                        <li>
                            <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                            4
                        </li>
                    </ul>
                </div>
            </div>
            <div class="s-user-card--column">
                <div class="s-user-card--row s-user-card--recognition">
                    {@html svgStarVerifiedSm}
                    <span>Recognized by <a href="#">AudioBubble</a></span>
                </div>
                <ul class="s-user-card--group s-user-card--group__split">
                    <li>Senior Product Designer</li>
                    <li>Vancouver, Canada</li>
                </ul>
                <div class="s-user-card--bio">Developer who believes in clean code, clear coffee, and the occasional snake pun. Automating the boring stuff one script at a time.</div>
            </div>
        </div>
        <div class="s-user-card s-user-card__lg wmx3">
            <div class="s-user-card--row">
                <a class="s-avatar s-avatar__48" href="#">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-48.svg" />
                </a>
                <div class="s-user-card--column">
                    <div class="s-user-card--row">
                        <a class="s-user-card--username" href="#">SofiaAlc</a>
                    </div>
                    <ul class="s-user-card--group">
                        <li class="s-user-card--rep">
                            <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                            1
                        </li>
                    </ul>
                </div>
            </div>
            <div class="s-user-card--column">
                <ul class="s-user-card--group s-user-card--group__split">
                    <li>Vancouver, Canada</li>
                </ul>
                <div class="s-user-card--bio">Developer who believes in clean code, clear coffee, and the occasional snake pun. Automating the boring stuff one script at a time.</div>
            </div>
        </div>
        <div class="s-user-card s-user-card__lg wmx3">
            <div class="s-user-card--row">
                <a class="s-avatar s-avatar__48" href="#">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-48.svg" />
                </a>
                <div class="s-user-card--column">
                    <div class="s-user-card--row">
                        <a class="s-user-card--username" href="#">SofiaAlc</a>
                    </div>
                    <ul class="s-user-card--group">
                        <li class="s-user-card--rep">
                            <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                            1
                        </li>
                        <li>
                            <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                            8
                        </li>
                        <li>
                            <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                            12
                        </li>
                        <li>
                            <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                            4
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</Example>

### States

<ClassTable classes={states} headings={{ parent: 'State' }} />

#### Original Poster

This label identifies the author of the primary post (such as the Question asker) when they appear in secondary contexts, like comment threads.

```html
<div class="s-user-card">
    <a class="s-user-card--group" href="…">
        <span class="s-avatar s-avatar__24">
            <img class="s-avatar--image" alt="…" src="…" />
        </span>
        <span class="s-user-card--username s-user-card--username__op" data-s-tooltip-html-title="<a href='…' class='s-link s-link__underlined'>…</a> is the original poster" data-controller="s-tooltip">…</span>
    </a>
    <ul class="s-user-card--group">…</ul>
    <a class="s-user-card--time" href="…" title="Show activity on this post" data-controller="s-tooltip">
        <time>…</time>
    </a>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="s-user-card s-user-card__sm">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-16.svg" />
                </span>
                <span class="s-user-card--username s-user-card--username__op" data-s-tooltip-html-title="<a href='#' class='s-link s-link__underlined'>SofiaAlc</a> is the original poster" data-controller="s-tooltip">SofiaAlc</span>
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username s-user-card--username__op" data-s-tooltip-html-title="<a href='#' class='s-link s-link__underlined'>SofiaAlc</a> is the original poster" data-controller="s-tooltip">SofiaAlc</span>
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username s-user-card--username__op" data-s-tooltip-html-title="<a href='#' class='s-link s-link__underlined'>SofiaAlc</a> is the original poster" data-controller="s-tooltip">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
            </div>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
        </div>
    </div>
</Example>

#### New Contributor

This label appears on a user's first-ever question or answer to signal that they are new to the platform.

```html
<div class="s-user-card">
    <a class="s-user-card--group" href="…">
        <span class="s-avatar s-avatar__24">
            <img class="s-avatar--image" alt="…" src="…" />
        </span>
        <span class="s-user-card--username s-user-card--new-contributor">…</span>
    </a>
    <div class="s-user-card--group">
        <span class="s-badge s-badge__sm s-badge__new" data-s-tooltip-html-title="<a href='…' class='s-link s-link__underlined'>…</a> is a new contributor to this site. Take care in asking for clarification, commenting, and answering. <a href='…' class='s-link s-link__underlined'>Check out our Code of Conduct</a>" data-controller="s-tooltip">New</span>
    </div>
    <ul class="s-user-card--group">…</ul>
    <a class="s-user-card--time" href="…" title="Show activity on this post" data-controller="s-tooltip">
        <time>…</time>
    </a>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="s-user-card s-user-card__sm">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-16.svg" />
                </span>
                <span class="s-user-card--username s-user-card--new-contributor">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__new" data-s-tooltip-html-title="<a href='#' class='s-link s-link__underlined'>SofiaAlc</a> is a new contributor to this site. Take care in asking for clarification, commenting, and answering. <a href='#' class='s-link s-link__underlined'>Check out our Code of Conduct</a>" data-controller="s-tooltip">New</span>
            </div>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username s-user-card--new-contributor">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__new" data-s-tooltip-html-title="<a href='#' class='s-link s-link__underlined'>SofiaAlc</a> is a new contributor to this site. Take care in asking for clarification, commenting, and answering. <a href='#' class='s-link s-link__underlined'>Check out our Code of Conduct</a>" data-controller="s-tooltip">New</span>
            </div>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username s-user-card--new-contributor">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__new" data-s-tooltip-html-title="<a href='#' class='s-link s-link__underlined'>SofiaAlc</a> is a new contributor to this site. Take care in asking for clarification, commenting, and answering. <a href='#' class='s-link s-link__underlined'>Check out our Code of Conduct</a>" data-controller="s-tooltip">New</span>
                <span class="s-badge s-badge__sm s-badge__staff">Staff</span>
            </div>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
    </div>
</Example>

#### Deleted user

When a user is deleted, we still need to show their name, but we strip the metadata.

```html
<div class="s-user-card s-user-card__deleted">
    <div class="s-user-card--group">
        <img alt="…" src="…" />
        <span class="s-user-card--username">…</span>
    </div>
    <a class="s-user-card--time" href="…" title="Show activity on this post" data-controller="s-tooltip">
        <time>…</time>
    </a>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="s-user-card s-user-card__deleted s-user-card__sm">
            <div class="s-user-card--group">
                <img alt="deleted user avatar" src="/legacy/assets/img/avatar-deleted-16.svg" />
                <span class="s-user-card--username">SofiaAlc</span>
            </div>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card s-user-card__deleted">
            <div class="s-user-card--group">
                <img alt="deleted user avatar" src="/legacy/assets/img/avatar-deleted-24.svg" />
                <span class="s-user-card--username">SofiaAlc</span>
            </div>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
    </div>
</Example>

### Additional bling

Use to display a specialized icon alongside the username, highlighting unique achievements. This style is additive and can be combined with any of the usercard variants listed above.

<ClassTable classes={additionalBling} headings={{ parent: 'Name' }} />

#### Recognized Member

```html
<!-- Small variant -->
<div class="s-user-card s-user-card__sm">
    <a class="s-user-card--group" href="…">
        <span class="s-avatar">
            <img class="s-avatar--image" alt="…" src="…" />
        </span>
        <span class="s-user-card--username">…</span>
    </a>
    <a href="…" class="s-user-card--group s-user-card--recognition" title="…" aria-label="…" data-controller="s-tooltip">
        <!-- StarVerifiedSm icon -->
    </a>
    <ul class="s-user-card--group">…</ul>
    <a class="s-user-card--time" href="…" title="Show activity on this post" data-controller="s-tooltip">
        <time>…</time>
    </a>
</div>

<!-- Default variant -->
<div class="s-user-card">
    <div class="s-user-card--column">
        <div class="s-user-card--row">
            <a class="s-avatar s-avatar__24" href="…">
                <img class="s-avatar--image" alt="…" src="…" />
            </a>
            <a class="s-user-card--group" href="…">
                <span class="s-user-card--username">…</span>
            </a>
            <ul class="s-user-card--group">…</ul>
            <a class="s-user-card--time" href="…" title="Show activity on this post" data-controller="s-tooltip">
                <time>…</time>
            </a>
        </div>
        <div class="s-user-card--row">
            <div class="s-user-card--row s-user-card--recognition">
                <!-- StarVerifiedSm icon -->
                <span>Recognized by <a href="…">…</a></span>
            </div>
        </div>
    </div>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="s-user-card s-user-card__sm">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-16.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <a href="#" class="s-user-card--group s-user-card--recognition" title="Recognized by AudioBubble" aria-label="Recognized by AudioBubble" data-controller="s-tooltip">
                {@html svgStarVerifiedSm}
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card s-user-card__sm">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-16.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__staff">Staff</span>
            </div>
            <a href="#" class="s-user-card--group s-user-card--recognition" title="Recognized by AudioBubble" aria-label="Recognized by AudioBubble" data-controller="s-tooltip">
                {@html svgStarVerifiedSm}
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <div class="s-user-card--column">
                <div class="s-user-card--row">
                    <a class="s-avatar s-avatar__24" href="#">
                        <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                    </a>
                    <a class="s-user-card--group" href="#">
                        <span class="s-user-card--username">SofiaAlc</span>
                    </a>
                    <ul class="s-user-card--group">
                        <li class="s-user-card--rep">
                            <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                            1,775
                        </li>
                        <li>
                            <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                            8
                        </li>
                        <li>
                            <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                            12
                        </li>
                        <li>
                            <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                            4
                        </li>
                    </ul>
                    <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                        <time>asked 2 hr ago</time>
                    </a>
                </div>
                <div class="s-user-card--row">
                    <div class="s-user-card--row s-user-card--recognition">
                        {@html svgStarVerifiedSm}
                        <span>Recognized by <a href="#">AudioBubble</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="s-user-card">
            <div class="s-user-card--column">
                <div class="s-user-card--row">
                    <a class="s-avatar s-avatar__24" href="#">
                        <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                    </a>
                    <a class="s-user-card--group" href="#">
                        <span class="s-user-card--username">SofiaAlc</span>
                    </a>
                    <div class="s-user-card--group">
                        <span class="s-badge s-badge__sm s-badge__staff">Staff</span>
                    </div>
                    <ul class="s-user-card--group">
                        <li class="s-user-card--rep">
                            <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                            1,775
                        </li>
                        <li>
                            <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                            8
                        </li>
                        <li>
                            <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                            12
                        </li>
                        <li>
                            <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                            4
                        </li>
                    </ul>
                    <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                        <time>asked 2 hr ago</time>
                    </a>
                </div>
                <div class="s-user-card--row">
                    <div class="s-user-card--row s-user-card--recognition">
                        {@html svgStarVerifiedSm}
                        <span>Recognized by <a href="#">AudioBubble</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Example>

#### Awarded

This icon appears next to a user when they are within the top 3 positions of a Collective's leaderboard.

```html
<div class="s-user-card s-user-card__sm">
    <a class="s-user-card--group" href="…">
        <span class="s-avatar">
            <img class="s-avatar--image" alt="…" src="…" />
        </span>
        <span class="s-user-card--username">…</span>
    </a>
    <a class="s-user-card--group fc-orange-400" href="…" title="…" aria-label="…" data-controller="s-tooltip">
        <!-- AchievementsSm icon -->
    </a>
    <ul class="s-user-card--group">…</ul>
    <a class="s-user-card--time" href="…" title="Show activity on this post" data-controller="s-tooltip">
        <time>…</time>
    </a>
</div>
```

<Example>
    <div class="d-flex fd-column g8">
        <div class="s-user-card s-user-card__sm">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-16.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <a class="s-user-card--group fc-orange-400" href="#" title="This user is ranked #1 on the weekly R Language leaderboard." aria-label="This user is ranked #1 on the weekly R Language leaderboard." data-controller="s-tooltip">
                {@html svgAchievementsSm}
            </a>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <a class="s-user-card--group fc-yellow-400" href="#" title="This user is ranked #2 on the weekly R Language leaderboard." aria-label="This user is ranked #2 on the weekly R Language leaderboard." data-controller="s-tooltip">
                {@html svgAchievementsSm}
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li><span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span></li>
                <li><span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span></li>
                <li><span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span></li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
        <div class="s-user-card">
            <a class="s-user-card--group" href="#">
                <span class="s-avatar s-avatar__24">
                    <img class="s-avatar--image" alt="demo avatar" src="/legacy/assets/img/avatar-disgusted-24.svg" />
                </span>
                <span class="s-user-card--username">SofiaAlc</span>
            </a>
            <div class="s-user-card--group">
                <span class="s-badge s-badge__sm s-badge__moderator">Mod</span>
            </div>
            <a class="s-user-card--group fc-blue-400" href="#" title="This user is ranked #3 on the weekly R Language leaderboard." aria-label="This user is ranked #3 on the weekly R Language leaderboard." data-controller="s-tooltip">
                {@html svgAchievementsSm}
            </a>
            <ul class="s-user-card--group">
                <li class="s-user-card--rep">
                    <span class="s-bling s-bling__sm"><span class="v-visible-sr">reputation bling</span></span>
                    1,775
                </li>
                <li>
                    <span class="s-bling s-bling__gold s-bling__sm"><span class="v-visible-sr">gold bling</span></span>
                    8
                </li>
                <li>
                    <span class="s-bling s-bling__silver s-bling__sm"><span class="v-visible-sr">silver bling</span></span>
                    12
                </li>
                <li>
                    <span class="s-bling s-bling__bronze s-bling__sm"><span class="v-visible-sr">bronze bling</span></span>
                    4
                </li>
            </ul>
            <a class="s-user-card--time" href="#" title="Show activity on this post" data-controller="s-tooltip">
                <time>asked 2 hr ago</time>
            </a>
        </div>
    </div>
</Example>
