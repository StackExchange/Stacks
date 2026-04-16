<script lang="ts">
    const svgUp    = `<svg aria-hidden="true" class="svg-icon iconArrowUpSm" width="14" height="14" viewBox="0 0 14 14"><path d="M3 9h8L7 5z"/></svg>`;
    const svgDown  = `<svg aria-hidden="true" class="svg-icon iconArrowDownSm" width="14" height="14" viewBox="0 0 14 14"><path d="M3 5h8L7 9z"/></svg>`;
    const svgBoth  = `<svg aria-hidden="true" class="svg-icon iconArrowUpDownSm" width="14" height="14" viewBox="0 0 14 14"><path d="m7 2 4 4H3zm0 10 4-4H3z"/></svg>`;

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
        if (col !== c) return svgBoth;
        return dir === 'asc' ? svgUp : svgDown;
    }

    const headers = ['Season', 'Starts in month', 'Typical temperature in °C'];
</script>

<div class="s-table-container">
    <table class="s-table s-table__sortable">
        <thead>
            <tr>
                {#each headers as h, c}
                    <th scope="col" class:is-sorted={col === c} data-s-table-target="column">
                        <button type="button" onclick={() => sort(c)}>
                            {h}
                            {@html icon(c)}
                        </button>
                    </th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each sorted as r}
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
