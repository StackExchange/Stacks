import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid, className }: any) => html`
    <div class="d-inline-flex p8 ${className}" data-testid="${testid}">
        ${component}
    </div>
`;

const child = (attr?: string): string => {
    return `<select id="select-menu" ${attr}>
        <option value="" selected>Please select one…</option>
        <option value="walk">Walk</option>
        <option value="bike">Bicycle</option>
        <option value="car">Automobile</option>
        <option value="rail">Train</option>
        <option value="fly">Plane</option>
    </select>`;
};

describe("select", () => {
    // default, sizes
    runVisualTests({
        baseClass: "s-select",
        modifiers: {
            primary: ["sm", "md", "lg", "xl"],
        },
        children: {
            default: child(),
        },
        template,
    });

    // modifier classes
    [
        {
            class: "is-disabled",
            attr: 'disabled=""',
        },
        {
            class: "is-readonly",
            attr: 'readonly=""',
        },
        {
            class: "has-success",
        },
        {
            class: "has-error",
        },
        {
            class: "has-warning",
        },
    ].forEach((state) => {
        runVisualTests({
            baseClass: "s-select",
            modifiers: {
                global: [`state-${state.class}`],
            },
            children: {
                selected: child(state.attr),
            },
            template: ({ component, testid }) =>
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                template({ component, testid, className: state.class }),
            options: {
                includeNullModifier: false,
            },
        });
    });
});
