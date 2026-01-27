import { runA11yTests } from "../../test/a11y-test-utils";
import { IconAlert, IconCross } from "@stackoverflow/stacks-icons/icons";
import "../../index";

const bannerChildren = `
    <span class="s-banner--icon">${IconAlert}</span>    
    <span>
        <strong>Stacks is currently frozen in read-only mode.</strong> Contact the team to restore access.
    </span>
    <div class="s-banner--actions">
        <button class="s-link s-banner--dismiss">${IconCross}</button>
    </div>
`;

describe("banner", () => {
    runA11yTests({
        baseClass: "s-banner",
        variants: ["info", "success", "warning", "danger", "activity", "featured"],
        modifiers: {
            primary: ["important"],
        },
        attributes: {
            role: "alert",
            ariaHidden: "false",
        },
        children: {
            default: bannerChildren,
        },
    });
});
