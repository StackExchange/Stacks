# Stacks

[![ci status][gh-action-badge]][gh-action-url] [![npm version][npm-badge]][npm-url]

Stacks is Stack Overflow’s design system. It includes the resources needed to create consistent, predictable interfaces and workflows that conform to Stack Overflow’s principles, design language, and best practices.

Our documentation is built with Stacks itself, using its [immutable, atomic classes](http://johnpolacek.com/rethinking/) and components.

The Stacks website documents:

### Product
- Semantic and accessible component markup
- Cross-browser compatible Less / CSS
- An [icon library](https://github.com/StackExchange/Stacks-Icons)

### Email
- Email templates & components

Stacks documentation can be found at https://stackoverflow.design/

## Table of contents

- [Using Stacks](#using-stacks)
- [Building Stacks](#building-stacks)
- [Linting Stacks](#linting-stacks)
- [Testing Stacks](#testing-stacks)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [License](#license)

## Using Stacks
Using Stacks is outlined in our [usage guidelines](https://stackoverflow.design/product/guidelines/using-stacks).

## Building Stacks
To contribute to Stacks documentation or its CSS library, you’ll need to build Stacks locally. View our [building guidelines](https://stackoverflow.design/product/guidelines/building).

Having trouble getting these steps to work? Open [an issue](https://github.com/StackExchange/Stacks/issues/new) with a `setup` label.

## Linting Stacks

Run all lint suites by running:
```sh
npm run lint
```

Lint the styles (stylelint) by running:
```sh
npm run lint:css
```
Lint the typescript source code (eslint) via running:
```sh
npm run lint:ts
```
Lint the source code format (prettier) via running:
```sh
npm run lint:format
```

## Testing Stacks

Run all test suites by running:
```sh
npm test
```
### Unit/Component Tests

Unit/Component tests are written with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro).
Please follow the library's principles and documentation to write tests.

Stacks uses [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) and [Playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) to run tests in a real browser context.

Execute the unit/component tests suite by running:
```sh
npm run test:unit
```
or if you prefer watch mode run:
```sh
npm run test:unit:watch
```

### Visual Regression Tests

**Prerequisite:** 
In order to pull and upload baseline images you need to have `git lfs` installed in your local machine. Please follow [this guide](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage) to install that.


This [Web Test Runner plugin](https://www.npmjs.com/package/@web/test-runner-visual-regression) is used to run visual regression tests. [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro).
Visual regression tests end with this suffix `*.visual.test.ts`.

Execute the visual regression tests suite by running:
```sh
npm run test:visual
```

Update the visual baseline via:
```sh
npm run test:visual:update
```

Failing tests (including diffs) can be found under `screenshots/[browser]/failed/` folders.

## Bugs and feature requests
Have a bug or feature request? First search existing or closed issues to make sure the issue hasn’t been noted yet. If not, review our [issue guidelines](/CONTRIBUTING.md#open-an-issue) for submitting [a bug report](/CONTRIBUTING.md#reporting-bugs) or [feature request](/CONTRIBUTING.md#feature-requests).

## Contributing
If you’d like to contribute to Stacks, please read through our [contribution guidelines](/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## License
Code and documentation copyright 2017-2022 Stack Exchange, Inc and released under the [MIT License](/LICENSE.MD).

[gh-action-url]: https://github.com/StackExchange/Stacks/actions/workflows/main.yml
[gh-action-badge]: https://github.com/StackExchange/Stacks/actions/workflows/main.yml/badge.svg?branch=develop
[npm-url]: https://npmjs.org/package/@stackoverflow/stacks
[npm-badge]: https://img.shields.io/npm/v/@stackoverflow/stacks.svg
