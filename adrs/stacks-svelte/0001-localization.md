# Localization

**Date:** 2024-01-04

**Related PR:** [#46](https://github.com/StackEng/Stacks-Svelte/pull/46)

## Issue

As more complex components are landing into Stacks Svelte (e.g. Modal, TextInput, etc...) we need a strategy to localize the text contained in those components (e.g. Close Button Label in the Modal) rather than keeping it hardcoded.

## Decision

We decided to delegate localization and translation concerns to consumers of the library exposing optional props prefixed by `i18n`. The default value of these props will be the English translation (which we will always fallback to in case consumer don't specify the props).
**No hardcoded text is allowed in any component under any circumnstances.**

Example:

```svelte
<Modal id="modal-example" visible={true} i18nCloseButtonLabel="Chiudi">
```

## Rationale

Using props and delegating localization concerns to the consumers of the library is the simplest approach we can take to ship components that can be correctly rendered in internationalized pages and apps.
The picked approach will also make consumption of those components possible with different translation engines (e.g. moonspeak in Core, a potential new translation engine, etc...).
The downside of the approach is that the API of the components could become a bit bloated with a proliferation of optional props dedicated to pass on localized text. It also create more work for consumers who need to curate and provide the translations.

We have considered maintaining localization files for primary languages ourselves and provide the ability for consumers to register their own translations. This solution would be more complex and it will increase maintainance work on our small team therefore we decided to avoid it for now.

We don't exclude providing a different way for consumer to localize Stacks Svelte components in the future as the community tools and best practices on this topic evolve. We also expect this ADR to evolve over time as our library grow (e.g. if/when we will introduce a date picker).

## Further Reading

- [Carbon Svelte Component Library using props for localization](https://github.com/carbon-design-system/carbon-components-svelte/issues/858)
- [SvelteKit i18n brainstorming thread](https://github.com/sveltejs/kit/issues/553)
