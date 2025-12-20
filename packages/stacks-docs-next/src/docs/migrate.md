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

**Start by exploring the codebase and proposing your migration strategy. Once I approve the approach, proceed with implementation.**