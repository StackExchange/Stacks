import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid }: any) => html`
    <div data-testid="${testid}" class="p8 ws1">${component}</div>
`;

describe("input-fill", () => {
    runA11yTests({
        baseClass: `s-input-fill`,
        modifiers: {
            global: ["order-first", "order-last"],
        },
        children: {
            default: "input fill",
        },
        template,
    });
});
