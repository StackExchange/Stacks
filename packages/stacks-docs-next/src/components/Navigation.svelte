<script lang="ts">
  import { page } from '$app/state';
  import { slide } from 'svelte/transition';

  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconLock, IconChevron16Up, IconArrowUpRightBox } from '@stackoverflow/stacks-icons'

  let { navigation } = $props();
</script>

{#snippet dropdown(isSelected: boolean, level: number = 1)}
  <span
    style:display="inline-block"
    style:transform="rotate({!isSelected
        ? 180
        : 0}deg)"
    style:transition="transform 0.2s ease"
  >
    <Icon src={IconChevron16Up} />
  </span>
{/snippet}

<nav>
  <ul class="s-navigation s-navigation__vertical p12">
    <li>
      <a
        class="s-navigation--item mb1"
        href="/"
        class:is-selected={!page.params.category}
      >
        <span>Home</span>
      </a>
    </li>
    {#each navigation as category}
      {@const isSelected = category.slug === page.params.category}

      <li>
        <a
          class="s-navigation--item jc-space-between mb1"
          class:is-selected={isSelected}
          href={`/${category.slug}/`}
          data-sveltekit-reload={category.private ? true : undefined}
        >
          <span>{category.title}</span>
          {#if category.private}
            <Icon src={IconLock} />
          {/if}
        </a>

        {#if category.items && isSelected}
          <div transition:slide={{ duration: 200 }}>
            <ul class="s-navigation s-navigation__vertical pl24">
              {#each category.items as subsection}
                <li>
                  <a
                    class="s-navigation--item jc-space-between mb1"
                    class:is-selected={page.params.section === subsection.slug || page.params.subsection === subsection.slug}
                    href={subsection.externalUrl || `/${category.slug}/${subsection.slug}/${subsection?.items ? subsection?.items[0]?.slug : ''}`}
                    data-sveltekit-reload={subsection.private ? true : undefined}
                  >
                    <span>{subsection.title}</span>
                    {#if subsection.private || subsection.new || subsection.items || subsection.externalUrl}
                      <span class="d-flex g4 ai-center">
                        {#if subsection.new}
                          <span class="s-activity-indicator s-activity-indicator__sm ba"><span class="v-visible-sr">new</span></span>
                        {/if}
                        {#if subsection.private}
                          <Icon src={IconLock} />
                        {/if}
                        {#if subsection?.items}
                          {@render dropdown(page.params.section === subsection.slug, 2)}
                        {/if}
                        {#if subsection.externalUrl}
                          <Icon src={IconArrowUpRightBox} />
                        {/if}
                      </span> 
                    {/if}
                  </a>

                  {#if subsection?.items && page.params.section === subsection.slug}
                    <div transition:slide={{ duration: 200 }}>
                      <ul class="s-navigation s-navigation__vertical ml24">
                        {#each subsection?.items as item}
                          <li>
                            <a
                              class="s-navigation--item jc-space-between mb1"
                              class:is-selected={page.params.subsection === item.slug}
                              href={item.externalUrl || `/${category.slug}/${subsection.slug}/${item.slug}/`}
                              data-sveltekit-reload={item.private ? true : undefined}
                            >
                              <span>{item.title}</span>

                              {#if item.new}
                                <span class="s-activity-indicator s-activity-indicator__sm ba"><span class="v-visible-sr">new</span></span>
                              {/if}
                            </a>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  {/if}
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .s-navigation--item {
    transition: font-weight 0.1s;
    border-radius: 4px;
  }
  .s-navigation--item:hover {
    background: var(--orange-400);
    color: var(--white);
  }
	.s-navigation--item.is-selected {
		background: var(--black-600);
    color: var(--white);
	}
</style>