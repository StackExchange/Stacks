<script lang="ts">
  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconChevron16Down, IconChevron16Up } from '@stackoverflow/stacks-icons'

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
  let linkElements: Map<string, HTMLElement> = new Map();
  let isOpen = $state(false);

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

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting heading
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (activeId !== id) {
              activeId = id;
              updateIndicatorPosition(id);
            }
            break;
          }
        }
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: 0.5
      }
    );

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      allItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
      });

      // Set initial active
      if (allItems.length > 0 && !activeId) {
        activeId = allItems[0].id;
        updateIndicatorPosition(allItems[0].id);
      }
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
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

<aside class="flex--item3 md:order-first ml32 md:ml0">
  {#if toc.length > 0}
    <div class="ps-sticky t0 py32 mt6 pr24 md:pb0 overflow-auto hmx-screen md:hmx-initial">
      <button
        class="d-none md:d-block s-btn s-btn__tonal s-btn__icon w100 mb12 d-flex jc-space-between"
        onclick={() => isOpen = !isOpen}
      >
        <Icon src={isOpen ? IconChevron16Up : IconChevron16Down} />
        Contents
      </button>

      <nav bind:this={navElement} class={`ps-relative d-block ${!isOpen ? 'd-block md:d-none' : ''}`}>
        <h2 class="fs-body2 fw-bold mb12 px6 fc-black-400 d-block sm:d-none">Contents</h2>

        <div
          class="contents-indicator ps-absolute l0 r0 z-base pe-none"
          style="top: {indicatorTop}px; height: {indicatorHeight}px; opacity: {indicatorHeight > 0 ? 1 : 0};"
        ></div>

        <ul class="s-navigation s-navigation__vertical">
          {#each toc as item, index}
            <li>
              <a
                href="#{item.id}"
                use:registerLink={item.id}
                class="s-navigation--item fs-caption bar0 ps-relative fw-bold fc-black ai-start"
                class:is-active={activeId === item.id}
                onclick={() => isOpen = false}
              >
                <span class={`w24 d-flex ai-center fc-orange-400`}>{(index + 1).toString().padStart(2, "0")}</span>
                <span>{item.value}</span>
              </a>
              {#if item.children && item.children.length > 0}
                <ul class="s-navigation s-navigation__vertical">
                  {#each item.children as child}
                    <li>
                      <a
                        href="#{child.id}"
                        use:registerLink={child.id}
                        class="s-navigation--item fs-caption bar0 ps-relative"
                        class:is-active={activeId === child.id}
                        onclick={() => isOpen = false}
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
  {/if}
</aside>

<style>
  .contents-indicator {
    background-color: var(--black-100);
    /* background-color: rgba(255, 255, 255, 0.1); */
    backdrop-filter: invert(1);
    -webkit-backdrop-filter: invert(1);
  }
</style>
