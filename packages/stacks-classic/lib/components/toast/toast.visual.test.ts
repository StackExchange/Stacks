import { runVisualTests, replaceHtml } from "../../test/visual-test-utils";
import { html } from "@open-wc/testing";
import {
    IconHelp,
    IconInfo,
    IconCheck,
    IconAlert,
    IconStar,
    IconAlertFill,
    IconNotification,
    IconCross,
} from "@stackoverflow/stacks-icons/icons";
import "../../index";


const variants: string[] = ["info", "success", "warning", "danger", "activity", "featured"];

const variantIconMap: Record<string, string> = {
    info: IconInfo,
    success: IconCheck,
    warning: IconAlert,
    danger: IconAlertFill,
    activity: IconNotification,
    featured: IconStar
};

// s-toast is an <aside></aside> wrapped around s-notice.
describe("toast > notice", () => {
    runVisualTests({
        baseClass: "toast s-notice", // We need the `toast ` prefix so the notice test images don't get overwritten
        variants: variants,
        modifiers: {
            primary: ["important"],
        },
        attributes: {
            role: "alertdialog",
            ariaHidden: "false",
        },
        children: {
            default: `
                <span class="s-notice--icon">ICON_PLACEHOLDER</span>
                    Toast notice message with an undo button
                <div class="s-notice--actions">
                    <button type="button" class="s-link s-link__underlined">Undo</button>
                    <button type="button" class="s-link s-notice--dismiss" aria-label="Dismiss">${IconCross}</button>
                </div>`,
        },
        tag: "aside",
        template: ({ component, testid }) => {
            //Determine variant from testid
            const variant = variants.find((v) => testid.includes(v));

            //Determine icon and swap
            const icon = variant ? variantIconMap[variant] : IconHelp;
            const updatedComponent = replaceHtml(component, "ICON_PLACEHOLDER", icon);

            return html`
            <div
                class="s-toast"
                role="alertdialog"
                aria-hidden="false"
                data-testid="${testid}"
            >
                ${updatedComponent}
            </div>
        `}
    });
});