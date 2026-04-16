<script lang="ts">
    import type { Snippet } from 'svelte';

    export type ExampleTableRow = {
        classes: string[];
        description: string;
        [key: string]: unknown;
    };

    interface Props {
        rows: ExampleTableRow[];
        /** Label for the class column. Defaults to "Class". */
        columnLabel?: string;
        /** Whether to show the class column. Defaults to true. */
        showClasses?: boolean;
        /**
         * Snippet that receives the row and renders the live example.
         * e.g. {#snippet example(row)}<Bling type={row.type} />{/snippet}
         */
        example: Snippet<[ExampleTableRow]>;
    }

    let { rows, columnLabel = 'Class', showClasses = true, example }: Props = $props();
</script>

<div class="overflow-x-auto">
    <table class="s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Example</th>
                {#if showClasses}
                    <th scope="col" class="s-table--cell5">{columnLabel}</th>
                {/if}
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each rows as row}
                <tr>
                    <td class="va-middle pr8">
                        {@render example(row)}
                    </td>
                    {#if showClasses}
                        <td class="va-middle">
                            <div class="d-flex g4 fw-wrap">
                                {#each row.classes as cls}
                                    {#if cls === 'N/A'}
                                        <span class="fc-black-350">N/A</span>
                                    {:else}
                                        <code>{cls}</code>
                                    {/if}
                                {/each}
                            </div>
                        </td>
                    {/if}
                    <td class="va-middle">{row.description}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
