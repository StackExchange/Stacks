<script lang="ts">
    import "../app.css";

    let { children }: { children: import("svelte").Snippet } = $props();
</script>

{@render children()}
