---
title: "Links"
description: "Links are lightly styled via the <code>a</code> element by default. In addition, we provide <code>.s-link</code> and its variations. In rare situations, <code>.s-link</code> can be applied to a <code>button</code> while maintaining the look of an anchor."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-link--docs"
---

<script lang="ts">
    import { Link } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const linkClasses: ClassTableRow[] = [
        { class: '.s-link',             modifies: 'N/A',       description: 'Base link style that is used almost universally.' },
        { class: '.s-link__grayscale',  modifies: '.s-link',   description: 'A link style modification with our default text color.' },
        { class: '.s-link__muted',      modifies: '.s-link',   description: 'Applies a visually muted style to the base style.' },
        { class: '.s-link__danger',     modifies: '.s-link',   description: 'Applies an important, destructive red to the base style.' },
        { class: '.s-link__inherit',    modifies: '.s-link',   description: "Applies the parent element's text color." },
        { class: '.s-link__underlined', modifies: '.s-link',   description: "Adds an underline to the link's text." },
        { class: '.s-link__dropdown',   modifies: '.s-link',   description: 'Applies a caret for dropdowns and additional interactivity.' },
    ];

    const anchorClasses: ClassTableRow[] = [
        { class: '.s-anchors',             modifies: 'N/A',        description: 'A consistent link style is applied to all descendent anchors.' },
        { class: '.s-anchors__default',    modifies: '.s-anchors', description: "All descendent links receive s-link's default styling." },
        { class: '.s-anchors__grayscale',  modifies: '.s-anchors', description: 'Applies gray styling to all descendent links.' },
        { class: '.s-anchors__muted',      modifies: '.s-anchors', description: 'Applies a visually muted style to all descendent links.' },
        { class: '.s-anchors__danger',     modifies: '.s-anchors', description: 'Applies an important, destructive red to all descendent links.' },
        { class: '.s-anchors__underlined', modifies: '.s-anchors', description: 'Applies an underline to all descendent links.' },
        { class: '.s-anchors__inherit',    modifies: '.s-anchors', description: "Applies the parent element's text color to all descendent links." },
    ];
</script>

## Links

### Link classes

<ClassTable classes={linkClasses} />

### Single link examples

```html
<a class="s-link" href="#">Default</a>
<a class="s-link s-link__grayscale" href="#">Grayscale</a>
<a class="s-link s-link__muted" href="#">Muted</a>
<a class="s-link s-link__danger" href="#">Danger</a>
<a class="s-link s-link__inherit" href="#">Inherit</a>
<a class="s-link s-link__underlined" href="#">Underlined</a>
<button class="s-link">Button Link</button>
<a class="s-link s-link__dropdown" href="#">Links</a>
```

<Example>
    <div class="d-flex g8 ai-center fw-wrap">
        <Link href="#">Default</Link>
        <Link href="#" variant="grayscale">Grayscale</Link>
        <Link href="#" variant="muted">Muted</Link>
        <Link href="#" variant="danger">Danger</Link>
        <Link href="#" variant="inherit">Inherit</Link>
        <Link href="#" underlined>Underlined</Link>
        <Link>Button Link</Link>
        <Link href="#" dropdown>Links</Link>
    </div>
</Example>

### Accessibility

Any link with adjacent static text cannot use color alone to differentiate it as a link. If a link is next to static text and the only visual indication that it's a link is the color of the text, it will require an underline in addition to the color. Reference [WCAG SC 1.4.1](https://www.w3.org/WAI/WCAG22/Techniques/failures/F73) for more details.

## Anchors

### Anchor classes

<ClassTable classes={anchorClasses} />

### Anchor examples

Sometimes you need to give all `<a>` elements inside a container or component the same color, even when it's impractical or even impossible to give each anchor element an `s-link` class (e.g. because the markup is generated from Markdown).

In this case, you can add the `s-anchors` class together with one of the modifiers `s-anchors__default`, `s-anchors__grayscale`, `s-anchors__muted`, `s-anchors__danger`, or `s-anchors__inherit` to the container.

```html
<div class="s-anchors">…</div>
<div class="s-anchors s-anchors__grayscale">…</div>
<div class="s-anchors s-anchors__muted">…</div>
<div class="s-anchors s-anchors__danger">…</div>
<div class="s-anchors s-anchors__underlined">…</div>
<div class="s-anchors s-anchors__inherit">…</div>
```

<Example>
    <div class="s-anchors docs-card mb8">
        There is a <a href="#">default link here</a>, <button class="s-btn s-btn__link">a button</button>, and <a href="https://stackoverflow.com">another one</a>.
    </div>
    <div class="s-anchors s-anchors__grayscale docs-card mb8 fc-orange-500">
        There is a <a href="#">grayscale link here</a>, <button class="s-btn s-btn__link">a button</button>, and <a href="https://stackoverflow.com">another one</a>.
    </div>
    <div class="s-anchors s-anchors__muted docs-card mb8">
        There is a <a href="#">muted link here</a>, <button class="s-btn s-btn__link">a button</button>, and <a href="https://stackoverflow.com">another one</a>.
    </div>
    <div class="s-anchors s-anchors__danger docs-card mb8">
        There is a <a href="#">danger link here</a>, <button class="s-btn s-btn__link">a button</button>, and <a href="https://stackoverflow.com">another one</a>.
    </div>
    <div class="s-anchors s-anchors__underlined docs-card mb8">
        There is a <a href="#">underlined link here</a>, <button class="s-btn s-btn__link">a button</button>, and <a href="https://stackoverflow.com">another one</a>.
    </div>
    <div class="s-anchors s-anchors__inherit docs-card mb8 fc-green-400">
        There is a <a href="#">inherit link here</a>, <button class="s-btn s-btn__link">a button</button>, and <a href="https://stackoverflow.com">another one</a>.
    </div>
</Example>

<!-- TODO: .s-anchors classes need to be fixed to apply the appropriate styles when within an .s-prose container -->

One additional level of nesting is supported, but even that should be exceedingly rare. More than that is not supported.

```html
<div class="s-anchors s-anchors__danger">
    All <a href="#">links</a> in this <a href="#">outer box</a>
    are <a href="#">dangerous</a>.
    <div class="s-anchors s-anchors__default w70 mt8">
        But all <a href="#">links</a> in this <a href="#">inner box</a>
        have the <a href="#">default</a> link color.
    </div>
</div>
```

<Example>
    <div class="s-anchors s-anchors__danger docs-card">
        All <a href="#">links</a> in this <a href="#">outer box</a> are <a href="#">dangerous</a>.
        <div class="s-anchors s-anchors__default docs-card w70 mt8">
            But all <a href="#">links</a> in this <a href="#">inner box</a> have the <a href="#">default</a> link color.
        </div>
    </div>
</Example>

An explicit `s-link` on an anchor overrides any `s-anchors` setting:

```html
<div class="s-anchors s-anchors__danger">
    All <a href="#">links</a> in this <a href="#">box</a> are <a href="#">dangerous</a>,
    except for <a class="s-link">this one</a> which uses the default color, and
    <a class="s-link s-link__muted">this muted link</a>.
</div>
```

<Example>
    <div class="s-anchors s-anchors__danger docs-card">
        All <a href="#">links</a> in this <a href="#">box</a> are <a href="#">dangerous</a>, except for <a class="s-link">this one</a> which uses the default color, and <a class="s-link s-link__muted">this muted link</a>.
    </div>
</Example>
