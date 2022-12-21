# Stacks Accessibility Testing Strategy

**Date:** 2022-12-21

**Related PR:** [#1217](https://github.com/StackExchange/Stacks/pull/1217)

## Issue
We currently rely on manual testing, third-party audits, and user reports to identify and fix accessibility issues. The only semi-automated testing we currently Furthermore, while we've generally aspired to WCAG 2.1 AA compliance, we haven't codified the accessibility success criteria for our components.

**A defined success criteria and automated accessibility testing will reduce the effort needed to build and maintain accessibile components.**

## Decision

Introduce the following success criteria for the accessibility Stacks components:

- All components should meet or exceed [WCAG 2.1](https://www.w3.org/TR/WCAG21/) level AA success criteria
- Components rendered within high contrast mode should meet or exceed [WCAG 2.1 AAA success criteria for contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)

Introduce the following automated accessibility testing for Stacks:

<!-- TODO: Choose *tbd* accessibility testing library to test components in isolation ([wtr](https://modern-web.dev/docs/test-runner/commands/#accessibility-snapshot) is my current top choice, but I'm also exploring other options mentioned in [this PR comment thread](https://github.com/StackExchange/Stacks/pull/1195#discussion_r1037616024)) -->
- Integrate current Mabl testing for our documentation pages into our CI pipeline

### Contexts to consider

Components can be rendered in different combinations of light/dark and high contrast modes. We should test components in all of these contexts to ensure they meet the success criteria.

<!-- TODO: Is it neccessary to test against different viewport dimensions or specific input methods? If so, mention them here and specify *how* we should test in these contexts -->

### Additional Guidelines

- All tests and linters runs in a GH workflow for every commit and pull requests on develop branch.

- Tests will be gradually added to existing components as developers need to change them. New components should always be accompanied by tests.

## Additional info

- [ADR #0002: Stacks Testing Strategy](/adrs/0002-testing-strategy.md)
- [StackExchange/Stacks #956: Fix accessibility issues found by Mabl](https://github.com/StackExchange/Stacks/pull/956)
- [StackExchange/Stacks #1048: Fix lingering accessibility issues found by Mabl](https://github.com/StackExchange/Stacks/pull/1048)
