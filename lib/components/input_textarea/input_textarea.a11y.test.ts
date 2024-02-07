import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

// TODO note: all accessibility tests here are skipped currently. Revisit in Stacks v2

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid, classes = "", icon }: any) => html`
    <div data-testid="${testid}" class="p8 ws4 ${classes}">
        <label for="default-id">Label</label>
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

const states = ["has-error", "has-warning", "has-success"];
const sizes = ["sm", "md", "lg", "xl"];
const otherModifiers = ["creditcard", "search"];

["input", "textarea"].map((type) => {
    const children =
        type === "textarea" ? { default: "Enter your text here" } : undefined;

    describe(type, () => {
        // Base styles w/ value, modifiers
        runA11yTests({
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
                          id: `default-id`,
                      }
                    : {
                          id: `default-id`,
                      },
            children,
            template,
        });

        // Base styles w/o value; w/ readonly attr; w/ disabled attr
        customAttributes.forEach((attributes) => {
            const attrString = Object.keys(attributes).sort().join("-");

            runA11yTests({
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
                              id: `default-id`,
                              ...attributes,
                          }
                        : {
                              id: `default-id`,
                              ...attributes,
                          },
                children,
                template,
                // TODO revisit these skipped test ids
                skippedTestids: [/readonly/],
            });
        });

        // w/ state classes
        states.forEach((state) => {
            runA11yTests({
                baseClass: `s-${type} state-${state}`,
                tag: type,
                attributes:
                    type === "input"
                        ? {
                              type: "text",
                              value: "Text input value",
                              id: `default-id`,
                          }
                        : {
                              id: "default-id",
                          },
                children,
                template: ({ component, testid }) =>
                    template({ component, testid, classes: state }),
            });
        });
        // TODO interaction (focus) states?
    });
});
