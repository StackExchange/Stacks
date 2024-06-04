import { html } from "@open-wc/testing";
import type { TestVariationArgs } from "../../test/test-utils";
import "../../index";

type StatusType = "base" | "beta" | "new" | "required";

const labelTemplate = ({
    component,
    testid,
    disabled,
}: {
    component: unknown;
    testid: string;
    disabled: boolean;
}) => {
    return html`
        <fieldset
            data-testid="${testid}"
            class="p8 ws3"
            ?disabled="${disabled}"
        >
            ${component}
        </fieldset>
    `;
};

const getStatus = (status: StatusType | undefined) => {
    if (!status) return "";
    const statusTypeClass =
        status !== "base" ? `s-label--status__${status}` : "";
    return `<span class="s-label--status ${statusTypeClass}">${status}</span>`;
};

const getRequiredSymbol = (required: boolean | undefined) => {
    return required
        ? `<abbr class="s-required-symbol" title="required">*</abbr>`
        : "";
};

const getChildren = (text: string, status?: StatusType, required?: boolean) => {
    return `${text}${getRequiredSymbol(required)} ${getStatus(status)}`;
};

const getTestArgs = (disabled = false): TestVariationArgs => {
    const text = disabled ? "Disabled label" : "Example label";
    const prefix = disabled ? "disabled-" : "";

    return {
        baseClass: `s-label`,
        modifiers: {
            primary: ["sm", "md", "lg", "xl"],
        },
        children: {
            [`${prefix}default`]: getChildren(text),
            [`${prefix}required`]: getChildren(text, undefined, true),
            [`${prefix}status`]: getChildren(text, "base"),
            [`${prefix}status-beta`]: getChildren(text, "beta"),
            [`${prefix}status-new`]: getChildren(text, "new"),
            [`${prefix}status-required`]: getChildren(text, "required"),
        },
        tag: "label",
        template: ({ component, testid }) =>
            labelTemplate({ component, testid, disabled }),
    };
};

export default getTestArgs;
