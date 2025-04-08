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
- [Migrating from v1 to v2](#migrating-from-v1-to-v2)
- [Building Stacks](#building-stacks)
- [Format Stacks](#format-stacks)
- [Linting Stacks](#linting-stacks)
- [Testing Stacks](#testing-stacks)
- [Releasing Stacks](#releasing-a-new-version-of-stacks)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [License](#license)

## Using Stacks
Using Stacks is outlined in our [usage guidelines](https://stackoverflow.design/product/develop/using-stacks).

## Migrating from v1 to v2

To migrate from Stacks v1 to v2, see our [migration guide](/MIGRATION_GUIDE.md).

## Building Stacks
To contribute to Stacks documentation or its CSS library, you’ll need to build Stacks locally. View our [building guidelines](https://stackoverflow.design/product/develop/building).

Having trouble getting these steps to work? Open [an issue](https://github.com/StackExchange/Stacks/issues/new) with a `setup` label.

## Format Stacks

Format the source code with prettier via running:
```sh
npm run format
```

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

**Prerequisites:** 
- `git lfs` ([installation docs](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage))
- `docker` ([installation docs](https://docs.docker.com/engine/install/))
- `pwsh` ([Installation docs](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.3))
- Run `git config diff.lfs.textconv cat` to make sure image diff works as expected ([More info](https://github.com/microsoft/vscode/issues/86611#issuecomment-875894108))

This [Web Test Runner plugin](https://www.npmjs.com/package/@web/test-runner-visual-regression) is used to run visual regression tests.
Visual regression tests end with this suffix `*.visual.test.ts`.

Execute the visual regression tests suite by running:
```sh
npm run test:visual
```
After the first run, if there are failing snapshots, they end up overriding the baseline ones in the filesystem (e.g. `/screenshots/<browser>/baseline/<name>.png`). 
We do this for easier comparison of the dif directly in vscode and to make sure only the failing snapshots get regenerated (see [this GH discussion](https://github.com/modernweb-dev/web/discussions/427#discussioncomment-3543771) that inspired the approach).

We also recommend to install [this vscode extension](https://marketplace.visualstudio.com/items?itemName=RayWiis.png-image-diff) for getting better diffs.

### Less Tests

This is an experimental suite to test the generation of CSS from Less files. 
Less tests end with this suffix `*.less.test.ts`.

Execute the less tests suite by running:
```sh
npm run test:less
```

Update the css snapshots via:
```sh
npm run test:less:update
```

## Releasing a new version of Stacks
Stacks uses [Semantic Versioning](https://semver.org/), is distributed via [npm](https://www.npmjs.com/package/@stackoverflow/stacks), and publishes [release notes on Github](https://github.com/StackExchange/Stacks/releases). 

We use [changesets](https://github.com/changesets/changesets) to automatize the steps necessary to publish to NPM, create GH releases and a changelog.

- Every time you do work that requires a new release to be published, [add a changesets entry](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) by running `npx chageset` and follow the instrcutions on screen. (changes that do not require a new release - e.g. changing a test file - don't need a changeset).
    - When opening a PR without a corresponding changeset the [changesets-bot](https://github.com/apps/changeset-bot) will remind you to do so. It generally makes sense to have one changeset for PR (if the PR changes do not require a new release to be published the bot message can be safely ignored)
- The [release github workflow](.github/workflows/release.yml) continuosly check if there are new pending changesets in the main branch, if there are it creates a GH PR (`chore(release)` [see example](https://github.com/StackExchange/apca-check/pull/2)) and continue updating it as more changesets are potentially pushed/merged to the main branch.
- When we are ready to cut a release we need to simply merge the `chore(release)` PR back to main and the release github workflow will take care of publishing the changes to NPM and create a GH release for us. The `chore(release)` PR also give us an opportunity to adjust the automatically generated changelog when necessary (the entry in the changelog file is also what will end up in the GH release notes).

_The release github workflow only run if the CI workflow (running linter, formatter and tests) is successful: CI is blocking accidental releases_.

_Despite using changesets to communicate the intent of creating releases in a more explicit way, we still follow [conventional commits standards](https://www.conventionalcommits.org/en/v1.0.0/) for keeping our git history easily parseable by the human eye._

Successful releases trigger automatically a new deployment to stackoverflow.design by merging the `develop` branch into the `production` branch.

## Bugs and feature requests
Have a bug or feature request? First search existing or closed issues to make sure the issue hasn’t been noted yet. If not, review our [issue guidelines](/CONTRIBUTING.md#open-an-issue) for submitting [a bug report](/CONTRIBUTING.md#reporting-bugs) or [feature request](/CONTRIBUTING.md#feature-requests).

## Contributing
If you’d like to contribute to Stacks, please read through our [contribution guidelines](/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## License
Code and documentation copyright 2017-2024 Stack Exchange, Inc and released under the [MIT License](/LICENSE.MD).

[gh-action-url]: https://github.com/StackExchange/Stacks/actions/workflows/main.yml
[gh-action-badge]: https://github.com/StackExchange/Stacks/actions/workflows/workflow.yml/badge.svg?branch=develop
[npm-url]: https://npmjs.org/package/@stackoverflow/stacks
[npm-badge]: https://img.shields.io/npm/v/@stackoverflow/stacks.svg
