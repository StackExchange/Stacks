# Transition Stacks to a monorepo

**Date:** 2022-11-28

**Updated:** 2025-08-26

**Related PR:** #1191

## Issue

The Stacks repo is growing in complexity and will soon require many different dependencies that are optional for most consumers.

## Decision

Despite shipping many different concepts (atomic classes, CSS components, JS components), the interdependency chains are relatively linear. This means that we can fairly trivially split the repo into smaller portions.

For example, our current codebase could be split like so:
- Atomic classes (no dependencies)
- CSS Components (depends on Atomic components)
- JS Components (depends on Stimulus, Popper.js, CSS + Atomic components)
- Documentation site (depends on JS components, 11ty + plugins)

When the codebase expands in the future, we'll be able to add the following without worrying about consumers needing to import dependencies they don't need:
- Front-end component library or libraries (e.g. React, Web Components)
- Large, complex components (e.g. autocomplete)
- Extra build chain items, such as a [Style Dictionary](https://amzn.github.io/style-dictionary/)

We'd also be able to fold the [Stacks-Icons](https://github.com/StackExchange/Stacks-Icons) and [Stacks-Utils](https://github.com/StackExchange/Stacks-Utils) repos into this main monorepo as well.

## Additional Info

On the technical front, we could manage the monorepo with [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true) or another dedicated tool such as [Rush](https://rushjs.io/pages/intro/welcome/), [Lerna](https://lerna.js.org/) or [Bit](https://bit.dev/).

In regards to changelog / release notes generation, we'd continue using Conventional Commits, but moving to use [changesets](https://github.com/changesets/changesets) which [does support monorepos](https://github.com/changesets/changesets/blob/main/docs/problems-publishing-in-monorepos.md).

## Timing

With project SHINE on the horizon, we will be making drastic changes to the Stacks framework to accommodate the new design language we are adopting. So we will take the time as part of project SHINE to start moving Stacks into a monorepo setup for all the reasons outlined above.
