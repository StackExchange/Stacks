---
title: "Typography"
description: "Stacks provides atomic classes to override default styling of typography. Change typographic weights, styles, and alignment with these atomic styles."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=50-9087"
---

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="basic">Basic</h2><a class="s-btn s-btn__clear" href="#basic"><span class="v-visible-sr">Section titled Basic</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">These styles should only be used as overrides. They shouldn’t replace standard semantic uses of <code>strong</code> or <code>em</code> tags.</p>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="basic-classes">Basic classes</h3><a class="s-btn s-btn__clear" href="#basic-classes"><span class="v-visible-sr">Section titled Basic classes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="overflow-x-auto mb32" tabindex="0">
        <table class="docs-table s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th class="s-table--cell2" scope="col">Class</th>
                    <th class="s-table--cell3" scope="col">Output</th>
                    <th scope="col">Definition</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.fw-normal</code></th>
                        <td><code>font-weight: 400;</code></td>
                        <td><p class="mt0">Normal font weight. Maps to 400.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.fw-medium</code></th>
                        <td><code>font-weight: 500;</code></td>
                        <td><p class="mt0">Medium font weight. Maps to 500.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.fw-bold</code></th>
                        <td><code>font-weight: 600;</code></td>
                        <td><p class="mt0">Bold font weight. Maps to 600.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.fs-normal</code></th>
                        <td><code>font-style: normal;</code></td>
                        <td><p class="mt0">Selects the normal font within the font-family.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.fs-italic</code></th>
                        <td><code>font-style: italic;</code></td>
                        <td><p class="mt0">Selects the italic font within the font-family.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.tt-capitalize</code></th>
                        <td><code>text-transform: capitalize;</code></td>
                        <td><p class="mt0">The first character in each word is capitalized regardless of markup.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.tt-lowercase</code></th>
                        <td><code>text-transform: lowercase;</code></td>
                        <td><p class="mt0">All characters are lowercase regardless of markup.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.tt-uppercase</code></th>
                        <td><code>text-transform: uppercase;</code></td>
                        <td><p class="mt0">All characters are uppercase regardless of markup.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.tt-none</code></th>
                        <td><code>text-transform: none;</code></td>
                        <td><p class="mt0">Characters in a string remain unchanged.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.tt-unset</code></th>
                        <td><code>text-transform: unset;</code></td>
                        <td><p class="mt0">Text-transform is unset entirely.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.td-underline</code></th>
                        <td><code>text-decoration: underline;</code></td>
                        <td><p class="mt0">Text renders with an underline.</p></td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.td-none</code></th>
                        <td><code>text-decoration: none;</code></td>
                        <td><p class="mt0">Text renders without an underline.</p></td>
                    </tr>
                
            </tbody>
        </table>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="basic-examples">Basic examples</h3><a class="s-btn s-btn__clear" href="#basic-examples"><span class="v-visible-sr">Section titled Basic examples</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fw-normal"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fw-bold"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-normal"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-italic"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-unset"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tt-capitalize"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tt-lowercase"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tt-uppercase"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tt-none"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tt-unset"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"td-underline"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"td-none"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
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
        </div>
    </div>
</section>

<section id="typography-layout" class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="layout">Layout</h2><a class="s-btn s-btn__clear" href="#layout"><span class="v-visible-sr">Section titled Layout</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="layout-classes">Layout classes</h3><a class="s-btn s-btn__clear" href="#layout-classes"><span class="v-visible-sr">Section titled Layout classes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="overflow-x-auto mb32" tabindex="0">
        <table class="docs-table s-table s-table__bx-simple va-middle">
            <thead>
                <tr>
                    <th class="s-table--cell2" scope="col">Class</th>
                    <th class="s-table--cell3" scope="col">Output</th>
                    <th scope="col">Definition</th>
                    <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
                </tr>
            </thead>
            <tbody>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ta-left</code></th>
                        <td><code>text-align: left;</code></td>
                        <td><p class="m0">Inline contents are aligned to the left edge.</p></td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ta-center</code></th>
                        <td><code>text-align: center;</code></td>
                        <td><p class="m0">Inline contents are aligned to the center.</p></td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ta-right</code></th>
                        <td><code>text-align: right;</code></td>
                        <td><p class="m0">Inline contents are aligned to the right edge.</p></td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ta-justify</code></th>
                        <td><code>text-align: justify;</code></td>
                        <td><p class="m0">Inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges, except for the last line.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ws-normal</code></th>
                        <td><code>white-space: normal;</code></td>
                        <td><p class="m0">Lines are broken as necessary to fill the parent.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ws-nowrap</code></th>
                        <td><code>white-space: nowrap;</code></td>
                        <td><p class="m0">Text wrapping is disabled.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ws-pre</code></th>
                        <td><code>white-space: pre;</code></td>
                        <td><p class="m0">Whitespace is preserved but text won’t wrap.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ws-pre-wrap</code></th>
                        <td><code>white-space: pre-wrap;</code></td>
                        <td><p class="m0">Whitespace is preserved but text will wrap. New lines are preserved.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ws-pre-line</code></th>
                        <td><code>white-space: pre-line;</code></td>
                        <td><p class="m0">Whitespace is preserved but text will wrap. New lines are collapsed.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ow-normal</code></th>
                        <td><code>word-break: normal;</code></td>
                        <td><p class="m0">Restores overflow wrapping behavior.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ow-anywhere</code></th>
                        <td><code>overflow-wrap: anywhere;</code></td>
                        <td><p class="m0">Breaks a string of characters at any point when no other acceptable break points are available and does not hyphenate the break.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ow-break-word</code></th>
                        <td><code>overflow-wrap: break-word;</code></td>
                        <td><p class="m0">Breaks a word to a new line only if the entire word cannot be placed on its own line without overflowing.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ow-inherit</code></th>
                        <td><code>overflow-wrap: inherit;</code></td>
                        <td><p class="m0">Inherits the parent value.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ow-intial</code></th>
                        <td><code>overflow-wrap: intial;</code></td>
                        <td><p class="m0">Restores the value to the initial value set on the body.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.ow-unset</code></th>
                        <td><code>overflow-wrap: unset;</code></td>
                        <td><p class="m0">Unsets any inherited behavior. Does not work in IE.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.break-word</code></th>
                        <td><code>word-break: break-word; overflow-wrap: break-word; hyphens: auto;</code></td>
                        <td><p class="m0">A utility class combining all word-break strategies when you absolutely must break a word.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.wb-normal</code></th>
                        <td><code>word-break: normal;</code></td>
                        <td><p class="m0">Restores word break behavior.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.wb-break-all</code></th>
                        <td><code>word-break: break-all;</code></td>
                        <td><p class="m0">To prevent copy from overflowing its box, breaks should occur between any two characters (excluding Chinese, Japanese, and Korean text)</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.wb-keep-all</code></th>
                        <td><code>word-break: keep-all;</code></td>
                        <td><p class="m0">Removes word breaks for Chinese, Japanese, and Korean text. All other text behavior is the same as normal.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.wb-inherit</code></th>
                        <td><code>word-break: inherit;</code></td>
                        <td><p class="m0">Inherits the parent value.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.wb-intial</code></th>
                        <td><code>word-break: intial;</code></td>
                        <td><p class="m0">Restores the value to the initial value set on the body.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
                    <tr class="fs-caption">
                        <th scope="row"><code>.wb-unset</code></th>
                        <td><code>word-break: unset;</code></td>
                        <td><p class="m0">Unsets any inherited behavior.</p></td>
                        <td class="ta-center">
                            
                        </td>
                    </tr>
                
            </tbody>
        </table>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="layout-examples">Layout examples</h3><a class="s-btn s-btn__clear" href="#layout-examples"><span class="v-visible-sr">Section titled Layout examples</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ta-left"</span>&gt;</span>Text align: Left<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ta-center"</span>&gt;</span>Text align: Center<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ta-right"</span>&gt;</span>Text align: Right<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ta-justify"</span>&gt;</span>Justify: …<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ta-unset"</span>&gt;</span>Text align: Unset<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ws-normal"</span>&gt;</span>White-space: Normal<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ws-nowrap"</span>&gt;</span>White-space: Nowrap<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ws-pre"</span>&gt;</span>White-space: Pre<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ws-pre-wrap"</span>&gt;</span>White-space: Pre-wrap<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ws-pre-line"</span>&gt;</span>White-space: Pre-line<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ws-unset"</span>&gt;</span>White-space: Unset<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"break-word"</span>&gt;</span>Break word<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"truncate"</span>&gt;</span>Truncate: …<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
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
        </div>
    </div>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="fonts">Fonts</h2><a class="s-btn s-btn__clear" href="#fonts"><span class="v-visible-sr">Section titled Fonts</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ff-sans"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ff-serif"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ff-mono"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ff-inherit"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
        <div class="docs-preview--example d-flex fd-column gy16 my0 fs-subheading">
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
    </div>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="sizes">Sizes</h2><a class="s-btn s-btn__clear" href="#sizes"><span class="v-visible-sr">Section titled Sizes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">
        Fonts larger than <code>.fs-body1</code> are reduced in size at the smallest responsive breakpoint. <code>.fs-body1</code> or smaller remain fixed at their initial pixel values.
    </p>
    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="size-classes">Size classes</h3><a class="s-btn s-btn__clear" href="#size-classes"><span class="v-visible-sr">Section titled Size classes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="overflow-x-auto mb32" tabindex="0">
        <table class="docs-table s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col">Class</th>
                    <th scope="col">Size</th>
                    <th scope="col">Line Height</th>
                    <th scope="col">Responsive Size</th>
                </tr>
            </thead>
            <tbody>
                
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

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="size-examples">Size examples</h3><a class="s-btn s-btn__clear" href="#size-examples"><span class="v-visible-sr">Section titled Size examples</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-fine"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-caption"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-body1"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-body2"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-body3"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-subheading"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-title"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-headline1"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-headline2"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-display1"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-display2"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-display3"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fs-display4"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
        <div class="docs-preview--example d-flex fd-column g24 my0">
            
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
    </div>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="line-height">Line height</h2><a class="s-btn s-btn__clear" href="#line-height"><span class="v-visible-sr">Section titled Line height</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lh-xs"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lh-sm"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lh-md"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lh-lg"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lh-xl"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lh-xxl"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lh-unset"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <p class="lh-xs"><strong>Line Height XS:</strong> This sets the <code>line-height</code> value to <code>1</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="lh-sm"><strong>Line Height SM:</strong> This sets the <code>line-height</code> value to <code>1.15</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="lh-md"><strong>Line Height MD:</strong> This sets the <code>line-height</code> value to <code>1.3</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="lh-lg"><strong>Line Height LG:</strong> This sets the <code>line-height</code> value to <code>1.6</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="lh-xl"><strong>Line Height XL:</strong> This sets the <code>line-height</code> value to <code>1.92</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="lh-xxl"><strong>Line Height XXL:</strong> This sets the <code>line-height</code> value to <code>2</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="lh-unset"><strong>Line Height Unset:</strong> This sets the <code>line-height</code> value to <code>initial</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="hyphenation">Hyphenation</h2><a class="s-btn s-btn__clear" href="#hyphenation"><span class="v-visible-sr">Section titled Hyphenation</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">Our hyphenation classes determine when text that wraps across multiple lines is hyphenated. You can prevent hyphenation entirely, or allow the browser to automatically hypenate.</p>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"hyphens-none"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"hyphens-auto"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
        <div class="docs-preview--example d-flex">
            <div class="docs-box hyphens-none ow-break-word w96 mr16">
                This text will not be hyphenated when large words break—longer words are broken by <code class="bg-black-250">.ow-break-word</code>.
            </div>
            <div class="docs-box hyphens-auto w96">
                This text will be hyphenated when large words break. <code class="bg-black-250">.ow-break-word</code> shouldn’t be necessary since breaks are implied by hyphenation rules.
            </div>
        </div>
    </div>
</section>


            <!-- <div class="d-flex my48 pt24">
                <div class="mr16">
                    
                    <form
                        id="quick-positive-feedback-typography"
                        class="js-feedback-form v-hidden"
                        name="quick-positive-feedback-typography"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <form
                        id="quick-negative-feedback-typography"
                        class="js-feedback-form v-hidden"
                        name="quick-negative-feedback-typography"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <div
                        class="s-popover s-popover__tooltip"
                        id="tooltip-feedback-positive"
                        role="tooltip">
                        <div class="s-popover--content">This page is useful</div>
                    </div>
                    <div
                        class="s-popover s-popover__tooltip"
                        id="tooltip-feedback-negative"
                        role="tooltip">
                        <div class="s-popover--content">This page needs improvement</div>
                    </div>
                    <div id="vote-feedback" class="s-vote">
                        <button
                            class="s-vote--btn"
                            type="submit"
                            form="quick-positive-feedback-typography"
                            aria-describedby="tooltip-feedback-positive"
                            aria-expanded="false"
                            data-controller="s-tooltip"
                            data-s-tooltip-placement="right"
                        >
                            <span class="s-btn-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteUp" aria-hidden="true"><path d="M10 3q.41.02.64.36l6.9 11.5a.75.75 0 1 1-1.28.78L10 5.21l-5.58 9.3h8.04v-.01h1.1l.97 1.5H3.1a.75.75 0 0 1-.65-1.13l6.9-11.5A.8.8 0 0 1 10 3"/></svg>
                            </span>
                            <span class="s-btn-icon-fill d-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteUpFill" aria-hidden="true"><path d="M10 3h.1a1 1 0 0 1 .42.21l.12.15 6.9 11.5.05.09v.03l.02.04q.04.12.04.26v.03q0 .13-.07.25v.02l-.03.04a1 1 0 0 1-.2.23l-.06.05-.04.01-.04.03-.04.01a1 1 0 0 1-.27.05H3a.75.75 0 0 1-.55-1.13l6.9-11.5A.8.8 0 0 1 10 3"/></svg>
                            </span>
                            <span class="v-visible-sr">upvote</span>
                        </button>
                        <button
                            class="s-vote--btn"
                            type="submit"
                            form="quick-negative-feedback-typography"
                            aria-describedby="tooltip-feedback-negative"
                            aria-expanded="false"
                            data-controller="s-tooltip"
                            data-s-tooltip-placement="right"
                        >
                            <span class="s-btn-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteDown" aria-hidden="true"><path d="M10 16a.8.8 0 0 1-.64-.36l-6.9-11.5a.75.75 0 1 1 1.28-.78L10 13.8l5.58-9.3H6.44L5.47 3H16.9a.75.75 0 0 1 .65 1.14l-6.9 11.5A.8.8 0 0 1 10 16"/></svg>
                            </span>
                            <span class="s-btn-icon-fill d-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteDownFill" aria-hidden="true"><path d="M10 16h-.1l-.1-.02a.8.8 0 0 1-.45-.34l-6.9-11.5-.04-.08-.01-.04L2.39 4a1 1 0 0 1-.04-.26V3.7q0-.14.06-.26l.01-.02.02-.04a1 1 0 0 1 .27-.27l.03-.02.05-.02.04-.02A1 1 0 0 1 3.1 3H17a.75.75 0 0 1 .54 1.14l-6.9 11.5A.8.8 0 0 1 10 16"/></svg>
                            </span>
                            <span class="v-visible-sr">downvote</span>
                        </button>
                    </div>
                </div>

                <form
                    class="w100 js-feedback-form"
                    name="feedback-typography"
                    method="POST"
                    data-netlify="true"
                    action="/success">
                    <fieldset class="d-flex fd-column fl-grow1 g16">
                        <legend class="fs-title fw-bold">How’d we do?</legend>
                        <div class="fs-body2">Anonymously upvote, downvote, or send additional feedback below.</div>

                        <textarea
                            class="s-textarea hmn1"
                            id="feedback-form"
                            name="additional-feedback"
                            placeholder="Tell us how we can improve this page…" required></textarea>

                        <div class="d-flex ai-center fd-row-reverse g8 jc-space-between mln6 sm:d-grid sm:grid__1 sm:ml0">
                            <button
                                type="submit"
                                class="s-btn as-start fl-shrink0">
                                Send feedback
                            </button>
                            <div class="d-flex fw-wrap g8 sm:d-grid sm:grid__1">
                                <a
                                    href="https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs/./product/foundation/typography.html"
                                    class="s-btn s-btn__clear s-btn__icon s-btn__sm">
                                    <svg aria-hidden="true" class="svg-icon iconPencilSm" width="14" height="14"  viewBox="0 0 14 14"><path fill="#F1B600" d="m2 10.12 6.37-6.43 1.88 1.88L3.88 12H2z"/><path fill="#E87C87" d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0"/></svg>
                                    Edit
                                </a>
                                <a
                                    href="https://github.com/StackExchange/Stacks/issues/new/choose"
                                    class="s-btn s-btn__clear s-btn__icon s-btn__sm">
                                    File an issue
                                </a>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div> -->

            <!-- <div class="ta-right">
                <a href="https://www.netlify.com"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /></a>
            </div> -->
