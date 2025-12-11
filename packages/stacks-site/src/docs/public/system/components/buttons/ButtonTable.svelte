<script>
  import { Button } from '@stackoverflow/stacks-svelte';

  let { data } = $props();

  // Map class names to Button props
  const getButtonProps = (btn, cls) => {
    const props = { class: 'ws-nowrap' };

    if (btn.class === 's-btn__danger') props.variant = 'danger';
    if (btn.class === 's-btn__featured') props.variant = 'featured';
    if (btn.class === 's-btn__tonal') props.variant = 'tonal';
    if (cls.class === 's-btn__clear') props.weight = 'clear';

    return props;
  };
</script>

<div class="overflow-x-auto">
  <table class="wmn5 s-table s-table__bx-simple">
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col" class="s-table--cell4">Class</th>
        <th scope="col" class="ta-center">Default State</th>
        <th scope="col" class="ta-center">Selected State</th>
        <th scope="col" class="ta-center">Disabled State</th>
      </tr>
    </thead>
    <tbody>
      {#each data as btn}
        {#each btn.classes as cls}
          {@const buttonProps = getButtonProps(btn, cls)}
          <tr>
            <th scope="row" class="va-middle">{cls.title}</th>
            <td class="va-middle">
              <div class="d-flex g4 fw-wrap">
                <code class="stacks-code">.s-btn</code>
                {#if btn.class}
                  <code class="stacks-code">.{btn.class}</code>
                {/if}
                {#if cls.class}
                  <code class="stacks-code">.{cls.class}</code>
                {/if}
              </div>
            </td>
            <td class="va-middle ta-center px4">
              <Button {...buttonProps}>Ask question</Button>
            </td>
            <td class="va-middle ta-center px4">
              <Button {...buttonProps} selected aria-pressed="true">Ask question</Button>
            </td>
            <td class="va-middle ta-center px4">
              <Button {...buttonProps} disabled>Ask question</Button>
            </td>
          </tr>
        {/each}
      {/each}
    </tbody>
  </table>
</div>
