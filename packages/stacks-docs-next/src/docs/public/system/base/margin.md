---
title: "Margin"
description: "Stacks provides atomic classes to override margin."
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const baseAbbreviations: ClassTableRow[] = [
        { class: 'm',  output: 'margin',          description: 'Responsive' },
        { class: 'mt', output: 'margin-top',       description: 'Responsive' },
        { class: 'mr', output: 'margin-right',     description: 'Responsive' },
        { class: 'mb', output: 'margin-bottom',    description: 'Responsive' },
        { class: 'ml', output: 'margin-left',      description: 'Responsive' },
        { class: 'mx', output: 'margin x-axis',    description: 'Responsive' },
        { class: 'my', output: 'margin y-axis',    description: 'Responsive' },
    ];

    const baseClasses: ClassTableRow[] = [
        { class: '.m0',    output: 'margin: 0' },
        { class: '.m1',    output: 'margin: 1px' },
        { class: '.m2',    output: 'margin: 2px' },
        { class: '.m4',    output: 'margin: 4px' },
        { class: '.m6',    output: 'margin: 6px' },
        { class: '.m8',    output: 'margin: 8px' },
        { class: '.m12',   output: 'margin: 12px' },
        { class: '.m16',   output: 'margin: 16px' },
        { class: '.m24',   output: 'margin: 24px' },
        { class: '.m32',   output: 'margin: 32px' },
        { class: '.m48',   output: 'margin: 48px' },
        { class: '.m64',   output: 'margin: 64px' },
        { class: '.m96',   output: 'margin: 96px' },
        { class: '.m128',  output: 'margin: 128px' },
        { class: '.m50',   output: 'margin: 50%' },
        { class: '.m100',  output: 'margin: 100%' },
        { class: '.mt0',   output: 'margin-top: 0' },
        { class: '.mt1',   output: 'margin-top: 1px' },
        { class: '.mt2',   output: 'margin-top: 2px' },
        { class: '.mt4',   output: 'margin-top: 4px' },
        { class: '.mt6',   output: 'margin-top: 6px' },
        { class: '.mt8',   output: 'margin-top: 8px' },
        { class: '.mt12',  output: 'margin-top: 12px' },
        { class: '.mt16',  output: 'margin-top: 16px' },
        { class: '.mt24',  output: 'margin-top: 24px' },
        { class: '.mt32',  output: 'margin-top: 32px' },
        { class: '.mt48',  output: 'margin-top: 48px' },
        { class: '.mt64',  output: 'margin-top: 64px' },
        { class: '.mt96',  output: 'margin-top: 96px' },
        { class: '.mt128', output: 'margin-top: 128px' },
        { class: '.mt50',  output: 'margin-top: 50%' },
        { class: '.mt100', output: 'margin-top: 100%' },
        { class: '.mr0',   output: 'margin-right: 0' },
        { class: '.mr1',   output: 'margin-right: 1px' },
        { class: '.mr2',   output: 'margin-right: 2px' },
        { class: '.mr4',   output: 'margin-right: 4px' },
        { class: '.mr6',   output: 'margin-right: 6px' },
        { class: '.mr8',   output: 'margin-right: 8px' },
        { class: '.mr12',  output: 'margin-right: 12px' },
        { class: '.mr16',  output: 'margin-right: 16px' },
        { class: '.mr24',  output: 'margin-right: 24px' },
        { class: '.mr32',  output: 'margin-right: 32px' },
        { class: '.mr48',  output: 'margin-right: 48px' },
        { class: '.mr64',  output: 'margin-right: 64px' },
        { class: '.mr96',  output: 'margin-right: 96px' },
        { class: '.mr128', output: 'margin-right: 128px' },
        { class: '.mr50',  output: 'margin-right: 50%' },
        { class: '.mr100', output: 'margin-right: 100%' },
        { class: '.mb0',   output: 'margin-bottom: 0' },
        { class: '.mb1',   output: 'margin-bottom: 1px' },
        { class: '.mb2',   output: 'margin-bottom: 2px' },
        { class: '.mb4',   output: 'margin-bottom: 4px' },
        { class: '.mb6',   output: 'margin-bottom: 6px' },
        { class: '.mb8',   output: 'margin-bottom: 8px' },
        { class: '.mb12',  output: 'margin-bottom: 12px' },
        { class: '.mb16',  output: 'margin-bottom: 16px' },
        { class: '.mb24',  output: 'margin-bottom: 24px' },
        { class: '.mb32',  output: 'margin-bottom: 32px' },
        { class: '.mb48',  output: 'margin-bottom: 48px' },
        { class: '.mb64',  output: 'margin-bottom: 64px' },
        { class: '.mb96',  output: 'margin-bottom: 96px' },
        { class: '.mb128', output: 'margin-bottom: 128px' },
        { class: '.mb50',  output: 'margin-bottom: 50%' },
        { class: '.mb100', output: 'margin-bottom: 100%' },
        { class: '.ml0',   output: 'margin-left: 0' },
        { class: '.ml1',   output: 'margin-left: 1px' },
        { class: '.ml2',   output: 'margin-left: 2px' },
        { class: '.ml4',   output: 'margin-left: 4px' },
        { class: '.ml6',   output: 'margin-left: 6px' },
        { class: '.ml8',   output: 'margin-left: 8px' },
        { class: '.ml12',  output: 'margin-left: 12px' },
        { class: '.ml16',  output: 'margin-left: 16px' },
        { class: '.ml24',  output: 'margin-left: 24px' },
        { class: '.ml32',  output: 'margin-left: 32px' },
        { class: '.ml48',  output: 'margin-left: 48px' },
        { class: '.ml64',  output: 'margin-left: 64px' },
        { class: '.ml96',  output: 'margin-left: 96px' },
        { class: '.ml128', output: 'margin-left: 128px' },
        { class: '.ml50',  output: 'margin-left: 50%' },
        { class: '.ml100', output: 'margin-left: 100%' },
        { class: '.mx0',   output: 'margin-left: 0; margin-right: 0' },
        { class: '.mx1',   output: 'margin-left: 1px; margin-right: 1px' },
        { class: '.mx2',   output: 'margin-left: 2px; margin-right: 2px' },
        { class: '.mx4',   output: 'margin-left: 4px; margin-right: 4px' },
        { class: '.mx6',   output: 'margin-left: 6px; margin-right: 6px' },
        { class: '.mx8',   output: 'margin-left: 8px; margin-right: 8px' },
        { class: '.mx12',  output: 'margin-left: 12px; margin-right: 12px' },
        { class: '.mx16',  output: 'margin-left: 16px; margin-right: 16px' },
        { class: '.mx24',  output: 'margin-left: 24px; margin-right: 24px' },
        { class: '.mx32',  output: 'margin-left: 32px; margin-right: 32px' },
        { class: '.mx48',  output: 'margin-left: 48px; margin-right: 48px' },
        { class: '.mx64',  output: 'margin-left: 64px; margin-right: 64px' },
        { class: '.mx96',  output: 'margin-left: 96px; margin-right: 96px' },
        { class: '.mx128', output: 'margin-left: 128px; margin-right: 128px' },
        { class: '.mx50',  output: 'margin-left: 50%; margin-right: 50%' },
        { class: '.mx100', output: 'margin-left: 100%; margin-right: 100%' },
        { class: '.my0',   output: 'margin-top: 0; margin-bottom: 0' },
        { class: '.my1',   output: 'margin-top: 1px; margin-bottom: 1px' },
        { class: '.my2',   output: 'margin-top: 2px; margin-bottom: 2px' },
        { class: '.my4',   output: 'margin-top: 4px; margin-bottom: 4px' },
        { class: '.my6',   output: 'margin-top: 6px; margin-bottom: 6px' },
        { class: '.my8',   output: 'margin-top: 8px; margin-bottom: 8px' },
        { class: '.my12',  output: 'margin-top: 12px; margin-bottom: 12px' },
        { class: '.my16',  output: 'margin-top: 16px; margin-bottom: 16px' },
        { class: '.my24',  output: 'margin-top: 24px; margin-bottom: 24px' },
        { class: '.my32',  output: 'margin-top: 32px; margin-bottom: 32px' },
        { class: '.my48',  output: 'margin-top: 48px; margin-bottom: 48px' },
        { class: '.my64',  output: 'margin-top: 64px; margin-bottom: 64px' },
        { class: '.my96',  output: 'margin-top: 96px; margin-bottom: 96px' },
        { class: '.my128', output: 'margin-top: 128px; margin-bottom: 128px' },
        { class: '.my50',  output: 'margin-top: 50%; margin-bottom: 50%' },
        { class: '.my100', output: 'margin-top: 100%; margin-bottom: 100%' },
    ];

    const negativeAbbreviations: ClassTableRow[] = [
        { class: 'mn',  output: 'margin',          description: 'Responsive' },
        { class: 'mtn', output: 'margin-top',       description: 'Responsive' },
        { class: 'mrn', output: 'margin-right',     description: 'Responsive' },
        { class: 'mbn', output: 'margin-bottom',    description: 'Responsive' },
        { class: 'mln', output: 'margin-left',      description: 'Responsive' },
        { class: 'mxn', output: 'margin x-axis',    description: 'Responsive' },
        { class: 'myn', output: 'margin y-axis',    description: 'Responsive' },
    ];

    const negativeClasses: ClassTableRow[] = [
        { class: '.mn1',    output: 'margin: -1px' },
        { class: '.mn2',    output: 'margin: -2px' },
        { class: '.mn4',    output: 'margin: -4px' },
        { class: '.mn6',    output: 'margin: -6px' },
        { class: '.mn8',    output: 'margin: -8px' },
        { class: '.mn12',   output: 'margin: -12px' },
        { class: '.mn16',   output: 'margin: -16px' },
        { class: '.mn24',   output: 'margin: -24px' },
        { class: '.mn32',   output: 'margin: -32px' },
        { class: '.mn48',   output: 'margin: -48px' },
        { class: '.mn64',   output: 'margin: -64px' },
        { class: '.mn96',   output: 'margin: -96px' },
        { class: '.mn128',  output: 'margin: -128px' },
        { class: '.mn50',   output: 'margin: -50%' },
        { class: '.mn100',  output: 'margin: -100%' },
        { class: '.mtn1',   output: 'margin-top: -1px' },
        { class: '.mtn2',   output: 'margin-top: -2px' },
        { class: '.mtn4',   output: 'margin-top: -4px' },
        { class: '.mtn6',   output: 'margin-top: -6px' },
        { class: '.mtn8',   output: 'margin-top: -8px' },
        { class: '.mtn12',  output: 'margin-top: -12px' },
        { class: '.mtn16',  output: 'margin-top: -16px' },
        { class: '.mtn24',  output: 'margin-top: -24px' },
        { class: '.mtn32',  output: 'margin-top: -32px' },
        { class: '.mtn48',  output: 'margin-top: -48px' },
        { class: '.mtn64',  output: 'margin-top: -64px' },
        { class: '.mtn96',  output: 'margin-top: -96px' },
        { class: '.mtn128', output: 'margin-top: -128px' },
        { class: '.mtn50',  output: 'margin-top: -50%' },
        { class: '.mtn100', output: 'margin-top: -100%' },
        { class: '.mrn1',   output: 'margin-right: -1px' },
        { class: '.mrn2',   output: 'margin-right: -2px' },
        { class: '.mrn4',   output: 'margin-right: -4px' },
        { class: '.mrn6',   output: 'margin-right: -6px' },
        { class: '.mrn8',   output: 'margin-right: -8px' },
        { class: '.mrn12',  output: 'margin-right: -12px' },
        { class: '.mrn16',  output: 'margin-right: -16px' },
        { class: '.mrn24',  output: 'margin-right: -24px' },
        { class: '.mrn32',  output: 'margin-right: -32px' },
        { class: '.mrn48',  output: 'margin-right: -48px' },
        { class: '.mrn64',  output: 'margin-right: -64px' },
        { class: '.mrn96',  output: 'margin-right: -96px' },
        { class: '.mrn128', output: 'margin-right: -128px' },
        { class: '.mrn50',  output: 'margin-right: -50%' },
        { class: '.mrn100', output: 'margin-right: -100%' },
        { class: '.mbn1',   output: 'margin-bottom: -1px' },
        { class: '.mbn2',   output: 'margin-bottom: -2px' },
        { class: '.mbn4',   output: 'margin-bottom: -4px' },
        { class: '.mbn6',   output: 'margin-bottom: -6px' },
        { class: '.mbn8',   output: 'margin-bottom: -8px' },
        { class: '.mbn12',  output: 'margin-bottom: -12px' },
        { class: '.mbn16',  output: 'margin-bottom: -16px' },
        { class: '.mbn24',  output: 'margin-bottom: -24px' },
        { class: '.mbn32',  output: 'margin-bottom: -32px' },
        { class: '.mbn48',  output: 'margin-bottom: -48px' },
        { class: '.mbn64',  output: 'margin-bottom: -64px' },
        { class: '.mbn96',  output: 'margin-bottom: -96px' },
        { class: '.mbn128', output: 'margin-bottom: -128px' },
        { class: '.mbn50',  output: 'margin-bottom: -50%' },
        { class: '.mbn100', output: 'margin-bottom: -100%' },
        { class: '.mln1',   output: 'margin-left: -1px' },
        { class: '.mln2',   output: 'margin-left: -2px' },
        { class: '.mln4',   output: 'margin-left: -4px' },
        { class: '.mln6',   output: 'margin-left: -6px' },
        { class: '.mln8',   output: 'margin-left: -8px' },
        { class: '.mln12',  output: 'margin-left: -12px' },
        { class: '.mln16',  output: 'margin-left: -16px' },
        { class: '.mln24',  output: 'margin-left: -24px' },
        { class: '.mln32',  output: 'margin-left: -32px' },
        { class: '.mln48',  output: 'margin-left: -48px' },
        { class: '.mln64',  output: 'margin-left: -64px' },
        { class: '.mln96',  output: 'margin-left: -96px' },
        { class: '.mln128', output: 'margin-left: -128px' },
        { class: '.mln50',  output: 'margin-left: -50%' },
        { class: '.mln100', output: 'margin-left: -100%' },
        { class: '.mxn1',   output: 'margin-left: -1px; margin-right: -1px' },
        { class: '.mxn2',   output: 'margin-left: -2px; margin-right: -2px' },
        { class: '.mxn4',   output: 'margin-left: -4px; margin-right: -4px' },
        { class: '.mxn6',   output: 'margin-left: -6px; margin-right: -6px' },
        { class: '.mxn8',   output: 'margin-left: -8px; margin-right: -8px' },
        { class: '.mxn12',  output: 'margin-left: -12px; margin-right: -12px' },
        { class: '.mxn16',  output: 'margin-left: -16px; margin-right: -16px' },
        { class: '.mxn24',  output: 'margin-left: -24px; margin-right: -24px' },
        { class: '.mxn32',  output: 'margin-left: -32px; margin-right: -32px' },
        { class: '.mxn48',  output: 'margin-left: -48px; margin-right: -48px' },
        { class: '.mxn64',  output: 'margin-left: -64px; margin-right: -64px' },
        { class: '.mxn96',  output: 'margin-left: -96px; margin-right: -96px' },
        { class: '.mxn128', output: 'margin-left: -128px; margin-right: -128px' },
        { class: '.mxn50',  output: 'margin-left: -50%; margin-right: -50%' },
        { class: '.mxn100', output: 'margin-left: -100%; margin-right: -100%' },
        { class: '.myn1',   output: 'margin-top: -1px; margin-bottom: -1px' },
        { class: '.myn2',   output: 'margin-top: -2px; margin-bottom: -2px' },
        { class: '.myn4',   output: 'margin-top: -4px; margin-bottom: -4px' },
        { class: '.myn6',   output: 'margin-top: -6px; margin-bottom: -6px' },
        { class: '.myn8',   output: 'margin-top: -8px; margin-bottom: -8px' },
        { class: '.myn12',  output: 'margin-top: -12px; margin-bottom: -12px' },
        { class: '.myn16',  output: 'margin-top: -16px; margin-bottom: -16px' },
        { class: '.myn24',  output: 'margin-top: -24px; margin-bottom: -24px' },
        { class: '.myn32',  output: 'margin-top: -32px; margin-bottom: -32px' },
        { class: '.myn48',  output: 'margin-top: -48px; margin-bottom: -48px' },
        { class: '.myn64',  output: 'margin-top: -64px; margin-bottom: -64px' },
        { class: '.myn96',  output: 'margin-top: -96px; margin-bottom: -96px' },
        { class: '.myn128', output: 'margin-top: -128px; margin-bottom: -128px' },
        { class: '.myn50',  output: 'margin-top: -50%; margin-bottom: -50%' },
        { class: '.myn100', output: 'margin-top: -100%; margin-bottom: -100%' },
    ];

    const autoClasses: ClassTableRow[] = [
        { class: '.m-auto',  output: 'margin: auto' },
        { class: '.mt-auto', output: 'margin-top: auto' },
        { class: '.mr-auto', output: 'margin-right: auto' },
        { class: '.mb-auto', output: 'margin-bottom: auto' },
        { class: '.ml-auto', output: 'margin-left: auto' },
        { class: '.mx-auto', output: 'margin-left: auto; margin-right: auto' },
        { class: '.my-auto', output: 'margin-top: auto; margin-bottom: auto' },
    ];
</script>

## Base

Immutable margin utilities are based on our global white space scale. These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

### Abbreviations

<ClassTable classes={baseAbbreviations} headings={{ class: 'Abbreviation', output: 'Property', description: 'Responsive?' }} />

### Base examples

```html
<div class="mt8 mr4 mb32 ml64">
    …
</div>
```

<Example>
    <div class="docs-box bg-black-100">
        <div class="docs-box mt8 mr4 mb32 ml64">
            Example div with different margins applied
        </div>
    </div>
</Example>

### Base classes

<ClassTable classes={baseClasses} expandable />

## Negative

Immutable margin utilities are based on our global white space scale. These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

### Abbreviations

<ClassTable classes={negativeAbbreviations} headings={{ class: 'Abbreviation', output: 'Property', description: 'Responsive?' }} />

### Negative examples

```html
<div class="mtn8 mrn4 mbn32 mln64">
    …
</div>
```

<Example>
    <div class="docs-box bg-black-100 p48">
        <div class="docs-box mtn8 mrn4 mbn32 mln64">
            Example div with different margins applied
        </div>
    </div>
</Example>

### Negative classes

<ClassTable classes={negativeClasses} expandable />

## Auto

Stacks provides additional automatic margin classes. These come in handy when positioning individual flex items within flex layouts, or horizontally centering a block-level element.

### Auto classes

<ClassTable classes={autoClasses} />
