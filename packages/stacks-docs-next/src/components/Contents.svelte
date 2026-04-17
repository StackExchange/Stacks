<script lang="ts">
  import { SvelteMap } from 'svelte/reactivity';

  interface TocItem {
    id: string;
    value: string;
    depth: number;
    children?: TocItem[];
  }

  let { toc = [] }: { toc: TocItem[] } = $props();

  let activeId = $state<string | null>(null);
  let indicatorTop = $state(0);
  let indicatorHeight = $state(0);
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

  function updateIndicatorPosition(id: string) {
    const linkElement = linkElements.get(id);
    if (linkElement && navElement) {
      const navRect = navElement.getBoundingClientRect();
      const linkRect = linkElement.getBoundingClientRect();
      indicatorTop = linkRect.top - navRect.top;
      indicatorHeight = linkRect.height;

      // Auto-scroll the sidebar to keep active item visible (desktop only)
      const scrollableContainer = navElement.closest('.overflow-auto') as HTMLElement;
      const isMobile = window.innerWidth < 768;

      if (scrollableContainer && !isMobile) {
        const containerRect = scrollableContainer.getBoundingClientRect();
        const linkRelativeTop = linkRect.top - containerRect.top;
        const linkRelativeBottom = linkRect.bottom - containerRect.top;

        // Scroll if the link is outside the viewport
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
        updateIndicatorPosition(next);
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
      updateIndicatorPosition(id);
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
<aside class="layout-toc fl-shrink0 wmn1 wmx2 w100 md:d-none bg-white ff-stack-sans-headline">
    <div class="ps-sticky t0 py24 mt6 px16 md:pb0 overflow-auto hmx-screen md:hmx-initial">
      <nav bind:this={navElement} class="ps-relative">
        <h2 class="fs-body2 fw-bold mb12 px6 fc-black-400">Contents</h2>

        <div
          class="contents-indicator ps-absolute l0 r0 z-base pe-none"
          style="top: {indicatorTop}px; height: {indicatorHeight}px; opacity: {indicatorHeight > 0 ? 1 : 0};"
        ></div>

        <ul class="s-navigation s-navigation__vertical">
          {#each toc as item, index (item.id)}
            <li>
              <a
                href="#{item.id}"
                use:registerLink={item.id}
                class="s-navigation--item fs-caption bar0 ps-relative fw-bold fc-black ai-start"
                class:is-active={activeId === item.id}
              >
                <span class="fl-shrink0 w24 d-flex ai-center fc-theme-primary">{(index + 1).toString().padStart(2, "0")}</span>
                <span>{item.value}</span>
              </a>
              {#if item.children && item.children.length > 0}
                <ul class="s-navigation s-navigation__vertical">
                  {#each item.children as child (child.id)}
                    <li>
                      <a
                        href="#{child.id}"
                        use:registerLink={child.id}
                        class="s-navigation--item fs-caption bar0 ps-relative"
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
    </div>
</aside>
{/if}

<style>
  .contents-indicator {
    background-color: var(--black-100);
    /* background-color: rgba(255, 255, 255, 0.1); */
    backdrop-filter: invert(1);
    -webkit-backdrop-filter: invert(1);
  }
</style>
