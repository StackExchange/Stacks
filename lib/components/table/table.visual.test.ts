import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div class="s-table-container p8" data-testid="${testid}">${component}</div>
`;

const rows = [
    {
        displayName: "Sponge",
        fullName: "Bobby Geometrislacks",
        progress: 10,
        active: true,
    },
    {
        displayName: "Patty",
        fullName: "Pat Supernova",
        progress: 50,
        active: true,
    },
    {
        displayName: "Crustoph",
        fullName: "Eugene Harold K",
        progress: 75,
        active: false,
    },
    {
        displayName: "SCheeks",
        fullName: "Sandra C.",
        progress: 100,
        active: true,
    },
];

const children = {
    default: `
        <thead>
            <tr>
                <th scope="col" class="s-table--bulk">
                    <label class="v-visible-sr" for="check">bulk action</label>
                    <input type="checkbox" class="s-checkbox" id="check">
                </th>
                <th scope="col">Display Name</th>
                <th scope="col">Full name</th>
                <th scope="col" colspan="2">Progress</th>
                <th scope="col"><span>class="v-visible-sr">Bar</span></th>
            </tr>
        </thead>
        <tbody>
            ${rows
                .map(
                    (row, i) => `
                <tr class="${row.active ? "" : "is-disabled"}">
                    <th scope="row">
                        <label class="v-visible-sr" for="check-${i}">bulk</label>
                        <input type="checkbox" class="s-checkbox" id="check-${i}">
                    </th>
                    <td>${row.displayName}</td>
                    <td>${row.fullName}</td>
                    <td class="s-table--progress">${row.progress}</td>
                    <td class="s-table--progress-bar">
                        <div class="s-progress bg-white">
                            <div class="s-progress--bar bg-blue-400" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${
                                row.progress
                            }" aria-label="progressbar" style="width: ${
                                row.progress
                            }%"></div>
                        </div>
                    </td>
                    <td><a class="s-link" href="#">Add</a></td>
                </tr>
            `
                )
                .join("")}
        </tbody>
        <tfoot class="s-table--totals">
            <tr>
                <td scope="row"><span class="v-visible-sr">Empty</span></td>
                <th scope="row" class="ta-left">Totals</th>
                <td><span class="v-visible-sr">Empty</span></td>
                <td colspan="2">160</td>
                <td><span class="v-visible-sr">Empty</span></td>
            </tr>
        </tfoot>
    `,
};

describe("table", () => {
    // default, sizes
    runVisualTests({
        baseClass: "s-table",
        variants: ["stripes"],
        modifiers: {
            primary: ["sm", "lg"],
            secondary: ["b0", "bx", "bx-simple", "sortable"],
            // global: ["ta-center", "ta-left", "ta-justify", "ta-right", "va-bottom", "va-middle", "va-top"], // Removing these modifiers *for now* since they create so many test images and would slow testing
        },
        tag: "table",
        children,
        template,
    });
});
