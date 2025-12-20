<script lang="ts">
  import { page } from '$app/state';

  import { Icon } from '@stackoverflow/stacks-svelte';
	import { SpotError500, SpotError404 } from '@stackoverflow/stacks-icons'

  const getIllo = {
    500: SpotError500,
    404: SpotError404,
  }
</script>

<div class="d-flex hmn-screen">
  <div class="m-auto ta-center">
    <h1><Icon title={page.status.toString()} class="native w100" src={getIllo[page.status]} /></h1>
    <p class="fs-body3">{page.error.message}</p>
  </div>
</div>