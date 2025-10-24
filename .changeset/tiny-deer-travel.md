---
"@stackoverflow/stacks-svelte": minor
---

Migrate `Modal` component to use Svelte 5 runes API.

BREAKING CHANGES:
- Named slots (`header`, `body`, `footer`) are replaced by snippet props. Use `{#snippet header()}...{/snippet}` instead of `<svelte:fragment slot="header">...</svelte:fragment>`.
- `on:close` event is replaced by `onclose` callback prop.

