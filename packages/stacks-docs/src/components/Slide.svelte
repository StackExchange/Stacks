<script lang="ts">
  import { getContext } from 'svelte';
  let { children } = $props();

  const gallery = getContext<{ index: number; register: () => number }>('gallery');

  let id = gallery.register();

  const isActive = $derived(gallery.index === id);
</script>

{#if isActive}
  <div class="slide">
    {@render children()}
  </div>
{/if}
