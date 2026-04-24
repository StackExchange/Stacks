---
title: "Padding"
description: "Stacks provides atomic classes to override padding."
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const abbreviations: ClassTableRow[] = [
        { class: 'p',  description: 'padding',         responsive: true },
        { class: 'pt', description: 'padding-top',     responsive: true },
        { class: 'pr', description: 'padding-right',   responsive: true },
        { class: 'pb', description: 'padding-bottom',  responsive: true },
        { class: 'pl', description: 'padding-left',    responsive: true },
        { class: 'px', description: 'padding x-axis',  responsive: true },
        { class: 'py', description: 'padding y-axis',  responsive: true },
    ];

    const classes: ClassTableRow[] = [
        { class: '.p0',    output: 'padding: 0',       responsive: true },
        { class: '.p1',    output: 'padding: 1px',     responsive: true },
        { class: '.p2',    output: 'padding: 2px',     responsive: true },
        { class: '.p4',    output: 'padding: 4px',     responsive: true },
        { class: '.p6',    output: 'padding: 6px',     responsive: true },
        { class: '.p8',    output: 'padding: 8px',     responsive: true },
        { class: '.p12',   output: 'padding: 12px',    responsive: true },
        { class: '.p16',   output: 'padding: 16px',    responsive: true },
        { class: '.p24',   output: 'padding: 24px',    responsive: true },
        { class: '.p32',   output: 'padding: 32px',    responsive: true },
        { class: '.p48',   output: 'padding: 48px',    responsive: true },
        { class: '.p64',   output: 'padding: 64px',    responsive: true },
        { class: '.p96',   output: 'padding: 96px',    responsive: true },
        { class: '.p128',  output: 'padding: 128px',   responsive: true },
        { class: '.p50',   output: 'padding: 50%',     responsive: true },
        { class: '.p100',  output: 'padding: 100%',    responsive: true },
        { class: '.pt0',   output: 'padding-top: 0',       responsive: true },
        { class: '.pt1',   output: 'padding-top: 1px',     responsive: true },
        { class: '.pt2',   output: 'padding-top: 2px',     responsive: true },
        { class: '.pt4',   output: 'padding-top: 4px',     responsive: true },
        { class: '.pt6',   output: 'padding-top: 6px',     responsive: true },
        { class: '.pt8',   output: 'padding-top: 8px',     responsive: true },
        { class: '.pt12',  output: 'padding-top: 12px',    responsive: true },
        { class: '.pt16',  output: 'padding-top: 16px',    responsive: true },
        { class: '.pt24',  output: 'padding-top: 24px',    responsive: true },
        { class: '.pt32',  output: 'padding-top: 32px',    responsive: true },
        { class: '.pt48',  output: 'padding-top: 48px',    responsive: true },
        { class: '.pt64',  output: 'padding-top: 64px',    responsive: true },
        { class: '.pt96',  output: 'padding-top: 96px',    responsive: true },
        { class: '.pt128', output: 'padding-top: 128px',   responsive: true },
        { class: '.pt50',  output: 'padding-top: 50%',     responsive: true },
        { class: '.pt100', output: 'padding-top: 100%',    responsive: true },
        { class: '.pr0',   output: 'padding-right: 0',       responsive: true },
        { class: '.pr1',   output: 'padding-right: 1px',     responsive: true },
        { class: '.pr2',   output: 'padding-right: 2px',     responsive: true },
        { class: '.pr4',   output: 'padding-right: 4px',     responsive: true },
        { class: '.pr6',   output: 'padding-right: 6px',     responsive: true },
        { class: '.pr8',   output: 'padding-right: 8px',     responsive: true },
        { class: '.pr12',  output: 'padding-right: 12px',    responsive: true },
        { class: '.pr16',  output: 'padding-right: 16px',    responsive: true },
        { class: '.pr24',  output: 'padding-right: 24px',    responsive: true },
        { class: '.pr32',  output: 'padding-right: 32px',    responsive: true },
        { class: '.pr48',  output: 'padding-right: 48px',    responsive: true },
        { class: '.pr64',  output: 'padding-right: 64px',    responsive: true },
        { class: '.pr96',  output: 'padding-right: 96px',    responsive: true },
        { class: '.pr128', output: 'padding-right: 128px',   responsive: true },
        { class: '.pr50',  output: 'padding-right: 50%',     responsive: true },
        { class: '.pr100', output: 'padding-right: 100%',    responsive: true },
        { class: '.pb0',   output: 'padding-bottom: 0',       responsive: true },
        { class: '.pb1',   output: 'padding-bottom: 1px',     responsive: true },
        { class: '.pb2',   output: 'padding-bottom: 2px',     responsive: true },
        { class: '.pb4',   output: 'padding-bottom: 4px',     responsive: true },
        { class: '.pb6',   output: 'padding-bottom: 6px',     responsive: true },
        { class: '.pb8',   output: 'padding-bottom: 8px',     responsive: true },
        { class: '.pb12',  output: 'padding-bottom: 12px',    responsive: true },
        { class: '.pb16',  output: 'padding-bottom: 16px',    responsive: true },
        { class: '.pb24',  output: 'padding-bottom: 24px',    responsive: true },
        { class: '.pb32',  output: 'padding-bottom: 32px',    responsive: true },
        { class: '.pb48',  output: 'padding-bottom: 48px',    responsive: true },
        { class: '.pb64',  output: 'padding-bottom: 64px',    responsive: true },
        { class: '.pb96',  output: 'padding-bottom: 96px',    responsive: true },
        { class: '.pb128', output: 'padding-bottom: 128px',   responsive: true },
        { class: '.pb50',  output: 'padding-bottom: 50%',     responsive: true },
        { class: '.pb100', output: 'padding-bottom: 100%',    responsive: true },
        { class: '.pl0',   output: 'padding-left: 0',       responsive: true },
        { class: '.pl1',   output: 'padding-left: 1px',     responsive: true },
        { class: '.pl2',   output: 'padding-left: 2px',     responsive: true },
        { class: '.pl4',   output: 'padding-left: 4px',     responsive: true },
        { class: '.pl6',   output: 'padding-left: 6px',     responsive: true },
        { class: '.pl8',   output: 'padding-left: 8px',     responsive: true },
        { class: '.pl12',  output: 'padding-left: 12px',    responsive: true },
        { class: '.pl16',  output: 'padding-left: 16px',    responsive: true },
        { class: '.pl24',  output: 'padding-left: 24px',    responsive: true },
        { class: '.pl32',  output: 'padding-left: 32px',    responsive: true },
        { class: '.pl48',  output: 'padding-left: 48px',    responsive: true },
        { class: '.pl64',  output: 'padding-left: 64px',    responsive: true },
        { class: '.pl96',  output: 'padding-left: 96px',    responsive: true },
        { class: '.pl128', output: 'padding-left: 128px',   responsive: true },
        { class: '.pl50',  output: 'padding-left: 50%',     responsive: true },
        { class: '.pl100', output: 'padding-left: 100%',    responsive: true },
        { class: '.px1',   output: 'padding-left: 1px; padding-right: 1px',     responsive: true },
        { class: '.px2',   output: 'padding-left: 2px; padding-right: 2px',     responsive: true },
        { class: '.px4',   output: 'padding-left: 4px; padding-right: 4px',     responsive: true },
        { class: '.px6',   output: 'padding-left: 6px; padding-right: 6px',     responsive: true },
        { class: '.px8',   output: 'padding-left: 8px; padding-right: 8px',     responsive: true },
        { class: '.px12',  output: 'padding-left: 12px; padding-right: 12px',   responsive: true },
        { class: '.px16',  output: 'padding-left: 16px; padding-right: 16px',   responsive: true },
        { class: '.px24',  output: 'padding-left: 24px; padding-right: 24px',   responsive: true },
        { class: '.px32',  output: 'padding-left: 32px; padding-right: 32px',   responsive: true },
        { class: '.px48',  output: 'padding-left: 48px; padding-right: 48px',   responsive: true },
        { class: '.px64',  output: 'padding-left: 64px; padding-right: 64px',   responsive: true },
        { class: '.px96',  output: 'padding-left: 96px; padding-right: 96px',   responsive: true },
        { class: '.px128', output: 'padding-left: 128px; padding-right: 128px', responsive: true },
        { class: '.py1',   output: 'padding-top: 1px; padding-bottom: 1px',     responsive: true },
        { class: '.py2',   output: 'padding-top: 2px; padding-bottom: 2px',     responsive: true },
        { class: '.py4',   output: 'padding-top: 4px; padding-bottom: 4px',     responsive: true },
        { class: '.py6',   output: 'padding-top: 6px; padding-bottom: 6px',     responsive: true },
        { class: '.py8',   output: 'padding-top: 8px; padding-bottom: 8px',     responsive: true },
        { class: '.py12',  output: 'padding-top: 12px; padding-bottom: 12px',   responsive: true },
        { class: '.py16',  output: 'padding-top: 16px; padding-bottom: 16px',   responsive: true },
        { class: '.py24',  output: 'padding-top: 24px; padding-bottom: 24px',   responsive: true },
        { class: '.py32',  output: 'padding-top: 32px; padding-bottom: 32px',   responsive: true },
        { class: '.py48',  output: 'padding-top: 48px; padding-bottom: 48px',   responsive: true },
        { class: '.py64',  output: 'padding-top: 64px; padding-bottom: 64px',   responsive: true },
        { class: '.py96',  output: 'padding-top: 96px; padding-bottom: 96px',   responsive: true },
        { class: '.py128', output: 'padding-top: 128px; padding-bottom: 128px', responsive: true },
    ];
</script>

## Padding

Immutable padding utilities are based on a global white space scale defined with custom properties. These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

Padding should never be declared outside of these utilities. This is meant to help create consistency and avoid magic numbers. If, for some reason, the default white space scale does not suit your design, customize and extend it before use.

### Padding class abbreviations

<ClassTable classes={abbreviations} headings={{ class: 'Abbreviation', description: 'Property' }} />

### Padding classes

```html
<div class="pt4 pr64 pb64 pl64">
    …
</div>
```

<Example>
    <div class="pt4 pr64 pb64 pl64 bg-black-200 p12 ba bc-black-225">
        Example div with different paddings applied
    </div>
</Example>

<ClassTable {classes} expandable />
