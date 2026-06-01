<script lang="ts">
    import { onMount } from "svelte";

    type ComponentOptionReference = {
        argument: string;
        type: string;
        defaultValue?: string;
        defaultValueCode?: boolean;
        description: string;
    };

    type EmailCatalogComponent = {
        slug: string;
        options?: ComponentOptionReference[];
    };

    type EmailCatalogResponse = {
        components: EmailCatalogComponent[];
        templates: { slug: string }[];
    };

    let {
        rows = [],
        componentSlug,
    }: {
        rows?: ComponentOptionReference[];
        componentSlug?: string;
    } = $props();

    let resolvedRows = $state<ComponentOptionReference[]>([]);

    const hasDefaultValue = (value: string | undefined) =>
        typeof value === "string" && value.trim().length > 0;

    $effect(() => {
        if (rows.length > 0) {
            resolvedRows = rows;
        }
    });

    onMount(async () => {
        if (!componentSlug || resolvedRows.length > 0) {
            return;
        }

        const response = await fetch("/api/email/catalog");
        if (!response.ok) {
            return;
        }

        const catalog = (await response.json()) as EmailCatalogResponse;
        const match = catalog.components.find(
            (component) => component.slug === componentSlug
        );
        resolvedRows = match?.options ?? [];
    });
</script>

<div class="overflow-x-auto mb32">
    <table class="docs-table s-table s-table__bx-simple">
        <thead>
            <tr>
                <th class="s-table--cell2" scope="col">Argument</th>
                <th class="s-table--cell3" scope="col">Type</th>
                <th scope="col">Default</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody class="fs-caption">
            {#each resolvedRows as row (row.argument)}
                <tr>
                    <td><code>{row.argument}</code></td>
                    <td><code>{row.type}</code></td>
                    <td>
                        {#if hasDefaultValue(row.defaultValue)}
                            {#if row.defaultValueCode === false}
                                {row.defaultValue}
                            {:else}
                                <code>{row.defaultValue}</code>
                            {/if}
                        {/if}
                    </td>
                    <td>{row.description}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
