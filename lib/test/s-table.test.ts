import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { buildIndex, getCellSlot } from "../ts/controllers/s-table";
import "../ts/index";

const user = userEvent.setup();

const mockSortableTable = () => {
    const testSortabledIcons = (modifier: string) => html`
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
                        <th data-s-table-target="column">
                            <button
                                data-action="click->s-table#sort"
                                data-testid="test-sortable-season-button"
                            >
                                Season ${testSortabledIcons("season")}
                            </button>
                        </th>
                        <th data-s-table-target="column">
                            <button
                                data-action="click->s-table#sort"
                                data-testid="test-sortable-month-button"
                            >
                                Starts in month ${testSortabledIcons("month")}
                            </button>
                        </th>
                        <th data-s-table-target="column">
                            <button
                                data-action="click->s-table#sort"
                                data-testid="test-sortable-temp-button"
                            >
                                Typical temperature in °C
                                ${testSortabledIcons("temp")}
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

const testAriaHiddenSvgs = (allSvgs: string[], visible?: string) => {
    return allSvgs.forEach((svg) => {
        const svgEl = screen.getByTestId(svg);

        if (svg === visible) {
            expect(svgEl).to.have.attribute("aria-hidden", "false");
        } else {
            expect(svgEl).to.have.attribute("aria-hidden", "true");
        }
    });
};

describe("s-table", () => {
    describe("Stimulus.js controller", () => {
        it("table sort updates on click", async () => {
            await fixture(mockSortableTable());

            const sortButtonSeason = screen.getByTestId(
                "test-sortable-season-button"
            );
            const sortButtonMonth = screen.getByTestId(
                "test-sortable-month-button"
            );

            // const table = screen.getByTestId("test-sortable-table");
            const allSvgs = [
                "test-sortable-season-svg-asc",
                "test-sortable-season-svg-desc",
                "test-sortable-season-svg-none",
                "test-sortable-month-svg-asc",
                "test-sortable-month-svg-desc",
                "test-sortable-month-svg-none",
            ];

            testAriaHiddenSvgs(allSvgs);

            // Cycle through all season sort options
            await user.click(sortButtonSeason);
            testAriaHiddenSvgs(allSvgs, "test-sortable-season-svg-asc");
            await user.click(sortButtonSeason);
            testAriaHiddenSvgs(allSvgs, "test-sortable-season-svg-desc");
            await user.click(sortButtonSeason);
            testAriaHiddenSvgs(allSvgs, "test-sortable-season-svg-none");
            await user.click(sortButtonSeason);
            testAriaHiddenSvgs(allSvgs);

            // Set month sort then switch to season sort
            await user.click(sortButtonMonth);
            testAriaHiddenSvgs(allSvgs, "test-sortable-month-svg-asc");
            await user.click(sortButtonSeason);
            testAriaHiddenSvgs(allSvgs, "test-sortable-season-svg-asc");
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
                    "test-sortable-season-button",
                    "test-sortable-month-button",
                    "test-sortable-temp-button",
                ].forEach((testID, index) => {
                    const buttonElement = screen.getByTestId(testID);
                    const columnCell = buttonElement.parentElement;

                    expect(columnCell).to.not.be.null;
                    expect(getCellSlot(columnCell)).to.equal(index);
                });
            });
        });
    });
});
