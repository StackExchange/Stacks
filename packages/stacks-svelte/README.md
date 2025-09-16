# Stacks Svelte

This package is an implementation of the [Stacks Design System](https://stackoverflow.design/), using Svelte Components.

[Documentation](https://svelte.stackoverflow.design)

## Installation

### Prerequisite: Authenticating to Stack Overflow's npm private registry

`@stackeng/stacks-svelte` is published to our internal npm private registry in cloudsmith. In order to install the package you need to make sure you add the following content in a project `.npmrc` file in the same directory where your `package.json` lives:

```
@stackeng:registry=https://npm.stackoverflow.software/
```

Also (as a one off) you need to add your private registry credentials to your user `.npmrc` file (UNIX `~/.npmrc` - WINDOWS `%USERPROFILE%\.npmrc`)

```
//npm.stackoverflow.software/:_authToken=<YOUR-AUTH-TOKEN>
```

To get `<YOUR-AUTH-TOKEN>` you can [login to cloudsmith](https://cloudsmith.io/~stackoverflow/repos/npm/setup/#formats-npm) and scroll to the "Authentication" section. In there you should see a code block like the one above with your auth token. You don't need to add the `registry=https://npm.stackoverflow.software/` part unless you want all your dependencies to be installed using cloudsmith as a proxy to the actual public npm registry.

**⚠️ Do not add credentials to your project `.npmrc` to avoid risking to check them in.**

### Install the library

After that you should be able to install the library as usual with npm

```bash
npm install --save @stackeng/stacks-svelte @stackoverflow/stacks
```

### Peer Dependency

`@stackeng/stacks-svelte` relies on `@stackoverflow/stacks` styles.
For example in a SvelteKit application you should add the following to your `src/routes/+layout.svelte` file to expose `stacks.css`

```svelte
<script>
    import "@stackoverflow/stacks/dist/css/stacks.min.css";
</script>

<slot />
```

## Usage

Anywhere in your Svelte components:

```svelte
<script>
    import { Button } from "@stackeng/stacks-svelte";
</script>

<Button>Click me</Button>
```

We also have a selection of [Svelte Actions](https://svelte.dev/docs/svelte-action) you can access directly:

```svelte
<script>
    import { clickOutside } from "@stackeng/stacks-svelte/actions";
</script>

<div
    use:clickOutside
    onoutclick={() => console.log("click outside my container")}
>
    My container
</div>
```

## Contributing

### Local development

We use [storybook](https://storybook.js.org/) for local development. To start the storybook server run:

```bash
npm run storybook
```

The storybook server will reflect the changes you make to the components stories in real time.
We use [this addon](https://storybook.js.org/addons/@storybook/addon-svelte-csf) to write stories directly in Svelte syntax. Stories need to have the `*.stories.svelte` extension to be picked up.

### Formatting

```bash
npm run format
```

### Linting

```bash
npm run lint
```

### Testing

Stacks Svelte uses [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) and [Playwright](https://modern-web.dev/docs/test-runner/browser-launchers/playwright/) to run tests in a real browser context.

```bash
npm run test
```

or to run the tests in watch mode:

```bash
npm run test:watch
```

### Publishing

We use [changesets](https://github.com/changesets/changesets) to automatize the steps necessary to publish to NPM, create GH releases and a changelog.

- Every time you do work that requires a new release to be published, [add a changesets entry](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) by running `npx changeset` and follow the instrcutions on screen. (changes that do not require a new release - e.g. changing a test file - don't need a changeset).
    - When opening a PR without a corresponding changeset the [changesets-bot](https://github.com/apps/changeset-bot) will remind you to do so. It generally makes sense to have one changeset for PR (if the PR changes do not require a new release to be published the bot message can be safely ignored)
- The [release github workflow](.github/workflows/release.yml) continuosly check if there are new pending changesets in the main branch, if there are it creates a GH PR (`chore(release)` [see example](https://github.com/StackExchange/apca-check/pull/2)) and continue updating it as more changesets are potentially pushed/merged to the main branch.
- When we are ready to cut a release we need to simply merge the `chore(release)` PR back to main and the release github workflow will take care of publishing the changes to NPM and create a GH release for us. The `chore(release)` PR also give us an opportunity to adjust the automatically generated changelog when necessary (the entry in the changelog file is also what will end up in the GH release notes).

_Despite using changesets to communicate the intent of creating releases in a more explicit way, we still follow [conventional commits standards](https://www.conventionalcommits.org/en/v1.0.0/) for keeping our git history easily parseable by the human eye._

### Docs Deployment

Documentation is deployed automatically to [netlify](https://app.netlify.com/sites/stacks-razor) via [this GH workflow](/.github/workflows/workflow_library.yml).

Website is served under okta authentication and we use [netlify-okta-auth](https://github.com/twilio-labs/netlify-okta-auth) to convert Okta RS256 JWTs to HS256 JWT that netlify can understand (see [this config](https://app.netlify.com/sites/stacks-razor/settings/access#jwt-secret) for details).

More information about how access restriction has been setup can be found in [this guide](https://github.com/twilio-labs/netlify-okta-auth/blob/main/docs/installation.md).

## Known issues

- Stories only supports a limited number (14?) Svelte each blocks. Exceeding this number will break story controls. See https://github.com/storybookjs/addon-svelte-csf/issues/110
- Svelte components events are shown in stories but documentation needs to be added manually

## Support

[Stacks Team Slack Channel](https://stackexchange.slack.com/archives/C27RWNQN9)
