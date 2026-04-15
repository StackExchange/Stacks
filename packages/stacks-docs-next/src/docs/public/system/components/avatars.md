---
title: "Avatars"
description: "Avatars are used to quickly identify users or teams."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-avatar--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18797&p=f&t=c9NSyJWdASb80eVC-0"
---

<script lang="ts">
    import { Avatar, ActivityIndicator } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-avatar',           modifies: 'N/A',       description: 'The base avatar at 16px.' },
        { class: '.s-avatar--image',    modifies: '.s-avatar', description: 'A child element for displaying a user\'s profile image.' },
        { class: '.s-avatar--letter',   modifies: '.s-avatar', description: 'A child element for displaying an abbreviated Team name.' },
        { class: '.s-avatar--badge',    modifies: '.s-avatar', description: 'A child element that provides positioning to the shield on Team avatars.' },
        { class: '.s-avatar--indicator',modifies: '.s-avatar', description: 'A child element that provides positioning to the activity indicator on user\'s avatars.' },
        { class: '.s-avatar__24',       modifies: '.s-avatar', description: 'Adds the proper border radius and scaling at 24px.' },
        { class: '.s-avatar__32',       modifies: '.s-avatar', description: 'Adds the proper border radius and scaling at 32px.' },
        { class: '.s-avatar__48',       modifies: '.s-avatar', description: 'Adds the proper border radius and scaling at 48px.' },
        { class: '.s-avatar__64',       modifies: '.s-avatar', description: 'Adds the proper border radius and scaling at 64px.' },
        { class: '.s-avatar__96',       modifies: '.s-avatar', description: 'Adds the proper border radius and scaling at 96px.' },
        { class: '.s-avatar__128',      modifies: '.s-avatar', description: 'Adds the proper border radius and scaling at 128px.' },
    ];

    const sizes = [16, 24, 32, 48, 64, 96, 128] as const;
</script>

## Classes

<ClassTable {classes} />

## Examples

### Users

Including an image with the class `s-avatar--image` within `s-avatar` will apply the correct size. Remember, you'll want to double the size of the avatar image to account for retina screens.

```html
<a href="…" class="s-avatar">
    <img class="s-avatar--image" src="https://picsum.photos/32" />
</a>

<a href="…" class="s-avatar s-avatar__24">
    <img class="s-avatar--image" src="https://picsum.photos/48" />
</a>

<a href="…" class="s-avatar s-avatar__32">
    <img class="s-avatar--image" src="https://picsum.photos/64" />
</a>

<a href="…" class="s-avatar s-avatar__48">
    <img class="s-avatar--image" src="https://picsum.photos/96" />
</a>

<a href="…" class="s-avatar s-avatar__64">
    <img class="s-avatar--image" src="https://picsum.photos/128" />
</a>

<a href="…" class="s-avatar s-avatar__96">
    <img class="s-avatar--image" src="https://picsum.photos/192" />
</a>

<a href="…" class="s-avatar s-avatar__128">
    <img class="s-avatar--image" src="https://picsum.photos/256" />
</a>
```

<Example>
    <div class="overflow-x-auto">
        <table class="s-table s-table__b0 s-table__sm">
            <thead>
                <tr>
                    <th scope="col">Size</th>
                    <th scope="col">Class</th>
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each sizes as size}
                    <tr>
                        <td><code>{size}px</code></td>
                        <td><code>.s-avatar{size > 16 ? `__${size}` : ''}</code></td>
                        <td>
                            <Avatar
                                name="Example user"
                                src="https://picsum.photos/{size * 2}"
                                {size}
                                href="#"
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Example>

### Activity

Avatars can display activity indicators to show activities or status changes. Add the `s-avatar--indicator` class to a child element of `s-avatar` along with `s-activity-indicator` and `s-activity-indicator__sm` classes. The indicator is positioned at the top-right corner of the avatar.

```html
<a href="…" class="s-avatar">
    <div class="s-avatar--indicator s-activity-indicator s-activity-indicator__sm s-activity-indicator__success">
        <div class="v-visible-sr">Online</div>
    </div>
    <img class="s-avatar--image" src="https://picsum.photos/32" />
</a>

<a href="…" class="s-avatar s-avatar__24">
    <div class="s-avatar--indicator s-activity-indicator s-activity-indicator__sm s-activity-indicator__success">
        <div class="v-visible-sr">Online</div>
    </div>
    <img class="s-avatar--image" src="https://picsum.photos/48" />
</a>
```

<Example>
    <div class="overflow-x-auto">
        <table class="s-table s-table__b0 s-table__sm">
            <thead>
                <tr>
                    <th scope="col">Size</th>
                    <th scope="col">Class</th>
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                {#each [16, 24] as size}
                    <tr>
                        <td><code>{size}px</code></td>
                        <td><code>.s-avatar{size > 16 ? `__${size}` : ''}</code></td>
                        <td>
                            <Avatar
                                name="Example user"
                                src="https://picsum.photos/{size * 2}"
                                status="online"
                                {size}
                                href="#"
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Example>

### Stack Internal

When displaying a team's identity, we badge the avatar with a shield. We fall back to the first letter of their name and a color we choose at random. As Stack Internal administrators add more data—choosing a color or uploading an avatar—we progressively enhance the avatar.

In this example, from left to right, we have a team name of Hum with no avatar or custom color. In the middle we have a team name of Hum with a custom color. In the last example, we have a team name of Hum with a custom avatar applied.

```html
<a href="…" class="s-link s-link__muted">
    <div class="s-avatar">
        <div class="s-avatar--letter" aria-hidden="true">H</div>
        @Svg.ShieldXSm.With("native s-avatar--badge")
    </div>
    <span class="pl4">Team name</span>
</a>

<a href="…" class="s-avatar s-avatar__24">
    <div class="s-avatar--letter" aria-hidden="true">H</div>
    <span class="v-visible-sr">Hum</span>
    @Svg.ShieldXSm.With("native s-avatar--badge")
</a>

<a href="…" class="s-avatar s-avatar__32">
    <div class="s-avatar--letter" aria-hidden="true">H</div>
    <span class="v-visible-sr">Hum</span>
    @Svg.ShieldXSm.With("native s-avatar--badge")
</a>

<a href="…" class="s-avatar s-avatar__48">
    <div class="s-avatar--letter" aria-hidden="true">H</div>
    <span class="v-visible-sr">Hum</span>
    @Svg.ShieldXSm.With("native s-avatar--badge")
</a>

<a href="…" class="s-avatar s-avatar__64">
    <div class="s-avatar--letter" aria-hidden="true">H</div>
    <span class="v-visible-sr">Hum</span>
    @Svg.ShieldXSm.With("native s-avatar--badge")
</a>

<a href="…" class="s-avatar s-avatar__96">
    <div class="s-avatar--letter" aria-hidden="true">H</div>
    <span class="v-visible-sr">Hum</span>
    @Svg.ShieldXSm.With("native s-avatar--badge")
</a>

<a href="…" class="s-avatar s-avatar__128">
    <div class="s-avatar--letter" aria-hidden="true">H</div>
    <span class="v-visible-sr">Hum</span>
    @Svg.ShieldXSm.With("native s-avatar--badge")
</a>
```

<Example>
    <div class="overflow-x-auto">
        <table class="s-table s-table__b0 s-table__sm">
            <thead>
                <tr>
                    <th scope="col">Size</th>
                    <th scope="col">Class</th>
                    <th scope="col">Default color</th>
                    <th scope="col">Brand color</th>
                    <th scope="col">Custom avatar</th>
                </tr>
            </thead>
            <tbody>
                {#each sizes as size}
                    <tr>
                        <td><code>{size}px</code></td>
                        <td><code>.s-avatar{size > 16 ? `__${size}` : ''}</code></td>
                        <td>
                            <Avatar name="Hum" letter="H" badge {size} href="#" class="bg-blue-400" />
                        </td>
                        <td>
                            <Avatar name="Hum" letter="H" badge {size} href="#" class="bg-theme-primary" />
                        </td>
                        <td>
                            <Avatar name="Hum" src="/legacy/assets/img/team-avatar.png" badge {size} href="#" />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Example>
