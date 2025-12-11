---
title: Conditional classes
description: Stacks provides conditional atomic classes to easily build complex responsive designs, hover states, and print layouts. A limited selection of conditional classes are available throughout Stacks. These are represented in class definitions tables by a green checkmark ✓.
updated: 2025-12-05
---

## Responsive

Many utility classes in Stacks are also available in screen-size specific variations. For example, the `.d-none` utility can be applied to small browser widths and below using the `.sm:d-none` class, on medium browser widths and below using the `.md:d-none` class, and on large browser widths and below using the `.lg:d-none` class.

This is done using predefined max-width media query breakpoints represented by t-shirt sizes. A common example would be to apply `.md:fd-column` to a flex layout. This means, "At the medium breakpoint and smaller, switch the flex layout from columns to rows by applying `fd-column`."

> **Note:** Our font size classes, `.fs-[x]` are automatically adjusted at the smallest breakpoint.

### Responsive classes

| Class     | Breakpoint | Definition                                               |
| --------- | ---------- | -------------------------------------------------------- |
| `.[x]`    | N/A        | The class is applied on all browser widths.              |
| `.lg:[x]` | 1264px     | The class is applied on large browser widths and below.  |
| `.md:[x]` | 980px      | The class is applied on medium browser widths and below. |
| `.sm:[x]` | 640px      | The class is applied on small browser widths and below.  |

### Responsive example

Resize your browser to see which classes are applied.

```html
<div class="d-flex flex__center md:fd-column g16">
    <div class="flex--item wmx3 fs-body3 lg:ta-center">…</div>
    <div class="flex--item md:order-first sm:d-none">
        <svg>…</svg>
    </div>
</div>
```

## Hover

Stacks provides hover-only atomic classes. By applying `.h:bs-lg`, `.h:o100`, and `.h:fc-black-600`, you're saying "On hover, add a large box shadow, an opacity of 100%, and a font color of black 900."

```html
<div class="s-card o80 bs-sm h:bs-lg h:o100 h:fc-black-600"></div>
```

## Focus

Stacks provides focus-only atomic classes. By applying `.f:o100`, and `.f:fc-black-600`, you're saying "On focus, add an opacity of 100%, and a font color of black 900."

```html
<div class="s-card o80 bs-sm f:o100 f:fc-black-600"></div>
```

## Print

Stacks provides print-only atomic classes. By applying `.print:d-none`, you're saying "In print layouts, remove this element from the layout."

```html
<div class="s-card print:d-none"></div>
<div class="s-card d-none print:d-block"></div>
```

## Dark mode

Stacks provides darkmode-only atomic classes. By applying `.d:bg-green-300`, you're saying "In dark mode, apply a background of green 100."

```html
<div class="bg-yellow-300 fc-yellow-600 d:bg-green-300 d:fc-green-600"></div>
```

In addition to specific overrides, you can force an element's colors to be light or dark by applying `.theme-dark__forced` or `.theme-light__forced`. This comes in handy when showing users a preview of light or dark interface elements.

```html
<div class="fc-dark bg-yellow-300 ba bc-yellow-300 theme-light__forced"></div>
```
