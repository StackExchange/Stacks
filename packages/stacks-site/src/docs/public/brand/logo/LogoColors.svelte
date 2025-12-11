<script lang="ts">
  import Gallery from '$components/Gallery.svelte';
  import Slide from '$components/Slide.svelte';

  import { Icon } from '@stackoverflow/stacks-svelte';
	import { IconLogo } from '@stackoverflow/stacks-icons'

  const gallery = [
    'white',
    'off-white',
    'blue-light',
    'beige',
    'orange',
    'black',
  ]
</script>

<Gallery type="colors" controls={gallery}>
  {#each gallery as item}
    <Slide>
      <div class="opt ba-color" style={`background: var(--brand-color-${item}); color: var(--brand-color-${item === 'black' ? 'white': 'black'}`}>
       <Icon class="logo" src={IconLogo} />
      </div>
    </Slide>
  {/each}
</Gallery>

<style>
  .opt {
    display: flex;
    aspect-ratio: 16 / 9;
  }
  :global(.opt .logo) {
    margin: auto;
    width: 70%;
    height: auto;
  }
</style>
