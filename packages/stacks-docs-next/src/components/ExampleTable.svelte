<script lang="ts">
    import type { Snippet } from 'svelte';

    export type ExampleTableRow = {
        classes: string[];
        description: string;
        [key: string]: unknown;
    };

    interface Props {
        rows: ExampleTableRow[];
        /**
         * Snippet that receives the row and renders the live example.
         * e.g. {#snippet example(row)}<Bling type={row.type} />{/snippet}
         */
        example: Snippet<[ExampleTableRow]>;
    }

    let { rows, example }: Props = $props();
</script>

<div class="overflow-x-auto">
    <table class="s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col" class="s-table--cell5">Class</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each rows as row}
                <tr>
                    <td class="va-middle pr8">
                        {@render example(row)}
                    </td>
                    <td class="va-middle">
                        <div class="d-flex g4 fw-wrap">
                            {#each row.classes as cls}<code>{cls}</code>{/each}
                        </div>
                    </td>
                    <td class="va-middle">{row.description}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
