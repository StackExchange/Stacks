# Refactor component styling using pseudo-private custom properties

**Date:** 2022-11-03

**Related PR:** #1172

### Issue
Component styles are difficult to maintain. This is due to:

1. Disjointed styles .less files amongst components. Within components, we currently sometime will output contextual, variant, modifier, interaction styles with the base component class and sometimes we don’t. These styles will might be in alphabetical order, by some logical order, in the order added, or seemingly randomly. Many component style .less files include a large preamble and table of contents that are seldom updated to reflect the current state of the component. 
2. Complex cascade for component styles within variants, modifiers and theme contexts. This makes scanning .less files cumbersome, maintaining styles difficult, and changes liable to cause regressions.

### Decision
Defining a structure for component styles using pseudo-private custom properties (PPCP) addresses the issues and includes a few other benefits:

- **Increase consistency within our codebase**. This is not specific to PPCP as much as it applies because we’ve chosen an unified approach towards structuring our component styles.
- **Increased maintainability and readability**. With PPCP, we change custom property values as close to the base component level as possible and nearly flattening the cascade. This ensures that we keep the cascade as simple as possible, increasing readability, making maintenance easier, and decreasing the potential for styling conflicts in the process.

#### Secondary benefits
- **Prepare us for native CSS component styles**. Adopting a PPCP approach gives us the opportunity to reduce our dependency on a preprocessor and anticipate a future where a preprocessor is entirely unnecessary.

### Additional info
Inspiration for this approach initially came from [Lea Verou’s presentation titled “CSS Variable Secrets at CSS Day 2022](https://youtu.be/ZuZizqDF4q8)

#### See also
[Stacks components _style-template.less](https://github.com/StackExchange/Stacks/blob/develop/lib/css/components/_styles-template.less)

[Stacks discussion on pseudo-private custom properties on GitHub](https://github.com/StackExchange/Stacks/pull/1091#issuecomment-1274947752)

[Custom properties with defaults: 3+1 strategies](https://lea.verou.me/2021/10/custom-properties-with-defaults/)