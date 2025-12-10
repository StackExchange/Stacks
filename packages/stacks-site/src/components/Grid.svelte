<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  let { children } = $props();

  const columnCount = setContext('columnCount', writable(0));
</script>

<div class={`d-grid grid__${$columnCount} sm:grid__1 g12 my12`}>
  {@render children()}
</div>
