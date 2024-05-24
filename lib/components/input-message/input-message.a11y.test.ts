import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

const states = [
    {
        class: "",
        children:
            'This is a stateless input message. <a href="">Learn more</a>.',
    },
    {
        class: "has-error",
        children: 'This is an error input message. <a href="">Learn more</a>.',
    },
    {
        class: "has-success",
        children: 'This is a success input message. <a href="">Learn more</a>.',
    },
    {
        class: "has-warning",
        children: 'This is a warning input message. <a href="">Learn more</a>.',
    },
    {
        class: "disabled",
        children: "This is a disabled input message.",
    },
];

describe("input-message", () => {
    states.forEach((state) => {
        runA11yTests({
            baseClass: `s-input-message ${
                state.class ? `state-${state.class}` : ""
            }`,
            children: {
                default: state.children,
            },
            template: ({ component, testid }) => {
                const isDisabled = state.class === "disabled";
                const stateClass =
                    state.class && state.class !== "disabled"
                        ? state.class
                        : "";

                return html`
                    <fieldset
                        data-testid="${testid}"
                        class="${stateClass}"
                        ?disabled="${isDisabled}"
                    >
                        ${component}
                    </fieldset>
                `;
            },
        });
    });
});
