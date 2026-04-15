<script lang="ts">
    export type ClassTableRow = {
        class: string;
        /** What class this modifies — used on component pages */
        modifies?: string;
        /** CSS property output — used on base utility pages */
        output?: string;
        /** Human-readable description — used on component pages */
        description?: string;
        /** Human-readable definition — used on base utility pages */
        define?: string;
        /** Whether the class has a responsive variant */
        responsive?: boolean;
    };

    interface Props {
        classes: ClassTableRow[];
    }

    let { classes }: Props = $props();

    type ColKey = keyof Omit<ClassTableRow, 'class'>;

    const colLabels: Record<ColKey, string> = {
        modifies: 'Modifies',
        output: 'Output',
        description: 'Description',
        define: 'Definition',
        responsive: 'Responsive?',
    };

    // Show columns in a fixed order, but only those with at least one value.
    const orderedCols: ColKey[] = ['modifies', 'output', 'description', 'define', 'responsive'];
    const activeCols = $derived(
        orderedCols.filter(col => classes.some(r => r[col] !== undefined))
    );
</script>

<!-- role="region" + aria-label satisfies the a11y requirement for tabindex on a non-interactive element -->
<div class="overflow-x-auto mb32" role="region" aria-label="Class table" tabindex="0">
    <table class="s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Class</th>
                {#each activeCols as col}
                    <th scope="col">{colLabels[col]}</th>
                {/each}
            </tr>
        </thead>
        <tbody class="fs-caption">
            {#each classes as row}
                <tr>
                    <th scope="row"><code>{row.class}</code></th>
                    {#each activeCols as col}
                        <td class={col === 'output' ? 'ff-mono' : ''}>
                            {#if col === 'responsive'}
                                {row.responsive ? '✓' : ''}
                            {:else}
                                {(row as Record<string, unknown>)[col] ?? ''}
                            {/if}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>
