---
title: "Prose"
description: "The prose component provides proper styling for rendered Markdown."
---

<script lang="ts">
    import { Button } from '@stackoverflow/stacks-svelte';
    import ClassTable from '$components/ClassTable.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-prose',     parent: 'N/A', modifies: 'N/A',      description: 'Adds proper styling for rendered Markdown.' },
        { class: '.s-prose__sm', parent: 'N/A', modifies: '.s-prose', description: 'Decreases the base font size and line height.' },
    ];

    let minimalExpanded = $state(false);
    let fullExpanded    = $state(false);
    let smallExpanded   = $state(false);

    const minimalHtml = `
<p>Stacks adds a new <code>s-prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
<pre><code class="language-html">&lt;article class="s-prose"&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;For years parents have espoused the health benefits of eating garlic bread…&lt;/p&gt;
&lt;/article&gt;</code></pre>
<h2>What to expect from here on out</h2>
<p>What follows from here is just a bunch of absolute nonsense we've written to dogfood the component itself. It includes every sensible typographic element we could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
<p>It's important to cover all of these use cases for a few reasons:</p>
<ol>
  <li>We want everything to look good out of the box.</li>
  <li>Really just the first reason, that's the whole point of the plugin.</li>
  <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
</ol>
<h3>Typography should be easy</h3>
<p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
<p>Something a wise person once told me about typography is:</p>
<blockquote><p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p></blockquote>
<p>It's probably important that images look okay here by default as well:</p>
<img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="two people performing a transaction at a counter on either side of a point of sale system in a trendy salon" />
<p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
<ul>
  <li>So here is the first item in this list.</li>
  <li>In this example we're keeping the items short.</li>
  <li>Later, we'll use longer, more complex list items.</li>
</ul>
<h2>What if we stack headings?</h2>
<h3>We should make sure that looks good, too.</h3>
<p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
<h3>When a heading comes after a paragraph…</h3>
<p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>
<ul>
  <li><p><strong>I often do this thing where list items have headings.</strong></p><p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p></li>
  <li><p><strong>Since this is a list, I need at least two items.</strong></p><p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item.</p></li>
</ul>
<h2>Code should look okay by default.</h2>
<p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>
<pre><code class="language-js">module.exports = {
  purge: [],
  theme: { extend: {} },
  variants: {},
  plugins: [],
}</code></pre>
<h2>There are other elements we need to style</h2>
<p>I almost forgot to mention links, like <a href="https://stackoverflow.com">Stack Overflow</a>.</p>
<p>We even included table styles, check it out:</p>
<div class="s-table-container">
  <table class="s-table">
    <thead><tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr></thead>
    <tbody>
      <tr><td>Bret "The Hitman" Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr>
      <tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr>
      <tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr>
    </tbody>
  </table>
</div>
<p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>
<h3>Sometimes I even use <code>code</code> in headings</h3>
<p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> approach is the best we've come up with.</p>
<p><a href="#">We even have styles for links in headings, check it out &rarr;</a></p>
<h3>We haven't used an <code>hr</code> yet</h3>
<hr />
<p>We just used one. What do you think? Pretty nice, right?</p>
`;

    const sandboxHtml = `
<h1>The Comprehensive Formatting Test</h1>
<h2>Code Formatting</h2>
<ul>
  <li>Inline code formatting: <code>System.out.println("Hello World!");</code></li>
  <li>Escaped backticks: <code>for line in \`someCommand\`</code></li>
</ul>
<pre><code>System.out.println("Hello World!");
System.out.println("Code Block!");</code></pre>
<pre><code class="language-html">&lt;div class="s-progress s-progress__stepped"&gt;
  &lt;div class="s-progress--step is-complete"&gt;
    &lt;a href="…" class="s-progress--stop"&gt;…&lt;/a&gt;
    &lt;div class="s-progress--bar s-progress--bar__right"&gt;&lt;/div&gt;
    &lt;a class="s-progress--label"&gt;…&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
<h2>Headers</h2>
<h1>H1 Header</h1>
<h2>H2 Header</h2>
<h3>H3 Header</h3>
<h4>H4 Header</h4>
<h5>H5 Header</h5>
<h6>H6 Header</h6>
<h2>Emphasis</h2>
<p>This is <em>italic</em> and this is <strong>bold</strong>. <strong><em>Bold and italic.</em></strong> ~~Strikethrough~~ if supported.</p>
<h2>Lists</h2>
<h3>Unordered</h3>
<ul>
  <li>Item one</li>
  <li>Item two
    <ul>
      <li>Nested item A</li>
      <li>Nested item B</li>
    </ul>
  </li>
  <li>Item three</li>
</ul>
<h3>Ordered</h3>
<ol>
  <li>First item</li>
  <li>Second item
    <ol>
      <li>Nested first</li>
      <li>Nested second</li>
    </ol>
  </li>
  <li>Third item</li>
</ol>
<h2>Blockquotes</h2>
<blockquote><p>This is a blockquote. It can span multiple lines and should be styled appropriately.</p><p>It can also have multiple paragraphs.</p></blockquote>
<h2>Links</h2>
<p>Here's a <a href="https://stackoverflow.com">link to Stack Overflow</a>, and here's one with a <a href="https://stackoverflow.com" title="Stack Overflow">title attribute</a>.</p>
<h2>Images</h2>
<img src="https://via.placeholder.com/800x400" alt="Placeholder image" />
<h2>Tables</h2>
<div class="s-table-container">
  <table class="s-table">
    <thead><tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr></thead>
    <tbody>
      <tr><td>Row 1, Col 1</td><td>Row 1, Col 2</td><td>Row 1, Col 3</td></tr>
      <tr><td>Row 2, Col 1</td><td>Row 2, Col 2</td><td>Row 2, Col 3</td></tr>
    </tbody>
  </table>
</div>
<h2>Horizontal Rules</h2>
<hr />
<p>Content after a horizontal rule.</p>
<h2>Inline HTML</h2>
<p>This paragraph contains <strong>bold</strong>, <em>italic</em>, <code>code</code>, and a <a href="#">link</a> all inline.</p>
<p>It can also include <sup>superscript</sup> and <sub>subscript</sub> text.</p>
`;
</script>

## Parameters

<ClassTable {classes} />

## Examples

### Minimal

We modified this test document from the folks at [Tailwind](https://github.com/tailwindcss/typography/blob/master/README.md) to demonstrate and explain our design choices.

<div class="d-flex fd-column ba bc-black-200 bar-sm mb32">
    <div class="ps-sticky bg-white z-popover py8 t0 bb bc-black-200">
        <div class="px16">
            <Button
                variant="tonal"
                aria-expanded={minimalExpanded}
                aria-controls="prose-example-minimal"
                onclick={() => minimalExpanded = !minimalExpanded}
            >
                {minimalExpanded ? 'Collapse example' : 'Expand example'}
            </Button>
        </div>
    </div>
    <div class="px16 py8">
        <pre class="s-code-block" tabindex="0"><code class="s-code-block language-html">&lt;div class="s-prose"&gt;
    …
&lt;/div&gt;</code></pre>
    </div>
    <div
        id="prose-example-minimal"
        class="px16 overflow-y-auto"
        class:hmx4={!minimalExpanded}
    >
        <div class="s-prose" role="presentation">
            {@html minimalHtml}
        </div>
    </div>
</div>

### Full Markdown spec

This example includes the full kitchen-sink collection of everything the Markdown spec includes.

<div class="d-flex fd-column ba bc-black-200 bar-sm mb32">
    <div class="ps-sticky bg-white z-popover py8 t0 bb bc-black-200">
        <div class="px16">
            <Button
                variant="tonal"
                aria-expanded={fullExpanded}
                aria-controls="prose-example-full"
                onclick={() => fullExpanded = !fullExpanded}
            >
                {fullExpanded ? 'Collapse example' : 'Expand example'}
            </Button>
        </div>
    </div>
    <div
        id="prose-example-full"
        class="px16 overflow-y-auto"
        class:hmx4={!fullExpanded}
    >
        <div class="s-prose" role="presentation">
            {@html sandboxHtml}
        </div>
    </div>
</div>

## Sizing

### Small

In ancilliary content like comments or side-discussions, it may be appropriate to add the small variation.

<div class="d-flex fd-column ba bc-black-200 bar-sm mb32">
    <div class="ps-sticky bg-white z-popover py8 t0 bb bc-black-200">
        <div class="px16">
            <Button
                variant="tonal"
                aria-expanded={smallExpanded}
                aria-controls="prose-example-small"
                onclick={() => smallExpanded = !smallExpanded}
            >
                {smallExpanded ? 'Collapse example' : 'Expand example'}
            </Button>
        </div>
    </div>
    <div class="px16 py8">
        <pre class="s-code-block" tabindex="0"><code class="s-code-block language-html">&lt;div class="s-prose s-prose__sm"&gt;
    …
&lt;/div&gt;</code></pre>
    </div>
    <div
        id="prose-example-small"
        class="px16 overflow-y-auto"
        class:hmx4={!smallExpanded}
    >
        <div class="s-prose s-prose__sm" role="presentation">
            {@html minimalHtml}
        </div>
    </div>
</div>
