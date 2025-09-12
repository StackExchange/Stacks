# Stacks Classic

This workspace contains the css and js sources that define and power the Stacks design system.

Format the source code with prettier by running:
```sh
npm run format -w packages/stacks-classic
```

## Linting

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

## Testing

Run all test suites by running:
```sh
npm run test -w packages/stacks-classic
```

### Unit/Component Tests

Unit/Component tests are written with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro).
Please follow the library’s principles and documentation to write tests.

Stacks uses [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) and [Playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) to run tests in a real browser context.

Execute the unit/component tests suite by running:
```sh
npm run test:unit -w packages/stacks-classic
```
or if you prefer watch mode run:
```sh
npm run test:unit:watch -w packages/stacks-classic
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
npm run test:visual -w packages/stacks-classic
```
After the first run, if there are failing snapshots, they end up overriding the baseline ones in the filesystem (e.g. `/screenshots/<browser>/baseline/<name>.png`). 
We do this for easier comparison of the dif directly in vscode and to make sure only the failing snapshots get regenerated (see [this GH discussion](https://github.com/modernweb-dev/web/discussions/427#discussioncomment-3543771) that inspired the approach).

We also recommend to install [this vscode extension](https://marketplace.visualstudio.com/items?itemName=RayWiis.png-image-diff) for getting better diffs.

### Less Tests

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

# Release management
Refer to the main [README.md](../../README.md) for details on how releases are currently managed.

# Bugs and feature requests
Have a bug or feature request? First search existing or closed issues to make sure the issue hasn’t been noted yet. If not, review our [issue guidelines](../../CONTRIBUTING.md#open-an-issue) for submitting [a bug report](../../CONTRIBUTING.md#reporting-bugs) or [feature request](../../CONTRIBUTING.md#feature-requests).