---
title: "Typography"
description: "Stacks provides atomic classes to override default styling of typography. Change typographic weights, styles, and alignment with these atomic styles."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=50-9087"
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const basicClasses: ClassTableRow[] = [
        { class: '.fw-normal',     output: 'font-weight: 400;',           define: 'Normal font weight. Maps to 400.' },
        { class: '.fw-medium',     output: 'font-weight: 500;',           define: 'Medium font weight. Maps to 500.' },
        { class: '.fw-bold',       output: 'font-weight: 600;',           define: 'Bold font weight. Maps to 600.' },
        { class: '.fs-normal',     output: 'font-style: normal;',         define: 'Selects the normal font within the font-family.' },
        { class: '.fs-italic',     output: 'font-style: italic;',         define: 'Selects the italic font within the font-family.' },
        { class: '.tt-capitalize', output: 'text-transform: capitalize;', define: 'The first character in each word is capitalized regardless of markup.' },
        { class: '.tt-lowercase',  output: 'text-transform: lowercase;',  define: 'All characters are lowercase regardless of markup.' },
        { class: '.tt-uppercase',  output: 'text-transform: uppercase;',  define: 'All characters are uppercase regardless of markup.' },
        { class: '.tt-none',       output: 'text-transform: none;',       define: 'Characters in a string remain unchanged.' },
        { class: '.tt-unset',      output: 'text-transform: unset;',      define: 'Text-transform is unset entirely.' },
        { class: '.td-underline',  output: 'text-decoration: underline;', define: 'Text renders with an underline.' },
        { class: '.td-none',       output: 'text-decoration: none;',      define: 'Text renders without an underline.' },
    ];

    const layoutClasses: ClassTableRow[] = [
        { class: '.ta-left',      output: 'text-align: left;',                                                   define: 'Inline contents are aligned to the left edge.',                                                                                                                              responsive: true },
        { class: '.ta-center',    output: 'text-align: center;',                                                  define: 'Inline contents are aligned to the center.',                                                                                                                               responsive: true },
        { class: '.ta-right',     output: 'text-align: right;',                                                   define: 'Inline contents are aligned to the right edge.',                                                                                                                           responsive: true },
        { class: '.ta-justify',   output: 'text-align: justify;',                                                 define: 'Inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges, except for the last line.' },
        { class: '.ws-normal',    output: 'white-space: normal;',                                                 define: 'Lines are broken as necessary to fill the parent.' },
        { class: '.ws-nowrap',    output: 'white-space: nowrap;',                                                 define: 'Text wrapping is disabled.' },
        { class: '.ws-pre',       output: 'white-space: pre;',                                                    define: "Whitespace is preserved but text won't wrap." },
        { class: '.ws-pre-wrap',  output: 'white-space: pre-wrap;',                                               define: 'Whitespace is preserved but text will wrap. New lines are preserved.' },
        { class: '.ws-pre-line',  output: 'white-space: pre-line;',                                               define: 'Whitespace is preserved but text will wrap. New lines are collapsed.' },
        { class: '.ow-normal',    output: 'word-break: normal;',                                                  define: 'Restores overflow wrapping behavior.' },
        { class: '.ow-anywhere',  output: 'overflow-wrap: anywhere;',                                             define: 'Breaks a string of characters at any point when no other acceptable break points are available and does not hyphenate the break.' },
        { class: '.ow-break-word', output: 'overflow-wrap: break-word;',                                          define: 'Breaks a word to a new line only if the entire word cannot be placed on its own line without overflowing.' },
        { class: '.ow-inherit',   output: 'overflow-wrap: inherit;',                                              define: 'Inherits the parent value.' },
        { class: '.ow-intial',    output: 'overflow-wrap: intial;',                                               define: 'Restores the value to the initial value set on the body.' },
        { class: '.ow-unset',     output: 'overflow-wrap: unset;',                                                define: 'Unsets any inherited behavior. Does not work in IE.' },
        { class: '.break-word',   output: 'word-break: break-word; overflow-wrap: break-word; hyphens: auto;',    define: 'A utility class combining all word-break strategies when you absolutely must break a word.' },
        { class: '.wb-normal',    output: 'word-break: normal;',                                                  define: 'Restores word break behavior.' },
        { class: '.wb-break-all', output: 'word-break: break-all;',                                               define: 'To prevent copy from overflowing its box, breaks should occur between any two characters (excluding Chinese, Japanese, and Korean text)' },
        { class: '.wb-keep-all',  output: 'word-break: keep-all;',                                                define: 'Removes word breaks for Chinese, Japanese, and Korean text. All other text behavior is the same as normal.' },
        { class: '.wb-inherit',   output: 'word-break: inherit;',                                                 define: 'Inherits the parent value.' },
        { class: '.wb-intial',    output: 'word-break: intial;',                                                  define: 'Restores the value to the initial value set on the body.' },
        { class: '.wb-unset',     output: 'word-break: unset;',                                                   define: 'Unsets any inherited behavior.' },
    ];
</script>

## Basic

These styles should only be used as overrides. They shouldn't replace standard semantic uses of `strong` or `em` tags.

### Basic classes

<ClassTable classes={basicClasses} />

### Basic examples

```html
<p class="fw-normal">…</p>
<p class="fw-bold">…</p>

<p class="fs-normal">…</p>
<p class="fs-italic">…</p>
<p class="fs-unset">…</p>

<p class="tt-capitalize">…</p>
<p class="tt-lowercase">…</p>
<p class="tt-uppercase">…</p>
<p class="tt-none">…</p>
<p class="tt-unset">…</p>

<a class="td-underline">…</a>
<a class="td-none">…</a>
```

<Example>
    <div class="d-flex fd-column gy16">
        <div><strong>Font Weight:</strong> Normal</div>
        <div><strong>Font Weight:</strong> <span class="fw-bold">Bold</span></div>
        <div><strong>Font Style:</strong> <span class="fs-normal">Normal</span></div>
        <div><strong>Font Style:</strong> <span class="fs-italic">Italic</span></div>
        <div class="mb32"><strong>Font Style:</strong> <span class="fs-unset">Unset</span></div>
        <div><strong>Text Transform:</strong> <span class="tt-capitalize">Capitalize</span></div>
        <div><strong>Text Transform:</strong> <span class="tt-lowercase">Lowercase</span></div>
        <div><strong>Text Transform:</strong> <span class="tt-uppercase">Uppercase</span></div>
        <div><strong>Text Transform:</strong> <span class="tt-none">None</span></div>
        <div class="mb32"><strong>Text Transform:</strong> <span class="tt-unset">Unset</span></div>
        <div><strong>Text Decoration:</strong> <a><span class="td-underline">Underline</span></a></div>
        <div><strong>Text Decoration:</strong> <a><span class="td-none">None</span></a></div>
    </div>
</Example>

## Layout

### Layout classes

<ClassTable classes={layoutClasses} expandable />

### Layout examples

```html
<p class="ta-left">Text align: Left</p>
<p class="ta-center">Text align: Center</p>
<p class="ta-right">Text align: Right</p>
<p class="ta-justify">Justify: …</p>
<p class="ta-unset">Text align: Unset</p>

<p class="ws-normal">White-space: Normal</p>
<p class="ws-nowrap">White-space: Nowrap</p>
<p class="ws-pre">White-space: Pre</p>
<p class="ws-pre-wrap">White-space: Pre-wrap</p>
<p class="ws-pre-line">White-space: Pre-line</p>
<p class="ws-unset">White-space: Unset</p>

<p class="break-word">Break word</p>

<p class="truncate">Truncate: …</p>
```

<Example>
    <p class="ta-left"><strong>Text Align:</strong> Left</p>
    <p class="ta-center"><strong>Text Align:</strong> Center</p>
    <p class="ta-right"><strong>Text Align:</strong> Right</p>
    <p class="ta-justify"><strong>Text Align:</strong> Justify — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="ta-unset mb32"><strong>Text Align:</strong> Unset</p>
    <p class="ws-normal"><strong>White-space:</strong> Normal</p>
    <p class="ws-nowrap"><strong>White-space:</strong> Nowrap</p>
    <p class="ws-pre"><strong>White-space:</strong> Pre</p>
    <p class="ws-pre-wrap"><strong>White-space:</strong> Pre-wrap</p>
    <p class="ws-pre-line"><strong>White-space:</strong> Pre-line</p>
    <p class="ws-unset mb32"><strong>White-space:</strong> Unset</p>
    <p class="break-word mb32"><strong>Break word:</strong> MethionylglutaminylarginylhionylglutaminylargintyrosylglutamylmethionylglutaminylarginyltyrlarginyltyrosylglutamylMethionylglutaminylarginyltyrosylglutamylnyltyrosylserinemethionylglutaminylargiglutamylmethionyosylglutamylmethionylglutaminylglutaminylarginyltyrosylglutamylmethionylglutaminylarginyltyrosylglutamylmetyltyrosylglutamylserine</p>
</Example>

## Fonts

```html
<p class="ff-sans">…</p>
<p class="ff-serif">…</p>
<p class="ff-mono">…</p>
<p class="ff-inherit">…</p>
```

<Example>
    <div class="d-flex fd-column gy16 my0 fs-subheading">
        <div>
            <p class="ff-sans mb0">Sans Serif</p>
            <p class="ff-mono fs-caption fc-light">-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</p>
        </div>
        <div>
            <p class="ff-serif mb0">Serif</p>
            <p class="ff-mono fs-caption fc-light">Georgia, Cambria, "Times New Roman", Times, serif</p>
        </div>
        <div>
            <p class="ff-mono mb0">Monospace</p>
            <p class="ff-mono fs-caption fc-light mb0">"SF Mono", SFMono-Regular, ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace</p>
        </div>
    </div>
</Example>

## Sizes

Fonts larger than `.fs-body1` are reduced in size at the smallest responsive breakpoint. `.fs-body1` or smaller remain fixed at their initial pixel values.

### Size classes

<div class="overflow-x-auto mb32" tabindex="0" role="region" aria-label="Size classes table">
    <table class="s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Class</th>
                <th scope="col">Size</th>
                <th scope="col">Line Height</th>
                <th scope="col">Responsive Size</th>
            </tr>
        </thead>
        <tbody class="fs-caption">
            <tr>
                <th scope="row"><code>.fs-fine</code></th>
                <td><code>12px</code></td>
                <td><code>1.36</code></td>
                <td><code>12px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-caption</code></th>
                <td><code>13px</code></td>
                <td><code>1.40</code></td>
                <td><code>13px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-body1</code></th>
                <td><code>14px</code></td>
                <td><code>1.40</code></td>
                <td><code>14px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-body2</code></th>
                <td><code>16px</code></td>
                <td><code>1.40</code></td>
                <td><code>15px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-body3</code></th>
                <td><code>18px</code></td>
                <td><code>1.40</code></td>
                <td><code>16px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-subheading</code></th>
                <td><code>20px</code></td>
                <td><code>1.40</code></td>
                <td><code>18px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-title</code></th>
                <td><code>22px</code></td>
                <td><code>1.40</code></td>
                <td><code>20px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-headline1</code></th>
                <td><code>28px</code></td>
                <td><code>1.40</code></td>
                <td><code>23px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-headline2</code></th>
                <td><code>36px</code></td>
                <td><code>1.40</code></td>
                <td><code>26px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-display1</code></th>
                <td><code>46px</code></td>
                <td><code>1.34</code></td>
                <td><code>29px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-display2</code></th>
                <td><code>58px</code></td>
                <td><code>1.28</code></td>
                <td><code>34px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-display3</code></th>
                <td><code>72px</code></td>
                <td><code>1.20</code></td>
                <td><code>37px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.fs-display4</code></th>
                <td><code>100px</code></td>
                <td><code>1.18</code></td>
                <td><code>43px</code></td>
            </tr>
        </tbody>
    </table>
</div>

### Size examples

```html
<p class="fs-fine">…</p>
<p class="fs-caption">…</p>
<p class="fs-body1">…</p>
<p class="fs-body2">…</p>
<p class="fs-body3">…</p>
<p class="fs-subheading">…</p>
<p class="fs-title">…</p>
<p class="fs-headline1">…</p>
<p class="fs-headline2">…</p>
<p class="fs-display1">…</p>
<p class="fs-display2">…</p>
<p class="fs-display3">…</p>
<p class="fs-display4">…</p>
```

<Example>
    <div class="d-flex fd-column g24 my0">
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Fine</div>
            <div class="fs-fine">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Caption</div>
            <div class="fs-caption">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Body 1</div>
            <div class="fs-body1">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Body 2</div>
            <div class="fs-body2">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Body 3</div>
            <div class="fs-body3">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Subheading</div>
            <div class="fs-subheading">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Title</div>
            <div class="fs-title">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Headline 1</div>
            <div class="fs-headline1">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Headline 2</div>
            <div class="fs-headline2">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Display 1</div>
            <div class="fs-display1">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Display 2</div>
            <div class="fs-display2">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Display 3</div>
            <div class="fs-display3">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
        <div class="d-flex fd-column">
            <div class="fc-black-400 fs-caption fw-bold">Display 4</div>
            <div class="fs-display4">
                <span class="v-truncate2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
        </div>
    </div>
</Example>

## Line height

```html
<p class="lh-xs">…</p>
<p class="lh-sm">…</p>
<p class="lh-md">…</p>
<p class="lh-lg">…</p>
<p class="lh-xl">…</p>
<p class="lh-xxl">…</p>
<p class="lh-unset">…</p>
```

<Example>
    <p class="lh-xs"><strong>Line Height XS:</strong> This sets the <code>line-height</code> value to <code>1</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="lh-sm"><strong>Line Height SM:</strong> This sets the <code>line-height</code> value to <code>1.15</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="lh-md"><strong>Line Height MD:</strong> This sets the <code>line-height</code> value to <code>1.3</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="lh-lg"><strong>Line Height LG:</strong> This sets the <code>line-height</code> value to <code>1.6</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="lh-xl"><strong>Line Height XL:</strong> This sets the <code>line-height</code> value to <code>1.92</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="lh-xxl"><strong>Line Height XXL:</strong> This sets the <code>line-height</code> value to <code>2</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="lh-unset"><strong>Line Height Unset:</strong> This sets the <code>line-height</code> value to <code>initial</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Example>

## Hyphenation

Our hyphenation classes determine when text that wraps across multiple lines is hyphenated. You can prevent hyphenation entirely, or allow the browser to automatically hypenate.

```html
<p class="hyphens-none">…</p>
<p class="hyphens-auto">…</p>
```

<Example>
    <div class="d-flex">
        <div class="docs-box hyphens-none ow-break-word w96 mr16">
            This text will not be hyphenated when large words break—longer words are broken by <code class="bg-black-250">.ow-break-word</code>.
        </div>
        <div class="docs-box hyphens-auto w96">
            This text will be hyphenated when large words break. <code class="bg-black-250">.ow-break-word</code> shouldn't be necessary since breaks are implied by hyphenation rules.
        </div>
    </div>
</Example>
