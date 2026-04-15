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

    const COLLAPSE_THRESHOLD = 8;

    interface Props {
        classes: ClassTableRow[];
    }

    let { classes }: Props = $props();

    let showAll = $state(false);

    const collapsible = $derived(classes.length > COLLAPSE_THRESHOLD);
    const visibleClasses = $derived(collapsible && !showAll ? classes.slice(0, COLLAPSE_THRESHOLD) : classes);

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
<div class="overflow-x-auto" role="region" aria-label="Class table" tabindex="0">
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
            {#each visibleClasses as row}
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

{#if collapsible}
    <button
        type="button"
        class="s-btn s-btn__tonal s-btn__sm w100 mt2 mb32"
        aria-expanded={showAll}
        onclick={() => showAll = !showAll}
    >
        {showAll ? 'Hide classes' : `Show all ${classes.length} classes`}
    </button>
{:else}
    <div class="mb32"></div>
{/if}
