---
title: Bling
svelte: https://beta.svelte.stackoverflow.design/?path=/docs/components-bling--docs
description: Bling is used to indicate award type in badges, topbar, and user cards.
updated: 2025-12-20
---

<script lang="ts">
  const blingTypes = [
    { name: 'default', modifier: '', descriptions: { base: 'A general bling shape used for reputation, notifications or other.', filled: 'A general bling used for information, status, labels or other.' } },
    { name: 'gold', modifier: 'gold', descriptions: { base: 'The "gold" award bling shape.', filled: 'A "gold" award bling.' } },
    { name: 'silver', modifier: 'silver', descriptions: { base: 'The "silver" award bling shape.', filled: 'A "silver" award bling.' } },
    { name: 'bronze', modifier: 'bronze', descriptions: { base: 'The "bronze" award bling shape.', filled: 'A "bronze" award bling.' } }
  ];

  const blingTypesFilled = [
    { name: 'default', modifier: '', descriptions: { filled: 'A general bling used for information, status, labels or other.' } },
    { name: 'rep', modifier: 'rep', descriptions: { filled: 'A "rep" bling used for general reputation points.' } },
    { name: 'activity', modifier: 'activity', descriptions: { filled: 'An activity bling to signal real-time events and draw attention.' } },
    { name: 'gold', modifier: 'gold', descriptions: { filled: 'A "gold" award bling.' } },
    { name: 'silver', modifier: 'silver', descriptions: { filled: 'A "silver" award bling.' } },
    { name: 'bronze', modifier: 'bronze', descriptions: { filled: 'A "bronze" award bling.' } }
  ];

  const blingSizes = ['sm', 'default', 'lg'];
</script>

## Types

Use the clear bling variant only when its associated color is already present in the component, such as within a colored tag badge or alongside a filled element.

```html
<span class="s-bling">
    <span class="v-visible-sr">…</span>
</span>
<span class="s-bling s-bling__gold">
    <span class="v-visible-sr">…</span>
</span>
<span class="s-bling s-bling__silver">
    <span class="v-visible-sr">…</span>
</span>
<span class="s-bling s-bling__bronze">
    <span class="v-visible-sr">…</span>
</span>
```

<div class="overflow-x-auto" tabindex="0">
    <table class="wmn5 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col" class="s-table--cell5">Class</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each blingTypes as bling}
            <tr>
                <td class="va-middle pr8">
                    <span class="s-bling {bling.modifier ? `s-bling__${bling.modifier}` : ''}">
                        <span class="v-visible-sr">{bling.name} bling</span>
                    </span>
                </td>
                <td class="va-middle">
                    <div class="d-flex g4 fw-wrap">
                        <code class="stacks-code">.s-bling</code>
                        {#if bling.name !== 'default'}
                            <code class="stacks-code">.s-bling__{bling.modifier}</code>
                        {/if}
                    </div>
                </td>
                <td class="va-middle">{bling.descriptions.base}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

## Filled

Use the filled bling style to represent a specific achievement badge or to display the total count of badges a user has earned.

```html
<span class="s-bling s-bling__filled">…</span>
<span class="s-bling s-bling__filled s-bling__rep">…</span>
<span class="s-bling s-bling__filled s-bling__activity">…</span>
<span class="s-bling s-bling__filled s-bling__gold">…</span>
<span class="s-bling s-bling__filled s-bling__silver">…</span>
<span class="s-bling s-bling__filled s-bling__bronze">…</span>
```

<div class="overflow-x-auto" tabindex="0">
    <table class="wmn5 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col" class="s-table--cell5">Class</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each blingTypesFilled as bling}
            <tr>
                <td class="va-middle pr8">
                    <span class="s-bling s-bling__filled {bling.modifier ? `s-bling__${bling.modifier}` : ''}">
                        <span class="v-visible-sr">{bling.name} bling</span>
                    </span>
                </td>
                <td class="va-middle">
                    <div class="d-flex g4 fw-wrap">
                        <code class="stacks-code">.s-bling</code>
                        <code class="stacks-code">.s-bling__filled</code>
                        {#if bling.name !== 'default'}
                            <code class="stacks-code">.s-bling__{bling.modifier}</code>
                        {/if}
                    </div>
                </td>
                <td class="va-middle">{bling.descriptions.filled}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

## Sizes

A bling component has a default size. To change the bling's size, apply one of the following sizing classes along with the base `.s-bling` class.

```html
<span class="s-bling s-bling__filled s-bling__sm">…</span>
<span class="s-bling s-bling__filled">…</span>
<span class="s-bling s-bling__filled s-bling__lg">…</span>
```

<div class="overflow-x-auto" tabindex="0">
    <table class="wmn5 s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col" class="s-table--cell5">Class</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each blingSizes as size}
            <tr>
                <td class="va-middle pr8">
                    <span class="s-bling s-bling__filled {size !== 'default' ? `s-bling__${size}` : ''}">
                        <span class="v-visible-sr">{size} bling</span>
                    </span>
                </td>
                <td class="va-middle">
                    <div class="d-flex g4 fw-wrap">
                        <code class="stacks-code">.s-bling</code>
                        {#if size !== 'default'}
                            <code class="stacks-code">.s-bling__{size}</code>
                        {/if}
                    </div>
                </td>
                <td class="va-middle">A "{size}" bling.</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>
