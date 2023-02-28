# Stacks Accessibility Testing Strategy

**Date:** 2022-12-21

**Related PR:** [#1217](https://github.com/StackExchange/Stacks/pull/1217)

## Issue
We currently rely on manual testing, third-party audits, and user reports to identify and fix accessibility issues. The only semi-automated accessibility testing we do is via Mabl, which is initiated manually and tests instead of individual components. Furthermore, while we've generally aspired to WCAG 2.1 AA compliance, we haven't codified the accessibility success criteria for our components.

**A defined success criteria and automated accessibility testing will reduce the effort needed to build and maintain accessibile components.**

## Decision

Introduce the following success criteria for the accessibility Stacks components:

- All components should meet or exceed [WCAG 2.1](https://www.w3.org/TR/WCAG21/) level AA success criteria
- Components rendered within high contrast mode should meet or exceed [WCAG 2.1 AAA success criteria for contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)

Introduce the following automated accessibility testing for Stacks:

- All components should include accessibility tests using the [`chai-a11y-axe` plugin](https://open-wc.org/docs/testing/chai-a11y-axe/#chai-tdd-ui) in unit test files.

### Contexts to consider

Components can be rendered in different combinations of light/dark and high contrast modes. We should test components in all of these contexts to ensure they meet the success criteria.

#### A note on viewport widths

Though accessibility issues can arise at any viewport width, accessibility issues tend arise primarily from invalid markup and color contrast issues. Because of this, we should focus on testing components at the default viewport width and use discression when adding tests for different viewport widths.

### Additional Guidelines

- All tests and linters runs in a GH workflow for every commit and pull requests on develop branch.

- Tests will be gradually added to existing components as developers need to change them. New components should always be accompanied by tests.

## Additional info

- [ADR #0002: Stacks Testing Strategy](/adrs/0002-testing-strategy.md)
- [StackExchange/Stacks #956: Fix accessibility issues found by Mabl](https://github.com/StackExchange/Stacks/pull/956)
- [StackExchange/Stacks #1048: Fix lingering accessibility issues found by Mabl](https://github.com/StackExchange/Stacks/pull/1048)
