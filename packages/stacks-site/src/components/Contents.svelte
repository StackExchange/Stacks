<script lang="ts">
  interface TocItem {
    id: string;
    value: string;
    depth: number;
    children?: TocItem[];
  }

  let { toc = [] }: { toc: TocItem[] } = $props();
</script>

{#if toc.length > 0}
  <nav>
    <h2 class="fs-body2 fw-bold mb12 px6 fc-black-400">Contents</h2>
    <ul class="s-navigation s-navigation__vertical">
      {#each toc as item, index}
        <li>
          <a
            href="#{item.id}"
            class="s-navigation--item fs-caption bar0 ps-relative fw-bold fc-black"
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
                    class="s-navigation--item fs-caption bar0 ps-relative"
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
{/if}
