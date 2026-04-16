---
title: "Navigation"
description: "Our navigation component is a collection of buttons that respond gracefully to various window sizes and parent containers."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-navigation--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18812&t=5ggsDIb9OENEwDl0-1"
js: true
---

<script lang="ts">
    import { Navigation, NavigationItem, NavigationGroup, Button, Badge, ActivityIndicator } from '@stackoverflow/stacks-svelte';
    import {
        IconQandA, IconQandAFill,
        IconTagStack, IconTagStackFill,
        IconUserStack, IconUserStackFill,
        IconSettings, IconSettingsFill,
        IconHome, IconHomeFill,
        IconJobs, IconJobsFill,
    } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-navigation',                  parent: 'N/A',                  modifies: 'N/A',                 description: 'Base parent container for navigation.' },
        { class: '.s-navigation--item',            parent: '.s-navigation',        modifies: 'N/A',                 description: 'The individual item in a navigation.' },
        { class: '.s-navigation--avatar',          parent: '.s-navigation--item',  modifies: 'N/A',                 description: 'Applies styling to the avatar of the navigation item.' },
        { class: '.s-navigation--icon',            parent: '.s-navigation--item',  modifies: 'N/A',                 description: 'Applies styling to the icon of the navigation item.' },
        { class: '.s-navigation--item-text',       parent: '.s-navigation--item',  modifies: 'N/A',                 description: 'The element meant to contain the text of the navigation item.' },
        { class: '.s-navigation__scroll',          parent: 'N/A',                  modifies: '.s-navigation',       description: 'When the navigation items overflow the width of the component, enable horizontal scrolling. By default, navigation items will wrap. This should not be applied to vertical navigations.' },
        { class: '.s-navigation__sm',              parent: 'N/A',                  modifies: '.s-navigation',       description: 'Tightens up the overall spacing and reduces the text size.' },
        { class: '.s-navigation__vertical',        parent: 'N/A',                  modifies: '.s-navigation',       description: 'Renders the navigation vertically.' },
        { class: '.s-navigation--item__dropdown',  parent: 'N/A',                  modifies: '.s-navigation--item', description: 'Adds a small caret that indicates a dropdown.' },
        { class: '.is-selected',                   parent: 'N/A',                  modifies: '.s-navigation--item', description: "Applies to a navigation item that's currently selected / active." },
    ];

    const layoutShiftAttributes: ClassTableRow[] = [
        { class: 'data-text="[value]"', parent: '.s-navigation--item-text', description: 'Prevents layout shift when changing selected button. Value should be the text of the navigation item.' },
    ];
</script>

## Classes

<ClassTable {classes} expandable />

### Preventing layout shift

Horizontal layout shift may occur when changing which item is selected within the navigation component. We recommend including the `data-text` attribute on the child navigation item text element with the value duplicating the text of the item to prevent the layout shift. See below for examples.

<ClassTable classes={layoutShiftAttributes} headings={{ class: 'Item', parent: 'Applied to' }} />

## Horizontal

Care should be taken to only include at most one primary and one secondary navigation per page. Using multiple navigations with the same style can cause user confusion.

Forcing a navigation to scroll is an established pattern on mobile devices, so it may be appropriate to use it in that context. Wrapping tends to make more sense on larger screens, where the user isn't forced to scroll passed a ton of navigation chrome.

### Horizontal default

Use the default size for primary page-level navigation, typically placed near the top of the page.

```html
<nav aria-label="…">
    <ul class="s-navigation">
        <li>
            <a href="…" class="s-navigation--item is-selected">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <div class="d-flex fd-column g16">
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Full width</span>
            <Navigation label="horizontal full width navigation">
                <NavigationItem href="#" text="Product" selected />
                <NavigationItem href="#" text="Email" />
                <NavigationItem href="#" text="Content" />
                <NavigationItem href="#" text="Brand" />
                <NavigationItem href="#" text="Marketing" />
            </Navigation>
        </div>
        <div class="d-flex fd-column g8">
            <span class="ff-mono mb8">Wrapped</span>
            <Navigation label="horizontal wrapped navigation" class="wmx2">
                <NavigationItem href="#" text="Product" selected />
                <NavigationItem href="#" text="Email" />
                <NavigationItem href="#" text="Content" />
                <NavigationItem href="#" text="Brand" />
                <NavigationItem href="#" text="Marketing" />
            </Navigation>
        </div>
    </div>
</Example>

### Icons

Use the icon variant for a prominent, secondary horizontal navigation bar that directs users to main page sections. Limit use to one per page and do not use it for in-page filtering. Icon styles should change with the state of the item (ex: selected items use a fill icon)

```html
<nav aria-label="…">
    <ul class="s-navigation">
        <li>
            <a href="…" class="s-navigation--item is-selected">
                <svg class="s-navigation--icon" aria-hidden="true">…</svg>
                <span class="s-navigation--item-text" data-text="Content">Content</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <svg class="s-navigation--icon" aria-hidden="true">…</svg>
                <span class="s-navigation--item-text" data-text="Topics">Topics</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <svg class="s-navigation--icon" aria-hidden="true">…</svg>
                <span class="s-navigation--item-text" data-text="People">People</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item s-navigation--item__dropdown">
                <svg class="s-navigation--icon" aria-hidden="true">…</svg>
                <span class="s-navigation--item-text" data-text="Settings">Settings</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <div class="d-flex jc-space-between sm:d-block">
        <Navigation label="horizontal navigation with icons" class="d-inline-block">
            <NavigationItem href="#" text="Content" icon={IconQandA} iconSelected={IconQandAFill} selected />
            <NavigationItem href="#" text="Topics" icon={IconTagStack} iconSelected={IconTagStackFill} />
            <NavigationItem href="#" text="People" icon={IconUserStack} iconSelected={IconUserStackFill} />
            <NavigationItem href="#" text="Settings" icon={IconSettings} iconSelected={IconSettingsFill}>
                {#snippet dropdown()}{/snippet}
            </NavigationItem>
        </Navigation>
        <Button variant="tonal" dropdown>Today</Button>
    </div>
</Example>

### Scrolling

```html
<nav aria-label="…">
    <ul class="s-navigation s-navigation__scroll">
        <li>
            <a href="…" class="s-navigation--item is-selected">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <Navigation label="scrolling navigation" overflow="scroll" class="wmx3">
        <NavigationItem href="#" text="Product" selected />
        <NavigationItem href="#" text="Email" />
        <NavigationItem href="#" text="Content" />
        <NavigationItem href="#" text="Brand" />
        <NavigationItem href="#" text="Marketing" />
    </Navigation>
</Example>

### Dropdown

```html
<nav aria-label="…">
    <ul class="s-navigation s-navigation__scroll">
        <li>
            <a href="…" class="s-navigation--item is-selected">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item s-navigation--item__dropdown">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <Navigation label="dropdown navigation" overflow="scroll" class="wmx3">
        <NavigationItem href="#" text="Product" selected />
        <NavigationItem href="#" text="Email" />
        <NavigationItem href="#" text="More">
            {#snippet dropdown()}{/snippet}
        </NavigationItem>
    </Navigation>
</Example>

### Small

Use the small variant for on-page filtering in space-constrained areas, such as controlling small lists. Avoid using icons on the small variant.

```html
<nav aria-label="…">
    <ul class="s-navigation s-navigation__sm">
        <li>
            <a href="…" class="s-navigation--item is-selected">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <Navigation label="small navigation" size="sm">
        <NavigationItem href="#" text="Product" selected />
        <NavigationItem href="#" text="Email" />
        <NavigationItem href="#" text="Content" />
        <NavigationItem href="#" text="Brand" />
        <NavigationItem href="#" text="Marketing" />
    </Navigation>
</Example>

## Vertical

Stacks also provides a vertical variation with support for section headers.

### Vertical default

```html
<nav aria-label="…">
    <ul class="s-navigation s-navigation__vertical">
        <li>
            <a href="…" class="s-navigation--item is-selected">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <span class="s-navigation--item-text" data-text="…">…</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <Navigation label="vertical default navigation" orientation="vertical" class="ws2">
        <NavigationItem href="#" text="Product" selected />
        <NavigationItem href="#" text="Email" />
        <NavigationItem href="#" text="Content" />
        <NavigationItem href="#" text="Brand" />
        <NavigationItem href="#" text="Marketing" />
    </Navigation>
</Example>

### Vertical Icons

Vertical navigation items with icons have a larger padding.

```html
<nav aria-label="…">
    <ul class="s-navigation s-navigation__vertical">
        <li>
            <a href="…" class="s-navigation--item is-selected">
                <svg class="s-navigation--icon" aria-hidden="true">…</svg>
                <span class="s-navigation--item-text" data-text="Home">Home</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item d-flex jc-space-between">
                <svg class="s-navigation--icon" aria-hidden="true">…</svg>
                <span class="s-navigation--item-text" data-text="Jobs">Jobs</span>
                <div class="s-badge s-badge__xs s-badge__featured ml-auto">New</div>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item d-flex jc-space-between">
                <svg class="s-navigation--icon" aria-hidden="true">…</svg>
                <span class="s-navigation--item-text" data-text="Saves">Saves</span>
                <div class="s-activity-indicator ml-auto">
                    3 <div class="v-visible-sr">new activities</div>
                </div>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <svg class="s-navigation--icon" aria-hidden="true">…</svg>
                <span class="s-navigation--item-text" data-text="Users">Users</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <Navigation label="vertical navigation with icons" orientation="vertical" class="ws2">
        <NavigationItem href="#" text="Home" icon={IconHome} iconSelected={IconHomeFill} selected />
        <NavigationItem href="#" text="Jobs" icon={IconJobs} iconSelected={IconJobsFill}>
            {#snippet trailing()}
                <Badge text="New" type="state" state="featured" size="sm" />
            {/snippet}
        </NavigationItem>
        <NavigationItem href="#" text="Saves" icon={IconTagStack} iconSelected={IconTagStackFill}>
            {#snippet trailing()}
                <ActivityIndicator label="3 new activities" content="3" />
            {/snippet}
        </NavigationItem>
        <NavigationItem href="#" text="Users" icon={IconUserStack} iconSelected={IconUserStackFill} />
    </Navigation>
</Example>

### Avatar

```html
<nav aria-label="…">
    <ul class="s-navigation s-navigation__vertical">
        <li>
            <a href="…" class="s-navigation--item is-selected">
                <div class="s-navigation--avatar s-avatar">
                    <img class="s-avatar--image" src="…" />
                </div>
                <span class="s-navigation--item-text" data-text="Humson">Humson</span>
            </a>
        </li>
        <li>
            <a href="…" class="s-navigation--item">
                <div class="s-navigation--avatar s-avatar">
                    <img class="s-avatar--image" src="…" />
                </div>
                <span class="s-navigation--item-text" data-text="Samson">Samson</span>
            </a>
        </li>
    </ul>
</nav>
```

<Example>
    <Navigation label="avatar navigation" orientation="vertical" class="ws2">
        <NavigationItem href="#" text="Humson" avatar="https://picsum.photos/32" selected />
        <NavigationItem href="#" text="Samson" avatar="https://picsum.photos/32" />
    </Navigation>
</Example>

### Titles

```html
<nav aria-label="…">
    <ul class="s-navigation s-navigation__vertical">
        <li>
            <h4 class="s-navigation--title" id="nav-section1">…</h4>
            <ul aria-labelledby="nav-section1">
                <li>
                    <a href="…" class="s-navigation--item is-selected">
                        <span class="s-navigation--item-text" data-text="…">…</span>
                    </a>
                </li>
                <li>
                    <a href="…" class="s-navigation--item">
                        <span class="s-navigation--item-text" data-text="…">…</span>
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <h4 class="s-navigation--title" id="nav-section2">…</h4>
            <ul aria-labelledby="nav-section2">
                <li>
                    <a href="…" class="s-navigation--item">
                        <span class="s-navigation--item-text" data-text="…">…</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```

<Example>
    <Navigation label="titles navigation" orientation="vertical" class="ws2">
        <NavigationGroup title="Resources">
            <NavigationItem href="#" text="Icons" selected />
            <NavigationItem href="#" text="Spot illustrations" />
        </NavigationGroup>
        <NavigationGroup title="Base">
            <NavigationItem href="#" text="Home" icon={IconHome} iconSelected={IconHomeFill} selected />
            <NavigationItem href="#" text="Jobs" icon={IconJobs} iconSelected={IconJobsFill} />
            <NavigationItem href="#" text="Saves" icon={IconTagStack} iconSelected={IconTagStackFill} />
            <NavigationItem href="#" text="Users" icon={IconUserStack} iconSelected={IconUserStackFill} />
        </NavigationGroup>
    </Navigation>
</Example>
