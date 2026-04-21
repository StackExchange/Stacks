<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import { IconChevron16Up, IconChevron16Down, IconChevron16UpDown } from '@stackoverflow/stacks-icons/icons';

    const rows = [
        { season: 'Winter', month: 'December', monthSort: 12, temp: 2  },
        { season: 'Spring', month: 'March',    monthSort: 3,  temp: 13 },
        { season: 'Summer', month: 'June',     monthSort: 6,  temp: 25 },
        { season: 'Fall',   month: 'September',monthSort: 9,  temp: 13 },
    ];

    let col = $state<number | null>(null);
    let dir = $state<'asc' | 'desc'>('asc');

    const sorted = $derived.by(() => {
        if (col === null) return rows;
        return [...rows].sort((a, b) => {
            let v: number;
            if (col === 0)      v = a.season.localeCompare(b.season);
            else if (col === 1) v = a.monthSort - b.monthSort;
            else                v = a.temp - b.temp;
            return dir === 'asc' ? v : -v;
        });
    });

    function sort(c: number) {
        if (col === c) dir = dir === 'asc' ? 'desc' : 'asc';
        else { col = c; dir = 'asc'; }
    }

    function icon(c: number) {
        if (col !== c) return IconChevron16UpDown;
        return dir === 'asc' ? IconChevron16Up : IconChevron16Down;
    }

    const headers = ['Season', 'Starts in month', 'Typical temperature in °C'];
</script>

<div class="s-table-container">
    <table class="s-table s-table__sortable">
        <thead>
            <tr>
                {#each headers as h, c (c)}
                    <th scope="col" class:is-sorted={col === c} data-s-table-target="column">
                        <button type="button" onclick={() => sort(c)}>
                            {h}
                            <Icon src={icon(c)} aria-hidden="true" />
                        </button>
                    </th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each sorted as r (r.season)}
                <tr>
                    <td>{r.season}</td>
                    <td>{r.month}</td>
                    <td>{r.temp}</td>
                </tr>
            {/each}
            <tr class="fw-bold">
                <td colspan="2">Average temperature</td>
                <td>13</td>
            </tr>
        </tbody>
    </table>
</div>
