# Stacks

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
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [License](#license)

## Using Stacks
Using Stacks is outlined in our [usage guidelines](https://stackoverflow.design/product/guidelines/using-stacks).

## Building Stacks
To contribute to Stacks documentation or its CSS library, you’ll need to build Stacks locally. View our [building guidelines](https://stackoverflow.design/product/guidelines/building).

Having trouble getting these steps to work? Open [an issue](https://github.com/StackExchange/Stacks/issues/new) with a `setup` label.

## Testing Stacks

### Component Tests
🚧 Work in Progress 🚧

Component tests are written with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro).
Please follow the library's principles and documentation to write tests.

Stacks uses [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) and [Playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) to run tests in a real browser context

Execute the component tests suite via running:
```sh
npm test
```
or if you prefer watch mode run:
```sh
npm run test:watch
```

### Visual Regression Tests
🚧 Work in Progress 🚧

This [Web Test Runner plugin](https://www.npmjs.com/package/@web/test-runner-visual-regression) is used to run visual regression tests. [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro).
Visual regression tests end with this suffix `*.visual.test.ts`.

Execute the visual regression tests suite via running:
```sh
npm run test:visual
```

Update the visual baseline via:
```sh
npm run test:visual:update
```

Failing tests (including diffs) can be found under `screenshots/[browser]/failed/` folders.

### Visual Regression Tests (Legacy)
Stacks has implemented visual regression testing with [Backstop](https://github.com/garris/BackstopJS). To test if your new feature introduces visual regressions, run `npm run test:regression` in a new Terminal window while Stacks is running. After the tests have run, a new browser window with any regressions will show. If the regressions are desired, you can run `npm run approve` to establish the new baseline.

Individual routes to test are found in [backstop.json](/backstop.json)

## Bugs and feature requests
Have a bug or feature request? First search existing or closed issues to make sure the issue hasn’t been noted yet. If not, review our [issue guidelines](/CONTRIBUTING.md#open-an-issue) for submitting [a bug report](/CONTRIBUTING.md#reporting-bugs) or [feature request](/CONTRIBUTING.md#feature-requests).

## Contributing
If you’d like to contribute to Stacks, please read through our [contribution guidelines](/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## License
Code and documentation copyright 2017-2022 Stack Exchange, Inc and released under the [MIT License](/LICENSE.MD).
