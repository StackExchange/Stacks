<script>
  import { Button } from '@stackoverflow/stacks-svelte';

  let { data } = $props();

  const getSize = (className) => {
    if (className === 's-btn__xs') return 'xs';
    if (className === 's-btn__sm') return 'sm';
    if (className === 's-btn__lg') return 'lg';
    return '';
  };
</script>

<div class="overflow-x-auto mb32" tabindex="0">
  <table class="wmn4 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col">Class</th>
        <th scope="col">Size</th>
        <th scope="col" class="s-table--cell8">Example</th>
      </tr>
    </thead>
    <tbody>
      {#each data as sizeData}
        <tr>
          <th scope="row" class="va-middle">{sizeData.size}</th>
          <td class="va-middle">
            {#if sizeData.class === 'N/A'}
              <em class="fc-black-350">{sizeData.class}</em>
            {:else}
              <code class="stacks-code">{sizeData.class}</code>
            {/if}
          </td>
          <td class="va-middle">{sizeData.fs}</td>
          <td class="va-middle">
            <Button class="ws-nowrap" size={getSize(sizeData.class)}>
              Ask question
            </Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
