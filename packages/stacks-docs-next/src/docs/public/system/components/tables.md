---
title: "Tables"
description: "Tables are used to list all information from a data set. The base style establishes preferred padding, font-size, and font-weight treatments. To enhance or customize the look of the table, apply any additional classes listed below."
js: true
---

<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import {
        IconArrowDownSm, IconArrowUpSm, IconArrowUpDownSm,
    } from '@stackoverflow/stacks-icons-legacy/icons';
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-table-container',  parent: 'N/A',                   modifies: 'N/A',         description: 'Container for the table.' },
        { class: '.s-table',            parent: '.s-table-container',    modifies: 'N/A',         description: 'Base table style.' },
        { class: '.s-table--cell:n',    parent: '.s-table > tr > td',    modifies: 'N/A',         description: 'Table cell width in 12 evenly divided columns. Replace `:n` with the number of columns the cell should span.' },
        { class: '.s-table__b0',        parent: 'N/A',                   modifies: '.s-table',    description: 'Removes all table cell borders.' },
        { class: '.s-table__bx',        parent: 'N/A',                   modifies: '.s-table',    description: 'Shows only horizontal table cell borders. Good for tables with lots of data that can be sorted and filtered.' },
        { class: '.s-table__bx-simple', parent: 'N/A',                   modifies: '.s-table',    description: 'Removes most of the default borders and backgrounds. Good for tables without much data that don\'t need to be sorted or filtered.' },
        { class: '.s-table__sortable',  parent: 'N/A',                   modifies: '.s-table',    description: 'Applies styling to imply the table is sortable.' },
        { class: '.s-table__stripes',   parent: 'N/A',                   modifies: '.s-table',    description: 'Apply zebra striping to the table.' },
        { class: '.s-table__sm',        parent: 'N/A',                   modifies: '.s-table',    description: 'Apply a condensed sizing to the table.' },
        { class: '.s-table__lg',        parent: 'N/A',                   modifies: '.s-table',    description: 'Apply a large sizing to the table.' },
    ];

    const widths: ClassTableRow[] = [
        { class: '.s-table--cell1',  output: '8.3333333%'   },
        { class: '.s-table--cell2',  output: '16.6666667%'  },
        { class: '.s-table--cell3',  output: '25%'          },
        { class: '.s-table--cell4',  output: '33.3333333%'  },
        { class: '.s-table--cell5',  output: '41.6666667%'  },
        { class: '.s-table--cell6',  output: '50%'          },
        { class: '.s-table--cell7',  output: '58.3333333%'  },
        { class: '.s-table--cell8',  output: '66.6666667%'  },
        { class: '.s-table--cell9',  output: '75%'          },
        { class: '.s-table--cell10', output: '83.3333333%'  },
        { class: '.s-table--cell11', output: '91.6666667%'  },
        { class: '.s-table--cell12', output: '100%'         },
    ];

    const dataAttributes: ClassTableRow[] = [
        { class: 'data-controller="s-table"',       parent: 'table', description: 'Wires up the table to the JS controller.' },
        { class: 'data-s-table-target="column"',    parent: 'th',    description: 'Marks this as a sortable column for the purpose of modifying arrow icons.' },
        { class: 'data-action="click->s-table#sort"', parent: 'button', description: 'Causes a click on the header cell to sort by this column.' },
        { class: 'data-s-table-sort-to="top"',      parent: 'tr',    description: 'Forces the sorting of a row to the top.' },
        { class: 'data-s-table-sort-to="bottom"',   parent: 'tr',    description: 'Forces the sorting of a row to the bottom.' },
        { class: 'data-s-table-sort-val="[x]"',     parent: 'td',    description: 'Optionally use a custom value for sorting instead of the cell\'s text content.' },
    ];

    const atomic: ClassTableRow[] = [
        { class: '.tl-auto',  output: 'table-layout: auto;'  },
        { class: '.tl-fixed', output: 'table-layout: fixed;' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Default style

Tables should be wrapped in a container, `.s-table-container`. This provides horizontal scrolling when necessary in the smallest breakpoints. The default table style is a bordered cell layout with a stylized header row.

```html
<div class="s-table-container">
    <table class="s-table">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Joined</th>
                    <th scope="col">Last seen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><a>Aaron Shekey</a></th>
                    <td>aaronshekey</td>
                    <td>Dec 1 '17 at 20:24</td>
                    <td>just now</td>
                </tr>
                <tr>
                    <th><a>Joshua Hynes</a></th>
                    <td>joshuahynes</td>
                    <td>Feb 12 at 18:47</td>
                    <td>Aug 10 at 14:57</td>
                </tr>
                <tr>
                    <th><a>Piper Lawson</a></th>
                    <td>piperlawson</td>
                    <td>Jul 5 at 14:32</td>
                    <td>Aug 14 at 12:41</td>
                </tr>
            </tbody>
        </table>
    </div>
</Example>

## Borders & backgrounds

By default, tables are outlined, have borders on all cells, and have a styled header. Depending on the size and complexity of a table, these can all be configured.

### Horizontal borders

Shows only horizontal table cell borders. Good for tables with lots of data that can be sorted and filtered.

```html
<div class="s-table-container">
    <table class="s-table s-table__bx">
        …
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__bx">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                <tr><th scope="row">1</th><td>Aaron</td><td>S.</td><td>@aarons</td></tr>
                <tr><th scope="row">2</th><td>Joshua</td><td>H.</td><td>@joshuah</td></tr>
                <tr><th scope="row">3</th><td>Paweł</td><td>L.</td><td>@pawełl</td></tr>
                <tr><th scope="row">4</th><td>Ted</td><td>G.</td><td>@so-ted</td></tr>
            </tbody>
        </table>
    </div>
</Example>

### Simple borders

Removes most of the default borders and backgrounds. Good for tables without much data that don't need to be sorted or filtered.

```html
<div class="s-table-container">
    <table class="s-table s-table__bx-simple">
        …
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                <tr><th scope="row">1</th><td>Aaron</td><td>S.</td><td>@aarons</td></tr>
                <tr><th scope="row">2</th><td>Joshua</td><td>H.</td><td>@joshuah</td></tr>
                <tr><th scope="row">3</th><td>Paweł</td><td>L.</td><td>@pawełl</td></tr>
                <tr><th scope="row">4</th><td>Ted</td><td>G.</td><td>@so-ted</td></tr>
            </tbody>
        </table>
    </div>
</Example>

### No borders

Removes all table cell borders.

```html
<div class="s-table-container">
    <table class="s-table s-table__b0">
        …
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__b0">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                <tr><th scope="row">1</th><td>Aaron</td><td>S.</td><td>@aarons</td></tr>
                <tr><th scope="row">2</th><td>Joshua</td><td>H.</td><td>@joshuah</td></tr>
                <tr><th scope="row">3</th><td>Paweł</td><td>L.</td><td>@pawełl</td></tr>
                <tr><th scope="row">4</th><td>Ted</td><td>G.</td><td>@so-ted</td></tr>
            </tbody>
        </table>
    </div>
</Example>

### Zebra striping

When tables have a lot of information, you can help users group information and isolate data by adding zebra striping.

```html
<div class="s-table-container">
    <table class="s-table s-table__stripes">
        …
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__stripes">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                <tr><th scope="row">1</th><td>Aaron</td><td>S.</td><td>@aarons</td></tr>
                <tr><th scope="row">2</th><td>Joshua</td><td>H.</td><td>@joshuah</td></tr>
                <tr><th scope="row">3</th><td>Paweł</td><td>L.</td><td>@pawełl</td></tr>
                <tr><th scope="row">4</th><td>Ted</td><td>G.</td><td>@so-ted</td></tr>
            </tbody>
        </table>
    </div>
</Example>

## Spacing

A table's padding can be changed to be more or less condensed.

### Small

```html
<div class="s-table-container">
    <table class="s-table s-table__sm">
        …
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__sm">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                <tr><th scope="row">1</th><td>Aaron</td><td>S.</td><td>@aarons</td></tr>
                <tr><th scope="row">2</th><td>Joshua</td><td>H.</td><td>@joshuah</td></tr>
            </tbody>
        </table>
    </div>
</Example>

### Default

```html
<div class="s-table-container">
    <table class="s-table">
        …
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                <tr><th scope="row">1</th><td>Paweł</td><td>L.</td><td>@pawełl</td></tr>
                <tr><th scope="row">2</th><td>Ted</td><td>G.</td><td>@so-ted</td></tr>
            </tbody>
        </table>
    </div>
</Example>

### Large

```html
<div class="s-table-container">
    <table class="s-table s-table__lg">
        …
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__lg">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                <tr><th scope="row">1</th><td>Aaron</td><td>S.</td><td>@aarons</td></tr>
                <tr><th scope="row">2</th><td>Joshua</td><td>H.</td><td>@joshuah</td></tr>
            </tbody>
        </table>
    </div>
</Example>

## Cell widths

Table columns will size themselves based on their content. To set a specific width, you can use one of the following table cell classes to specify the width for any column.

### Classes

<ClassTable {widths} headings={{ output: 'Width' }} />

### Examples

```html
// Example 1
<div class="s-table-container">
    <table class="s-table">
        <tr>
            <td class="s-table--cell2">…</td>
            <td>…</td>
        </tr>
    </table>
</div>
// Example 2
<div class="s-table-container">
    <table class="s-table">
        <tr>
            <td class="s-table--cell3">…</td>
            <td class="s-table--cell6">…</td>
            <td>…</td>
            <td>…</td>
            <td>…</td>
        </tr>
    </table>
</div>
// Example 3
<div class="s-table-container">
    <table class="s-table">
        <tr>
            <td class="s-table--cell4">…</td>
            <td>…</td>
            <td>…</td>
            <td>…</td>
            <td>…</td>
            <td class="s-table--cell2">…</td>
        </tr>
    </table>
</div>
```

<Example>
    <div class="ff-mono">
        <div class="s-table-container mb16">
            <table class="s-table ta-center">
                <tr>
                    <td class="docs-box s-table--cell2"><strong>.s-table--cell2</strong></td>
                    <td class="docs-box"><em class="fc-light">No Class</em></td>
                </tr>
            </table>
        </div>
        <div class="s-table-container mb16">
            <table class="s-table ta-center">
                <tr>
                    <td class="docs-box s-table--cell3"><strong>.s-table--cell3</strong></td>
                    <td class="docs-box s-table--cell6"><strong>.s-table--cell6</strong></td>
                    <td class="docs-box"><em class="fc-light">No Class</em></td>
                    <td class="docs-box"><em class="fc-light">No Class</em></td>
                    <td class="docs-box"><em class="fc-light">No Class</em></td>
                </tr>
            </table>
        </div>
        <div class="s-table-container">
            <table class="s-table ta-center">
                <tr>
                    <td class="docs-box s-table--cell4"><strong>.s-table--cell4</strong></td>
                    <td class="docs-box"><em class="fc-light">No Class</em></td>
                    <td class="docs-box"><em class="fc-light">No Class</em></td>
                    <td class="docs-box"><em class="fc-light">No Class</em></td>
                    <td class="docs-box"><em class="fc-light">No Class</em></td>
                    <td class="docs-box s-table--cell2"><strong>.s-table--cell2</strong></td>
                </tr>
            </table>
        </div>
    </div>
</Example>

## Alignment

### Vertical alignment

The default vertical alignment is `middle`. You change a table's or a specific cell's vertical alignment by using the [Vertical Alignment atomic classes](/system/base/vertical-alignment#classes).

```html
<div class="s-table-container">
    <table class="s-table">
        <tbody>
            <tr>
                <td class="va-top">…</td>
                <td class="va-middle">…</td>
                <td class="va-bottom">…</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="s-table-container">
    <table class="s-table va-bottom">
        <tbody>
            <tr>
                <td>…</td>
                <td>…</td>
                <td>…</td>
            </tr>
        </tbody>
    </table>
</div>
```

<Example>
    <div class="ff-mono">
        <div class="s-table-container">
            <table class="s-table mb16">
                <tbody>
                    <tr>
                        <td class="docs-box va-top hs1">.va-top</td>
                        <td class="docs-box va-middle">.va-middle</td>
                        <td class="docs-box va-bottom">.va-bottom</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="s-table-container">
            <table class="s-table va-bottom">
                <tbody>
                    <tr>
                        <td class="docs-box hs1">.s-table.va-bottom</td>
                        <td class="docs-box">.s-table.va-bottom</td>
                        <td class="docs-box">.s-table.va-bottom</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</Example>

### Text alignment

Text alignment can be changed at a table or cell level by using [atomic text alignment classes](/system/foundation/typography#layout-classes). Columns containing copy should be left-aligned. Columns containing numbers should be right-aligned.

```html
<div class="s-table-container">
    <table class="s-table">
        <tbody>
            <tr>
                <td class="ta-left">…</td>
                <td class="ta-center">…</td>
                <td class="ta-right">…</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="s-table-container">
    <table class="s-table ta-right">
        <tbody>
            <tr>
                <td>…</td>
                <td>…</td>
                <td>…</td>
            </tr>
        </tbody>
    </table>
</div>
```

<Example>
    <div class="ff-mono">
        <div class="s-table-container">
            <table class="s-table mb16">
                <tbody>
                    <tr>
                        <td class="docs-box ta-left hs1">.ta-left</td>
                        <td class="docs-box ta-center">.ta-center</td>
                        <td class="docs-box ta-right">.ta-right</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="s-table-container">
            <table class="s-table ta-right">
                <tbody>
                    <tr>
                        <td class="docs-box hs1">.s-table.ta-right</td>
                        <td class="docs-box">.s-table.ta-right</td>
                        <td class="docs-box">.s-table.ta-right</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</Example>

## Sortable tables

To indicate that the user can sort a table by different columns, add the `s-table__sortable` class to the table.

The `<th>` cells should include arrows to indicate sortability or the currently applied sorting. In addition, the column that is currently sorted should be indicated with the `is-sorted` class on its `<th>`.

```html
<div class="s-table-container">
    <table class="s-table s-table__sortable">
        <thead>
            <tr>
                <th scope="col" class="is-sorted">
                    <button type="button">Listing <svg class="svg-icon">…</svg></button>
                </th>
                <th scope="col">
                    <button type="button">Status <svg class="svg-icon">…</svg></button>
                </th>
                …
            </tr>
        </thead>
        <tbody>…</tbody>
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__sortable">
            <thead>
                <tr>
                    <th scope="col" class="is-sorted">
                        <a href="#">Listing <Icon src={IconArrowDownSm} /></a>
                    </th>
                    <th scope="col">
                        <a href="#">Status <Icon src={IconArrowUpDownSm} /></a>
                    </th>
                    <th scope="col">
                        <button type="button">Owner <Icon src={IconArrowUpDownSm} /></button>
                    </th>
                    <th scope="col" class="ta-right">
                        <button type="button">Views <Icon src={IconArrowUpDownSm} /></button>
                    </th>
                    <th scope="col" class="ta-right">
                        <button type="button">Applies <Icon src={IconArrowUpDownSm} /></button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a>Site Reliability Engineer, Generalist</a><br><span class="fs-caption">Sydney, Australia</span></td>
                    <td>Running</td>
                    <td>Sansa Stark</td>
                    <td class="ta-right">502</td>
                    <td class="ta-right">13</td>
                </tr>
                <tr>
                    <td><a>Senior Product Designer</a><br><span class="fs-caption">New York, NY, USA</span></td>
                    <td>Running</td>
                    <td>Robert Baratheon</td>
                    <td class="ta-right">900</td>
                    <td class="ta-right">15</td>
                </tr>
                <tr>
                    <td><a>Product Manager, Developer Products</a><br><span class="fs-caption">London, England</span></td>
                    <td>Running</td>
                    <td>Sansa Stark</td>
                    <td class="ta-right">3</td>
                    <td class="ta-right">1</td>
                </tr>
            </tbody>
        </table>
    </div>
</Example>

### JavaScript sorting

Stacks provides built-in functionality for letting the user sort a table by the values in a column through clicking the column header. This requires the complete data to already exist in the table (e.g. it is not going to work if the table is paged and requires a call to the server to update data on sorting). See the [JavaScript introduction](/system/develop/javascript) for general information about JS in Stacks.

To make your table user-sortable, do the following:

1. Style the table as sortable as explained in the section above.
2. Set `data-controller="s-table"` on the `<table>` element.
3. Set `data-s-table-target="column"` and `data-action="click->s-table#sort"` on each of the `<th>` elements that control sorting.
4. Add the three icons for showing _ascending sort_, _descending sort_, and _unsorted_ to each of these header cells, hiding the first two with a `d-none` class. Add the `js-sorting-indicator` class to each of the icons, and add `js-sorting-indicator-asc`, `js-sorting-indicator-desc`, and `js-sorting-indicator-none` to the appropriate icon.

**Note:** Using `js-…` classes is not really the optimal way of doing this, and will probably be replaced with something better eventually. When that happens, the `js-…` mechanism will be deprecated but continue to be supported for a while, so you have ample time to update things.

By default, the data is sorted by the content of the cell. If you need to use a different value, for example because your cell contains a human-readable date, add a `data-s-table-sort-val` attribute to the cell.

If a column contains any data that is not an integer, the data will be sorted lexicographically. Otherwise it will be sorted numerically, with empty cells being considered the lowest number.

If the table contains rows that should not be sorted, but rather always be at the top or always be at the bottom, add `data-s-table-sort-to="top"` or `data-s-table-sort-to="bottom"` to the `<tr>` element.

### JavaScript data attributes

<ClassTable classes={dataAttributes} headings={{ class: 'Attribute', parent: 'Applies to' }} />

### JavaScript example

```html
<div class="s-table-container">
    <table class="s-table s-table__sortable" data-controller="s-table">
        <thead>
            <tr>
                <th scope="col" data-s-table-target="column">
                    <button data-action="click-&gt;s-table#sort">
                        Season
                        <svg class="js-sorting-indicator js-sorting-indicator-asc d-none">…</svg>
                        <svg class="js-sorting-indicator js-sorting-indicator-desc d-none">…</svg>
                        <svg class="js-sorting-indicator js-sorting-indicator-none">…</svg>
                    </button>
                </th>
                …
            </tr>
        </thead>
        <tbody>
            <tr><td>Winter</td><td data-s-table-sort-val="12">December</td><td>2</td></tr>
            <tr><td>Spring</td><td data-s-table-sort-val="3">March</td><td>13</td></tr>
            <tr><td>Summer</td><td data-s-table-sort-val="6">June</td><td>25</td></tr>
            <tr><td>Fall</td><td data-s-table-sort-val="9">September</td><td>13</td></tr>
            <tr data-s-table-sort-to="bottom" class="fw-bold">
                <td colspan="2">Average temperature</td>
                <td>13</td>
            </tr>
        </tbody>
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__sortable" data-controller="s-table">
            <thead>
                <tr>
                    <th scope="col" data-s-table-target="column">
                        <button data-action="click-&gt;s-table#sort">
                            Season
                            <Icon src={IconArrowUpSm} class="js-sorting-indicator js-sorting-indicator-asc d-none" />
                            <Icon src={IconArrowDownSm} class="js-sorting-indicator js-sorting-indicator-desc d-none" />
                            <Icon src={IconArrowUpDownSm} class="js-sorting-indicator js-sorting-indicator-none" />
                        </button>
                    </th>
                    <th scope="col" data-s-table-target="column">
                        <button data-action="click-&gt;s-table#sort">
                            Starts in month
                            <Icon src={IconArrowUpSm} class="js-sorting-indicator js-sorting-indicator-asc d-none" />
                            <Icon src={IconArrowDownSm} class="js-sorting-indicator js-sorting-indicator-desc d-none" />
                            <Icon src={IconArrowUpDownSm} class="js-sorting-indicator js-sorting-indicator-none" />
                        </button>
                    </th>
                    <th scope="col" data-s-table-target="column">
                        <button data-action="click-&gt;s-table#sort">
                            Typical temperature in °C
                            <Icon src={IconArrowUpSm} class="js-sorting-indicator js-sorting-indicator-asc d-none" />
                            <Icon src={IconArrowDownSm} class="js-sorting-indicator js-sorting-indicator-desc d-none" />
                            <Icon src={IconArrowUpDownSm} class="js-sorting-indicator js-sorting-indicator-none" />
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Winter</td><td data-s-table-sort-val="12">December</td><td>2</td></tr>
                <tr><td>Spring</td><td data-s-table-sort-val="3">March</td><td>13</td></tr>
                <tr><td>Summer</td><td data-s-table-sort-val="6">June</td><td>25</td></tr>
                <tr><td>Fall</td><td data-s-table-sort-val="9">September</td><td>13</td></tr>
                <tr data-s-table-sort-to="bottom" class="fw-bold">
                    <td colspan="2">Average temperature</td>
                    <td>13</td>
                </tr>
            </tbody>
        </table>
    </div>
</Example>

## Bulk actions

Generally for a checkbox input that's placed first in the table row for bulk actions.

```html
<div class="s-table-container">
    <table class="s-table">
        <thead>
            <tr>
                <th scope="col" class="s-table--bulk">
                    <label class="v-visible-sr" for="example-checkbox-1">bulk checkbox</label>
                    <div class="s-checkbox"><input type="checkbox" id="example-checkbox-1"></div>
                </th>
                <th scope="col">…</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="s-table--bulk">
                    <label class="v-visible-sr" for="example-checkbox-2">bulk checkbox</label>
                    <div class="s-checkbox"><input type="checkbox" id="example-checkbox-2"></div>
                </td>
                <td>…</td>
            </tr>
        </tbody>
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table">
            <thead>
                <tr>
                    <th scope="col" class="s-table--bulk">
                        <label class="v-visible-sr" for="bulk-checkbox-1">bulk checkbox</label>
                        <div class="s-checkbox"><input type="checkbox" id="bulk-checkbox-1"></div>
                    </th>
                    <th scope="col">Display Name</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="s-table--bulk">
                        <label class="v-visible-sr" for="bulk-checkbox-2">bulk checkbox</label>
                        <div class="s-checkbox"><input type="checkbox" id="bulk-checkbox-2"></div>
                    </td>
                    <td><a>SansaStark</a></td>
                    <td>Sansa Stark</td>
                    <td>sstark@company.com</td>
                </tr>
                <tr>
                    <td class="s-table--bulk">
                        <label class="v-visible-sr" for="bulk-checkbox-3">bulk checkbox</label>
                        <div class="s-checkbox"><input type="checkbox" id="bulk-checkbox-3"></div>
                    </td>
                    <td><a>RobertBaratheon</a></td>
                    <td>Robert Baratheon</td>
                    <td>rbaratheon@company.com</td>
                </tr>
                <tr>
                    <td class="s-table--bulk">
                        <label class="v-visible-sr" for="bulk-checkbox-4">bulk checkbox</label>
                        <div class="s-checkbox"><input type="checkbox" id="bulk-checkbox-4"></div>
                    </td>
                    <td><a>Test Developer To Be Is Not A Developer Yet</a></td>
                    <td>Test Developer To Be Is Not A Developer Yet</td>
                    <td>testdevelopertobeisnotadevyet@team-mgmt.dev.company.com</td>
                </tr>
            </tbody>
        </table>
    </div>
</Example>

## Totals row

Used mainly with data tables, the totals row increases the font-size for all cells within a row.

```html
<div class="s-table-container">
    <table class="s-table ta-right">
        …
        <tfoot class="s-table--totals">
            …
        </tfoot>
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table ta-right">
            <thead>
                <tr>
                    <th scope="col" class="ta-left">Listing</th>
                    <th scope="col" class="s-table--cell2">Views</th>
                    <th scope="col" class="s-table--cell2">Apps</th>
                    <th scope="col" class="s-table--cell2">App CTR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="ta-left"><a>Site Reliability Engineer, Generalist</a></td>
                    <td>6,871</td><td>187</td><td>5.02%</td>
                </tr>
                <tr>
                    <td class="ta-left"><a>Senior Product Designer</a></td>
                    <td>2,242</td><td>196</td><td>16.46%</td>
                </tr>
                <tr>
                    <td class="ta-left"><a>Product Manager, Developer Products</a></td>
                    <td>3,469</td><td>229</td><td>14.9%</td>
                </tr>
            </tbody>
            <tfoot class="s-table--totals">
                <tr>
                    <th scope="row" class="ta-left">Totals</th>
                    <td>12,582</td><td>612</td><td>14.65%</td>
                </tr>
            </tfoot>
        </table>
    </div>
</Example>

## Inactive rows

For tables that include inactive or disabled rows, such as inactive users or teams, `.is-disabled` can be applied to any `<tr>`. Additionally, `.is-enabled` can be applied to any `<th>` or `<td>` that you'd like to ignore the parent disabled styling (such as a persistent link to reactivate a disabled account).

```html
<div class="s-table-container">
    <table class="s-table">
        <tbody>
            <tr class="is-disabled">
                <td>…</td>
                <td>…</td>
                <td class="is-enabled"><a>Add</a></td>
            </tr>
        </tbody>
    </table>
</div>
```

<Example>
    <div class="s-table-container">
        <table class="s-table s-table__bx">
            <thead>
                <tr>
                    <th scope="col" class="ta-left">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Last seen</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><a>Aaron Shekey</a></th>
                    <td>emailaddress@website.com</td>
                    <td>just now</td>
                    <td class="ta-right"><a class="fc-red-400">Remove</a></td>
                </tr>
                <tr class="is-disabled">
                    <th>Joshua Hynes</th>
                    <td>emailaddress@website.com</td>
                    <td>Sep 28 '18</td>
                    <td class="ta-right is-enabled"><a>Add</a></td>
                </tr>
                <tr class="is-disabled">
                    <th>Paweł Ludwiczak</th>
                    <td>emailaddress@website.com</td>
                    <td>Apr 17 '19</td>
                    <td class="ta-right is-enabled"><a>Add</a></td>
                </tr>
                <tr>
                    <th><a>Piper Lawson</a></th>
                    <td>emailaddress@website.com</td>
                    <td>Yesterday</td>
                    <td class="ta-right"><a class="fc-red-400">Remove</a></td>
                </tr>
                <tr>
                    <th><a>Ted Goas</a></th>
                    <td>emailaddress@website.com</td>
                    <td>5min ago</td>
                    <td class="ta-right"><a class="fc-red-400">Remove</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</Example>

## Atomic classes

Further control of table behavior is possible with atomic classes. For example, you can make non-table markup display as a table layout by pairing `.d-table`, `.d-table-cell` and `.tl-fixed`.

<ClassTable {atomic} headings={{ output: 'Output' }} />
