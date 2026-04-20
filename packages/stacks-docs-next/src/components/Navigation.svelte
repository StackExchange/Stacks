<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import { slide } from 'svelte/transition';

  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconLock, IconChevron16Up, IconArrowUpRightBox } from '@stackoverflow/stacks-icons'

  let { navigation } = $props();

  // Derive path segments from pathname so selection works for both dynamic
  // routes (/[category]/[section]/[subsection]) and static routes (/resources/icons)
  let segments = $derived(page.url.pathname.split('/').filter(Boolean));
  let categorySlug = $derived(segments[0] ?? '');
  let sectionSlug = $derived(segments[1] ?? '');
  let subsectionSlug = $derived(segments[2] ?? '');
</script>

<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
{#snippet dropdown(isSelected: boolean, _level: number = 1)}
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
        href={resolve('/')}
        class:is-selected={!categorySlug}
      >
        <span>Home</span>
      </a>
    </li>
    {#each navigation as category (category.slug)}
      {@const isSelected = category.slug === categorySlug}

      <li>
        <a
          class="s-navigation--item jc-space-between mb1"
          class:is-selected={isSelected}
          href={resolve(`/${category.slug}/`)}
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
              {#each category.items as subsection (subsection.slug)}
                <li>
                  <a
                    class="s-navigation--item jc-space-between mb1"
                    class:is-selected={sectionSlug === subsection.slug || subsectionSlug === subsection.slug}
                    href={subsection.externalUrl ? subsection.externalUrl : resolve(`/${category.slug}/${subsection.slug}/${subsection?.items ? subsection?.items[0]?.slug : ''}`)}
                    data-sveltekit-reload={subsection.private ? true : undefined}
                  >
                    <span>{subsection.title}</span>
                    {#if subsection.private || subsection.new || subsection.items || subsection.externalUrl}
                      <span class="d-flex g4 ai-center">
                        {#if subsection.new}
                          <span class="s-activity-indicator s-activity-indicator__sm ba"><span class="v-visible-sr">new</span></span>
                        {/if}
                        {#if subsection.private && !category.private}
                          <Icon src={IconLock} />
                        {/if}
                        {#if subsection?.items}
                          {@render dropdown(sectionSlug === subsection.slug, 2)}
                        {/if}
                        {#if subsection.externalUrl}
                          <Icon src={IconArrowUpRightBox} />
                        {/if}
                      </span>
                    {/if}
                  </a>

                  {#if subsection?.items && sectionSlug === subsection.slug}
                    <div transition:slide={{ duration: 200 }}>
                      <ul class="s-navigation s-navigation__vertical ml24">
                        {#each subsection?.items as item (item.slug)}
                          <li>
                            <a
                              class="s-navigation--item jc-space-between mb1"
                              class:is-selected={subsectionSlug === item.slug}
                              href={item.externalUrl ? item.externalUrl : resolve(`/${category.slug}/${subsection.slug}/${item.slug}/`)}
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
    border-radius: 6px !important;
  }
  .s-navigation--item:hover {
    background: var(--theme-primary) !important;
    color: var(--white) !important;
  }
	.s-navigation--item.is-selected,
  .s-navigation--item.is-selected:hover {
		background: var(--black-600) !important;
    color: var(--white) !important;
	}
</style>
