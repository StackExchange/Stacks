# Contributing to Stacks

Stacks is Stack Overflow's design system, the shared foundation of components, styles, and guidelines used across Stack Overflow's products. It is maintained by the Stacks team at Stack Overflow. We welcome contributions from both internal and external contributors, whether that's a bug fix, a new component, or a documentation improvement. This guide covers everything you need to get started.

## Table of contents

 - [Before you start](#before-you-start)
 - [Reporting bugs](#reporting-bugs)
 - [Feature requests](#feature-requests)
 - [Pull requests](#pull-requests)
 - [Changesets](#changesets)
 - [Merge requirements](#merge-requirements)
 - [Code guidelines](#code-guidelines)
 - [License](#license)


## Before you start

We recommend filing an issue before diving into a large change. It gives the Stacks team a chance to weigh in early and helps avoid duplicate effort.

 - **Stack Overflow staff:** use the [Stacks Issue Intake form 🔒](https://forms.gle/yYxpXFoE5CSvGVwG9) or the [STACKS Jira board 🔒](https://stackoverflow.atlassian.net/jira/software/projects/STACKS/boards/188)
 - **External contributors:** [open a GitHub issue](https://github.com/StackExchange/Stacks/issues/new)

## Reporting bugs

A bug is a _reproducible_ problem with the Stacks code or incorrect (or confusing) documentation. If you’ve found one, include the following when you report it:

 1. **Search for existing reports**: make sure this issue hasn’t already been reported
 2. **What’s the problem?**: Explain what you are trying to do and what actually happened
 3. **Provide an example**: A CodePen that illustrates the problem is perfect
 4. **Describe what you’ve tried so far**: Understanding what you’ve tried so far will help us respond more quickly. Include possible related issues that you’ve read or explored if you can

Issues don’t need to be exhaustive, but we do ask you provide enough details that we can understand the problem and fix the issues.

## Feature requests

You can request a feature or build it yourself; either way, please file an issue first (see [Before you start](#before-you-start)) and include:

 1. **Proposed feature** – What are you proposing?
 2. **Why do you need it?**: Is this required for a project? What’s your timeline? Have you tried using other elements and components first? Explain to us why this needs to be standardized into Stacks.
 3. **Provide examples**: If you have examples how others have solved this problem, provide those so we can better understand what you’re asking for.
 4. **Who do you want to create this?**: Are you building this or do you want the Stacks team to build it?

If you’re asking the Stacks team to build it, we’ll prioritize it alongside existing work. We can’t guarantee a timeline, but we’ll keep you informed.

## Pull requests

Please keep PRs focused and reasonably sized. A PR that touches one thing is much easier to review quickly than one that touches many. If you're unsure how to break up a large change, reach out in [#stacks](https://stackexchange.slack.com/archives/C27RWNQN9) (Stack Overflow staff) or [open a GitHub issue](https://github.com/StackExchange/Stacks/issues/new) (external contributors) and we'll help you scope it. Adherence to the following process is the best way to get your work included within Stacks.

Draft PRs are welcome for work in progress, but we focus our review time on PRs that are marked ready for review. If you'd like early feedback on a draft, just leave a comment asking and we'll take a look.

### Stack Overflow staff

1. Clone the repo:
   ```bash
   git clone https://github.com/StackExchange/Stacks.git
   cd Stacks
   ```
2. Pull the latest changes:
   ```bash
   git checkout main
   git pull origin main
   ```
3. Create a topic branch:
   ```bash
   git checkout -b <branch-name>
   ```
4. Commit your changes in logical chunks following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format (e.g. `fix(button): correct focus ring color`). Use Git’s [interactive rebase](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) to tidy up your commits before making them public.

5. Sync with main before opening your PR:
   ```bash
   git pull --rebase origin main
   ```
6. Push your branch and [open a pull request](https://github.com/StackExchange/Stacks/pulls) with a clear title and description.

### External contributors

1. [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:
   ```bash
   git clone https://github.com/<your-username>/Stacks.git
   cd Stacks
   git remote add upstream https://github.com/StackExchange/Stacks.git
   ```
2. Pull the latest changes:
   ```bash
   git checkout main
   git pull upstream main
   ```
3. Create a topic branch:
   ```bash
   git checkout -b <branch-name>
   ```
4. Commit your changes in logical chunks following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format (e.g. `fix(button): correct focus ring color`). Use Git’s [interactive rebase](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) to tidy up your commits before making them public.

5. Sync with upstream before opening your PR:
   ```bash
   git pull --rebase upstream main
   ```
6. Push your branch and [open a pull request](https://github.com/StackExchange/Stacks/pulls) with a clear title and description.

All pull requests should target the `main` branch. Pull requests targeting `production` will be rejected.

## Changesets

Stacks uses [changesets](https://github.com/changesets/changesets) to manage versioning and releases. If your PR includes a change that warrants a new release (a bug fix, new feature, or anything that affects the published packages), you need to include a changeset.

Run the following and follow the prompts:

```sh
npx changeset
```

The [changesets-bot](https://github.com/apps/changeset-bot) will comment on your PR if a changeset is missing. If your change doesn't affect the published packages (e.g. a test file or documentation update), you can safely ignore that message.

## Merge requirements

To keep Stacks stable and trustworthy for all the products that depend on it, all contributions must follow these rules without exception, regardless of your role or team.

### Review and merge flow

1. Open your PR against `main` and mark it ready for review when it's ready.
2. GitHub will automatically request review from `@StackExchange/stacks` for changes covered by `CODEOWNERS`.
3. A Stacks team member will approve the PR or request changes.
4. A Stacks team member will merge the PR once any downstream impact has been assessed.

### PR approvals are required

All pull requests require at least one approval from a Stacks team member before merging. This applies to everyone, including Stack Overflow employees. If your PR has been open for a while without a review, reach out in [#stacks](https://stackexchange.slack.com/archives/C27RWNQN9) and we'll prioritize it.

### Do not merge your own PR

You may not merge a pull request that you authored. This is enforced at the repo level via branch protections.

### Understand downstream impact before deploying

Stacks is a dependency for many products across Stack Overflow. Before merging anything that touches the build output or public API, make sure you understand what depends on it and what could break. If you're not sure, ask the Stacks team. We're happy to help you assess the impact and coordinate a safe rollout.

This is especially important for contributors who are not in the regular engineering workflow. When in doubt, don't deploy. Get in touch first.

## Code guidelines

### Formatting

Code style is enforced automatically by [EditorConfig](/.editorconfig) and [Prettier](https://prettier.io/). Run the formatter before pushing; see the workspace-specific instructions in the README for the exact command. Key settings: 4-space indentation, double quotes, semicolons required, 80-character print width.

### HTML

#### Boolean attributes
Don’t add a value to boolean attributes. The HTML spec doesn’t require it.

```html
<!-- Not so great -->
<input type="text" disabled=disabled>

<!-- Better -->
<input type="text" disabled>
```

#### Reduce markup
Avoid superfluous parent elements whenever possible.

```html
<!-- Not so great -->
<span class="avatar">
    <img src="…">
</span>

<!-- Better -->
<img class="avatar" src="…">
```

#### Accessibility
Use [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes as shown in the documentation examples. Copy should be written in sentence case. See our [org-wide accessibility targets 🔒](https://docs.google.com/document/d/1KCLvgy_ijJCUJXaVV2uh6wwsl1hoahFmPU7Gwnk0yug/edit?usp=sharing) and [accessibility testing strategy](https://github.com/StackExchange/Stacks/blob/main/adrs/0004-accessibility-testing-strategy.md) for our standards and approach.

### TypeScript

 - All new code should be written in TypeScript. Strict mode is enabled across all packages.
 - Avoid `any`. Use `unknown` or explicit types instead.
 - Prefer explicit return types on exported functions and component props.

### Svelte

 - Use Svelte 5 [runes](https://svelte.dev/docs/svelte/what-are-runes) syntax: `$state`, `$derived`, `$effect`.
 - Do not use legacy `export let` props or `$:` reactive statements.
 - Follow the patterns established in existing components for consistency.

### JavaScript

 - Do not use `console`, `alert`, `confirm`, or `prompt` (these are ESLint errors).
 - Avoid generating markup in JavaScript. It’s harder to find, harder to edit, and harder to maintain.

### CSS / Less

#### Variables and values
 - Use pre-defined color and spacing variables; don’t hard-code hex values or pixel values. See the [pseudo private custom properties ADR](https://github.com/StackExchange/Stacks/blob/main/adrs/0001-pseudo-private-custom-properties.md) for how we use CSS custom properties.
 - Use `//` comments instead of `/* */`.
 - Do not use atomic classes as mixins.
 - Omit units on zero values, e.g. `margin: 0;` not `margin: 0px;`.
 - Do not use `js-*` selectors for visual styling; they are reserved for JavaScript hooks.


## License

By contributing to Stacks, you agree to license your work under Stacks’ [MIT License](https://github.com/StackExchange/Stacks/blob/main/LICENSE.MD).
