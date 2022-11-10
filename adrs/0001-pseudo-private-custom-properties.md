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


#### Component styles template

<details>
<summary>component-name.less</summary>

```less
// This is an example of the expected structure for component-specific styles
// In some cases, deviations from this structure are warranted if we need to maintain a legacy structure
.s-component-name {
    // BASE COMPONENT-SPECIFIC CUSTOM PROPERTIES
    // --_{component-abbreviation}-{property-shorthand}: {value};
    --_cn-bg: var(--blue-500);
    --_cn-h: var(--su-static16);
    --_cn-fd: row-reverse;
    // VARIANT CUSTOM PROPERTIES
    // --_{component-abbreviation}-{property-shorthand}-{variant-name}: {value};
    --_cn-fc-filled: var(--green-500);
    // CHILD COMPONENT CUSTOM PROPERTIES
    // --_{component-abreviation}-{child-component-name}-{property-shorthand}: {value};
    --_cn-image-bg: var(--red-500);

    // CONTEXTUAL STYLES
    // These may include themes/modes, responsive styles, or modifications based on parent containers
    .highcontrast-mode({
        --_cn-bg: var(--black-400);

        .s-avatar--letter {
            --_cn-image-bg: var(--white);
        }
    });
    .s-special-parent & {
        --_cn-bg: transparent;
    }

    // STATES
    // These are generally classes prefixed with `.is-` or `.has-`
    &.is-selected {
        --_cn-bg: var(--orange-200);
    }

    // MODIFIERS
    // Modifiers are considered to be classes that can be combined with other modifiers outside of their respective groupings without collisions
    // Sizes
    &&__xs {
        --_cn-h: var(--su-static2);
    }
    &&__sm {
        --_cn-h: var(--su-static12);
    }
    // Orientation
    &&__vertical {
        --_cn-fd: column;
    }

    // VARIANTS
    // Variants are expected to be used exclusive of one another. In other words, you should only use one variant class at a time
    &&__info {
        --_cn-bg: var(--yellow-100);

        &.s-component-name__filled {
            --_cn-bg-filled: var(--yellow-800);
        }
    }

    // CHILD ELEMENTS
    & &--image {
        background-color: var(--_cn-image-bg);
    }

    // INTERACTION
    &:hover {
        --_cn-bg: var(--_black-050);
    }

    // STYLES MODIFIED BY COMPONENT-SPECIFIC CUSTOM PROPERTIES
    background-color: var(--_cn-bg-filled, var(--_cn-bg));
    flex-direction: var(--_cn-fd);
    height: var(--_cn-h);

    // STATIC COMPONENT STYLES
    display: flex;
    position: relative;
    vertical-align: bottom;
}
```

</details>

### Additional info
Inspiration for this approach initially came from [Lea Verou’s presentation titled “CSS Variable Secrets at CSS Day 2022](https://youtu.be/ZuZizqDF4q8)

#### See also
[Stacks components _style-template.less](https://github.com/StackExchange/Stacks/blob/develop/lib/css/components/_styles-template.less)

[Stacks discussion on pseudo-private custom properties on GitHub](https://github.com/StackExchange/Stacks/pull/1091#issuecomment-1274947752)

[Custom properties with defaults: 3+1 strategies](https://lea.verou.me/2021/10/custom-properties-with-defaults/)