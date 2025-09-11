import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import { IconClearSm } from "@stackoverflow/stacks-icons/icons";
import "../../index";

describe("modal", () => {
    runA11yTests({
        baseClass: `s-modal`,
        variants: ["danger"],
        modifiers: {
            primary: ["celebration"],
            secondary: ["full"],
        },
        children: {
            default: `
                <div class="s-modal--dialog" role="document">
                    <h1 class="s-modal--header" id="modal-title">Modal header</h1>
                    <p class="s-modal--body" id="modal-description">Modal body. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div class="d-flex gx8 s-modal--footer">
                        <button class="s-btn s-btn__filled" type="button">Confirm</button>
                        <button class="s-btn s-btn__muted" type="button">Cancel</button>
                    </div>
                    <button class="s-modal--close s-btn s-btn__muted" type="button" aria-label="Close">
                        ${IconClearSm}
                    </button>
                </div>
            `,
        },
        tag: "aside",
        attributes: {
            "id": "example-modal",
            "tabindex": "-1",
            "aria-hidden": "false",
            "aria-labelledby": "modal-title",
            "class": "ps-relative p32",
        },
        template: ({ component, testid }) => html`
            <div class="m8 ws6" data-testid="${testid}">${component}</div>
        `,
    });
});
