<script lang="ts">
    export let url: string;
    export let selected: boolean = false;
</script>

<li>
    <a
        class="s-pagination--item"
        class:is-selected={selected}
        aria-current={selected ? "page" : undefined}
        href={url}
        on:click
    >
        <slot />
    </a>
</li>
