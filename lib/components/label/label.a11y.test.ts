import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const labelTemplate = ({ component, testid }: any) => {
    return html`
        <fieldset data-testid="${testid}" class="p8 ws3">${component}</fieldset>
    `;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getChildren = (status?: any) => {
    const typeClass =
        status && status !== "base" ? `s-label--status__${status}` : "";
    return `
        Example label
        ${
            status
                ? `
            <span class="s-label--status ${typeClass}">${
                status ?? "no type"
            }</span>
        `
                : ""
        }
    `;
};

describe("label", () => {
    runA11yTests({
        baseClass: `s-label`,
        modifiers: {
            primary: ["sm", "md", "lg", "xl"],
        },
        children: {
            "default": getChildren(),
            "status": getChildren("base"),
            "status-beta": getChildren("beta"),
            "status-new": getChildren("new"),
            "status-required": getChildren("required"),
        },
        tag: "label",
        template: ({ component, testid }) =>
            labelTemplate({ component, testid }),
    });
});
