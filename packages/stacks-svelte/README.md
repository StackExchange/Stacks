# Stacks Svelte

This package is an implementation of the [Stacks Design System](https://stackoverflow.design/), using Svelte Components.

[Documentation](https://svelte.stackoverflow.design)

## Installation

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

## Known issues

- Stories only supports a limited number (14?) Svelte each blocks. Exceeding this number will break story controls. See https://github.com/storybookjs/addon-svelte-csf/issues/110
- Svelte components events are shown in stories but documentation needs to be added manually
