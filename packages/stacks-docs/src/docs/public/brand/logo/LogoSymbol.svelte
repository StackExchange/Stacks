<script lang="ts">
  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';
  import Gallery from '$components/Gallery.svelte';
  import Slide from '$components/Slide.svelte';

  import { Icon } from '@stackoverflow/stacks-svelte';
	import { IconGlyph } from '@stackoverflow/stacks-icons'

  import Square from './symbol-lockup-square.svg'
  import Circle from './symbol-lockup-circle.svg'

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
    <GridColumn extraClasses="bg-black-200 d:bg-black-100">
      <Slide>
        <div class="symbol">
          <img class="symbol__image" src={Square} alt="" />
        </div>
      </Slide>
      <Slide>
        <div class="symbol">
          <img class="symbol__image" src={Circle} alt="" />
        </div>
      </Slide>
    </GridColumn>
    <GridColumn extraClasses="bg-black d:bg-black-100">
      <div class="symbol">
        <div class={`symbol__image live live--${sizes[index]}`}>
          <Icon src={IconGlyph} class="fc-black d:fc-white" />
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
    transition: border-radius 0.3s;
  }
  .live--Square {
    border-radius: 28px;
    padding: 13px 0 20px 9px;
  }
  .live--Circle {
    border-radius: 260px;
    padding: 20px 38px 32px 31px;
  }
  :global(.live svg) {
    width: auto;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
</style>
