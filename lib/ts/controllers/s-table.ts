import * as Stacks from "../stacks";

const sortedHeaderBackground = 'bg-powder-200';
const sortedColumnBackground = 'bg-powder-100';

export class TableController extends Stacks.StacksController {
    static targets = ["column"];
    readonly columnTarget!: Element;
    readonly columnTargets!: Element[];

    setCurrentSort(headElem: Element, direction: "asc" | "desc" | "none") {
        if (["asc", "desc", "none"].indexOf(direction) < 0) {
            throw "direction must be one of asc, desc, or none"
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const controller = this;
        this.columnTargets.forEach(function (target) {
            const isCurrrent = target === headElem;

            target.classList.toggle("is-sorted", isCurrrent && direction !== "none");
            target.classList.toggle(sortedHeaderBackground, isCurrrent);
            target.querySelectorAll(".js-sorting-indicator").forEach(function (icon) {
                const visible = isCurrrent ? direction : "none";
                icon.classList.toggle("d-none", !icon.classList.contains("js-sorting-indicator-" + visible));
            });

            if (!isCurrrent || direction === "none") {
                controller.removeElementData(target, "sort-direction");
            } else {
                controller.setElementData(target, "sort-direction", direction);
            }
        });
    };

    sort(evt: Event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const controller = this;
        const colHead = evt.currentTarget;
        if (!(colHead instanceof HTMLTableCellElement)) {
            throw "invalid event target";
        }
        const table = this.element as HTMLTableElement;
        const tbody = table.tBodies[0];

        // the column slot number of the clicked header
        const colno = getCellSlot(colHead);

        if (colno < 0) { // this shouldn't happen if the clicked element is actually a column head
            return;
        }

        // an index of the <tbody>, so we can find out for each row which <td> element is
        // in the same column slot as the header
        const slotIndex = buildIndex(tbody);

        // the default behavior when clicking a header is to sort by this column in ascending
        // direction, *unless* it is already sorted that way
        const direction = this.getElementData(colHead, "sort-direction") === "asc" ? -1 : 1;

        const rows = Array.from(table.tBodies[0].rows);

        // if this is still false after traversing the data, that means all values are integers (or empty)
        // and thus we'll sort numerically.
        let anyNonInt = false;

        // data will be a list of tuples [value, rowNum], where value is what we're sorting by
        const data: [string | number, number][] = [];
        let firstBottomRow: HTMLTableRowElement;
        rows.forEach(function (row, index) {
            const force = controller.getElementData(row, "sort-to");
            if (force === "top") {
                return; // rows not added to the list will automatically end up at the top
            } else if (force === "bottom") {
                if (!firstBottomRow) {
                    firstBottomRow = row;
                }
                return;
            }
            const cell = slotIndex[index][colno];
            if (!cell) {
                data.push(["", index]);
                return;
            }

            // unless the to-be-sorted-by value is explicitly provided on the element via this attribute,
            // the value we're using is the cell's text, trimmed of any whitespace
            const explicit = controller.getElementData(cell, "sort-val");
            const d = typeof explicit === "string" ? explicit : cell.textContent!.trim();

            if ((d !== "") && (`${parseInt(d, 10)}` !== d)) {
                anyNonInt = true;
            }
            data.push([d, index]);
        });

        // If all values were integers (or empty cells), sort numerically, with empty cells treated as
        // having the lowest possible value (i.e. sorted to the top if ascending, bottom if descending)
        if (!anyNonInt) {
            data.forEach(function (tuple) {
                tuple[0] = tuple[0] === "" ? Number.MIN_VALUE : parseInt(tuple[0] as string, 10);
            });
        }

        // We don't sort an array of <tr>, but instead an arrays of row *numbers*, because this way we
        // can enforce stable sorting, i.e. rows that compare equal are guaranteed to remain in the same
        // order (the JS standard does not gurantee this for sort()).
        data.sort(function (a, b) {
            // first compare the values (a[0])
            if (a[0] > b[0]) {
                return 1 * direction;
            } else if (a[0] < b[0]) {
                return -1 * direction;
            } else {
                // if the values are equal, compare the row numbers (a[1]) to guarantee stable sorting
                // (note that this comparison is independent of the sorting direction)
                return a[1] > b[1] ? 1 : -1;
            }
        });

        // this is the actual reordering of the table rows
        data.forEach(function (tup) {
            const row = rows[tup[1]];
            row.parentElement!.removeChild(row);

            for (let i = 0; i < row.cells.length; i++) {
                const cell = row.cells.item(i);

                cell?.classList.toggle(sortedColumnBackground, i === colno);
            }

            if (firstBottomRow) {
                tbody.insertBefore(row, firstBottomRow);
            } else {
                tbody.appendChild(row);
            }
        });

        // update the UI and set the `data-sort-direction` attribute if appropriate, so that the next click
        // will cause sorting in descending direction
        this.setCurrentSort(colHead, direction === 1 ? "asc" : "desc");
    }

}

function buildIndex(section: HTMLTableSectionElement): HTMLTableCellElement[][] {
    const result = buildIndexOrGetCellSlot(section);
    if (!(result instanceof Array)) {
        throw "shouldn't happen"
    }
    return result;
}

function getCellSlot(cell: HTMLTableCellElement): number {
    if (!(cell.parentElement && cell.parentElement.parentElement instanceof HTMLTableSectionElement)) {
        throw "invalid table"
    }
    const result = buildIndexOrGetCellSlot(cell.parentElement.parentElement, cell);
    if (typeof result !== "number") {
        throw "shouldn't happen"
    }
    return result
}

// Just because a <td> is the 4th *child* of its <tr> doesn't mean it belongs to the 4th *column*
// of the table. Previous cells may have a colspan; cells in previous rows may have a rowspan.
// Because we need to know which header cells and data cells belong together, we have to 1) find out
// which column number (or "slot" as we call it here) the header cell has, and 2) for each row find
// out which <td> cell corresponds to this slot (because those are the rows we're sorting by).
//
// That's what the following function does. If the second argument is not given, it returns an index
// of the table, which is an array of arrays. Each of the sub-arrays corresponds to a table row. The
// indices of the sub-array correspond to column slots; the values are the actual table cell elements.
// For example index[4][3] is the <td> or <th> in row 4, column 3 of the table section (<tbody> or <thead>).
// Note that this element is not necessarily even in the 4th (zero-based) <tr> -- if it has a rowSpan > 1,
// it may also be in a previous <tr>.
//
// If the second argument is given, it's a <td> or <th> that we're trying to find, and the algorithm
// stops as soon as it has found it and the function returns its slot number.
function buildIndexOrGetCellSlot(section: HTMLTableSectionElement, findCell?: HTMLTableCellElement) {
    const index = [];
    let curRow = section.children[0];

    // the elements of these two arrays are synchronized; the first array contains table cell elements,
    // the second one contains a number that indicates for how many more rows this elements will
    // exist (i.e. the value is initially one less than the cell's rowspan, and will be decreased for each row)
    const growing: HTMLTableCellElement[] = [];
    const growingRowsLeft: number[] = [];

    // continue while we have actual <tr>'s left *or* we still have rowspan'ed elements that aren't done
    while (curRow || growingRowsLeft.some(function (e) { return e !== 0; })) {
        const curIndexRow: HTMLTableCellElement[] = [];
        index.push(curIndexRow);

        let curSlot = 0;
        if (curRow) {
            for (let curCellInd = 0; curCellInd < curRow.children.length; curCellInd++) {
                while (growingRowsLeft[curSlot]) {
                    growingRowsLeft[curSlot]--;
                    curIndexRow[curSlot] = growing[curSlot];
                    curSlot++;
                }
                const cell = curRow.children[curCellInd];
                if (!(cell instanceof HTMLTableCellElement)) {
                    throw "invalid table"
                }
                if (getComputedStyle(cell).display === "none") {
                    continue;
                }
                if (cell === findCell) {
                    return curSlot;
                }
                const nextFreeSlot = curSlot + cell.colSpan;
                for (; curSlot < nextFreeSlot; curSlot++) {
                    growingRowsLeft[curSlot] = cell.rowSpan - 1; // if any of these is already growing, the table is broken -- no guarantees of anything
                    growing[curSlot] = cell;
                    curIndexRow[curSlot] = cell;
                }
            }
        }
        while (curSlot < growing.length) {
            if (growingRowsLeft[curSlot]) {
                growingRowsLeft[curSlot]--;
                curIndexRow[curSlot] = growing[curSlot];
            }
            curSlot++;
        }
        if (curRow) {
            curRow = curRow.nextElementSibling!;
        }
    }
    return findCell ? -1 : index; /* if findCell was given but we end up here, that means it isn't in this section */
}
