import { assert, expect, fixture, html } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { buildIndex, getCellSlot, SortOrder } from "./table";
import "../../index";
import { AsLiterals } from "../../test/test-utils";

const user = userEvent.setup();

const mockSortableTable = () => {
    const sortDirectionIcons = (modifier: string) => html`
        <svg
            data-testid="test-sortable-${modifier}-svg-asc"
            aria-hidden="true"
            class="svg-icon iconArrowUpSm js-sorting-indicator js-sorting-indicator-asc d-none"
            width="14"
            height="14"
            viewBox="0 0 14 14"
        >
            <path d="M3 9h8L7 5 3 9Z"></path>
        </svg>
        <svg
            data-testid="test-sortable-${modifier}-svg-desc"
            aria-hidden="true"
            class="svg-icon iconArrowDownSm js-sorting-indicator js-sorting-indicator-desc d-none"
            width="14"
            height="14"
            viewBox="0 0 14 14"
        >
            <path d="M3 5h8L7 9 3 5Z"></path>
        </svg>
        <svg
            data-testid="test-sortable-${modifier}-svg-none"
            aria-hidden="true"
            class="svg-icon iconArrowUpDownSm js-sorting-indicator js-sorting-indicator-none"
            width="14"
            height="14"
            viewBox="0 0 14 14"
        >
            <path d="m7 2 4 4H3l4-4Zm0 10 4-4H3l4 4Z"></path>
        </svg>
    `;

    return html`
        <div class="s-table-container" data-testid="test-sortable-table">
            <table class="s-table s-table__sortable" data-controller="s-table">
                <thead>
                    <tr>
                        <th
                            data-s-table-target="column"
                            data-testid="test-sortable-season-col"
                        >
                            <button
                                data-action="click->s-table#sort"
                                data-testid="test-sortable-season-btn"
                            >
                                Season ${sortDirectionIcons("season")}
                            </button>
                        </th>
                        <th
                            data-s-table-target="column"
                            data-testid="test-sortable-month-col"
                        >
                            <button
                                data-action="click->s-table#sort"
                                data-testid="test-sortable-month-btn"
                            >
                                Starts in month ${sortDirectionIcons("month")}
                            </button>
                        </th>
                        <th
                            data-s-table-target="column"
                            data-testid="test-sortable-temp-col"
                        >
                            <button
                                data-action="click->s-table#sort"
                                data-testid="test-sortable-temp-btn"
                            >
                                Typical temperature in °C
                                ${sortDirectionIcons("temp")}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Winter</td>
                        <td data-s-table-sort-val="12">December</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Spring</td>
                        <td data-s-table-sort-val="3">March</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>Summer</td>
                        <td data-s-table-sort-val="6">June</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Fall</td>
                        <td data-s-table-sort-val="9">September</td>
                        <td>13</td>
                    </tr>
                    <tr data-s-table-sort-to="bottom" class="fw-bold">
                        <td colspan="2">Average temperature</td>
                        <td>13</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
};

describe("s-table", () => {
    describe("Column sorting indicators", () => {
        const allColIds = [
            "test-sortable-season-col",
            "test-sortable-month-col",
            "test-sortable-temp-col",
        ] as const;
        type ColId = AsLiterals<typeof allColIds>;

        const allSvgIds = [
            "test-sortable-season-svg-asc",
            "test-sortable-season-svg-desc",
            "test-sortable-season-svg-none",
            "test-sortable-month-svg-asc",
            "test-sortable-month-svg-desc",
            "test-sortable-month-svg-none",
            "test-sortable-temp-svg-asc",
            "test-sortable-temp-svg-desc",
            "test-sortable-temp-svg-none",
        ] as const;
        type SvgId = AsLiterals<typeof allSvgIds>;

        const expectThisColumnToBeSorted = (
            columnId?: ColId,
            order?: SortOrder
        ) => {
            allColIds.forEach((colId) => {
                const columnEl = screen.getByTestId(colId);

                if (columnId === colId) {
                    expect(columnEl).to.have.attribute("aria-sort", order);
                } else {
                    expect(columnEl).to.not.have.attribute("aria-sort");
                }
            });
        };

        const expectTheseIndicatorsToBeVisible = (visibleIds: SvgId[]) => {
            allSvgIds.forEach((svgId) => {
                const svgEl = screen.getByTestId(svgId);

                if (visibleIds.includes(svgId)) {
                    expect(svgEl).to.not.have.class("d-none");
                } else {
                    expect(svgEl).to.have.class("d-none");
                }
            });
        };

        beforeEach(async () => {
            await fixture(mockSortableTable());
        });

        it("should start toggle correctly between ASC/DESC after initial click", async () => {
            const seasonColumn = screen.getByTestId("test-sortable-season-btn");

            // Starting off in a fresh state, the "None" SVG icon should be visible
            expectThisColumnToBeSorted();
            expectTheseIndicatorsToBeVisible([
                "test-sortable-season-svg-none",
                "test-sortable-month-svg-none",
                "test-sortable-temp-svg-none",
            ]);

            // Cycle through all season sort options
            await user.click(seasonColumn);
            expectThisColumnToBeSorted(
                "test-sortable-season-col",
                SortOrder.Ascending
            );
            expectTheseIndicatorsToBeVisible([
                "test-sortable-season-svg-asc",
                "test-sortable-month-svg-none",
                "test-sortable-temp-svg-none",
            ]);

            await user.click(seasonColumn);
            expectThisColumnToBeSorted(
                "test-sortable-season-col",
                SortOrder.Descending
            );
            expectTheseIndicatorsToBeVisible([
                "test-sortable-season-svg-desc",
                "test-sortable-month-svg-none",
                "test-sortable-temp-svg-none",
            ]);

            // Clicking on a sorted column repeatedly will only toggle between ASC/DESC
            await user.click(seasonColumn);
            expectThisColumnToBeSorted(
                "test-sortable-season-col",
                SortOrder.Ascending
            );
            expectTheseIndicatorsToBeVisible([
                "test-sortable-season-svg-asc",
                "test-sortable-month-svg-none",
                "test-sortable-temp-svg-none",
            ]);
        });

        it('should toggle back a column indicator to "None" when another column is clicked', async () => {
            const seasonColumn = screen.getByTestId("test-sortable-season-btn");
            const monthColumn = screen.getByTestId("test-sortable-month-btn");

            // Starting off in a fresh state, the "None" SVG icon should be visible
            expectThisColumnToBeSorted();
            expectTheseIndicatorsToBeVisible([
                "test-sortable-season-svg-none",
                "test-sortable-month-svg-none",
                "test-sortable-temp-svg-none",
            ]);

            // Click season first; ASC indicator for Season column only should be visible
            await user.click(seasonColumn);
            expectThisColumnToBeSorted(
                "test-sortable-season-col",
                SortOrder.Ascending
            );
            expectTheseIndicatorsToBeVisible([
                "test-sortable-season-svg-asc",
                "test-sortable-month-svg-none",
                "test-sortable-temp-svg-none",
            ]);

            // Click on month next
            await user.click(monthColumn);
            expectThisColumnToBeSorted(
                "test-sortable-month-col",
                SortOrder.Ascending
            );
            expectTheseIndicatorsToBeVisible([
                "test-sortable-season-svg-none",
                "test-sortable-month-svg-asc",
                "test-sortable-temp-svg-none",
            ]);
        });
    });

    describe("Helper functions", () => {
        describe("buildIndex()", () => {
            it("should make references to individual cells that use `colspan`", async () => {
                const table = await fixture<HTMLTableElement>(html`
                    <table>
                        <tbody>
                            <tr>
                                <td>Fall</td>
                                <td>September</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td colspan="2">Winter</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Spring</td>
                                <td colspan="2">April</td>
                            </tr>
                        </tbody>
                    </table>
                `);

                expect(table.tBodies).to.have.length(1);

                const tableBody = table.tBodies[0];
                const tableIndex = buildIndex(tableBody);

                expect(tableIndex).to.satisfy((rows: typeof tableIndex) =>
                    rows.every((row) => row.length === 3)
                );
                expect(tableIndex[1][0]).to.equal(
                    tableIndex[1][1],
                    "the Winter cell is expected to be referenced twice in this index"
                );
                expect(tableIndex[2][1]).to.equal(
                    tableIndex[2][2],
                    "the April cell is expected to be referenced twice in this index"
                );
            });

            it("should make references to individual cells that use `rowspan`", async () => {
                const table = await fixture<HTMLTableElement>(html`
                    <table>
                        <tbody>
                            <tr>
                                <td rowspan="2">Fall</td>
                                <td>September</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>October</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td rowspan="2">Spring</td>
                                <td>April</td>
                                <td>46</td>
                            </tr>
                            <tr>
                                <td>October</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                `);

                expect(table.tBodies).to.have.length(1);

                const tableBody = table.tBodies[0];
                const tableIndex = buildIndex(tableBody);

                expect(tableIndex).to.satisfy((rows: typeof tableIndex) =>
                    rows.every((row) => row.length === 3)
                );
                expect(tableIndex[1][0]).to.equal(
                    tableIndex[0][0],
                    "the Fall cell is expected to be referenced twice across multiple rows"
                );
                expect(tableIndex[3][0]).to.equal(
                    tableIndex[2][0],
                    "the Spring cell is expected to be referenced twice in this index"
                );
            });
        });

        describe("getCellSlot()", () => {
            it("should correctly calculate the column number for each button", async () => {
                await fixture(mockSortableTable());

                [
                    "test-sortable-season-btn",
                    "test-sortable-month-btn",
                    "test-sortable-temp-btn",
                ].forEach((testID, index) => {
                    const buttonElement = screen.getByTestId(testID);
                    const columnCell = buttonElement.parentElement;

                    assert.isNotNull(columnCell);
                    assert.instanceOf(columnCell, HTMLTableCellElement);

                    expect(getCellSlot(columnCell)).to.equal(index);
                });
            });
        });
    });
});
