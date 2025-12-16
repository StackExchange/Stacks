---
updated: 2025-12-05
---

<script lang="ts">
const columnTemplates = [
  {
    "class": "grid__1",
    "output": "grid-template-columns: repeat(1, minmax(0, 1fr))",
    "define": "Creates a grid layout with 1 column",
    "responsive": true
  },
  {
    "class": "grid__2",
    "output": "grid-template-columns: repeat(2, minmax(0, 2fr))",
    "define": "Creates a grid layout with 2 columns",
    "responsive": true
  },
  {
    "class": "grid__3",
    "output": "grid-template-columns: repeat(3, minmax(0, 3fr))",
    "define": "Creates a grid layout with 3 columns",
    "responsive": true
  },
  {
    "class": "grid__4",
    "output": "grid-template-columns: repeat(4, minmax(0, 4fr))",
    "define": "Creates a grid layout with 4 columns",
    "responsive": true
  },
  {
    "class": "grid__5",
    "output": "grid-template-columns: repeat(5, minmax(0, 5fr))",
    "define": "Creates a grid layout with 5 columns",
    "responsive": true
  },
  {
    "class": "grid__6",
    "output": "grid-template-columns: repeat(6, minmax(0, 6fr))",
    "define": "Creates a grid layout with 6 columns",
    "responsive": true
  },
  {
    "class": "grid__7",
    "output": "grid-template-columns: repeat(7, minmax(0, 7fr))",
    "define": "Creates a grid layout with 7 columns",
    "responsive": true
  },
  {
    "class": "grid__8",
    "output": "grid-template-columns: repeat(8, minmax(0, 8fr))",
    "define": "Creates a grid layout with 8 columns",
    "responsive": true
  },
  {
    "class": "grid__9",
    "output": "grid-template-columns: repeat(9, minmax(0, 9fr))",
    "define": "Creates a grid layout with 9 columns",
    "responsive": true
  },
  {
    "class": "grid__10",
    "output": "grid-template-columns: repeat(10, minmax(0, 10fr))",
    "define": "Creates a grid layout with 10 columns",
    "responsive": true
  },
  {
    "class": "grid__11",
    "output": "grid-template-columns: repeat(11, minmax(0, 11fr))",
    "define": "Creates a grid layout with 11 columns",
    "responsive": true
  },
  {
    "class": "grid__12",
    "output": "grid-template-columns: repeat(1, minmax(0, 12fr))",
    "define": "Creates a grid layout with 12 columns",
    "responsive": true
  },
  {
    "class": "grid__auto",
    "output": "grid-template-columns: auto 1fr",
    "define": "Creates a grid layout with auto-sized columns based on their content",
    "responsive": true
  }
]

const columns = [
  {
    "class": "grid--col-all",
    "output": "grid-column: 1 / -1",
    "define": "Span all the columns",
    "responsive": true
  },
  {
    "class": "grid--col1",
    "output": "grid-column: span 1",
    "define": "Span 1 column",
    "responsive": true
  },
  {
    "class": "grid--col2",
    "output": "grid-column: span 2",
    "define": "Span 2 columns",
    "responsive": true
  },
  {
    "class": "grid--col3",
    "output": "grid-column: span 3",
    "define": "Span 3 columns",
    "responsive": true
  },
  {
    "class": "grid--col4",
    "output": "grid-column: span 4",
    "define": "Span 4 columns",
    "responsive": true
  },
  {
    "class": "grid--col5",
    "output": "grid-column: span 5",
    "define": "Span 5 columns",
    "responsive": true
  },
  {
    "class": "grid--col6",
    "output": "grid-column: span 6",
    "define": "Span 6 columns",
    "responsive": true
  },
  {
    "class": "grid--col7",
    "output": "grid-column: span 7",
    "define": "Span 7 columns",
    "responsive": true
  },
  {
    "class": "grid--col8",
    "output": "grid-column: span 8",
    "define": "Span 8 columns",
    "responsive": true
  },
  {
    "class": "grid--col9",
    "output": "grid-column: span 9",
    "define": "Span 9 columns",
    "responsive": true
  },
  {
    "class": "grid--col10",
    "output": "grid-column: span 10",
    "define": "Span 10 columns",
    "responsive": true
  },
  {
    "class": "grid--col11",
    "output": "grid-column: span 11",
    "define": "Span 11 columns",
    "responsive": true
  },
  {
    "class": "grid--col12",
    "output": "grid-column: span 12",
    "define": "Span 12 columns",
    "responsive": true
  }
]

const rows = [
  {
    "class": "grid--row-all",
    "output": "grid-row: 1 / -1",
    "define": "Span all the rows",
    "responsive": true
  },
  {
    "class": "grid--row1",
    "output": "grid-row: span 1",
    "define": "Span 1 row",
    "responsive": true
  },
  {
    "class": "grid--row2",
    "output": "grid-row: span 2",
    "define": "Span 2 rows",
    "responsive": true
  },
  {
    "class": "grid--row3",
    "output": "grid-row: span 3",
    "define": "Span 3 rows",
    "responsive": true
  },
  {
    "class": "grid--row4",
    "output": "grid-row: span 4",
    "define": "Span 4 rows",
    "responsive": true
  },
  {
    "class": "grid--row5",
    "output": "grid-row: span 5",
    "define": "Span 5 rows",
    "responsive": true
  },
  {
    "class": "grid--row6",
    "output": "grid-row: span 6",
    "define": "Span 6 rows",
    "responsive": true
  },
  {
    "class": "grid--row7",
    "output": "grid-row: span 7",
    "define": "Span 7 rows",
    "responsive": true
  },
  {
    "class": "grid--row8",
    "output": "grid-row: span 8",
    "define": "Span 8 rows",
    "responsive": true
  },
  {
    "class": "grid--row9",
    "output": "grid-row: span 9",
    "define": "Span 9 rows",
    "responsive": true
  },
  {
    "class": "grid--row10",
    "output": "grid-row: span 10",
    "define": "Span 10 rows",
    "responsive": true
  },
  {
    "class": "grid--row11",
    "output": "grid-row: span 11",
    "define": "Span 11 rows",
    "responsive": true
  },
  {
    "class": "grid--row12",
    "output": "grid-row: span 12",
    "define": "Span 12 rows",
    "responsive": true
  }
]

const autoflow = [
  {
    "class": "g-af-row",
    "output": "grid-auto-flow: row",
    "define": "Items are placed by filling each row in turn, adding new rows as necessary. The default.",
    "responsive": true
  },
  {
    "class": "g-af-column",
    "output": "grid-auto-flow: column",
    "define": "Items are placed by filling each column in turn, adding new columns as necessary.",
    "responsive": true
  },
  {
    "class": "g-af-dense",
    "output": "grid-auto-flow: dense",
    "define": "Dense packing algorithm attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.",
    "responsive": true
  }
]

const columnStartEnd = [
  {
    "class": "grid--col-start1",
    "output": "grid-column-start: 1",
    "define": "Start at the 1st column",
    "responsive": true
  },
  {
    "class": "grid--col-start2",
    "output": "grid-column-start: 2",
    "define": "Start at the 2nd column",
    "responsive": true
  },
  {
    "class": "grid--col-start3",
    "output": "grid-column-start: 3",
    "define": "Start at the 3rd column",
    "responsive": true
  },
  {
    "class": "grid--col-start4",
    "output": "grid-column-start: 4",
    "define": "Start at the 4th column",
    "responsive": true
  },
  {
    "class": "grid--col-start5",
    "output": "grid-column-start: 5",
    "define": "Start at the 5th column",
    "responsive": true
  },
  {
    "class": "grid--col-start6",
    "output": "grid-column-start: 6",
    "define": "Start at the 6th column",
    "responsive": true
  },
  {
    "class": "grid--col-start7",
    "output": "grid-column-start: 7",
    "define": "Start at the 7th column",
    "responsive": true
  },
  {
    "class": "grid--col-start8",
    "output": "grid-column-start: 8",
    "define": "Start at the 8th column",
    "responsive": true
  },
  {
    "class": "grid--col-start9",
    "output": "grid-column-start: 9",
    "define": "Start at the 9th column",
    "responsive": true
  },
  {
    "class": "grid--col-start10",
    "output": "grid-column-start: 10",
    "define": "Start at the 10th column",
    "responsive": true
  },
  {
    "class": "grid--col-start11",
    "output": "grid-column-start: 11",
    "define": "Start at the 11th column",
    "responsive": true
  },
  {
    "class": "grid--col-start12",
    "output": "grid-column-start: 12",
    "define": "Start at the 12th column",
    "responsive": true
  },
  {
    "class": "grid--col-end2",
    "output": "grid-column-end: 2",
    "define": "End at the start of 2nd column",
    "responsive": true
  },
  {
    "class": "grid--col-end3",
    "output": "grid-column-end: 3",
    "define": "End at the start of 3rd column",
    "responsive": true
  },
  {
    "class": "grid--col-end4",
    "output": "grid-column-end: 4",
    "define": "End at the start of 4th column",
    "responsive": true
  },
  {
    "class": "grid--col-end5",
    "output": "grid-column-end: 5",
    "define": "End at the start of 5th column",
    "responsive": true
  },
  {
    "class": "grid--col-end6",
    "output": "grid-column-end: 6",
    "define": "End at the start of 6th column",
    "responsive": true
  },
  {
    "class": "grid--col-end7",
    "output": "grid-column-end: 7",
    "define": "End at the start of 7th column",
    "responsive": true
  },
  {
    "class": "grid--col-end8",
    "output": "grid-column-end: 8",
    "define": "End at the start of 8th column",
    "responsive": true
  },
  {
    "class": "grid--col-end9",
    "output": "grid-column-end: 9",
    "define": "End at the start of 9th column",
    "responsive": true
  },
  {
    "class": "grid--col-end10",
    "output": "grid-column-end: 10",
    "define": "End at the start of 10th column",
    "responsive": true
  },
  {
    "class": "grid--col-end11",
    "output": "grid-column-end: 11",
    "define": "End at the start of 11th column",
    "responsive": true
  },
  {
    "class": "grid--col-end12",
    "output": "grid-column-end: 12",
    "define": "End at the start of 12th column",
    "responsive": true
  },
  {
    "class": "grid--col-end13",
    "output": "grid-column-end: 13",
    "define": "End at the start of 13th column",
    "responsive": true
  }
]

const rowStartEnd = [
  {
    "class": "grid--row-start1",
    "output": "grid-row-start: 1",
    "define": "Start at the 1st row",
    "responsive": true
  },
  {
    "class": "grid--row-start2",
    "output": "grid-row-start: 2",
    "define": "Start at the 2nd row",
    "responsive": true
  },
  {
    "class": "grid--row-start3",
    "output": "grid-row-start: 3",
    "define": "Start at the 3rd row",
    "responsive": true
  },
  {
    "class": "grid--row-start4",
    "output": "grid-row-start: 4",
    "define": "Start at the 4th row",
    "responsive": true
  },
  {
    "class": "grid--row-start5",
    "output": "grid-row-start: 5",
    "define": "Start at the 5th row",
    "responsive": true
  },
  {
    "class": "grid--row-start6",
    "output": "grid-row-start: 6",
    "define": "Start at the 6th row",
    "responsive": true
  },
  {
    "class": "grid--row-start7",
    "output": "grid-row-start: 7",
    "define": "Start at the 7th row",
    "responsive": true
  },
  {
    "class": "grid--row-start8",
    "output": "grid-row-start: 8",
    "define": "Start at the 8th row",
    "responsive": true
  },
  {
    "class": "grid--row-start9",
    "output": "grid-row-start: 9",
    "define": "Start at the 9th row",
    "responsive": true
  },
  {
    "class": "grid--row-start10",
    "output": "grid-row-start: 10",
    "define": "Start at the 10th row",
    "responsive": true
  },
  {
    "class": "grid--row-start11",
    "output": "grid-row-start: 11",
    "define": "Start at the 11th row",
    "responsive": true
  },
  {
    "class": "grid--row-start12",
    "output": "grid-row-start: 12",
    "define": "Start at the 12th row",
    "responsive": true
  },
  {
    "class": "grid--row-end2",
    "output": "grid-row-end: 2",
    "define": "End at the start of 2nd row",
    "responsive": true
  },
  {
    "class": "grid--row-end3",
    "output": "grid-row-end: 3",
    "define": "End at the start of 3rd row",
    "responsive": true
  },
  {
    "class": "grid--row-end4",
    "output": "grid-row-end: 4",
    "define": "End at the start of 4th row",
    "responsive": true
  },
  {
    "class": "grid--row-end5",
    "output": "grid-row-end: 5",
    "define": "End at the start of 5th row",
    "responsive": true
  },
  {
    "class": "grid--row-end6",
    "output": "grid-row-end: 6",
    "define": "End at the start of 6th row",
    "responsive": true
  },
  {
    "class": "grid--row-end7",
    "output": "grid-row-end: 7",
    "define": "End at the start of 7th row",
    "responsive": true
  },
  {
    "class": "grid--row-end8",
    "output": "grid-row-end: 8",
    "define": "End at the start of 8th row",
    "responsive": true
  },
  {
    "class": "grid--row-end9",
    "output": "grid-row-end: 9",
    "define": "End at the start of 9th row",
    "responsive": true
  },
  {
    "class": "grid--row-end10",
    "output": "grid-row-end: 10",
    "define": "End at the start of 10th row",
    "responsive": true
  },
  {
    "class": "grid--row-end11",
    "output": "grid-row-end: 11",
    "define": "End at the start of 11th row",
    "responsive": true
  },
  {
    "class": "grid--row-end12",
    "output": "grid-row-end: 12",
    "define": "End at the start of 12th row",
    "responsive": true
  },
  {
    "class": "grid--row-end13",
    "output": "grid-row-end: 13",
    "define": "End at the start of 13th row",
    "responsive": true
  }
]

const alignment = [
  {
    "class": "ji-auto",
    "output": "justify-items: auto",
    "define": "Use the parent's justify value.",
    "responsive": true
  },
  {
    "class": "ji-center",
    "output": "justify-items: center",
    "define": "The items are packed flush to each other toward the center of x axis.",
    "responsive": true
  },
  {
    "class": "ji-start",
    "output": "justify-items: start",
    "define": "The items are packed flush to each other toward the left.",
    "responsive": true
  },
  {
    "class": "ji-end",
    "output": "justify-items: end",
    "define": "The items are packed flush to each other toward the right.",
    "responsive": true
  },
  {
    "class": "ji-stretch",
    "output": "justify-items: stretch",
    "define": "Items stretch to fill the available space",
    "responsive": true
  },
  {
    "class": "ji-unset",
    "output": "justify-items: unset",
    "define": "Removes any justification, effectively resetting the value",
    "responsive": true
  },
  {
    "class": "js-auto",
    "output": "justify-self: auto",
    "define": "Use the parent's justify value.",
    "responsive": true
  },
  {
    "class": "js-center",
    "output": "justify-self: center",
    "define": "The item is packed flush to the others toward the center of x axis.",
    "responsive": true
  },
  {
    "class": "js-start",
    "output": "justify-self: start",
    "define": "The item is packed flush to the others toward the left.",
    "responsive": true
  },
  {
    "class": "js-end",
    "output": "justify-self: end",
    "define": "The item is packed flush to the others toward the right.",
    "responsive": true
  },
  {
    "class": "js-stretch",
    "output": "justify-self: stretch",
    "define": "Item stretches to fill the available space",
    "responsive": true
  },
  {
    "class": "js-unset",
    "output": "justify-self: unset",
    "define": "Removes any justification, effectively resetting the value",
    "responsive": true
  },
  {
    "class": "ai-baseline",
    "output": "align-items: baseline",
    "define": "Aligns items along the baseline of a parent's cross axis.",
    "responsive": true
  },
  {
    "class": "ai-center",
    "output": "align-items: center",
    "define": "Centers child elements along the parent's cross axis.",
    "responsive": true
  },
  {
    "class": "ai-end",
    "output": "align-items: end",
    "define": "Places child elements at the end of the parent's cross axis.",
    "responsive": true
  },
  {
    "class": "ai-start",
    "output": "align-items: start",
    "define": "Places child elements at the start of the parent's cross axis.",
    "responsive": true
  },
  {
    "class": "ai-stretch",
    "output": "align-items: stretch",
    "define": "Stretches child elements along the parent's cross axis.",
    "responsive": true
  },
  {
    "class": "as-auto",
    "output": "align-self: auto;",
    "define": "Auto re-aligns a child element along the parent's main axis.",
    "responsive": true
  },
  {
    "class": "as-baseline",
    "output": "align-self: baseline;",
    "define": "Re-aligns a child element along the baseline of the parent's main axis.",
    "responsive": true
  },
  {
    "class": "as-center",
    "output": "align-self: center;",
    "define": "Centers a child element along the parent's main axis.",
    "responsive": true
  },
  {
    "class": "as-end",
    "output": "align-self: end;",
    "define": "Re-aligns a child element to the end of the parent's main axis.",
    "responsive": true
  },
  {
    "class": "as-start",
    "output": "align-self: start;",
    "define": "Re-aligns a child element to the start of the parent's main axis.",
    "responsive": true
  },
  {
    "class": "as-stretch",
    "output": "align-self: stretch;",
    "define": "Stretches a child element along the parent's main axis.",
    "responsive": true
  }
]
</script>

## Overview

CSS Grids are the most powerful layout system available in CSS. It has two dimensions, meaning it can handle both columns and rows simultaneously, unlike <a href="/product/base/flex">flex layouts</a> which can only do one at a time. Applying <code class="stacks-code">.d-grid</code> to a container will lay out its children according to the CSS Grid layout spec. Adding atomic modifying classes will change the layout's behavior. Applying classes to an individual <code class="stacks-code">.grid--item</code> will change that cell's behavior.

### Examples

```html
<div class="d-grid">
    <div class="grid--item">…</div>
</div>
```

<div class="ff-mono">
    <div>
        .d-grid .grid__4 .g16
        <div class="d-none sm:d-inline-block sm:highlight">.sm:g-af-row</div>
    </div>
    <div class="mt16 d-grid g16 grid__4 sm:g-af-row">
        <div class="grid--item bg-black-200 p12 ba bc-black-225 grid--col-all">
            <div>.grid--item</div>
            <div>.grid--col-all</div>
        </div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 grid--col1 grid--row2 md:grid--col-all">
            <div>.grid--item</div>
            <div class="md:d-none">.grid--col1</div>
            <div class="d-none md:d-inline-block md:highlight">.md:grid--col-all</div>
            <div>.grid--row2</div>
        </div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 grid--col3 md:grid--col-all">
            <div>.grid--item</div>
            <div class="md:d-none">.grid--col3</div>
            <div class="d-none md:d-inline-block md:highlight">.md:grid--col-all</div>
            <div class="mb16">.grid__2</div>

            <div>.d-grid</div>
            <div>.g16</div>
            <div class="sm:d-none">.grid__2</div>
            <div class="d-none sm:d-inline-block sm:highlight">.sm:g-af-row</div>
            <div class="mt16 d-grid grid__2 g16 sm:g-af-row">
                <div class="grid--item bg-black-225 p12 ba bc-black-300 sm:grid--col-all">
                    <div>.grid--item</div>
                    <div class="d-none sm:d-inline-block sm:highlight">.sm:grid--col-all</div>
                </div>
                <div class="grid--item bg-black-225 p12 ba bc-black-300 sm:grid--col-all">
                    <div>.grid--item</div>
                    <div class="d-none sm:d-inline-block sm:highlight">.sm:grid--col-all</div>
                </div>
                <div class="grid--item bg-black-225 p12 ba bc-black-300 sm:grid--col-all">
                    <div>.grid--item</div>
                    <div class="d-none sm:d-inline-block sm:highlight">.sm:grid--col-all</div>
                </div>
                <div class="grid--item bg-black-225 p12 ba bc-black-300 sm:grid--col-all">
                    <div>.grid--item</div>
                    <div class="d-none sm:d-inline-block sm:highlight">.sm:grid--col-all</div>
                </div>
            </div>
        </div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 grid--col2">
            <div>.grid--item</div>
            <div>.grid--col2</div>
        </div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 grid--col1 md:grid--col2">
            <div>.grid--item</div>
            <div class="md:d-none">.grid--col1</div>
            <div class="d-none md:d-inline-block md:highlight">.md:grid--col2</div>
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col-all">
            <div>.grid--item</div>
            <div>.grid--col-all</div>
        </div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 md:grid--col2 md:grid--row2">
            <div class="md:d-none">.grid--item</div>
            <div class="d-none md:d-inline-block md:highlight mb4">.md:grid--col2</div>
            <div class="d-none md:d-inline-block md:highlight">.md:has-row-2</div>
        </div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 md:grid--col2">
            <div class="md:d-none">.grid--item</div>
            <div class="d-none md:d-inline-block md:highlight">.md:grid--col2</div>
        </div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 md:grid--col2">
            <div class="md:d-none">.grid--item</div>
            <div class="d-none md:d-inline-block md:highlight">.md:grid--col2</div>
        </div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 md:grid--col-all">
            <div class="md:d-none">.grid--item</div>
            <div class="d-none md:d-inline-block md:highlight">.md:grid--col-all</div>
        </div>
    </div>
</div>

## Columns

To define a discrete number of columns in your grid layout, you can add a <code class="stacks-code">grid__[x]</code> modifying class.

### Column classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell2" scope="col">Class</th>
        <th class="s-table--cell4" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each columnTemplates as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td>{item.define}</td>
          <td class="ta-center">
            {#if item.responsive}
              <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Columns examples

```html
<div class="d-grid grid__1">…</div>
<div class="d-grid grid__2">…</div>
<div class="d-grid grid__3">…</div>
<div class="d-grid grid__4">…</div>
<div class="d-grid grid__5">…</div>
<div class="d-grid grid__6">…</div>
<div class="d-grid grid__7">…</div>
<div class="d-grid grid__8">…</div>
<div class="d-grid grid__9">…</div>
<div class="d-grid grid__10">…</div>
<div class="d-grid grid__11">…</div>
<div class="d-grid grid__12">…</div>
<div class="d-grid grid__auto">…</div>
```

<div class="ff-mono">
    <div class="mb16 d-grid g16 grid__1">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
    </div>

    <div class="mb16 d-grid g16 grid__2">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
    </div>

    <div class="mb16 d-grid g16 grid__3">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
    </div>

    <div class="mb16 d-grid g16 grid__4">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
    </div>

    <div class="mb16 d-grid g16 grid__5">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
    </div>

    <div class="mb16 d-grid g16 grid__6">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
    </div>

    <div class="mb16 d-grid g16 grid__7">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">7</div>
    </div>

    <div class="mb16 d-grid g16 grid__8">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">7</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">8</div>
    </div>

    <div class="mb16 d-grid g16 grid__9">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">7</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">8</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">9</div>
    </div>

    <div class="mb16 d-grid g16 grid__10">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">7</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">8</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">9</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">10</div>
    </div>

    <div class="mb16 d-grid g16 grid__11">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">7</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">8</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">9</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">10</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">11</div>
    </div>

    <div class="mb32 d-grid g16 grid__12">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">7</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">8</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">9</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">10</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">11</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">12</div>
    </div>

    <div class="d-grid g16 grid__auto">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
    </div>
</div>

## Column and row spans

You can apply <code class="stacks-code">grid--col[x]</code> to your columns, and <code class="stacks-code">grid--row[x]</code> to your rows to span a specific number of columns or rows.

### Column spanning classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each columns as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td>{item.define}</td>
          <td class="ta-center">
            {#if item.responsive}
              <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Column examples

```html
<div class="d-grid grid__12">
    <div class="grid--col-all">…</div>
    <div class="grid--col1">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col3">…</div>
    <div class="grid--col4">…</div>
    <div class="grid--col5">…</div>
    <div class="grid--col6">…</div>
    <div class="grid--col7">…</div>
    <div class="grid--col8">…</div>
    <div class="grid--col9">…</div>
    <div class="grid--col10">…</div>
    <div class="grid--col11">…</div>
    <div class="grid--col12">…</div>
</div>
```

<div class="ff-mono ws-nowrap">
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col-all">.grid--col-all</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col1">.grid--col1</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col3">.grid--col3</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col4">.grid--col4</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col5">.grid--col5</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col6">.grid--col6</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col7">.grid--col7</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col8">.grid--col8</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col9">.grid--col9</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col10">.grid--col10</div>
    </div>
    <div class="d-grid grid__12 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col11">.grid--col11</div>
    </div>
    <div class="d-grid grid__12">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col12">.grid--col12</div>
    </div>
</div>

### Row classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each rows as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td>{item.define}</td>
          <td class="ta-center">
            {#if item.responsive}
              <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Row example

```html
<div class="d-grid grid__4">
    <div class="grid--col2 grid--row4">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
</div>
```

<div class="ff-mono ws-nowrap">
    <div class="d-grid grid__4 g16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2 grid--row4">
            <div>.grid--col2</div>
            <div>.grid--row4</div>
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
    </div>
</div>

## Autoflow

If you have grid items that you don't explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items.

### Autoflow classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each autoflow as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td>{item.define}</td>
          <td class="ta-center">
            {#if item.responsive}
              <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Autoflow examples

```html
<div class="d-grid g-af-row">…</div>
<div class="d-grid g-af-column">…</div>
<div class="d-grid g-af-dense">…</div>
```

<div class="ff-mono">
    <div class="mb16">.g-af-row</div>
    <div class="mb32 d-grid g16 g-af-row">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
    </div>

    <div class="mb16">.g-af-column</div>
    <div class="mb32 d-grid g16 g-af-column grid__12">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">7</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">8</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">9</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">10</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">11</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">12</div>
    </div>

    <div class="mb16">.g-af-dense</div>
    <div class="d-grid g16 g-af-dense grid__6">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--col4 bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--col5 bg-black-200 p12 ba bc-black-225">6</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">7</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">8</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">9</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">10</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">11</div>
        <div class="grid--col6 bg-black-200 p12 ba bc-black-225">12</div>
    </div>
</div>

## Start and end

If you'd like to offset a column or row and specify its start and end positioning classes, you can apply these atomic classes.

### Column start and end classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each columnStartEnd as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td>{item.define}</td>
          <td class="ta-center">
            {#if item.responsive}
              <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Column start and end examples

```html
<div class="d-grid grid__4">
    <div class="grid--col-start1 grid--col-end4">…</div>
    <div class="grid--col-start2 grid--col-end4">…</div>
    <div class="grid--col2 grid--col-end5">…</div>
</div>
```

<div class="ff-mono ws-nowrap">
    <div class="d-grid grid__4 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col-start1 grid--col-end4">.grid--col-start1 .grid--col-end4</div>
    </div>
    <div class="d-grid grid__4 mb16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col-start2 grid--col-end4">.grid--col-start2 .grid--col-end4</div>
    </div>
    <div class="d-grid grid__4">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2 grid--col-end5">.grid--col2 .grid--col-end5</div>
    </div>
</div>

### Row start and end classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each rowStartEnd as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td>{item.define}</td>
          <td class="ta-center">
            {#if item.responsive}
              <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Row start and end examples

```html
<div class="d-grid grid__4">
    <div class="grid--col2 grid--row-start2 grid--row-end4">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
    <div class="grid--col2">…</div>
</div>
```

<div class="ff-mono ws-nowrap">
    <div class="d-grid grid__4 g16">
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2 grid--row-start2 grid--row-end4">
            <div>.grid--col2</div>
            <div>.grid--row-start2</div>
            <div>.grid--row-end4</div>
        </div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
        <div class="bg-black-200 p12 ba bc-black-225 grid--col2">.grid--col2</div>
    </div>
</div>

## Alignment

On the grid container, you can apply <code class="stacks-code">align-items</code> to the y axis and <code class="stacks-code">justify-items</code> to the x axis. On individual items, you can apply <code class="stacks-code">align-self</code> on the y axis, and <code class="stacks-code">justify-self</code> on the x axis.

### Alignment classes

<div class="overflow-x-auto mb48" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th class="s-table--cell3" scope="col">Class</th>
        <th class="s-table--cell3" scope="col">Output</th>
        <th scope="col">Definition</th>
        <th class="s-table--cell2 ta-center" scope="col"><a class="s-link s-link__inherit" href="/product/develop/conditional-classes#responsive">Responsive?</a></th>
      </tr>
    </thead>
    <tbody>
      {#each alignment as item}
        <tr class="fs-caption">
          <th scope="row"><code class="stacks-code">.{item.class}</code></th>
          <td><code class="stacks-code bg-white">{item.output}</code></td>
          <td>{item.define}</td>
          <td class="ta-center">
            {#if item.responsive}
              <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"/></svg>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

### Alignment examples

```html
<div class="d-grid ji-center ai-center">
    <div class="grid--item as-start">…</div>
    <div class="grid--item">…</div>
    <div class="grid--item js-end">…</div>
    …
</div>
```

<div class="ff-mono">
    <div class="mb16">Default</div>
    <div class="d-grid g-af-column mb24">
        <div class="grid--item bg-black-200 p12 ba bc-black-225">1</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">3</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">4</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225">6</div>
    </div>

    <div class="mb16">.ji-center .ai-center</div>
    <div class="d-grid g-af-column ji-center ai-center h96">
        <div class="grid--item bg-black-200 p12 ba bc-black-225 h48 as-start">1 .as-start</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 h64">2</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 as-stretch">3 .as-stretch</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 h64 js-end">4 .js-end</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 h64">5</div>
        <div class="grid--item bg-black-200 p12 ba bc-black-225 h64">6</div>
    </div>
</div>
