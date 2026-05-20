import { html } from "@open-wc/testing";
import type { TestVariationArgs } from "../../test/test-utils";
import "../../index";

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

const getStatus = (status: boolean) => {
    return status ? `<span class="s-badge">Optional</span>` : "";
};

const getRequiredSymbol = (required: boolean | undefined) => {
    return required
        ? `<abbr class="s-required-symbol" title="required">*</abbr>`
        : "";
};

const getChildren = (text: string, status: boolean, required?: boolean) => {
    return `${text}${getRequiredSymbol(required)} ${getStatus(status)}`;
};

const getTestArgs = (disabled = false): TestVariationArgs => {
    const text = disabled ? "Disabled label" : "Example label";
    const prefix = disabled ? "disabled-" : "";

    return {
        baseClass: `s-label`,
        modifiers: {
            primary: ["sm", "lg"],
        },
        children: {
            [`${prefix}default`]: getChildren(text, false, false),
            [`${prefix}required`]: getChildren(text, false, true),
            [`${prefix}status`]: getChildren(text, true, false),
        },
        tag: "label",
        template: ({ component, testid }) =>
            labelTemplate({ component, testid, disabled }),
    };
};

export default getTestArgs;
