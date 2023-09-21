import { html } from "@open-wc/testing";
import { runComponentTests } from "../../test/test-utils";
import "../../index";

// TODO note: all accessibility tests here are skipped currently. Revisit in Stacks v2

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid, classes = "", icon }: any) => html`
    <div data-testid="${testid}" class="p8 ws4 ${classes}">
        ${component}${icon}
    </div>
`;

const customAttributes = [
    {
        placeholder: "Enter your text here",
    },
    {
        readonly: "",
    },
    {
        disabled: "",
    },
];

const states = ["has-error", "has-warning", "has-success", "is-readonly"];
const sizes = ["sm", "md", "lg", "xl"];
const otherModifiers = ["creditcard", "search"];

["input", "textarea"].map((type) => {
    const children =
        type === "textarea" ? { default: "Enter your text here" } : undefined;

    describe(type, () => {
        // Base styles w/ value, modifiers
        runComponentTests({
            type: "a11y",
            baseClass: `s-${type}`,
            modifiers: {
                primary: [...sizes, ...otherModifiers],
            },
            tag: type,
            attributes:
                type === "input"
                    ? {
                          type: "text",
                          value: "Text input value",
                      }
                    : {},
            children,
            template,
            // TODO Stacks v2 should resolve most issues
            skippedTestids: [/s-input/, /s-textarea/],
        });

        // Base styles w/o value; w/ readonly attr; w/ disabled attr
        customAttributes.forEach((attributes) => {
            const attrString = Object.keys(attributes).sort().join("-");

            runComponentTests({
                type: "a11y",
                baseClass: `s-${type} ${attrString}`,
                tag: type,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                attributes:
                    type === "input"
                        ? {
                              type: "text",
                              value: attributes.placeholder
                                  ? null
                                  : "Text input value",
                              ...attributes,
                          }
                        : attributes,
                children,
                template,
                // TODO Stacks v2 should resolve most issues
                skippedTestids: [/s-input/, /s-textarea/],
            });
        });

        // w/ state classes; .is-readonly
        states.forEach((state) => {
            runComponentTests({
                type: "a11y",
                baseClass: `s-${type} state-${state}`,
                tag: type,
                attributes:
                    type === "input"
                        ? {
                              type: "text",
                              value: "Text input value",
                          }
                        : {},
                children,
                template: ({ component, testid }) =>
                    template({ component, testid, classes: state }),
                // TODO Stacks v2 should resolve most issues
                skippedTestids: [/s-input/, /s-textarea/],
            });
        });
        // TODO interaction (focus) states?
    });
});
