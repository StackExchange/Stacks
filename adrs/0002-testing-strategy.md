# Stacks Testing Strategy

**Date:** 2022-11-28

**Related PR:** [#1195](https://github.com/StackExchange/Stacks/pull/1195)

## Issue
We currently don't test our Stacks components except from manually/ad-hoc executing some visual regression tests of entire documentation pages with BackstopJS. Linting and formatting despite being setup are also often ignored because they are not running methodically in a pipeline.

**A lack of testing gives us very little confidence refactoring and evolving the codebase.**

## Decision

Introduce 2 initial categories of tests for Stacks to increase confidence working on new and existing components:
- Component/Unit Tests
- Component Visual Regression Tests

Remove legacy regression tests (BackstopJS).

General guidelines:
- Tests run in a headless browser context ([wtr + playwright](https://modern-web.dev/docs/test-runner/overview/)) to provide higher level of confidence
- DOM Querying and Events Simulation are done as much as possible with [testing-library](https://testing-library.com/) and [user-event](https://testing-library.com/docs/user-event/intro/) instead of reaching out directly to DOM APIs
- Every component should be accompanied by related component and visual regression tests (atomic classes are excluded)

### Component/Unit Tests
These tests should provide full coverage of the component being tested. Happy path, edge and error cases should be all covered.

Guidelines:
- Tests should not reach for internal implementation/methods but rather tests the component through its public APIs (from the point of view of a consumer)
- Complex DOM-agnostic business logic can be extracted in separate functions which can be unit tested in isolation

### Component Visual Regression Tests
These tests should check how the component will look after any code changes have been made by comparing screenshots taken before and after code changes. 

Guidelines:
- Baseline images for these tests should be committed to the repository with `git lfs` to avoid bloating the history.
- When relevant, screenshots at different viewport sizes should be taken

### Additional Guidelines

- All tests and linters runs in a GH workflow for every commit and pull requests on develop branch.

- Tests will be gradually added to existing components as developers need to change them. New components should always be accompanied by tests.

- Consider this is a starting point for Stacks Testing Strategy. More categories, such as a11y testing, might be introduced in future ADRs.


## Additional info

- [Supporting PR](https://github.com/StackExchange/Stacks/pull/1194) illustrating the new approach to testing.
- [ADR #0004: Stacks Accessibility Testing Strategy](/adrs/0004-accessibility-testing-strategy.md)
