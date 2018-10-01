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
- [Getting setup](#getting-setup)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

## Using Stacks

You can use Stacks a few different ways.

1. Stacks is currently included within various Stack Overflow projects automatically. If you’re working on a Stack Overflow project, chances are it’s already available for you! If not, reach out to us and we’ll work on getting it setup.
2. To include it in other projects, you can install it via [NPM](https://www.npmjs.com/package/@stackoverflow/stacks):
    ```bash
    npm install --save @stackoverflow/stacks
    ```
3. You can also include a minified, compiled Stacks CSS style sheet. This is good for things like Codepen or other quick prototypes:
    ```html
    <link rel="stylesheet" href="https://unpkg.com/@stackoverflow/stacks">
    ```

## Getting setup

To contribute to Stacks documentation or its CSS library, you'll need to install Stacks locally. View our [installation guidelines](https://stackoverflow.design/product/guidelines/installing).

Having trouble getting these steps to work? Open [an issue](https://github.com/StackExchange/issues/new) with a `setup` tag.

## Bugs and feature requests

Have a bug or feature request? First search existing or closed issues to make sure the issue hasn’t been noted yet. If not, review our [issue guidelines](/CONTRIBUTING.md#open-an-issue) for submitting [a bug report](/CONTRIBUTING.md#reporting-bugs) or [feature request](/CONTRIBUTING.md#feature-requests).


## Contributing

If you’d like to contribute to Stacks, please read through our [contribution guidelines](/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## License

Code and documentation copyright 2017-2018 Stack Exchange, Inc and released under the [MIT License](/LICENSE.MD).
