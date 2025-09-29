<script lang="ts">
    export let i18nNavigationLabel: string = "Pagination";
</script>

<nav aria-label={i18nNavigationLabel} class="pl24">
    <ul class="list-reset s-pagination">
        <slot />
    </ul>
</nav>
