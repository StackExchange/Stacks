<script lang="ts">
  import Gallery from '$components/Gallery.svelte';
  import Slide from '$components/Slide.svelte';

  import ColorCodes from './ColorCodes.svelte';

  const mode = [
    'General',
    'Business',
  ]
</script>

<Gallery controls={mode}>
  <Slide>
    <div class="slide">
      <ColorCodes />
    </div>
  </Slide>
  <Slide>
    <div class="slide">
      <ColorCodes business="true" />
    </div>
  </Slide>
</Gallery>

<style>
  .slide {
    padding: 32px;
    background: var(--black-200)
  }
</style>
