---
updated: 2025-12-05
---

<script lang="ts">
const positionClasses = [
  {
    "class": "ps-absolute",
    "output": "position: absolute;",
    "define": "Absolutely positions an element. Typically is used in conjunction with <code class='stacks-code'>top</code>, <code class='stacks-code'>right</code>, <code class='stacks-code'>bottom</code>, and <code class='stacks-code'>left</code> properties.<br><em>Note: Absolutely positioning an element takes it out of the DOM flow and puts it automatically above all relatively positioned items which don't have a <code class='stacks-code'>z-index</code> assigned.</em>",
    "responsive": true
  },
  {
    "class": "ps-fixed",
    "output": "position: fixed;",
    "define": "Fixes an element within the viewport. Typically is used in conjunction with <code class='stacks-code'>top</code>, <code class='stacks-code'>right</code>, <code class='stacks-code'>bottom</code>, and <code class='stacks-code'>left</code> properties.<br><em>Note: Fixing an element's position, like absolute positioning, takes it out of the DOM flow and puts it automatically above all relatively positioned items.</em>",
    "responsive": true
  },
  {
    "class": "ps-relative",
    "output": "position: relative;",
    "define": "Relatively positions an element in relation to elements around it. The <code class='stacks-code'>top</code> and <code class='stacks-code'>bottom</code> properties specify the vertical offset from its normal position. In the same way the <code class='stacks-code'>left</code> and <code class='stacks-code'>right</code> properties specify the horizontal offset.",
    "responsive": true
  },
  {
    "class": "ps-static",
    "output": "position: static;",
    "define": "An element is positioned according to the document's flow. The <code class='stacks-code'>top</code>, <code class='stacks-code'>right</code>, <code class='stacks-code'>bottom</code>, <code class='stacks-code'>left</code>, and <code class='stacks-code'>z-index</code> properties have <em>no effect</em>.<br><strong>This is the default value.</strong>",
    "responsive": true
  },
  {
    "class": "ps-sticky",
    "output": "position: sticky;",
    "define": "An element is positioned according to the document's flow, and then offset relative to its flow root and containing block. This creates a new stacking context.<br><strong class='mb4'>Notes:</strong><br/>Sticky elements, by design, will not work inside an element with <code class='stacks-code'>overflow:hidden;</code> or <code class='stacks-code'>overflow:auto;</code> values.",
    "responsive": true
  },
  {
    "class": "ps-unset",
    "output": "position: unset;",
    "define": "Removes previously set <code class='stacks-code'>position</code> value, reverting the element back to the initial browser value.",
    "responsive": true
  }
]

const coordinateDefinitions = [
  {
    "term": "t",
    "define": "top"
  },
  {
    "term": "r",
    "define": "right"
  },
  {
    "term": "b",
    "define": "bottom"
  },
  {
    "term": "l",
    "define": "left"
  },
  {
    "term": "i",
    "define": "inset"
  },
  {
    "term": "tn",
    "define": "negative top"
  },
  {
    "term": "rn",
    "define": "negative right"
  },
  {
    "term": "bn",
    "define": "negative bottom"
  },
  {
    "term": "ln",
    "define": "negative left"
  }
]

const positionValues = "0, 1px, 2px, 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 50%, 100%".split(", ")
const positionProperties = "t, r, b, l, i".split(", ")
const positionPropertiesNegative = "t, r, b, l".split(", ")
const positionValuesNegative = "1px, 2px, 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 50%, 100%".split(", ")
</script>

## Classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each positionClasses as atomic}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{atomic.class}</code></th>
          <td><code class="stacks-code bg-white">{atomic.output}</code></td>
          <td>{@html atomic.define}</td>
          <td class="ta-center">
            {#if atomic.responsive}
              <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

## Examples

```html
<div class="ps-static">…</div>
<div class="ps-relative">…</div>
<div class="ps-absolute">…</div>
<div class="ps-sticky">…</div>
<div class="ps-fixed">…</div>
<div class="ps-unset">…</div>
```

<div class="overflow-y-scroll fs-caption ff-mono hs2" tabindex="0">
    <div class="d-flex w100 ps-relative">
        <div class="ps-static p12 bg-black-200 ba bc-black-225 ws1 hs1"><strong>.ps-static</strong></div>
        <div class="ps-relative p12 bg-black-200 ba bc-black-225 t32 r24 ws1 hs4"><strong>.ps-relative</strong><br/><br/>.t32<br/>r24</div>
        <div class="ps-absolute p12 bg-black-200 ba bc-black-225 t48 r32 ws1 hs2"><strong>.ps-absolute</strong><br/><br/>.t48<br/>.r32</div>
        <div class="ps-sticky p12 bg-black-200 ba bc-black-225 t64 ws1 hs2"><strong>.ps-sticky</strong><br/><br/>.t64</div>
    </div>
</div>

## Coordinates

Our spacing units aren't limited to margin and padding; they also apply to top, right, left, and bottom declarations. Combined with our position utility classes, you should be able to achieve absolutely-positioned layouts while adhering to Stacks' spacing conventions.

### Coordinate classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Abbreviation</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col">Responsive?</th>
      </tr>
    </thead>
    <tbody>
      {#each coordinateDefinitions as space}
        <tr>
          <th scope="row">{space.term}</th>
          <td>{space.define}</td>
          <td class="ta-center">
            <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Coordinate examples

```html
<div class="ps-absolute t12 l12"> … </div>
<div class="ps-absolute t48 r24"> … </div>
<div class="ps-absolute b48 l48"> … </div>
<div class="ps-absolute bn8 rn8"> … </div>
<div class="ps-absolute i64"> … </div>
```

<div class="ps-relative hs2">
    <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono t12 l12 z-selected">
        .t12 .l12
    </div>

    <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono t48 r24 z-selected">
        .t48 .r24
    </div>

    <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono t50 l50 z-selected">
        .t50 .l50
    </div>

    <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono b48 l48 z-selected">
        .b48 .l48
    </div>

    <div class="ps-absolute w20 bg-black-200 p12 ba bc-black-225 ff-mono rn8 bn8 z-selected">
        .rn8 .bn8
    </div>
    <div class="ps-absolute bg-black-200 p12 ba bc-black-225 ff-mono i64 z-base">
        .i64
    </div>
</div>

## Positive coordinates

<div class="overflow-x-auto mb48 mt24" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Prefix</th>
        {#each positionValues as value}
          <th scope="col" class="ta-center ff-mono">{value}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each positionProperties as className}
        <tr>
          <th scope="row">{className}</th>
          {#each positionValues as value}
            {#if className === "i"}
              {#if value === "50%" || value === "100%"}
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

## Negative coordinates

<div class="overflow-x-auto mb48 mt24" tabindex="0">
  <table class="wmn3 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Prefix</th>
        {#each positionValuesNegative as value}
          <th scope="col" class="ta-center ff-mono">-{value}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each positionPropertiesNegative as className}
        <tr>
          <th scope="row">{className}n</th>
          {#each positionValuesNegative as value}
            <td><code>.{className}n{value.replace("px", "").replace("%", "")}</code></td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
