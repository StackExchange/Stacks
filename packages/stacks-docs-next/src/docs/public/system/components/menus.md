---
title: "Menus"
description: "A menu offers a contextual list of actions or functions."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-menu--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18810"
---

<script lang="ts">
    import { Menu, MenuItem, MenuDivider, MenuTitle, MenuCheckItem } from '@stackoverflow/stacks-svelte';
    import { IconHome, IconInbox, IconSettings } from '@stackoverflow/stacks-icons/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-menu',                parent: 'N/A',             modifies: 'N/A',              description: 'Base container styling for a menu.' },
        { class: '.s-menu--divider',       parent: '.s-menu',         modifies: 'N/A',              description: 'Adds a divider line between menu sections.' },
        { class: '.s-menu--item',          parent: '.s-menu',         modifies: 'N/A',              description: 'Applies link styling to link within a menu. Used for actionable elements.' },
        { class: '.s-menu--title',         parent: '.s-menu',         modifies: 'N/A',              description: 'Adds appropriate styling for a title within a menu.' },
        { class: '.s-menu--icon',          parent: '.s-menu--item',   modifies: 'N/A',              description: 'Applies styling to an icon.' },
        { class: '.s-menu--action',        parent: '.s-menu--item',   modifies: 'N/A',              description: 'Applies link styling to link within a menu. Used for actionable elements.' },
        { class: '.s-menu--action__danger',parent: 'N/A',             modifies: '.s-menu--action',  description: 'Applies danger styling to a menu link. Used for destructive actions.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Examples

A menu displays a list of choices temporarily, and usually represent tasks or actions. Don't confuse menus for [navigation](/system/components/navigation).

### Basic

At its most basic, a menu is a simple styled list of contextual actions. Because they're contextual, it's strongly recommended that a menu is contained within a [popover](/system/components/popovers) or a [card](/system/components/cards). When placed in various containers, you'll need to either account for the padding on the container, or use negative margins on the menu component itself.

```html
<div class="s-popover p8">
    <ul class="s-menu" role="menu">
        <li class="s-menu--item" role="menuitem">
            <a class="s-menu--action" href="…">…</a>
        </li>
        <li class="s-menu--item" role="menuitem">
            <button class="s-menu--action">…</button>
        </li>
    </ul>
</div>

<ul class="s-menu" role="menu">
    <li class="s-menu--item" role="menuitem">
        <a class="s-menu--action" href="…">…</a>
    </li>
</ul>
```

<Example>
    <div class="d-flex g16 ai-start fw-wrap">
        <div class="d-flex fd-column g8">
            <span class="fs-body2 fw-bold">Within a popover</span>
            <div class="s-popover is-visible ps-relative ws2 p8">
                <Menu>
                    <MenuItem href="#">Share</MenuItem>
                    <MenuItem href="#">Edit</MenuItem>
                    <MenuItem href="#">Follow</MenuItem>
                </Menu>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="fs-body2 fw-bold">Within a card</span>
            <div class="docs-card p8 ws1">
                <Menu>
                    <MenuItem href="#">Share</MenuItem>
                    <MenuItem href="#">Edit</MenuItem>
                    <MenuItem href="#">Follow</MenuItem>
                </Menu>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="fs-body2 fw-bold">No container</span>
            <Menu class="ws1">
                <MenuItem href="#">Share</MenuItem>
                <MenuItem href="#">Edit</MenuItem>
                <MenuItem href="#">Follow</MenuItem>
            </Menu>
        </div>
    </div>
</Example>

### Titles and dividers

You can split up your menu by using either titles, dividers, or some combination of the two. Titles help group similar conceptual actions—in this example, we've grouped all sharing options. We've also split our destructive actions into their own section using a divider.

```html
<div class="s-popover px0 py4">
    <ul class="s-menu" role="menu">
        <li class="s-menu--title" role="separator">…</li>
        <li class="s-menu--item" role="menuitem">
            <a class="s-menu--action" href="…">…</a>
        </li>
        <li class="s-menu--divider" role="separator"></li>
        <li class="s-menu--item" role="menuitem">
            <a class="s-menu--action s-menu--action__danger" href="…">…</a>
        </li>
    </ul>
</div>
```

<Example>
    <div class="s-popover is-visible ps-relative ws2 p8">
        <Menu>
            <MenuTitle>Share</MenuTitle>
            <MenuItem href="#">Email</MenuItem>
            <MenuItem href="#">Facebook</MenuItem>
            <MenuItem href="#">Twitter</MenuItem>
            <MenuDivider />
            <MenuItem href="#" danger>Deactivate</MenuItem>
            <MenuItem href="#" danger>Delete</MenuItem>
        </Menu>
    </div>
</Example>

### Icons

Icons can be added to menu items to help visually distinguish actions. Include the `s-menu--icon` class on the icon to ensure proper spacing and alignment.

```html
<ul class="s-menu" role="menu">
    <li class="s-menu--item" role="menuitem">
        <a class="s-menu--action" href="#">
            @Svg.Home.With("s-menu--icon")
            Home
        </a>
    </li>
    <li class="s-menu--item" role="menuitem">
        <a class="s-menu--action" href="#">
            @Svg.Inbox.With("s-menu--icon")
            Inbox
        </a>
    </li>
    <li class="s-menu--item" role="menuitem">
        <a class="s-menu--action" href="#">
            @Svg.Settings.With("s-menu--icon")
            Settings
        </a>
    </li>
</ul>
```

<Example>
    <div class="s-popover is-visible ps-relative ws2 p8">
        <Menu>
            <MenuItem href="#" icon={IconHome}>Home</MenuItem>
            <MenuItem href="#" icon={IconInbox}>Inbox</MenuItem>
            <MenuItem href="#" icon={IconSettings}>Settings</MenuItem>
        </Menu>
    </div>
</Example>

### Selected states

To create selectable menu items, add `.s-checkbox.s-checkbox__checkmark` or `.s-radio.s-radio__checkmark` to the `.s-menu--action` element and include a radio or checkbox input as a child element. When the input is `:checked`, the corresponding menu item displays a checkmark.

```html
<fieldset class="s-menu s-form-group">
    <legend class="s-menu--title">…</legend>
    <div class="s-menu--item">
        <label class="s-menu--action s-radio s-radio__checkmark" for="…">
            <input type="radio" id="…" name="…" value="…">
            …
        </label>
    </div>
    …
</fieldset>

<fieldset class="s-menu s-form-group">
    <legend class="s-menu--title">…</legend>
    <div class="s-menu--item">
        <label class="s-menu--action s-checkbox s-checkbox__checkmark" for="…">
            <input type="checkbox" id="…" name="…" value="…">
            …
        </label>
    </div>
    …
</fieldset>
```

<Example>
    <div class="d-flex g16 ai-start fw-wrap">
        <div class="d-flex fd-column g8">
            <span class="fs-body2 fw-bold">With radio input</span>
            <div class="s-popover is-visible ps-relative ws2 p8">
                <Menu type="fieldset">
                    <MenuTitle type="legend">Select one</MenuTitle>
                    <MenuCheckItem id="radio-frequent" type="radio" name="sort-radio" label="Frequent" checked />
                    <MenuCheckItem id="radio-votes"    type="radio" name="sort-radio" label="Votes" />
                    <MenuCheckItem id="radio-unanswered" type="radio" name="sort-radio" label="Unanswered" />
                </Menu>
            </div>
        </div>
        <div class="d-flex fd-column g8">
            <span class="fs-body2 fw-bold">With checkbox input</span>
            <div class="s-popover is-visible ps-relative ws2 p8">
                <Menu type="fieldset">
                    <MenuTitle type="legend">Select multiple</MenuTitle>
                    <MenuCheckItem id="check-frequent" type="checkbox" name="sort-check" label="Frequent" checked />
                    <MenuCheckItem id="check-votes"    type="checkbox" name="sort-check" label="Votes" />
                    <MenuCheckItem id="check-unanswered" type="checkbox" name="sort-check" label="Unanswered" checked />
                </Menu>
            </div>
        </div>
    </div>
</Example>

### Radio groups

In the case of user management, it's appropriate to include radio options. In this example, we're setting a user's role. While our examples up to this point have all been simple unordered lists, the `s-menu` component works on any markup including `fieldset`.

```html
<div class="s-menu" role="menu">
    <fieldset>
        <legend class="s-menu--title">…</legend>
        <label class="s-menu--item s-radio" for="…">
            <input type="radio" name="…" id="…" role="menuitemradio" checked>
            <div>
                <div class="s-label">…</div>
                <div class="s-description mt2">…</div>
            </div>
        </label>
        <label class="s-menu--item s-radio" for="…">
            <input type="radio" name="…" id="…" role="menuitemradio">
            <div>
                <div class="s-label">…</div>
                <div class="s-description mt2">…</div>
            </div>
        </label>
    </fieldset>
</div>
```

<Example>
    <div class="s-popover is-visible ps-relative ws3 p8">
        <div class="s-menu" role="menu">
            <fieldset>
                <legend class="s-menu--title">Role</legend>
                <label class="s-menu--item s-radio" for="role-user">
                    <input type="radio" name="user-role" id="role-user" role="menuitemradio" checked>
                    <div>
                        <div class="s-label">User</div>
                        <div class="s-description mt2">Can view, ask, answer, and edit questions. Can also vote on and flag content.</div>
                    </div>
                </label>
                <label class="s-menu--item s-radio" for="role-moderator">
                    <input type="radio" name="user-role" id="role-moderator" role="menuitemradio">
                    <div>
                        <div class="s-label">Moderator</div>
                        <div class="s-description mt2">Everything a user can do, but can also delete and close questions.</div>
                    </div>
                </label>
                <label class="s-menu--item s-radio" for="role-admin">
                    <input type="radio" name="user-role" id="role-admin" role="menuitemradio">
                    <div>
                        <div class="s-label">Admin</div>
                        <div class="s-description mt2">Everything a moderator can do and can also manage users, permissions, and site settings.</div>
                    </div>
                </label>
            </fieldset>
        </div>
    </div>
</Example>
