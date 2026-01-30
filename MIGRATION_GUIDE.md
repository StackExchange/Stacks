# Migrating from Stacks Classic v2 to v3

## Breaking changes

### Atomic styles

#### Border radius
- `.bar-sm` removed
- `.bar-lg` removed
- `.btr-sm` removed
- `.btr-lg` removed
- `.brr-sm` removed
- `.brr-lg` removed
- `.bbr-sm` removed
- `.bbr-lg` removed
- `.blr-sm` removed
- `.blr-lg` removed

#### Colors
- `gold`, `silver`, `bronze` colors removed

#### Typography
- `.fs-category` removed
- Atomic classes now have a predefined line-height associated to them

#### Width & Height
- Removed undocumented `.hmx0`, `.wmx0`
- Added `.hmn-screen`, `.wmn-screen`

### Components

#### Badge
- `.s-badge__xs` removed
- `.s-badge__filled` removed
- `.s-badge__icon` removed
- `.s-badge__bounty` removed
- `.s-badge__answered` removed
- `.s-badge__votes` removed
- `.s-badge__rep-down` removed
- `.s-badge__muted` removed
- `.s-badge__new` renamed to `.s-badge__featured`
- `.s-award-bling` renamed to `.s-bling` (used in some badge templates)

#### Bling (previously *Award Bling*)
- The Award Bling component has been renamed to Bling.
- Bling no longer accepts children elements besides those for screen readers. Please include any visually represented strings (such as counts) as siblings to the bling component.

#### Buttons
- The secondary style `outlined` has been removed i.e. `.s-btn__outlined`
- The default button style is `filled`, use `.s-btn__clear` to use a clear style of a button
- The featured and tonal variant no longer have a clear style
- The variant `Muted` has been removed, `Tonal` has been added
- `s-btn__md` has been removed, `s-btn__lg` has been added

#### Checkbox & Radio
- The `s-checkbox` and `s-radio` classes should now be applied to the container including the `input` and `label`. These classes replace `.s-check-control`
- The `s-checkbox` and `s-radio` classes are no longer needed on the `input` element itself
- The `s-check-group` class has been renamed to `s-form-group`
- Added `.s-checkbox__checkmark` and `.s-radio__checkmark` modifier classes for checkmark-style variants

#### Inputs
- `s-input__md` removed
- `s-input__xl` removed
- **Nested inputs** html will require slight tweaking on consumers' side

#### Menu

The menu component has been updated to use new class names and structure. The following changes are breaking:

- **Link classes**: Replace `.s-block-link` with `.s-menu--action` on all menu links and buttons.
- **Danger state**: Replace `.s-block-link__danger` with `.s-menu--action__danger`.
- **Selected state**: The selected state has changed from `.s-block-link__left.is-selected` to just `.is-selected` on the `.s-menu--action` element. The `.is-selected` class should be applied to the `<a>` or `<button>` element, not the `<li>`.
- **Menu item class**: All menu item `<li>` elements must now include the `.s-menu--item` class.
- **Menu label removed**: The `.s-menu--label` class has replaced with `.s-menu--title` for section titles instead.

**Before:**
```html
<ul class="s-menu" role="menu">
    <li role="menuitem">
        <a href="#" class="s-block-link">Example link</a>
    </li>
    <li role="menuitem">
        <a href="#" class="s-block-link s-block-link__left is-selected">Selected link</a>
    </li>
    <li role="menuitem" class="s-menu--label">Example label</li>
    <li role="menuitem">
        <a href="#" class="s-block-link s-block-link__danger">Danger link</a>
    </li>
</ul>
```

**After:**
```html
<ul class="s-menu" role="menu">
    <li class="s-menu--item" role="menuitem">
        <a href="#" class="s-menu--action">Example link</a>
    </li>
    <li class="s-menu--item" role="menuitem">
        <a href="#" class="s-menu--action is-selected">Selected link</a>
    </li>
    <li class="s-menu--title" role="separator">Section Title</li>
    <li class="s-menu--item" role="menuitem">
        <a href="#" class="s-menu--action s-menu--action__danger">Danger link</a>
    </li>
</ul>
```

#### Modal

- Changed close icon to the new `Cross` beta icon (including some padding adjustments)


#### Navigation
- Removed muted variant (`.s-navigation__muted`)
- Selected page are now highlighted by an underscore (no pill shape background)
- New `.s-navigation--icon` class to style icons alongside navigation items
- New `.s-navigation--avatar` class to style avatars alongside navigation items

#### Notices
- Markup has been been updated
- New `.s-notice--icon` class to style the new notice icons
- New `.s-notice--dismiss` class to style the optional dismiss button

#### Pagination
- The next and previous button now uses an `ArrowRight` and `ArrowLeft` icon instead of text. To apply the new styling, use the class `.s-pagination--item__nav`. Since these buttons use icons to represent their behavior, make sure to include descriptive text for screen readers.

#### Post Summary
The Post Summary component has changed dramatically. Please see refer to the docs for complete guidance.

#### Popover
- The new popovers no longer include an arrow element. The `s-popover--arrow` css class has been removed, and any markup using it (e.g. `<div class="s-popover--arrow"></div>`) should be deleted from the codebases as part of the migration.

#### Select
- `md` and `xl` sizes removed

#### Tags
- `.s-tag__xs` removed
- `.s-tag__md` removed

#### Textarea
- `s-textarea__md` removed
- `s-textarea__xl` removed

#### User Card

Markup for the User Card has changed significantly. Please refer to the [docs](https://beta.stackoverflow.design/product/components/user-cards) for full guidance. Here are the most notable class changes:

- Some component child classes have been replaced in favor of more generic wrappers. These include:
    - `s-user-card--avatar`: The avatar should just include the appropriate `.s-avatar` classes
    - `s-user-card--awards`: Awards should be placed within a `li` in a `ul.s-user-card--group` container
    - `s-user-card--info`: Replaced with other layout classes as appropriate
    - `s-user-card--link`: Previously used to style the username and now handled by `.s-user-card--username`
    - `s-user-card--location`: Location should be placed in a `li` in a `ul.s-user-card--group.s-user-card--group__split` container
    - `s-user-card--role`: Role should be placed in a `li` in a `ul.s-user-card--group.s-user-card--group__split` container
    - `s-user-card--tags`: Tags are no longer included in the user card
    - `s-user-card--type`: Replaced with `.s-user-card--recognition`
- `s-user-card__highlighted` removed
- `s-user-card__deleted` removed (expected to return in our next User Card iteration)
- The size modifiers `full`, `small`, and `minimal` have been replaced with `sm` and `lg`

# Migrating from Stacks Svelte v0 to v1

## Breaking changes

### Bling (previously *AwardBling*)

The `AwardBling` component has been renamed to `Bling`.

# Migrating from Stacks v1 to v2

With the release of Stacks v2, we've made some breaking changes to the library. The purpose of this guide is to help you prepare your code be compatible with the changes in Stacks v2.

## Table of contents

- [Upgrading dependencies](#upgrading-dependencies)
- [Using Stacks v2 colors](#using-stacks-v2-colors)
  - [Color stop mappings](#color-stop-mappings)
    - [Orange, blue, green, red, yellow, theme-primary, theme-secondary](#orange-blue-green-red-yellow-theme-primary-theme-secondary)
    - [Black](#black)
    - [Gold, sliver, bronze](#gold-sliver-bronze)
    - [Regular expression patterns](#regular-expression-patterns)
  - [Deprecation of powder color set](#deprecation-of-powder-color-set)
  - [Referencing theme colors without stop suffix](#referencing-theme-colors-without-the-stop-suffix)
- [Deprecation of Less color variables](#deprecation-of-less-color-variables)
  - [Replacing Less color variables](#replacing-less-color-variables)
  - [Referencing Less color variables](#referencing-less-color-variables)
- [Using legacy colors](#using-legacy-colors)
  - [Using the `-legacy` suffix](#using-the--legacy-suffix)
  - [Examples of legacy color references](#examples-of-legacy-color-references)
  - [Helpful regular expressions](#helpful-regular-expressions)
    - [Add `-legacy` suffix to colors](#add--legacy-suffix-to-colors)
    - [Add `-legacy` to aliased values](#add--legacy-to-aliased-values)
- [Custom theme generation](#custom-theme-generation)
  - [Replacing `.generate-calculated-themed-variables()`](#replacing-generate-calculated-themed-variables)
- [Deprecation of `.s-btn__primary`](#deprecation-of-s-btn__primary)

## Upgrading dependencies

While updating to Stacks v2, you must also update other Stacks dependencies you may have included in your project. Below is a table of Stacks dependencies and the corresponding minimum versions compatible with Stacks v2.

Dependency | Minimum version
:-:|:-:
[stacks](https://github.com/StackExchange/Stacks) | [2.0.0](https://www.npmjs.com/package/@stackoverflow/stacks/v/2.0.0)
[stacks-editor](https://github.com/StackExchange/Stacks-Editor) | [0.9.0](https://www.npmjs.com/package/@stackoverflow/stacks-editor/v/0.9.0)
[stacks-icons](https://github.com/StackExchange/Stacks-Icons) | [6.0.0](https://www.npmjs.com/package/@stackoverflow/stacks-icons/v/6.0.0)

## Using Stacks v2 colors

In Stacks v2, all components and atomic classes have been updated to use new color sets optimized for accessibility. In the process, the previous colors have been deprecated and the number of color stops has been reduced. This section will help you migrate to use the new colors.

### Color stop mappings

Stacks v2 reduces and unifies the number of color stops for each set of colors. Below, you'll find a series of tables that map the old color stops to the new color stops. Update your color references by mapping them to the new stop values.

> **Note**
> The `powder` color set has been deprecated and is not included in the updated colors. See the [deprecation of powder color set](#deprecation-of-powder-color-set) section for more information.

#### Orange, blue, green, red, yellow, theme-primary, theme-secondary

Stacks v1 | Stacks v2
:-:|:-:
025*† | 100
050, 075* | 200
100, 150*, 200 | 300
300, 350*, 400, 500 | 400
600, 700 | 500
800, 900 | 600

- *only applies to theme colors
- †only applies to green and red

#### Black

Stacks v1 | Stacks v2
:-:|:-:
N/A | 050
025 | 100
050 | 150
075 | 200
100 | 225
150 | 250
200 | 300
300, 350 | 350
400, 500 | 400
600, 700 | 500
750, 800, 900 | 600

#### Gold, sliver, bronze

Stacks v1 | Stacks v2
:-:|:-:
[color]-lighter | 100
N/A | 200
[color] | 300
[color]-darker | 400

#### Regular expression patterns

Below is just one example of a regular expression that can help you find and replace color references. Swap the color names and stop suffixes to update different remappings.

###### Find
```regexp
(theme-primary|theme-secondary|orange|blue|green|red|yellow)-(100|150|200)
```

###### Replace
```regexp
$1-300
```

### Deprecation of `powder` color set

Stacks v2 no longer includes the `powder` color set. We recommend you replace all references to `powder` with `blue`. If you need to continuing referencing `powder`, you can use the `-legacy` suffix until the library permanently removes legacy colors. See the [using legacy colors](#using-legacy-colors) section for more information.

### Referencing theme colors without the stop suffix

We've removed the `-color` suffix from the default theme variable custom properties. Previously, you could reference the 400 stop of theme colors with `theme-(primary|secondary)-color`. Now, you should reference the 400 stop of theme colors with `theme-(primary|secondary)`. Below is a table showing the old and new custom property names, though this pattern also applies to color, background, and border utility classes.

Variable | Stacks v1 | Stacks v2
:-:|:-:|:-:
**Primary** | `--theme-primary-color` | `--theme-primary`
**Secondary** | `--theme-secondary-color` | `--theme-secondary`

## Deprecation of Less color variables

Stacks v2 deprecates the usage of Less variables outside of Stacks. Although there's no way to make these variables truly private, we now discourage referencing them directly unless otherwise stated in our official documentation and advise that changes to psuedo-private variables may break your code if you reference them.

### Replacing Less color variables

Stacks v2 includes new CSS custom properties to replace a handful of commonly referenced Less variables. Update your Less variable references to the new CSS custom properties where possible.

Stacks v1 | Stacks v2
:-:|:-:
`@black` | `var(--_black-static)`
`@white` | `var(--_white-static)`

### Referencing Less color variables

In rare circumstances, you may need to reference a color value directly in order to operate on it and generate a new color or extract some value. In these cases, you *can* reference colors within a given color set. We advise against this and don't guarantee that these variables will remain stable. Nevertheless, here's how you would reference a Less color variable in Stacks v2.

Stacks v1 | Stacks v2
:-:|:-:
`@black-350` | `.set-black()[350]`

## Using legacy colors

Legacy colors are deprecated and will be removed January 2024. We **strongly** recommend you migrate to the new colors as soon as possible. With that said, you may have a need to reference legacy colors in the short term. This section gives an overview of how to reference legacy colors.

### Using the `-legacy` suffix

Stacks v2 replaces v1 colors, but you can still reference the v1 colors by adding the `-legacy` label to your color references. The `-legacy` suffix will generally come *after* the color name and *before* a color stop suffix (if it exists). This applies to atomic color classes (such as `.bc-*`, `.bg-*`, and `.fc-*`), CSS custom properties, and Less variables. See the [legacy color documentation](https://stackoverflow.design/product/v1/base/colors/) for more information.

### Examples of legacy color references

Stacks v1 | Stacks v2
:-:|:-:
`.bc-red-800` | `.bc-red-legacy-800`
`--theme-secondary-400` | `--theme-secondary-legacy-400`
`--theme-base-primary-color-h` | `--theme-base-primary-color-legacy-h`
`.fc-light` | `.fc-light-legacy`
`.fc-white__forced` | `.fc-white-legacy__forced`
`@black` | `@black-legacy`

### Helpful regular expressions

Below you'll find a set of regular expressions to help you find and replace existing color references with corresponding legacy reference. 

> **Note**
> Even with these regular expressions, you'll may still need to find and replace some color references manually. For example, this regex will not alter references to `black` that don't contain a numeric stop suffix.

#### Add `-legacy` suffix to colors

##### Find
```regexp
(theme-primary|theme-secondary|black|orange|blue|green|red|yellow|powder|fog)-(025|050|075|100|150|200|300|350|400|500|600|700|750|800|900)
```

##### Replace
```regexp
// Replace
$1-legacy-$2
```

#### Add `-legacy` to aliased values

##### Find
```regexp
(bc|fc|bg)-(lightest|lighter|light|medium|darker|dark)
```

##### Replace
```regexp
$1-$2-legacy
```

## Custom theme generation

Stacks v2 has deprecated the Less function `.generate-calculated-themed-variables()` in favor of the newly added `.create-custom-theme-hsl-variables()` function. This new function works differently behind the scenes, but it accepts the same arguments and generates the same CSS custom properties as its deprecated equivelent. See the [theming documentation](https://stackoverflow.design/product/foundation/theming/).

### Replacing `.generate-calculated-themed-variables()`

To update to the new custom theme variable generation function, simply search for `.generate-calculated-themed-variables` in your codebase and replace it with `.create-custom-theme-hsl-variables`.

## Deprecation of `.s-btn__primary`

Stacks v2 deprecates the `.s-btn__primary` variant. To retain a similar style, we recommend replacing all instances of `.s-btn__primary` with `.s-btn__filled`. See the [button documentation](https://stackoverflow.design/product/components/buttons/) for more information.
