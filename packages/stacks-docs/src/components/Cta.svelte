<script lang="ts">
  let { children } = $props();
</script>

<hr class="d-none"/>
<div class="bg-blue-100 p32">
  {@render children()}
</div>
<hr class="d-none"/>