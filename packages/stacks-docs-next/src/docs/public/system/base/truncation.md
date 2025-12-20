---
title: Truncation
description: Stacks provides utility classes for various types of truncation.
updated: 2025-12-17
---

## Classes

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn5 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col" class="s-table--cell3">Class</th>
        <th scope="col" class="s-table--cell3">Applies to</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code class="stacks-code">.truncate</code></td>
        <td></td>
        <td>Text is cropped to the width of its parent with an ellipsis.</td>
      </tr>
      <tr>
        <td><code class="stacks-code">.v-truncate[x]</code></td>
        <td></td>
        <td>Text is cropped to the length of [x] number of lines with an ellipsis.</td>
      </tr>
      <tr>
        <td><code class="stacks-code">.v-truncate-fade</code></td>
        <td></td>
        <td>Text is cropped by visually fading it out.</td>
      </tr>
      <tr>
        <td><code class="stacks-code">.v-truncate-fade__sm</code></td>
        <td><code class="stacks-code">.v-truncate-fade</code></td>
        <td>Reduces the height of the visible text</td>
      </tr>
      <tr>
        <td><code class="stacks-code">.v-truncate-fade__lg</code></td>
        <td><code class="stacks-code">.v-truncate-fade</code></td>
        <td>Increases the amount of visible text.</td>
      </tr>
    </tbody>
  </table>
</div>

## Examples

### Ellipses

CSS offers truncation on arbitrarily-long strings. This can help sanitize user-inputted things like bios, locations, or display names. In order for text truncation to work, it should be applied to a block-level element. Truncation can only apply to text/strings, not arbitrary block-level elements.

```html
<p class="truncate">…</p>
<p class="v-truncate1">…</p>
<p class="v-truncate2">…</p>
<p class="v-truncate3">…</p>
<p class="v-truncate4">…</p>
<p class="v-truncate5">…</p>
```

<div class="stacks-preview--example">
  <div class="truncate wmx3 mb16">
    Regardless of length, this text will be truncated horizontally. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>

  <div class="v-truncate1 wmx3 mb16">
    Regardless of length, this text will be this text will be truncated to 1 line, vertically. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>

  <div class="v-truncate2 wmx3 mb16">
    Regardless of length, this text will be this text will be truncated to 2 lines, vertically. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>

  <div class="v-truncate3 wmx3 mb16">
    Regardless of length, this text will be this text will be truncated to 3 lines, vertically. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>

  <div class="v-truncate4 wmx3 mb16">
    Regardless of length, this text will be this text will be truncated to 4 lines, vertically. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>

  <div class="v-truncate5 wmx3">
    Regardless of length, this text will be this text will be truncated to 5 lines, vertically. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>

### Fade

Alternatively, you can use a vertical fade that will set `max-height` and sets a vertical `mask-image`:

```html
<p class="v-truncate-fade v-truncate-fade__sm">…</p>
<p class="v-truncate-fade">…</p>
<p class="v-truncate-fade v-truncate-fade__lg">…</p>
```

<div class="stacks-preview--example">
  <div class="v-truncate-fade v-truncate-fade__sm wmx3 mb16">
    Regardless of length, this text will be this text will fade out, vertically. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>

  <div class="v-truncate-fade wmx3 mb16">
    Regardless of length, this text will be this text will fade out, vertically. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>

  <div class="v-truncate-fade v-truncate-fade__lg wmx3">
    Regardless of length, this text will be this text will fade out, vertically. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
