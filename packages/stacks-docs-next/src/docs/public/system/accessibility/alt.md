---
title: Alt-text
description: Everything we know about alt-texts, when to use them, and how to craft them.
updated: 2026-02-12
---

<script>
  import Grid from '$components/Grid.svelte'
  import GridColumn from '$components/GridColumn.svelte'

  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossFillCircle } from '@stackoverflow/stacks-icons'
</script>

## How to write alt-text

For a helpful decision tree on how and when to write alt-text, check out the W3C's [alt-text decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).

An alt-text is a description of an image that's shown to people who can't see the image. Alt-texts help people with little or no vision who use assistive technologies, people who have turned off images, and search engines.

### Describe the image concisely

It might sound obvious, but an alt-text should describe the image in case an image doesn't display or someone has trouble seeing it. The goal of alt-text is to give the necessary information from the image **at a glance**. It's best to include only the necessary information.

<div class="ta-center w100 wmx5 mb16">
  <img src="/assets/img/community.svg" alt="Man and woman using laptops at a standing table, Illustration.">
</div>

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"People using computers."</li>
      <li>"Man in a purple shirt and woman in blue pants are typing on laptops and there's a plant on the floor nearby."</li>
      <li>"Man and woman using computers, illustrated by Jane Doe © 2019."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"Man and woman using laptops at a standing table, Illustration."</li>
    </ul>
  </GridColumn>
</Grid>

Take context into account. For instance, if the image above is part of a blog post about standing tables, then it's safer to skip the part about standing tables.

### Don't say it's an image

Don't start alt-texts with things like "Image of" or "Photo of.". Screen readers add that by default. If it's a special type of image (like an icon), you can note that at the end.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"Image of a rocket."</li>
      <li>"Illustration of a rocket."</li>
      <li>"Photo of a rocket."</li>
      <li>"Icon of a rocket."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"A rocket."</li>
      <li>"A rocket, icon." (if noting the type)</li>
    </ul>
  </GridColumn>
</Grid>

### End with a period

End the alt-text with a period. This makes screen readers pause a bit after the last word in the alt-text, creating a natural pause before the next bit of text.

## When not to write alt-text

In most cases you should use an alt-text for images, but there are some exceptions where you should leave the alt-text blank.

### Decorative images

If an image does not convey any meaning to the user, leave the alt-text blank.

```html
<div>
    <img src="rocket.svg" alt="">
    <h2>…</h2>
    <p>…</p>
</div>
```

<div class="d-flex fd-column gy8 wmx3 ba bc-black-225 bar-md p16 mb16">
  <div class="flex--item">
    <img src="/assets/img/efficiency.svg" alt="">
  </div>
  <h2 class="flex--item fs-body3 fw-normal fc-dark m0">Improve efficiency and ship better code</h2>
  <p class="flex--item fs-body1 fc-medium m0">There's a reason the world's largest developer teams rely on Stack Overflow Enterprise—it leads to better product and allows distributed teams to securely collaborate and share knowledge.</p>
</div>

The rocket here doesn't add meaningful information.

### Images accompanied by text

If an image has a label nearby, leave the alt-text blank.

```html
<div>
    <img src="leaderboard.svg" alt="">
    <h2>…</h2>
    <p>…</p>
</div>
```

<div class="d-flex gx8 ai-center wmx4 ba bc-black-225 bar-md p16 mb16">
  <div class="flex--item">
    <img src="/assets/img/leaderboard.svg" alt="" width="44" height="43">
  </div>
  <div class="flex--item">
    <h2 class="flex--item fs-body1 fw-bold fw-normal fc-dark mb4">TOP LEADERBOARD: 728X90</h2>
    <p class="flex--item fs-body1 fc-medium m0">This ad unit is the most visible on the site.</p>
  </div>
</div>

The nearby text here already explains what the graphic illustrates. If there was alt-text here, screen readers would repeat information to the user.

<div class="s-notice s-notice__info mb16">
  <div class="d-flex fd-column gs8 gsy">
    <div class="flex--item">
      <strong>Note:</strong> In these cases, leaving the alt attribute empty (<code class="stacks-code bg-blue-300">alt=""</code>) will cause a screenreader to skip over the image. <strong>Never <em>remove</em> the alt-attribute.</strong> When a screenreader comes to an image without an alt attribute, it will dictate the filename (Eg. "SO underscore logo dot png").
    </div>
  </div>
</div>

## How to add alt-text

### Using &lt;img&gt;

Inside an `<img>` tag, add the alt-text inside the `alt` attribute:

```html
<img src="image.png" alt="The alt text.">
<img src="image.svg" alt="The alt text.">
```

### Using inline SVG

Inline SVG doesn't support the `alt` attribute, so instead add two wai-aria attributes: `role="img"` and `aria-label="The alt-text."`:

```html
<svg role="img" aria-label="the alt-text" viewBox="…">…</svg>
```

---

<p class="m0 fc-caption fc-light">This content was adapted from <a href="https://axesslab.com/alt-texts/">Axess Lab</a>.</p>
