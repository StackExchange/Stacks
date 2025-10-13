---
"@stackoverflow/stacks-svelte": patch
---

Migrate `Select` and `SelectItem` components to use Svelte 5 runes API

BREAKING CHANGES:
- `message` and `description` slotted content are not available anymore. `message` and `description` snippets should be used instead.
- `on:change` `on:focus` and `on:blur` are not available anymore. The new callback props should be used instead: `onchange`, `onfocus`, `onblur`.
