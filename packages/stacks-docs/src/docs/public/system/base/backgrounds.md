---
title: Backgrounds
description: Atomic classes for controlling the background properties of an element’s background image.
updated: 2025-12-05
---

<script lang="ts">
const backgroundAttachment = [
  {
    "class": ".bg-fixed",
    "output": "background-attachment: fixed;"
  },
  {
    "class": ".bg-local",
    "output": "background-attachment: local;"
  },
  {
    "class": ".bg-scroll",
    "output": "background-attachment: scroll;"
  }
]

const backgroundPosition = [
  {
    "class": ".bg-bottom",
    "output": "background-position: bottom;"
  },
  {
    "class": ".bg-center",
    "output": "background-position: center;"
  },
  {
    "class": ".bg-left",
    "output": "background-position: left;"
  },
  {
    "class": ".bg-left-bottom",
    "output": "background-position: left bottom;"
  },
  {
    "class": ".bg-left-top",
    "output": "background-position: left top;"
  },
  {
    "class": ".bg-right",
    "output": "background-position: right;"
  },
  {
    "class": ".bg-right-bottom",
    "output": "background-position: right bottom;"
  },
  {
    "class": ".bg-right-top",
    "output": "background-position: right top;"
  },
  {
    "class": ".bg-top",
    "output": "background-position: top;"
  }
]

const backgroundRepeat = [
  {
    "class": ".bg-repeat",
    "output": "background-repeat: repeat;"
  },
  {
    "class": ".bg-no-repeat",
    "output": "background-repeat: no-repeat;"
  },
  {
    "class": ".bg-repeat-x",
    "output": "background-repeat: repeat-x;"
  },
  {
    "class": ".bg-repeat-y",
    "output": "background-repeat: repeat-y;"
  }
]

const backgroundSize = [
  {
    "class": ".bg-auto",
    "output": "background-size: auto;"
  },
  {
    "class": ".bg-cover",
    "output": "background-size: cover;"
  },
  {
    "class": ".bg-contain",
    "output": "background-size: contain;"
  }
]

const backgroundImage = [
  {
    "class": ".bg-image-none",
    "output": "background-image: none;"
  }
]
</script>

## Background size

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      {#each backgroundSize as bgSize}
        <tr>
          <th scope="row"><code class="stacks-code">{bgSize.class}</code></th>
          <td class="ff-mono">{bgSize.output}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Background repeat

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      {#each backgroundRepeat as bgRepeat}
        <tr>
          <th scope="row"><code class="stacks-code">{bgRepeat.class}</code></th>
          <td class="ff-mono">{bgRepeat.output}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Background position

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      {#each backgroundPosition as bgPosition}
        <tr>
          <th scope="row"><code class="stacks-code">{bgPosition.class}</code></th>
          <td class="ff-mono">{bgPosition.output}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Background position examples

```html
<div class="bg-no-repeat bg-bottom">…</div>
<div class="bg-no-repeat bg-center">…</div>
<div class="bg-no-repeat bg-left">…</div>
<div class="bg-no-repeat bg-left-bottom">…</div>
<div class="bg-no-repeat bg-left-top">…</div>
<div class="bg-no-repeat bg-right">…</div>
<div class="bg-no-repeat bg-right-bottom">…</div>
<div class="bg-no-repeat bg-right-top">…</div>
<div class="bg-no-repeat bg-top">…</div>
```

<div class="d-flex flex__allitems3 w100 g8 fc-black-600 ff-mono fw-wrap">
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-bottom">.bg-bottom</div>
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-center">.bg-center</div>
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-left">.bg-left</div>
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-left-bottom">.bg-left-bottom</div>
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-left-top">.bg-left-top</div>
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-right">.bg-right</div>
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-right-bottom">.bg-right-bottom</div>
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-right-top">.bg-right-top</div>
  <div class="flex--item p12 bg-black-200 hs1 ba bc-black-225 stacks-bg-img bg-no-repeat bg-top">.bg-top</div>
</div>

## Background attachment

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      {#each backgroundAttachment as bgAttachment}
        <tr>
          <th scope="row"><code class="stacks-code">{bgAttachment.class}</code></th>
          <td class="ff-mono">{bgAttachment.output}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Background image

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      {#each backgroundImage as bgImage}
        <tr>
          <th scope="row"><code class="stacks-code">{bgImage.class}</code></th>
          <td class="ff-mono">{bgImage.output}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Background utilities

### Confetti

Adding the confetti background utility adds confetti to any block-level element. You can choose the animated version, or static version. The animated version respects `prefers-reduced-motion` and displays the static version of the background when necessary. No JavaScript required.

```html
<div class="bg-confetti-animated">…</div>
<div class="bg-confetti-static">…</div>
```

#### Animated

<div class="bg-confetti-animated hs1"></div>

#### Static

<div class="bg-confetti-static h64"></div>
