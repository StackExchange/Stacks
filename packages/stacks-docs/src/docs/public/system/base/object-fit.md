---
title: Object fit
description: Atomic classes that control the sizing of an <code class="stacks-code">img</code> or <code class="stacks-code">video</code> relative to its container.
updated: 2025-12-16
---

<script lang="ts">
  const objectFitClasses = [
    {
      class: '.of-contain',
      output: 'object-fit: contain',
      define: 'Fit the content to the content box while preserving its aspect ratio. This may result in empty space in the content box.'
    },
    {
      class: '.of-cover',
      output: 'object-fit: cover',
      define: 'Cover the entire content box with the content while preserving its aspect ratio. This may crop the content.'
    },
    {
      class: '.of-fill',
      output: 'object-fit: fill',
      define: 'Stretch and scale the content\'s dimensions to match its content box. <em>This is the default browser value.</em>'
    },
    {
      class: '.of-none',
      output: 'object-fit: none',
      define: 'Prevent the content from being resized.'
    },
    {
      class: '.of-scale-down',
      output: 'object-fit: scale-down',
      define: 'When larger than the content box, resize the content to fill its content box. Otherwise, maintain the content\'s original dimensions.'
    },
    {
      class: '.op-center',
      output: 'object-position: center',
      define: 'Center the content within its content box.'
    }
  ];
</script>

## Classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
      </tr>
    </thead>
    <tbody>
      {#each objectFitClasses as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td><p class="mb0">{@html item.define}</p></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

```html
<img class="of-contain" src="…" />
<img class="of-cover" src="…" />
<img class="of-fill" src="…" />
<img class="of-none" src="…" />
<img class="of-scale-down" src="…" />
<img class="of-none op-center" src="…" />
```

<div class="stacks-preview--example ff-mono">
  <div class="d-flex g32 fw-wrap">
    <div class="flex--item">
      <div class="mb8 ff-mono">.of-contain</div>
      <img
        class="of-contain ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/400x240/e4e6e8"
        alt="placeholder for .of-contain"
      />
      <img
        class="of-contain ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/90x60/e4e6e8"
        alt="placeholder for .of-contain"
      />
    </div>
    <div class="flex--item">
      <div class="mb8 ff-mono">.of-cover</div>
      <img
        class="of-cover ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/400x240/e4e6e8"
        alt="placeholder for .of-cover"
      />
      <img
        class="of-cover ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/90x60/e4e6e8"
        alt="placeholder for .of-cover"
      />
    </div>
    <div class="flex--item">
      <div class="mb8 ff-mono">.of-fill</div>
      <img
        class="of-fill ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/400x240/e4e6e8"
        alt="placeholder for .of-fill"
      />
      <img
        class="of-fill ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/90x60/e4e6e8"
        alt="placeholder for .of-fill"
      />
    </div>
    <div class="flex--item">
      <div class="mb8 ff-mono">.of-none</div>
      <img
        class="of-none ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/400x240/e4e6e8"
        alt="placeholder for .of-none"
      />
      <img
        class="of-none ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/90x60/e4e6e8"
        alt="placeholder for .of-none"
      />
    </div>
    <div class="flex--item">
      <div class="mb8 ff-mono">.of-scale-down</div>
      <img
        class="of-scale-down ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/400x240/e4e6e8"
        alt="placeholder for .of-scale-down"
      />
      <img
        class="of-scale-down ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/90x60/e4e6e8"
        alt="placeholder for .of-scale-down"
      />
    </div>
    <div class="flex--item">
      <div class="mb8 ff-mono">.op-center.of-none</div>
      <img
        class="op-center of-none ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/400x240/e4e6e8"
        alt="placeholder for .op-center.of-none"
      />
      <img
        class="op-center of-none ba bc-black-225 hs1 ws1"
        src="https://fakeimg.pl/90x60/e4e6e8"
        alt="placeholder for .op-center.of-none"
      />
    </div>
  </div>
</div>
