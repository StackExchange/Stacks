<script>
  import { copyToClipboard } from '$src/lib/copyToClipboard'
  import { IconArrowUpRightBox, IconCheckFillCircle, IconStackCards } from '@stackoverflow/stacks-icons/icons';
  import { Icon, Modal } from '@stackoverflow/stacks-svelte';
  
  const uuid = crypto.randomUUID();

  let visible = $state(false);
  let copiedField = $state(null);

  const {
    color,
    orientation = 'horizontal',
    showHex = false,
    extraClasses = '',
    onclick = null,
    disabled = false,
  } = $props();

  function copySuccess(event) {
    const field = event.detail.dataset.field;
    copiedField = field;

    setTimeout(() => {
      copiedField = null;
    }, 2000);
  }
</script>

<svelte:window on:copysuccess={copySuccess} />

<svelte:element
  tabindex="0"
  id={uuid}
  role="button"
  this={onclick ? 'button' : 'div'}
  onclick={onclick || (() => visible = true)}
  class={`d-flex fs-body1 fd-column ps-relative c-pointer ff-sans ta-left color color--${orientation} ${extraClasses} ${disabled ? 'o50 bg-black-200 fc-black pe-none c-not-allowed' : ''}`}
  style={`background: ${color.hex}; color: ${color.invertLabel ? '#fff' : '#000'}`}
>
  <span class="p12 pr32 lh-xs">{color.name}</span>

  {#if showHex && !disabled}
    <span class="p12 mt-auto">{color.hex}</span>
  {/if}

  {#if !disabled}
    <Icon class="ps-absolute t12 r12" src={IconArrowUpRightBox} />
  {/if}
</svelte:element>

<Modal
  id={uuid}
  visible={visible || undefined}
  state={undefined}
  class="wmx3 w100 p0"
  onclose={() => (visible = false)}
>
  {#snippet header()}
    <div class="px16 pt16 ff-stack-sans-headline">{color.name}</div>
  {/snippet}
  {#snippet body()}
    {#each [
      { label: 'Hex', field: 'hex', value: color.hex },
      { label: 'RGB', field: 'rgb', value: color.rgb },
      { label: 'CSS', field: 'css', value: color.cssVar },
      { label: 'Pantone', field: 'pantone', value: color.pantone },
    ] as row, i (row.field)}
      {#if row.value}
        <div class="fs-body1 px16 d-flex jc-space-between py8 {i !== 0 ? 'bt bc-black-150' : ''}">
          <div>{row.label}</div>
          <div class="d-flex ai-center">
            {row.value}
            <button class="s-btn s-btn__unset ml8" data-field={row.field} use:copyToClipboard={row.value}>
              {#if copiedField === row.field}
                <Icon src={IconCheckFillCircle} class="fc-green-400" />
              {:else}
                <Icon src={IconStackCards} />
              {/if}
            </button>
          </div>
        </div>
      {/if}
    {/each}
  {/snippet}
  {#snippet footer()}
    <div class="w100 h96" style={`background: ${color.hex}`}></div>
  {/snippet}
</Modal>

<style>
  .color {
    top: 0;
    right: 0;
    transition: top 0.2s, right 0.2s;
    border: 1px solid rgba(0,0,0,0.2);
    font-weight: 400;
  }
  .color:hover {
    top: -3px;
    right: -3px;
  }
</style>
