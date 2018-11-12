(function () {
    "use strict";
    Stacks.addController("s-sortable-column", {

        setCurrentSort: function (direction) {
            if (["asc", "desc", "none"].indexOf(direction) < 0) {
                throw "direction must be one of asc, desc, or none"
            }
            this.element.querySelectorAll(".js-sorting-indicator").forEach(function (el) {
                el.classList.toggle("d-none", !el.classList.contains("js-sorting-indicator-" + direction));
            });
            this.element.classList.toggle("is-sorted", direction !== "none");

            if (direction === "none") {
                this.data.delete("direction");
            } else {
                this.data.set("direction", direction);
            }
        },

        sort: function (evt) {
            var controller = this;
            var table = this.element.closest("table");
            var tbody = table.tBodies[0];

            var allExceptThis = Array.from(table.querySelectorAll("[data-controller~='s-sortable-column']")).map(function (elem) {
                return controller.application.getControllerForElementAndIdentifier(elem, "s-sortable-column");
            }).filter(function (cont) { return cont !== controller });

            // the column slot number of the clicked header
            var colno = getCellSlot(this.element);

            if (colno < 0) { // this shouldn't happen because we're searching the header cell's grandparent element
                return;
            }

            // an index of the <tbody>, so we can find out for each row which <td> element is
            // in the same column slot as the header
            var slotIndex = buildIndex(tbody);

            // the default behavior when clicking a header is to sort by this column in ascending
            // direction, *unless* it is already sorted that way
            var direction = this.data.get("direction") === "asc" ? -1 : 1;

            var rows = Array.from(table.tBodies[0].rows);

            // if this is still false after traversing the data, that means all values are integers (or empty)
            // and thus we'll sort numerically.
            var anyNonInt = false;

            // data will be a list of tuples [value, rowNum], where value is what we're sorting by
            var data = rows.map(function (row, index) {
                var cell = slotIndex[index][colno];
                if (!cell) {
                    return ["", index];
                }

                // unless the to-be-sorted-by value is explicitly provided on the element via this attribute,
                // the value we're using is the cell's text, trimmed of any whitespace
                var explicit = cell.getAttribute("data-sort-val");
                var d = typeof explicit === "string" ? explicit : cell.textContent.trim();

                if ((d !== "") && (parseInt(d, 10) + "" !== d)) {
                    anyNonInt = true;
                }
                return [d, index];
            });

            // If all values were integers (or empty cells), sort numerically, with empty cells treated as
            // having the lowest possible value (i.e. sorted to the top if ascending, bottom if descending)
            if (!anyNonInt) {
                data.forEach(function (tuple) {
                    tuple[0] = tuple[0] === "" ? Number.MIN_VALUE : parseInt(tuple[0], 10);
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
                var row = rows[tup[1]];
                row.parentElement.removeChild(row);
                tbody.appendChild(row);
            });

            // update the UI and set the `data-sorted-asc` attribute if appropriate, so that the next click
            // will cause sorting in descending direction
            this.setCurrentSort(direction === 1 ? "asc" : "desc");
            allExceptThis.forEach(function (cont) { cont.setCurrentSort("none") });
        }
    });

    function buildIndex(section) {
        return buildIndexOrGetCellSlot(section);
    }

    function getCellSlot(cell) {
        return buildIndexOrGetCellSlot(cell.parentElement.parentElement, cell);
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
    function buildIndexOrGetCellSlot(section, findCell) {
        var index = [];
        var curRow = section.children[0];

        // the elements of these two arrays are synchronized; the first array contains table cell elements,
        // the second one contains a number that indicates for how many more rows this elements will
        // exist (i.e. the value is initially one less than the cell's rowspan, and will be decreased for each row)
        var growing = [];
        var growingRowsLeft = [];

        // continue while we have actual <tr>'s left *or* we still have rowspan'ed elements that aren't done
        while (curRow || growingRowsLeft.some(function (e) { return e; })) {
            var curIndexRow = [];
            index.push(curIndexRow);

            var curSlot = 0;
            if (curRow) {
                for (var curCellInd = 0; curCellInd < curRow.children.length; curCellInd++) {
                    while (growingRowsLeft[curSlot]) {
                        growingRowsLeft[curSlot]--;
                        curIndexRow[curSlot] = growing[curSlot];
                        curSlot++;
                    }
                    var cell = curRow.children[curCellInd];
                    if (cell === findCell) {
                        return curSlot;
                    }
                    var nextFreeSlot = curSlot + cell.colSpan;
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
            }
            if (curRow) {
                curRow = curRow.nextElementSibling;
            }
        }
        return findCell ? -1 : index; /* if findCell was given but we end up here, that means it isn't in this section */
    }

})();
