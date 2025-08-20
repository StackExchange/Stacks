---
title: Migration Guide - v2 to v3
description: Guidance for migrating from Stacks v2.x to v3.0
tags: migration
---

## Toggle Switches

Toggle switches have undergone a complete redesign in v3.0 with a new markup structure and class naming system. This change improves accessibility, customization options, and semantic HTML structure.

### v2.x vs v3.0 Examples

#### Basic Toggle Switch

**v2.x**
```html
<input class="s-toggle-switch" id="example" type="checkbox">
```

**v3.0**
```html
<div class="s-toggle">
  <input class="s-toggle__control" id="example" type="checkbox">
  <div class="s-toggle__switch">
    <div class="s-toggle__knob"></div>
  </div>
</div>
```

#### Multiple Toggle Switch

**v2.x**
```html
<div class="s-toggle-switch s-toggle-switch__multiple">
  <input type="radio" name="group" id="opt1">
  <label for="opt1">Option 1</label>
  <input type="radio" name="group" id="opt2">
  <label for="opt2">Option 2</label>
</div>
```

**v3.0**
```html
<div class="s-toggle s-toggle--multiple">
  <div class="s-toggle__option">
    <input type="radio" name="group" id="opt1">
    <label for="opt1">Option 1</label>
  </div>
  <div class="s-toggle__option">
    <input type="radio" name="group" id="opt2">
    <label for="opt2">Option 2</label>
  </div>
</div>
```

#### Toggle Switch Label Off

**v2.x**
```html
<label class="s-toggle-switch--label-off">Off</label>
```

**v3.0**
```html
<div class="s-toggle__option s-toggle__option--off">
  <!-- input and label -->
</div>
```

### Class Mapping

| v2.x | v3.0 |
| ---- | ---- |
| `.s-toggle-switch` | `.s-toggle` |
| N/A (direct on input) | `.s-toggle__control` |
| N/A | `.s-toggle__switch` |
| N/A | `.s-toggle__knob` |
| `.s-toggle-switch__multiple` | `.s-toggle--multiple` |
| N/A (direct on label/input) | `.s-toggle__option` |
| `.s-toggle-switch--label-off` | `.s-toggle__option--off` |
