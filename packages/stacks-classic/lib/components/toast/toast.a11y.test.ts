import { runA11yTests } from "../../test/a11y-test-utils";
import { html } from "@open-wc/testing";
import { IconInfo, IconCross } from "@stackoverflow/stacks-icons/icons";
import "../../index";

describe("toast > notice", () => {
    runA11yTests({
        baseClass: "s-notice", // s-toast is an <aside> wrapped around s-notice
        variants: ["info", "success", "warning", "danger", "activity", "featured"],
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
                    Toast notice message with an undo button
                <div class="s-notice--actions">
                    <button type="button" class="s-link s-link__underlined">Undo</button>
                    <button type="button" class="s-link s-notice--dismiss" aria-label="Dismiss">${IconCross}</button>
                </div>`,
        },
        tag: "aside",
        template: ({ component, testid }) => html`
            <div
                class="s-toast"
                role="alertdialog"
                aria-hidden="false"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
    });
});