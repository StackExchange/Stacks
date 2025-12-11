<script lang="ts">
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
      indicatorTop = linkRect.top - navRect.top + navElement.scrollTop;
      indicatorHeight = linkRect.height;

      // Calculate the position of the link relative to the scrollable container
      const scrollableContainer = navElement.closest('.overflow-auto') as HTMLElement;
      if (scrollableContainer) {
        const containerRect = scrollableContainer.getBoundingClientRect();
        const linkRelativeTop = linkRect.top - containerRect.top;
        const linkRelativeBottom = linkRect.bottom - containerRect.top;

        // Get total scrollable height
        const totalHeight = navElement.scrollHeight;
        const topThreshold = totalHeight * 0.25; // Top 25%
        const bottomThreshold = totalHeight * 0.75; // Bottom 25%

        // Check if link is in top or bottom percentage
        const linkPosition = linkElement.offsetTop;
        const isInTopZone = linkPosition < topThreshold;
        const isInBottomZone = linkPosition > bottomThreshold;

        // If link is above the viewport, scroll to it
        if (linkRelativeTop < 0) {
          if (isInTopZone) {
            // Scroll all the way to the top
            scrollableContainer.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else {
            linkElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
        }
        // If link is below the viewport, scroll to it
        else if (linkRelativeBottom > containerRect.height) {
          if (isInBottomZone) {
            // Scroll all the way to the bottom
            scrollableContainer.scrollTo({
              top: scrollableContainer.scrollHeight,
              behavior: 'smooth'
            });
          } else {
            linkElement.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest'
            });
          }
        }
        // If already visible, check if we should scroll to edges
        else {
          if (isInTopZone) {
            scrollableContainer.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else if (isInBottomZone) {
            scrollableContainer.scrollTo({
              top: scrollableContainer.scrollHeight,
              behavior: 'smooth'
            });
          } else {
            linkElement.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'nearest'
            });
          }
        }
      }
    }
  }

  $effect(() => {
    if (typeof window === 'undefined' || allItems.length === 0) return;

    // Track which headings are currently visible
    const visibleHeadings = new Set<string>();

    const observerOptions = {
      // Focus on a smaller area at the top of the viewport
      rootMargin: '-100px 0px -66% 0px',
      // More granular thresholds for better accuracy
      threshold: Array.from({ length: 101 }, (_, i) => i / 100)
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          visibleHeadings.add(id);
        } else {
          visibleHeadings.delete(id);
        }
      });

      // Check if we're at the very top of the page
      const isAtTop = window.scrollY < 100;

      // Find the heading closest to the top of the viewport
      if (visibleHeadings.size > 0) {
        let closestId: string | null = null;
        let closestDistance = Infinity;

        visibleHeadings.forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Distance from element top to a point ~150px from viewport top
            const distance = Math.abs(rect.top - 150);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestId = id;
            }
          }
        });

        if (closestId && closestId !== activeId) {
          activeId = closestId;
          updateIndicatorPosition(closestId);
        }
      } else if (isAtTop && allItems.length > 0) {
        // If no headings are visible but we're at the top, select the first item
        if (activeId !== allItems[0].id) {
          activeId = allItems[0].id;
          updateIndicatorPosition(allItems[0].id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Wait a bit for elements to be in the DOM
    const timeoutId = setTimeout(() => {
      // Observe all headings
      allItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.observe(element);
        }
      });

      // Set initial active item
      if (allItems.length > 0) {
        activeId = allItems[0].id;
        setTimeout(() => updateIndicatorPosition(allItems[0].id), 100);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  });

  function registerLink(element: HTMLElement, id: string) {
    linkElements.set(id, element);

    function handleClick() {
      activeId = id;
      setTimeout(() => updateIndicatorPosition(id), 50);
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
    <div class="ps-sticky t0 py24 pr24 md:mb32 overflow-auto hmx-screen">
      <nav bind:this={navElement} class="ps-relative">
        <h2 class="fs-body2 fw-bold mb12 px6 fc-black-400">Contents</h2>

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
