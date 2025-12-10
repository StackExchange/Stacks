<script lang="ts">
  import { setContext } from 'svelte';
  import { Navigation, NavigationItem } from '@stackoverflow/stacks-svelte';

  let { type, children, controls = [], onChange } = $props();

  let index = $state(0);
  let total = $state(0);

  function register() {
    const id = total;
    total = total + 1;
    return id;
  }

  function goto(i: number) {
    index = i;
    onChange(i)
  }

  setContext('gallery', { get index() { return index; }, register });
</script>

<Navigation class="ws-nowrap" label="Font weight" overflow="scroll">
  {#each controls as item, i}
    <NavigationItem
      text={item}
      selected={index === i}
      onclick={() => goto(i)}
      class="tt-capitalize"
    >
      {#if type === 'color'}
        {#snippet trailing()}
          <span class="ml6 w12 h12 bar-circle d-inline-block ba" style={`background-color: var(--brand-color-${item})`}></span>
        {/snippet}
      {/if}
    </NavigationItem>
  {/each}
</Navigation>

<div>
  {@render children()}
</div>
