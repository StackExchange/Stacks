# Stacks

Stacks is Stack Overflow's design system, the shared foundation of components, styles, and guidelines used across Stack Overflow's products. For usage instructions, see our [usage guidelines](https://stackoverflow.design/system/develop/using-stacks).

## Table of contents

- [Contributing](#contributing)
- [Local Development](#local-development)
  - [Stacks Docs](#stacks-docs)
  - [Stacks Classic](#stacks-classic)
  - [Stacks Svelte](#stacks-svelte)
- [Releasing Stacks](#releasing-stacks)
- [License](#license)

## Contributing
Please read through our **[contribution guidelines](/CONTRIBUTING.md)** before getting started. The guide covers:

- [Before you start](/CONTRIBUTING.md#before-you-start): where to report bugs or request features
- [Pull requests](/CONTRIBUTING.md#pull-requests): how to set up and submit your work
- [Merge requirements](/CONTRIBUTING.md#merge-requirements): required approvals and deployment rules that apply to everyone
- [Code guidelines](/CONTRIBUTING.md#code-guidelines): formatting and style conventions

## Local Development

This repo follows a monolithic structure and contains multiple packages split into [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces). These can be found under the [packages/](https://github.com/StackExchange/Stacks/tree/main/packages) folder.

To get any of these Stacks workspaces working locally start out by installing all required dependencies:
```sh
npm i
```

Below are instructions on how to build and test each individual workspace. If you run into trouble, see [Before you start](/CONTRIBUTING.md#before-you-start) in our contributing guide for how to reach us.

### Stacks Docs

This workspace contains the Stacks documentation project that's hosted on: https://stackoverflow.design/

To contribute to Stacks documentation you can build locally via:
```sh
npm start
```
This command will pull up the local dev server at http://localhost:5173/. You can also view our [building guidelines](https://stackoverflow.design/system/develop/building).

### Stacks Classic

[![ci status][gh-action-badge]][gh-action-url] [![npm version][npm-badge]][npm-url]

This workspace contains the css and js sources that define and power the Stacks design system.

#### Formatting

Format the source code with prettier by running:
```sh
npm run format -w packages/stacks-classic
```

#### Linting

Run all lint suites by running:
```sh
npm run lint -w packages/stacks-classic
```
Lint the styles (stylelint) by running:
```sh
npm run lint:css -w packages/stacks-classic
```
Lint the typescript source code (eslint) via running:
```sh
npm run lint:ts -w packages/stacks-classic
```
Lint the source code format (prettier) via running:
```sh
npm run lint:format -w packages/stacks-classic
```

#### Testing

Run all test suites by running:
```sh
npm run test -w packages/stacks-classic
```
##### Unit/Component Tests

Unit/Component tests are written with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro).
Please follow the library's principles and documentation to write tests.

Stacks uses [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) and [Playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) to run tests in a real browser context.

Execute the unit/component tests suite by running:
```sh
npm run test:unit -w packages/stacks-classic
```
or if you prefer watch mode run:
```sh
npm run test:unit:watch -w packages/stacks-classic
```

##### Visual Regression Tests

**Prerequisites:**
- `git lfs` ([installation docs](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage))
- `docker` ([installation docs](https://docs.docker.com/engine/install/))
- `pwsh` ([Installation docs](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.3))
- Run `git config diff.lfs.textconv cat` to make sure image diff works as expected ([More info](https://github.com/microsoft/vscode/issues/86611#issuecomment-875894108))

This [Web Test Runner plugin](https://www.npmjs.com/package/@web/test-runner-visual-regression) is used to run visual regression tests.
Visual regression tests end with this suffix `*.visual.test.ts`.

Execute the visual regression tests suite by running:
```sh
npm run test:visual -w packages/stacks-classic
```
After the first run, if there are failing snapshots, they end up overriding the baseline ones in the filesystem (e.g. `/screenshots/<browser>/baseline/<name>.png`).
We do this for easier comparison of the dif directly in vscode and to make sure only the failing snapshots get regenerated (see [this GH discussion](https://github.com/modernweb-dev/web/discussions/427#discussioncomment-3543771) that inspired the approach).

We also recommend to install [this vscode extension](https://marketplace.visualstudio.com/items?itemName=RayWiis.png-image-diff) for getting better diffs.

##### Less Tests

This is an experimental suite to test the generation of CSS from Less files.
Less tests end with this suffix `*.less.test.ts`.

Execute the less tests suite by running:
```sh
npm run test:less -w packages/stacks-classic
```

Update the css snapshots via:
```sh
npm run test:less:update -w packages/stacks-classic
```

### Stacks Svelte

[![ci status][gh-action-badge]][gh-action-url] [![npm version][npm-badge-svelte]][npm-url-svelte]

This workspace contains a Svelte implementation of the Stacks Classic design system. Unlike the Stacks-Classic workspace which has its documentation defined in the separate Stacks-Docs workspace, this one defines its documentation site directly within its own workspace which can be reached via https://svelte.stackoverflow.design

We use [storybook](https://storybook.js.org/) for local development. To start the storybook server run:

```bash
npm run storybook -w packages/stacks-svelte
```

The storybook server will reflect the changes you make to the components stories in real time.
We use [this addon](https://storybook.js.org/addons/@storybook/addon-svelte-csf) to write stories directly in Svelte syntax. Stories need to have the `*.stories.svelte` extension to be picked up.

#### Formatting

```bash
npm run format -w packages/stacks-svelte
```

#### Linting

```bash
npm run lint -w packages/stacks-svelte
```

#### Testing

Stacks Svelte uses [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) and [Playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) to run tests in a real browser context.

```bash
npm run test -w packages/stacks-svelte
```

or to run the tests in watch mode:

```bash
npm run test:watch -w packages/stacks-svelte
```

## Releasing Stacks
This repo uses [Semantic Versioning](https://semver.org/) to distribute Stacks Classic and Stacks Docs via [npm](https://www.npmjs.com/package/@stackoverflow/stacks), and publishes [release notes on Github](https://github.com/StackExchange/Stacks/releases).

We use [changesets](https://github.com/changesets/changesets) to automatize the steps necessary to publish to NPM, create GH releases and a changelog.

- Every time you do work that requires a new release to be published, [add a changesets entry](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) by running `npx changeset` and follow the instructions on screen. (changes that do not require a new release - e.g. changing a test file - don't need a changeset).
    - When opening a PR without a corresponding changeset the [changesets-bot](https://github.com/apps/changeset-bot) will remind you to do so. It generally makes sense to have one changeset for PR (if the PR changes do not require a new release to be published the bot message can be safely ignored)
- The [release github workflow](.github/workflows/main.yml) continuously checks if there are new pending changesets in the `beta` branch; if there are, it creates a GH PR (`chore(release)` [see example](https://github.com/StackExchange/apca-check/pull/2)) and continues updating it as more changesets are pushed/merged to the `beta` branch.
- When we are ready to cut a release we need to simply merge the `chore(release)` PR and the release github workflow will take care of publishing the changes to NPM and create a GH release for us. The `chore(release)` PR also give us an opportunity to adjust the automatically generated changelog when necessary (the entry in the changelog file is also what will end up in the GH release notes).

_The release github workflow only run if the CI workflow (running linter, formatter and tests) is successful: CI is blocking accidental releases_.

_Despite using changesets to communicate the intent of creating releases in a more explicit way, we still follow [conventional commits standards](https://www.conventionalcommits.org/en/v1.0.0/) for keeping our git history easily parseable by the human eye._

Successful releases trigger automatically a new deployment to stackoverflow.design by merging the `main` branch.

## License
Code and documentation copyright 2017-2026 Stack Exchange, Inc and released under the [MIT License](/LICENSE.MD).

[gh-action-url]: https://github.com/StackExchange/Stacks/actions/workflows/main.yml
[gh-action-badge]: https://github.com/StackExchange/Stacks/actions/workflows/main.yml/badge.svg?branch=main
[npm-url]: https://npmjs.org/package/@stackoverflow/stacks
[npm-badge]: https://img.shields.io/npm/v/@stackoverflow/stacks.svg

[npm-url-svelte]: https://npmjs.org/package/@stackoverflow/stacks-svelte
[npm-badge-svelte]: https://img.shields.io/npm/v/@stackoverflow/stacks-svelte.svg
