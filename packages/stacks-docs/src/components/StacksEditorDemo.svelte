<script lang="ts">
    import { onMount } from 'svelte';

    interface Props {
        /** Initial content for the editor (Markdown) */
        content?: string;
        /** Options passed directly to StacksEditor */
        options?: Record<string, unknown>;
        /** Additional CSS classes for the container */
        class?: string;
    }

    let { content = '', options = {}, class: extraClass = '' }: Props = $props();

    let container: HTMLDivElement;

    onMount(async () => {
        const [{ StacksEditor }] = await Promise.all([
            import('@stackoverflow/stacks-editor'),
            import('@stackoverflow/stacks-editor/dist/styles.css'),
        ]);

        new StacksEditor(container, content, options);
    });
</script>

<div bind:this={container} class={extraClass}></div>
