import { runA11yTests } from "../../test/a11y-test-utils";
import { IconHelp } from "@stackoverflow/stacks-icons/icons";
import "../../index";

describe("notice", () => {
    runA11yTests({
        baseClass: "s-notice",
        variants: ["info", "success", "warning", "danger", "activity", "featured"],
        modifiers: {
            primary: ["important"],
        },
        children: {
            default: `<span class="s-notice--icon">${IconHelp}</span>Test notice <code>some code</code> <a class="s-link s-link__inherit s-link__underlined" href="#">Link</a>`,
        },
        tag: "aside",
    });
});
