<script lang="ts">
  import { setContext } from 'svelte';
  import { Navigation, NavigationItem } from '@stackoverflow/stacks-svelte';

  let { children, controls = [], onChange = () => {} } = $props();

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
      trailing={item.trailing}
    />
  {/each}
</Navigation>

<div>
  {@render children()}
</div>
