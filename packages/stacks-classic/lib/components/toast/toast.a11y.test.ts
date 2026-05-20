import { runA11yTests } from "../../test/a11y-test-utils";
import { html } from "@open-wc/testing";
import { IconInfo, IconCross } from "@stackoverflow/stacks-icons/icons";
import "../../index";

describe("toast > notice", () => {
    runA11yTests({
        baseClass: "s-notice", // s-toast is a div wrapped around s-notice
        variants: [
            "info",
            "success",
            "warning",
            "danger",
            "activity",
            "featured",
        ],
        modifiers: {
            primary: ["important"],
        },
        attributes: {
            role: "alert",
            ariaHidden: "false",
        },
        children: {
            toast: `
                <span class="s-notice--icon">${IconInfo}</span>
                <span id="message">Toast notice message with an undo button</span>
                <div class="s-notice--actions">
                    <button type="button" class="s-link s-link__underlined">Undo</button>
                    <button type="button" class="s-link s-notice--dismiss" aria-label="Dismiss">${IconCross}</button>
                </div>`,
        },
        tag: "div",
        template: ({ component, testid }) => html`
            <div
                class="s-toast"
                role="alertdialog"
                aria-hidden="false"
                aria-labelledby="message"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
    });
});
