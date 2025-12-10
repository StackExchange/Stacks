<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  let { children } = $props();

  const columnCount = setContext('columnCount', writable(0));
</script>

<div class={`d-grid g12 my12 grid__${$columnCount}`}>
  {@render children()}
</div>
