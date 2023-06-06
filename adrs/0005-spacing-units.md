# Use Stacks Spacing Units

**Date:** 2023-05-06

**Related PR:** [#1363](https://github.com/StackExchange/Stacks/pull/1363)

## Issue

We should define scales for anything that will take them (line-height, spacing/sizing, colors, radii, weights, animation) using with custom properties so we can ease the task of making broad alterations and provide an inlet to creating an API to expose to consumers if we see fit. For a bonus, this has the potential for greater ease of choice and customization is of our UI _by the user_, which is an accessibility [best](https://www.markettailor.io/blog/role-of-personalization-in-increasing-website-accessibility) [practice](https://www.getstark.co/blog/why-personalization-is-key-to-your-accessibility-toolbox).

## Decision

Use our `--su` and `--su-static` custom properties to define sizing/spacing for our components whenever reasonably possible.

### Alignment with Stacks philosophy

Stacks operates with the philosophy that a some abstraction and restriction of markup, styling, and interactivity leads to a better developer experience, more consistent design, and improved maintainability. For instance, we have atomic color classes that help our UIs have a consistent look and reduce dev effort by providing a subset of colors to choose from, plus they allow for quick color adjustments across our entire codebase by just changing a few values in Stacks. Taking this further, high contrast mode wouldn't have been feasible without the centralized color definitions within Stacks.

Applying spacing units to our components encourages us to adhere to a scale, justify when we choose not to, and allows us to make the same broad changes as we do with other values (just like the color + high contrast example in the paragraph above). Our spacing units come in two forms: static and dynamic. The static ones use static pixel values (think `--su-static24: 24px;`), while the dynamic ones take that static value and multiply it by a base spacing unit value (like `--su24: calc(var(--su-static24) * var(--su-base));`). This opens the door to potential dynamic spacing values. With these in place, it becomes more trivial to adjust the spacing across Stacks (and it's consumers) UI.

## Additional info

- [StackExchange/Stacks #873: Use CSS variables for spacing](https://github.com/StackExchange/Stacks/pull/873)
- [StackExchange/Stacks #813: Add high density theme (closed)](https://github.com/StackExchange/Stacks/pull/813)
