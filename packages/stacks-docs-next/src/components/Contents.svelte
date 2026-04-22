<script lang="ts">
  import { Button, Icon } from '@stackoverflow/stacks-svelte';
  import { IconList } from '@stackoverflow/stacks-icons'

  import { SvelteMap } from 'svelte/reactivity';

  interface TocItem {
    id: string;
    value: string;
    depth: number;
    children?: TocItem[];
  }

  let { toc = [] }: { toc: TocItem[] } = $props();

  let isMobileOpen = $state(false);

  let activeId = $state<string | null>(null);
  let navElement: HTMLElement | null = null;
  let linkElements: Map<string, HTMLElement> = new SvelteMap();

  // Flatten toc to get all items including children
  function flattenToc(items: TocItem[]): TocItem[] {
    const result: TocItem[] = [];
    for (const item of items) {
      result.push(item);
      if (item.children) {
        result.push(...item.children);
      }
    }
    return result;
  }

  const allItems = $derived(flattenToc(toc));

  function scrollActiveIntoView(id: string) {
    const linkElement = linkElements.get(id);
    if (linkElement && navElement) {
      // Auto-scroll the sidebar to keep active item visible (desktop only)
      const scrollableContainer = navElement.closest('.overflow-auto') as HTMLElement;
      const isMobile = window.innerWidth < 768;

      if (scrollableContainer && !isMobile) {
        const containerRect = scrollableContainer.getBoundingClientRect();
        const linkRect = linkElement.getBoundingClientRect();
        const linkRelativeTop = linkRect.top - containerRect.top;
        const linkRelativeBottom = linkRect.bottom - containerRect.top;

        if (linkRelativeTop < 0) {
          linkElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        } else if (linkRelativeBottom > containerRect.height) {
          linkElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          });
        }
      }
    }
  }

  // Single effect to handle everything
  $effect(() => {
    if (typeof window === 'undefined' || allItems.length === 0) return;

    // The active item is the last heading that has scrolled past the
    // top threshold — this is more accurate than IntersectionObserver
    // which can fire too early when a heading enters the viewport.
    const OFFSET = 120; // px from the top of the viewport

    function updateActive() {
      let found: string | null = null;

      for (const item of allItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET) {
          found = item.id;
        } else {
          break; // headings are in DOM order — stop once we pass the threshold
        }
      }

      const next = found ?? (allItems.length > 0 ? allItems[0].id : null);
      if (next && next !== activeId) {
        activeId = next;
        scrollActiveIntoView(next);
      }
    }

    // Wait for DOM to be ready then attach scroll listener
    const timeoutId = setTimeout(() => {
      updateActive();
      window.addEventListener('scroll', updateActive, { passive: true });
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', updateActive);
    };
  });

  function registerLink(element: HTMLElement, id: string) {
    linkElements.set(id, element);

    function handleClick() {
      activeId = id;
    }

    element.addEventListener('click', handleClick);

    return {
      destroy() {
        element.removeEventListener('click', handleClick);
        linkElements.delete(id);
      }
    };
  }
</script>

{#if toc.length > 0}
<aside class="layout-toc fl-shrink0 w30 md:w100 md:ps-fixed b16 r16 wmn2 wmx3 ff-stack-sans-headline">
    <div class="ps-sticky md:ps-static t0 mt6 py24 px32 md:pb0 md:p6 overflow-auto hmx-screen md:hmx-initial">
      <nav bind:this={navElement} class={`bg-white ${isMobileOpen ? 'contents-inner-mobile d-block' : 'md:d-none'}`}>
        <h2 class="fs-body2 fw-bold mb12 px6 fc-black-400 md:d-none">Contents</h2>

        <ul class="s-navigation s-navigation__vertical">
          {#each toc as item, index (item.id)}
            <li>
              <a
                href="#{item.id}"
                use:registerLink={item.id}
                class="s-navigation--item fs-caption bar0 fw-bold fc-black ai-start"
                class:bg-black-100={activeId === item.id}
                class:is-active={activeId === item.id}
              >
                <span class="fl-shrink0 w24 d-flex ai-center fc-theme-primary">{(index + 1).toString().padStart(2, "0")}</span>
                <span class="truncate">{item.value}</span>
              </a>
              {#if item.children && item.children.length > 0}
                <ul class="s-navigation s-navigation__vertical">
                  {#each item.children as child (child.id)}
                    <li>
                      <a
                        href="#{child.id}"
                        use:registerLink={child.id}
                        class="s-navigation--item fs-caption bar0"
                        class:bg-black-100={activeId === child.id}
                        class:is-active={activeId === child.id}
                      >
                        {child.value}
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </li>
          {/each}
        </ul>
      </nav>

      <Button
        class="d-none md:d-block ml-auto mt12 bar-md p8"
        size="sm"
        onclick={() => isMobileOpen = !isMobileOpen}
        title="Table of contents"
      >
        <Icon src={IconList} />
      </Button>
    </div>
</aside>
{/if}

<style>
  @media (max-width: 71.875rem) {
    .contents-inner-mobile {
        max-height: calc(100vh - 200px);
        overflow: auto;
        padding: var(--su12);
        box-shadow: var(--bs-md);
        border-radius: var(--br-md);
    }
  }
</style>