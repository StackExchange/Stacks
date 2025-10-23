---
"@stackoverflow/stacks-svelte": minor
---

Migrate `Popover`, `PopoverReference`, `PopoverContent`, and `PopoverCloseButton` components to use Svelte 5 runes API

BREAKING CHANGES:

**Popover component:**
- Slot props (`let:visible`, `let:open`, `let:close`) are not available anymore. Snippet parameters should be used instead: `{#snippet children({ visible, open, close })}...{/snippet}`
- `on:open` and `on:close` events are not available anymore. The new callback props should be used instead: `onopen`, `onclose`.

**PopoverCloseButton component:**
- `on:click` event forwarding is not available anymore. The new callback prop should be used instead: `onclick`.

**Migration examples:**

```svelte
<!-- Before (Svelte 4 API) -->
<Popover 
  id="my-popover"
  on:open={() => console.log('opened')}
  on:close={() => console.log('closed')}
  let:visible
  let:close
>
  <PopoverReference>
    <button>Trigger</button>
  </PopoverReference>
  <PopoverContent>
    <p>Content here</p>
    <PopoverCloseButton on:click={handleClick} />
  </PopoverContent>
  <p>Visible: {visible}</p>
</Popover>

<!-- After (Svelte 5 API) -->
<Popover 
  id="my-popover"
  onopen={() => console.log('opened')}
  onclose={() => console.log('closed')}
>
  {#snippet children({ visible, close })}
    <PopoverReference>
        <button>Trigger</button>
    </PopoverReference>
    <PopoverContent>
        <p>Content here</p>
        <PopoverCloseButton onclick={handleClick} />
    </PopoverContent>
    <p>Visible: {visible}</p>
  {/snippet}
</Popover>
```

