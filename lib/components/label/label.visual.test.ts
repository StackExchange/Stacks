import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const labelTemplate = ({ component, testid, isDisabled }: any) => {
    return html`
        <fieldset
            data-testid="${testid}"
            class="p8 ws3"
            ?disabled="${isDisabled}"
        >
            ${component}
        </fieldset>
    `;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getChildren = (text: string, status?: any) => {
    const typeClass =
        status && status !== "base" ? `s-label--status__${status}` : "";
    return `
        ${text}
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
    [true, false].forEach((isDisabled) => {
        const text = isDisabled ? "Disabled label" : "Example label";

        runVisualTests({
            baseClass: `s-label`,
            modifiers: {
                primary: ["sm", "md", "lg", "xl"],
            },
            children: isDisabled
                ? {
                      "disabled": getChildren(text),
                      "disabled-status": getChildren(text, "base"),
                      "disabled-status-beta": getChildren(text, "beta"),
                      "disabled-status-new": getChildren(text, "new"),
                      "disabled-status-required": getChildren(text, "required"),
                  }
                : {
                      "default": getChildren(text),
                      "status": getChildren(text, "base"),
                      "status-beta": getChildren(text, "beta"),
                      "status-new": getChildren(text, "new"),
                      "status-required": getChildren(text, "required"),
                  },
            tag: "label",
            template: ({ component, testid }) =>
                labelTemplate({ component, testid, isDisabled }),
        });
    });
});
