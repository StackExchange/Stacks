# Eleventy to SvelteKit + MDsveX Migration

## Objective

Migrate documentation pages from Eleventy (using Liquid templates + JSON data) to SvelteKit with MDsveX (Markdown with Svelte components).

An imporant consideration is this stacks-docs-next is being written in parallel with updates to stacks-docs. So we need to make sure we carry over any changes even after we've migrated the bulk of the documentation.

## Migration Pattern Reference

Here are three files showing a completed migration:

- `packages/stacks-docs/product/components/buttons.html` - Original Eleventy Liquid template
- `packages/stacks-docs/_data/buttons.json` - Data file used by Liquid template
- `packages/stacks-docs-next/src/docs/public/system/components/buttons/index.md` - Migrated MDsveX page with Svelte components

## Key Migration Transformations

### 1. File Structure

- **From:** `packages/stack-docs/product/{folder}/{page}.html` (Liquid) + `packages/stacks-docs/_data/{page}.json` (data)
- **To:** `packages/stacks-docs-next/src/docs/public/system/{folder}/{page}/index.md` (`~{folder}/{page}.md` if no dependancies) (MDsveX with frontmatter)

### 2. Frontmatter Migration

**From (Liquid):**

```liquid
---
layout: page
title: Buttons
svelte: https://...
figma: https://...
description: ...
tags: components
---
```

**To (MDsveX):**

```markdown
---
title: Buttons
svelte: https://...
figma: https://...
description: ...
updated: YYYY-MM-DD
---
```

### 3. Data Access Pattern

**From (Liquid):**

```liquid
{% for btn in buttons.base %}
  {% assign types = btn.classes %}
  {% for class in types %}
    <button class="s-btn {{ class.class }}">...</button>
  {% endfor %}
{% endfor %}
```

**To (Svelte Component):**

```svelte
<script lang="ts">
  // Import types and components
  import { Button } from '@stackoverflow/stacks-svelte';
  import ButtonTable from './ButtonTable.svelte';

  // Define data inline or import if needed
  const ButtonVariants: Variant[] = ["", "danger", "featured", "tonal"];
</script>

<ButtonTable variant="danger" />
```

Note: stacks-svelte contains components we can use natively, for example <a class="s-btn"> can become <Button>. This means our codebase is svelte end to end.

### 4. Component Extraction Strategy

Complex Liquid loops with tables should become dedicated Svelte components:

- `ButtonTable.svelte` - Renders button variants table
- `AnchorButtonTable.svelte` - Renders anchor button examples
- `LoadingButtonTable.svelte` - Renders loading state examples
- etc.

### 5. HTML/Markdown Conversion

**From (Liquid):**

```liquid
{% header "h2", "Styles" %}
<p class="stacks-copy">...</p>
```

**To (MDsveX):**

```markdown
## Styles

Stacks provides 3 different button styles:
```

### 6. Code Highlighting

**From (Liquid):**

```liquid
{% highlight html %}
<button class="s-btn" type="button">...</button>
{% endhighlight %}
```

**To (MDsveX):**

````markdown
```html
<button class="s-btn" type="button">...</button>
```
````

### 7. Icon Handling

**From (Liquid):**

```liquid
{% icon "Trash" %}
```

**To (Svelte):**

```svelte
<script>
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconTrash } from '@stackoverflow/stacks-icons';
</script>

<Icon src={IconTrash} />
```

### 8. Interactive Examples

**From (Liquid with inline script):**

```html
<button class="s-btn js-toggle-button">...</button>

<script>
    for (const toggleButton of document.querySelectorAll('.js-toggle-button')) {
      toggleButton.addEventListener('click', () => { ... });
    }
</script>
```

**To (Svelte Component):**
Create `ToggleButtonDemo.svelte` with proper Svelte reactivity:

```svelte
<script lang="ts">
  let pressed = false;
</script>

<Button
  on:click={() => pressed = !pressed}
  class={pressed ? 'is-selected' : ''}
  aria-pressed={pressed}
>
  Toggle button
</Button>
```

## Decision Points for You

**Analyze the codebase and decide:**

1. **Approach Selection:**
    - Should I write a migration script (if patterns are consistent)?
    - Should I manually migrate files (if lots of edge cases)?
    - Hybrid approach (script for boilerplate, manual for complex parts)?

2. **Component Strategy:**
    - Should JSON data files be converted to TypeScript constants?
    - Should complex tables become reusable Svelte components?
    - Which patterns repeat across multiple pages?

3. **Scope Analysis:**
    - How many pages need migration?
    - What Liquid helpers/filters are being used?
    - Are there custom Liquid tags that need special handling?

## Expected Output

Based on your analysis, provide either:

### Option A: Migration Script

A Node.js/TypeScript script that:

- Reads Liquid templates and JSON files
- Converts frontmatter
- Transforms Liquid syntax to MDsveX
- Generates Svelte component stubs for complex sections
- Outputs migrated files to target directory

### Option B: Manual Migration Guide

A detailed guide covering:

- Step-by-step migration checklist
- Common patterns and their conversions
- Edge cases to watch for
- Testing/validation approach

### Option C: Hybrid Approach

- Script for mechanical transformations
- Documentation for manual steps
- Component templates for common patterns

## Files to Analyze

Please examine:

1. All `.html` files in the source directory
2. Corresponding `.json` data files
3. The `buttons.html` example I've provided
4. The migrated `index.md` example
5. Any Liquid includes or layouts being used

## Success Criteria

- Frontmatter correctly transformed
- All Liquid loops converted to Svelte components or MDsveX syntax
- Code examples properly formatted with syntax highlighting
- Interactive elements use proper Svelte reactivity
- Icons imported and used correctly
- Tables and complex layouts extracted to components
- No runtime errors in migrated pages
- Visual output matches original pages

## Questions to Answer First

Before proceeding, investigate and report:

1. How many pages need migration?
2. What unique Liquid helpers/filters are used?
3. Are there shared layouts or includes?
4. What's the structure of the JSON data files?
5. Are there any custom Liquid tags?
6. How are images and assets referenced?

---

## Current Migration Status

### Approach Chosen: Manual Migration

After analysis, we chose **manual migration one-by-one** over automation. This allows for:

- Full quality control for each page
- Building reusable component library as we go
- Handling edge cases perfectly
- Learning the codebase deeply

### Progress Summary (as of 2025-12-20)

**Total pages:** 76 HTML files + 18 includes/layouts

**Migration Status:**

✅ **Forms** - 5/5 pages (100%) - FULLY MIGRATED

- ✅ **inputs.md** - FULLY MIGRATED (2025-12-20)
- ✅ **checkbox.md** - FULLY MIGRATED (2025-12-20)
- ✅ **select.md** - FULLY MIGRATED (2025-12-20)
- ✅ **textarea.md** - FULLY MIGRATED (2025-12-20)
- ✅ **labels.md** - FULLY MIGRATED (2025-12-20)

🟡 **Components** - 8/43 pages FULLY MIGRATED (35 with placeholder content)

- ✅ **skeleton.md** - FULLY MIGRATED (2025-12-20)
- ✅ **spinner.md** - FULLY MIGRATED (2025-12-20)
- ✅ **empty-states.md** - FULLY MIGRATED (2025-12-20)
- ✅ **toggle-switch.md** - FULLY MIGRATED (2025-12-20)
- ✅ **tags.md** - FULLY MIGRATED (2025-12-20)
- ✅ **pagination.md** - FULLY MIGRATED (2025-12-20)
- ✅ **page-titles.md** - FULLY MIGRATED (2025-12-20)
- ✅ **bling.md** - FULLY MIGRATED (2025-12-20)
- ❌ 35 components - placeholder only (need real migration)

✅ **Base** - 26/26 pages (100%)

- All migrated

🟡 **Foundation** - 1/7 pages (14%)

- ❌ **icons.html** - not migrated (can ignore per requirements)
- ❌ **spots.html** - not migrated (can ignore per requirements)
- ❌ **color-fundamentals.md** - placeholder only
- ❌ **colors.md** - placeholder only
- ❌ **accessibility.md** - placeholder only
- ❌ **theming.md** - placeholder only
- ✅ **typography.md** - migrated

✅ **Develop** - 4/4 pages (100%)

- All migrated

### Key Learnings

1. **Simple inline data > separate files**
    - For validation classes, sizes, etc., define data inline in `<script>` section
    - Only extract to separate components when logic is complex

2. **Tables with data loops**

    ```svelte
    {#each validationClasses as item}
    <tr>
      <th scope="row"><code class="stacks-code">{item.class}</code></th>
      <td>{item.applies}</td>
      <td>{item.description}</td>
    </tr>
    {/each}
    ```

3. **Icon handling**
    - Import from `@stackoverflow/stacks-icons`
    - Use `<Icon src={IconName} class="..." />` from stacks-svelte
    - Example: `{% icon "Lock" %}` → `<Icon src={IconLock} />`

4. **Notice/Warning boxes**
    - `{% tip, "warning" %}` → `<div class="s-notice s-notice__warning">...</div>`
    - Can create reusable Notice component if needed

5. **Live examples stay as HTML**
    - Keep the live preview sections as raw HTML
    - Use Svelte components (Icon, etc.) within them
    - This allows interactive examples to work

### Patterns Established

**Page structure:**

````markdown
---
title: Page Title
svelte: https://...
figma: https://...
description: ...
updated: YYYY-MM-DD
---

<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconName } from '@stackoverflow/stacks-icons';

  // Inline data for tables
  const tableData = [...];
</script>

## Section

Content with markdown, code blocks, and live examples.

```html
<!-- Code example -->
```
````

<div class="example">
  <!-- Live example using Stacks CSS and Svelte components -->
  <Icon src={IconName} />
</div>
```

### Next Steps

1. **Complete Forms section** (4 pages remaining)
    - checkbox.md
    - select.md
    - textarea.md
    - labels.md

2. **Fill placeholder content in Components** (43 pages)
    - Priority: Most commonly used components first

3. **Fill placeholder content in Foundation** (4 pages)
    - color-fundamentals.md
    - colors.md
    - accessibility.md
    - theming.md

### Estimated Remaining Effort

- Simple pages: 15-30 min each
- Medium pages: 30-60 min each
- Complex pages: 1-3 hours each

**Total remaining:** ~35 pages to fill in with real content

---

## Migration Session Log

### Session 2025-12-20

**Pages Migrated:** 13 pages fully completed

**Forms Section (5 pages):**

1. inputs.md - Base styles, validation states, accessibility, icons, sizes, input fills, nested inputs
2. checkbox.md - Checkbox & radio, vertical/horizontal groups, indeterminate state, validation
3. select.md - Select menus with validation states and sizes
4. textarea.md - Textareas with validation states and sizes
5. labels.md - Label styles, sizes, description copy, status flags

**Components Section (8 pages):**

1. skeleton.md - Base & AI loading states with accessibility
2. spinner.md - 5 sizes + `.is-loading` helper
3. empty-states.md - No data/results states (actionable & non-actionable)
4. toggle-switch.md - Single & multiple option toggles
5. tags.md - All tag states (base, moderator, required, watched, ignored) + sizes
6. pagination.md - Navigation with states
7. page-titles.md - Headers with descriptions, actions, breadcrumbs
8. bling.md - Award indicators (types, filled, sizes)

**Time per page:** ~5-15 minutes for simple components

**Next components to migrate (in order of complexity):**

- breadcrumbs.html (157 lines)
- cards.html (169 lines)
- expandable.html (175 lines)
- prose.html (186 lines)
- avatars.html, badges.html, banners.html, etc.

**Notes:**

- Pattern is very consistent now
- Inline data constants work well for simple tables
- `{#each}` loops replace Liquid `{% for %}` perfectly
- Icon components from `@stackoverflow/stacks-icons` work great

---

**Migration is ongoing. Focus on Components → Foundation for maximum impact.**
