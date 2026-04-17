<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import { IconCheckFillCircle } from '@stackoverflow/stacks-icons/icons';

    export type ClassTableRow = {
        class: string;
        /** The parent element this class must be a child of */
        parent?: string;
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

    type ColKey = keyof Omit<ClassTableRow, 'class'>;

    interface Props {
        classes: ClassTableRow[];
        /**
         * Show an expand button when the table is tall enough to warrant it.
         * Defaults to true.
         */
        expandable?: boolean;
        /**
         * Label for the expand button. Defaults to "Show All Classes".
         * Override for tables used in non-class contexts.
         */
        expandButtonText?: string;
        /**
         * Whether to render the column heading row. Defaults to true.
         * Set to false for tables embedded in contexts that provide their own headings.
         */
        showHeadings?: boolean;
        /**
         * Override individual column heading labels.
         * e.g. { class: 'Selector', description: 'Notes' }
         */
        headings?: Partial<Record<'class' | ColKey, string>>;
    }

    let {
        classes,
        expandable = false,
        expandButtonText = 'Show All Classes',
        showHeadings = true,
        headings = {},
    }: Props = $props();

    let expanded = $state(false);

    const defaultLabels: Record<'class' | ColKey, string> = {
        class: 'Class',
        parent: 'Parent',
        modifies: 'Modifies',
        output: 'Output',
        description: 'Description',
        define: 'Definition',
        responsive: 'Responsive?',
    };

    function label(col: 'class' | ColKey): string {
        return headings[col] ?? defaultLabels[col];
    }

    // Show columns in a fixed order, only those with at least one value.
    const orderedCols: ColKey[] = ['parent', 'modifies', 'output', 'description', 'define', 'responsive'];
    const activeCols = $derived(
        orderedCols.filter(col => classes.some(r => r[col] !== undefined))
    );
</script>

<!-- role="region" + aria-label satisfies the a11y requirement for tabindex on a non-interactive element -->
<div
    role="region"
    aria-label={label('class') + ' table'}
    tabindex="0"
    class="overflow-x-auto s-anchors s-anchors__underlined {expandable && !expanded ? 'v-truncate-fade' : ''}"
>
    <table class="s-table s-table__bx-simple">
        {#if showHeadings}
            <thead>
                <tr>
                    <th scope="col">{label('class')}</th>
                    {#each activeCols as col}
                        <th scope="col" class="{col === 'description' || col === 'define' ? 's-table--cell5' : ''} {col === 'responsive' ? 'ta-center' : ''}">{label(col)}</th>
                    {/each}
                </tr>
            </thead>
        {/if}
        <tbody class="fs-caption">
            {#each classes as row}
                <tr>
                    <th scope="row"><code>{row.class}</code></th>
                    {#each activeCols as col}
                        <td class="{col === 'output' ? 'ff-mono' : ''} {col === 'responsive' ? 'ta-center' : ''}">
                            {#if col === 'responsive'}
                                {#if row.responsive}
                                    <Icon src={IconCheckFillCircle} class="fc-green-400 w16 h16" aria-label="Yes" />
                                {/if}
                            {:else}
                                {@const val = String((row as Record<string, unknown>)[col] ?? '')}
                                {#if val === 'N/A'}
                                    <span class="fc-black-350">N/A</span>
                                {:else if val.startsWith('.')}
                                    <code>{val}</code>
                                {:else}
                                    {val}
                                {/if}
                            {/if}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

{#if expandable && !expanded}
    <button
        type="button"
        class="s-btn s-btn__tonal s-btn__sm w100 mt2 mb32"
        aria-expanded="false"
        onclick={() => expanded = true}
    >
        {expandButtonText}
    </button>
{:else}
    <div class="mb32"></div>
{/if}
