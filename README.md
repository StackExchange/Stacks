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
- [Linting Stacks](#linting-stacks)
- [Testing Stacks](#testing-stacks)
- [Releasing Stacks](#release-a-new-version-of-stacks)
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
Stacks has implemented visual regression testing with [Backstop](https://github.com/garris/BackstopJS). To test if your new feature introduces visual regressions, run `npm run test` in a new Terminal window while Stacks is running. After the tests have run, a new browser window with any regressions will show. If the regressions are desired, you can run `npm run approve` to establish the new baseline.

Individual routes to test are found in [backstop.json](/backstop.json)

## Releasing a new version of Stacks
Stacks uses [Semantic Versioning](https://semver.org/), is distributed via [npm](https://www.npmjs.com/package/@stackoverflow/stacks), and publishes [release notes on Github](https://github.com/StackExchange/Stacks/releases). Follow the steps below to release a new version of Stacks.

### Bump the version number
```sh
npm version [major | minor | patch]
```

### Push the new tag
```sh
git push && git push --tags
```

### Create release notes [on Github](https://github.com/StackExchange/Stacks/releases/new)

1. Visit https://github.com/StackExchange/Stacks/releases/new
1. Choose your new version from the "Choose a tag" dropdown
1. Click "Generate release notes"
1. Cleanup and complete the release notes
    - Prominently mention any breaking changes, if applicable
    - Include a "What's Changed" section in the release notes
    - Mention significant bug fixes
    - Mention new features
    - Mention significant under-the-hood changes that could impact consumers

### Ship your newly created version to [npm](https://www.npmjs.com/package/@stackoverflow/stacks)
```sh
npm publish
```

### Merge `develop` into `production` and push
```sh
git checkout production && git merge develop && git push
```

### Push the updated docs site
Head to [Netlify](https://app.netlify.com), navigate to the Stacks overview, click on "Production deploys", and select "Deploy site" from the "Trigger deploy" dropdown.

## Bugs and feature requests
Have a bug or feature request? First search existing or closed issues to make sure the issue hasn’t been noted yet. If not, review our [issue guidelines](/CONTRIBUTING.md#open-an-issue) for submitting [a bug report](/CONTRIBUTING.md#reporting-bugs) or [feature request](/CONTRIBUTING.md#feature-requests).

## Contributing
If you’d like to contribute to Stacks, please read through our [contribution guidelines](/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## License
Code and documentation copyright 2017-2022 Stack Exchange, Inc and released under the [MIT License](/LICENSE.MD).
