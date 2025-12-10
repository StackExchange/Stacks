<script lang="ts">
  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';
  import Gallery from '$components/Gallery.svelte';
  import Slide from '$components/Slide.svelte';

  import { Icon } from '@stackoverflow/stacks-svelte';
	import { IconGlyph } from '@stackoverflow/stacks-icons'

  let index = $state(0)

  const sizes = [
    'Square',
    'Circle',
  ]

  function onChange(i) {
    index = i
  }
</script>

<Gallery controls={sizes} {onChange}>
  <Grid>
    <GridColumn>
      <Slide>
        <div class="symbol">
          <img class="symbol__image" src="/images/brand/logo/symbol-lockup-square.svg" alt="" />
        </div>
      </Slide>
      <Slide>
        <div class="symbol">
          <img class="symbol__image" src="/images/brand/logo/symbol-lockup-circle.svg" alt="" />
        </div>
      </Slide>
    </GridColumn>
    <GridColumn extraClasses="bg-black">
      <div class="symbol">
        <div class={`symbol__image live live--${sizes[index]}`}>
          <Icon src={IconGlyph} />
        </div>
      </div>
    </GridColumn>
  </Grid>
</Gallery>

<style>
  .symbol {
    aspect-ratio: 8 / 9;
    display: flex;
  }
  .symbol .symbol__image {
    width: 260px !important;
    height: 260px !important;
    margin: auto;
  }

  .live {
    background: var(--brand-color-orange);
    transition: all 0.3s;
  }
  .live--Square {
    border-radius: 28px;
    padding: 31px 38px 38px 38px;
  }
  .live--Circle {
    border-radius: 260px;
    padding: 38px 38px 56px 38px;
  }
  :global(.live svg) {
    width: auto;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
</style>
