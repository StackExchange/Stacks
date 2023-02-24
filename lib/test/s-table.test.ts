import { html, fixture, expect } from "@open-wc/testing";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "../ts/index";

const user = userEvent.setup();

const testSortableTable = () => {
    const testSortabledIcons = (modifier: string) => html`
        <svg
            data-testid="test-sortable-${modifier}-svg-asc"
            aria-hidden="true"
            class="svg-icon iconArrowUpSm js-sorting-indicator js-sorting-indicator-asc d-none"
            width="14"
            height="14"
            viewBox="0 0 14 14">
            <path d="M3 9h8L7 5 3 9Z"></path>
        </svg>
        <svg
            data-testid="test-sortable-${modifier}-svg-desc"
            aria-hidden="true"
            class="svg-icon iconArrowDownSm js-sorting-indicator js-sorting-indicator-desc d-none"
            width="14"
            height="14"
            viewBox="0 0 14 14">
            <path d="M3 5h8L7 9 3 5Z"></path>
        </svg>
        <svg
            data-testid="test-sortable-${modifier}-svg-none"
            aria-hidden="true"
            class="svg-icon iconArrowUpDownSm js-sorting-indicator js-sorting-indicator-none"
            width="14"
            height="14"
            viewBox="0 0 14 14">
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
                                data-testid="test-sortable-season-button">
                                Season ${testSortabledIcons("season")}
                            </button>
                        </th>
                        <th data-s-table-target="column">
                            <button
                                data-action="click->s-table#sort"
                                data-testid="test-sortable-month-button">
                                Starts in month ${testSortabledIcons("month")}
                            </button>
                        </th>
                        <th data-s-table-target="column">
                            <button
                                data-action="click->s-table#sort"
                                data-testid="test-sortable-temp-button">
                                Typical temperature in °C ${testSortabledIcons("temp")}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Winter</td><td data-s-table-sort-val="12">December</td><td>2</td></tr>
                    <tr><td>Spring</td><td data-s-table-sort-val="3">March</td><td>13</td></tr>
                    <tr><td>Summer</td><td data-s-table-sort-val="6">June</td><td>25</td></tr>
                    <tr><td>Fall</td><td data-s-table-sort-val="9">September</td><td>13</td></tr>
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
}

describe("s-table", () => {
    it("table sort updates on click", async () => {
        await fixture(testSortableTable());

        const sortButtonSeason = screen.getByTestId("test-sortable-season-button");
        const sortButtonMonth = screen.getByTestId("test-sortable-month-button");

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
