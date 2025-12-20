---
title: Empty states
description: Empty states are used when there is no data to show. Ideally they orient the user by providing feedback based on the the user's last interaction or communicate the benefits of a feature. When appropriate, they should explain the next steps the user should take and provide guidance with a clear call-to-action.
updated: 2025-12-20
---

## No data

Used when a user hasn't interacted with a feature yet.

### No data actionable

If the user can take an action to fix the situation, it's best to draw attention to it, explain next steps, and provide a call-to-action.

```html
<div class="s-empty-state wmx4 p48">
    <!-- EmptyXL spot SVG -->
    <p>Why is this blank? Explain it.</p>
    <a class="s-btn s-btn__filled">Call to action</a>
</div>
```

<div class="s-empty-state wmx4 p48">
    <!-- TODO: Add EmptyXL spot SVG -->
    <svg class="mb24" width="96" height="96" viewBox="0 0 96 96"><rect fill="#e4e6e8" width="96" height="96" rx="8"/></svg>
    <p>We haven't received any data yet. Have you connected your Stack Overflow account?</p>
    <a class="s-btn s-btn__filled">Connect my account</a>
</div>

### No data non-actionable

If the user can't take an action to fix the situation, it's more appropriate to set expectations.

```html
<div class="s-empty-state wmx4 p48">
    <!-- EmptyXL spot SVG -->
    <p>Why is this blank? Explain it.</p>
</div>
```

<div class="s-empty-state wmx4 p48">
    <!-- TODO: Add EmptyXL spot SVG -->
    <svg class="mb24" width="96" height="96" viewBox="0 0 96 96"><rect fill="#e4e6e8" width="96" height="96" rx="8"/></svg>
    <p>There's no data associated with your account yet. Please check back tomorrow.</p>
</div>

## No results

When someone performs an action that returns nothing, a blank state can explain what happened and help get someone back on track.

### No results actionable

If the user can take an action to fix the situation, it's best to draw attention to it and provide a call-to-action.

```html
<div class="s-empty-state wmx4 p48">
    <!-- EmptyXL spot SVG -->
    <p>Why is this blank? Explain it.</p>
    <a class="s-btn s-btn__filled">Call to action</a>
</div>
```

<div class="s-empty-state wmx4 p48 bg-black-100">
    <!-- TODO: Add EmptyXL spot SVG -->
    <svg class="mb24" width="96" height="96" viewBox="0 0 96 96"><rect fill="#e4e6e8" width="96" height="96" rx="8"/></svg>
    <p>We couldn't find any tags matching <span class="s-tag d-inline-block">stacks-1-0-0</span>. It might not exist yet. Would you like to create it?</p>
    <a href="#" class="s-btn s-btn__filled">Create this tag</a>
</div>

### No results non-actionable

If the user can't take an action to fix the situation, it's more appropriate to set expectations.

```html
<div class="s-empty-state wmx4 p48">
    <!-- EmptyXL spot SVG -->
    <p>Why is this blank? Explain it.</p>
</div>
```

<div class="s-empty-state wmx4 p48 bg-black-100">
    <!-- TODO: Add EmptyXL spot SVG -->
    <svg class="mb24" width="96" height="96" viewBox="0 0 96 96"><rect fill="#e4e6e8" width="96" height="96" rx="8"/></svg>
    <p>We couldn't match users for <strong>Namey McUser</strong>. Try refining your search or trying something more general.</p>
</div>
