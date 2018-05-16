# Stacks

Stacks is Stack Overflow’s design system. It includes the resources needed to create consistent, predictable workflows and interfaces that adhere with Stack Overflow’s principles, design language, and best practices. It’s built using [immutable, atomic classes](http://johnpolacek.com/rethinking/) and components for rapidly prototyping, building, and styling. The Stacks website documents a range of resources, including:

 - Semantic and accessible component markup
 - Cross-browser compatible Less / CSS
 - An icon library

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

 1. Stacks is currently included within various Stack Overflow projects automatically. If you’re working on a Stack Overflow project, chances are it’s already available for you! If not, reach out to use and we’ll work on getting it setup.
 2. To include it in other projects, you can intall it via [NPM](https://www.npmjs.com/package/@stackoverflow/stacks):
    ```bash
    npm install --save @stackoverflow/stacks
    ```
 3. You can also include a minified, compiled Stacks CSS style sheet:
    ```html
    <link rel="stylesheet" href="https://unpkg.com/@stackoverflow/stacks">
    ```

## Getting setup

 1. Our documentation site uses the Jekyll static site generator. You will need to install that and its various dependencies first. To install, [follow this guide from CloudCannon.com](https://learn.cloudcannon.com/jekyll/install-jekyll-on-os-x/).
 2. We use the task runner Grunt to compile our Less, rebuild the documentation site, minify things, auto-prefix things, and other tasks. To install and run Grunt and its various dependencies, you’ll first need to install [Node & NPM](https://nodejs.org/en/download/).
 3. Clone the project
    ```bash
    # Clone your fork of the repo into the current directory
    git clone https://github.com/StackExchange/Stacks.git
    # Navigate to the newly cloned directory
    cd Stacks
    ```
 4. Run `npm install`. This will install all the required project dependencies for Grunt.
 3. Run `npm start`. This will run Grunt which will start your local Jekyll server.
 4. Visit `http://127.0.0.1:4000/` to view your changes.

Having trouble getting these steps to work? Open [an issue](https://github.com/StackExchange/issues/new) with a `setup` tag.

## What's included

Within Stacks you’ll find the following directories and files:

```
Stacks/
├── docs/
│   ├── _data/
│   ├── _includes/
│   ├── _layouts/
│   ├── assets/
|   |   ├── css/
|   │   ├── img/
|   │   ├── js/
|   │   └── less/
│   ├── base/
│   ├── components/
│   ├── guidelines/
│   └── resources
└── lib/
    ├── css/
    ├── src/
    |   ├── atomic/
    │   ├── base/
    │   ├── components/
    │   └── exports/
    ├── stacks-dynamic.less
    ├── stacks-static.less
    └── stacks.less
```

Compiled and minified CSS for the core system is placed in a `lib/css/` folder. **Do not edit files in this folder as they are automatically generated from builds.** Any CSS directly related to the documentation website should be made within the `docs/assets/less` folder.

  1. `/docs` — This contains the documentation website about the Stacks system.
  2. `/lib` — This contains the Stacks system files.

## Bugs and feature requests

Have a bug or feature request? First search existing or closed issues to make sure the issue hasn’t been noted yet. If not, review our [issue guidelines](/CONTRIBUTING.md#open-an-issue) for submitting [a bug report](/CONTRIBUTING.md#reporting-bugs) or [feature request](/CONTRIBUTING.md#feature-requests).


## Contributing

If you’d like to contribute to Stacks, please read through our [contribution guidelines](/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## License

Code and documentation copyright 2017-2018 Stack Exchange, Inc and released under the [MIT License](/LICENSE.MD).
