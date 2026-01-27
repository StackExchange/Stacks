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
} from "@stackoverflow/stacks-icons/icons";
import "../../index";

const variantIconMap: Record<string, string> = {
    info: IconInfo,
    success: IconCheck,
    warning: IconAlert,
    danger: IconAlertFill,
    activity: IconNotification,
    featured: IconStar
};

const variants: string[] = ["info", "success", "warning", "danger", "activity", "featured"];

describe("notice", () => {
    runVisualTests({
        baseClass: "s-notice",
        variants: variants,
        modifiers: {
            primary: ["important"],
        },
        attributes: {
            role: "presentation",
        },
        children: {
            default: `<span class="s-notice--icon">ICON_PLACEHOLDER</span><span>Test notice message with <code>some code</code> and <a href="#">Link</a></span>`,
            longtext: `<span class="s-notice--icon">ICON_PLACEHOLDER</span><span>Test notice message with <code>some code</code> and <a href="#">Link</a> which is also really long and will surely spill over into the next line thus allowing us to test the component when it contains long text.</span>`,
        },
        tag: "div",
        template: ({ component, testid }) => {
            //Determine variant from testid
            const variant = variants.find((v) => testid.includes(v));

            //Determine icon and swap
            const icon = variant ? variantIconMap[variant] : IconHelp;
            const updatedComponent = replaceHtml(component, "ICON_PLACEHOLDER", icon);

            return html`
                <div
                    class="s-notice"
                    role="presentation"
                    data-testid="${testid}"
                >
                    ${updatedComponent}
                </div>
                `;
        },
    });
});