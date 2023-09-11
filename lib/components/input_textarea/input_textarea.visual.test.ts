import { html } from "@open-wc/testing";
import { runComponentTests } from "../../test/test-utils";
import "../../index";

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
            type: "visual",
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
        });

        // Base styles w/o value; w/ readonly attr; w/ disabled attr
        customAttributes.forEach((attributes) => {
            const attrString = Object.keys(attributes).sort().join("-");

            runComponentTests({
                type: "visual",
                baseClass: `s-${type} ${attrString}`,
                tag: type,
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
            });
        });

        // w/ state classes; .is-readonly
        states.forEach((state) => {
            runComponentTests({
                type: "visual",
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
            });
        });
        // TODO interaction (focus) states?
    });
});
