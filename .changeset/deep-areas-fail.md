---
"@stackoverflow/stacks-svelte": minor
---

Migrate `Pagination` components to use Svelte 5 runes API.

BREAKING CHANGES:
- `PaginationItem`: `on:click` event forwarding is replaced by `onclick` callback prop.
- `PaginationController`: `on:pagechange` event is replaced by `onpagechange` callback prop with simplified signature. Previously the event passed `{ detail: pageNumber }`, now the callback directly receives the page number as the argument: `onpagechange(pageNumber)`.

Migration example:
```svelte
<!-- Before (Svelte 4) -->
<PaginationController
  on:pagechange={(e) => handlePageChange(e.detail)}
/>

<!-- After (Svelte 5) -->
<PaginationController
  onpagechange={(pageNumber) => handlePageChange(pageNumber)}
/>
```

