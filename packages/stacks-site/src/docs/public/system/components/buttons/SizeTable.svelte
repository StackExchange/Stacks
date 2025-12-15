<script lang="ts">
  import { Button } from '@stackoverflow/stacks-svelte';
  import type { Size } from '@stackoverflow/stacks-svelte';

  let { sizes } = $props();

  const titleCase = (str) => str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());

  const getSizeInfo = (size) => {
    const sizeMap = {
      'xs': { name: 'Extra Small', fs: '12px', class: 's-btn__xs' },
      'sm': { name: 'Small', fs: '13px', class: 's-btn__sm' },
      '': { name: 'Default', fs: '14px', class: 'N/A' },
      'lg': { name: 'Large', fs: '17px', class: 's-btn__lg' }
    };
    return sizeMap[size] || sizeMap[''];
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
      {#each sizes as size}
        {@const sizeInfo = getSizeInfo(size)}
        <tr>
          <th scope="row" class="va-middle">{sizeInfo.name}</th>
          <td class="va-middle">
            {#if sizeInfo.class === 'N/A'}
              <em class="fc-black-350">{sizeInfo.class}</em>
            {:else}
              <code class="stacks-code">{sizeInfo.class}</code>
            {/if}
          </td>
          <td class="va-middle">{sizeInfo.fs}</td>
          <td class="va-middle">
            <Button class="ws-nowrap" {size}>
              Ask question
            </Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
