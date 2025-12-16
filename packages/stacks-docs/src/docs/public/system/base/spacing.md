---
updated: 2025-12-05
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossCircle } from '@stackoverflow/stacks-icons';

  const marginDefinitions = [
    {
      "term": "m",
      "define": "margin",
      "responsive": true
    },
    {
      "term": "mt",
      "define": "margin-top",
      "responsive": true
    },
    {
      "term": "mr",
      "define": "margin-right",
      "responsive": true
    },
    {
      "term": "mb",
      "define": "margin-bottom",
      "responsive": true
    },
    {
      "term": "ml",
      "define": "margin-left",
      "responsive": true
    },
    {
      "term": "mx",
      "define": "margin x-axis (left, right)",
      "responsive": true
    },
    {
      "term": "my",
      "define": "margin y-axis (top, bottom)",
      "responsive": true
    },
    {
      "term": "mxn",
      "define": "negative margin x-axis",
      "responsive": true
    },
    {
      "term": "myn",
      "define": "negative margin y-axis",
      "responsive": true
    },
    {
      "term": "mtn",
      "define": "negative margin-top",
      "responsive": true
    },
    {
      "term": "mrn",
      "define": "negative margin-right",
      "responsive": true
    },
    {
      "term": "mbn",
      "define": "negative margin-bottom",
      "responsive": true
    },
    {
      "term": "mln",
      "define": "negative margin-left",
      "responsive": true
    }
  ]

  const paddingDefinitions = [
    {
      "term": "p",
      "define": "padding",
      "responsive": true
    },
    {
      "term": "pt",
      "define": "padding-top",
      "responsive": true
    },
    {
      "term": "pr",
      "define": "padding-right",
      "responsive": true
    },
    {
      "term": "pb",
      "define": "padding-bottom",
      "responsive": true
    },
    {
      "term": "pl",
      "define": "padding-left",
      "responsive": true
    },
    {
      "term": "px",
      "define": "padding x-axis (left, right)",
      "responsive": true
    },
    {
      "term": "py",
      "define": "padding y-axis (top, bottom)",
      "responsive": true
    }
  ]

  const marginValues = "0, 1px, 2px, 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 50%, 100%".split(", ")
  const marginProperties = "m, mt, mr, mb, ml, mx, my".split(", ")
  const marginValuesNegative = "1px, 2px, 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 50%, 100%".split(", ")

  const paddingValues = "0, 1px, 2px, 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 50%, 100%".split(", ")
  const paddingProperties = "p, pt, pr, pb, pl, px, py".split(", ")
</script>

## Margin

Immutable margin utilities are based on our global white space scale. These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

Margin should never be declared outside of these utilities. This is meant to help create consistency and avoid magic numbers. If, for some reason, the default white space scale does not suit your design, customize and extend it before use.

### Margin class abbreviations

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Abbreviation</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col">Responsive?</th>
      </tr>
    </thead>
    <tbody>
      {#each marginDefinitions as space}
        <tr>
          <th scope="row">{space.term}</th>
          <td>{space.define}</td>
          <td class="ta-center">
            <Icon src={space.responsive ? IconCheckFillCircle : IconCrossCircle} class={space.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Margin classes

```html
<div class="mt8 mr4 mb32 ml64">
    …
</div>
```

<div class="mt8 mr4 mb32 ml64 bg-black-200 p12 ba bc-black-225">
    Example div with different margins applied
</div>

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn5 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col"></th>
        {#each marginValues as value}
          <th scope="col" class="ta-center ff-mono">{value}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each marginProperties as className}
        <tr>
          <th scope="row">{className}</th>
          {#each marginValues as value}
            {#if className === "mx" || className === "my"}
              {#if value === "0" || value === "50%" || value === "100%"}
                <td>-</td>
              {:else}
                <td><code>.{className}{value.replace("px", "")}</code></td>
              {/if}
            {:else}
              <td><code>.{className}{value.replace("px", "").replace("%", "")}</code></td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Negative margin classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn5 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col"></th>
        {#each marginValuesNegative as value}
          <th scope="col" class="ta-center ff-mono">-{value}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each marginProperties as className}
        <tr>
          <th scope="row">{className}n</th>
          {#each marginValuesNegative as value}
            {#if className === "mx" || className === "my"}
              {#if value === "0" || value === "50%" || value === "100%"}
                <td>-</td>
              {:else}
                <td><code>.{className}n{value.replace("px", "")}</code></td>
              {/if}
            {:else}
              <td><code>.{className}n{value.replace("px", "").replace("%", "")}</code></td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Auto margin classes

Stacks provides additional automatic margin classes. These come in handy when positioning individual flex items within flex layouts, or horizontally centering a block-level element.

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Direction</th>
        <th scope="col">Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>All directions</td>
        <td class="ff-mono">
          .m-auto
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td class="ff-mono">
          .mt-auto
        </td>
      </tr>
      <tr>
        <td>Right</td>
        <td class="ff-mono">
          .mr-auto
        </td>
      </tr>
      <tr>
        <td>Bottom</td>
        <td class="ff-mono">
          .mb-auto
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td class="ff-mono">
          .ml-auto
        </td>
      </tr>
      <tr>
        <td>X axis</td>
        <td class="ff-mono">
          .mx-auto
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Padding

Immutable padding utilities are based on a global white space scale defined with custom properties. These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

Padding should never be declared outside of these utilities. This is meant to help create consistency and avoid magic numbers. If, for some reason, the default white space scale does not suit your design, customize and extend it before use.

### Padding class abbreviations

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Abbreviation</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col">Responsive?</th>
      </tr>
    </thead>
    <tbody>
      {#each paddingDefinitions as space}
        <tr>
          <th scope="row">{space.term}</th>
          <td>{space.define}</td>
          <td class="ta-center">
            <Icon src={space.responsive ? IconCheckFillCircle : IconCrossCircle} class={space.responsive ? "fc-green-400" : "fc-black-200"} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Padding classes

```html
<div class="pt4 pr64 pb64 pl64">
    …
</div>
```

<div class="pt4 pr64 pb64 pl64 bg-black-200 p12 ba bc-black-225">
    Example div with different paddings applied
</div>

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn5 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col"></th>
        {#each paddingValues as value}
          <th scope="col" class="ta-center ff-mono">{value}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each paddingProperties as className}
        <tr>
          <th scope="row">{className}</th>
          {#each paddingValues as value}
            {#if className === "px" || className === "py"}
              {#if value === "0" || value === "50%" || value === "100%"}
                <td>-</td>
              {:else}
                <td><code>.{className}{value.replace("px", "")}</code></td>
              {/if}
            {:else}
              <td><code>.{className}{value.replace("px", "").replace("%", "")}</code></td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
