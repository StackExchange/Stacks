import { runComponentTests } from "../../test/test-utils";
import "../../index";

const bannerChild = `
    <div
        class="d-flex flex__center jc-space-between s-banner--container"
        role="alertdialog"
        aria-describedby="banner-message"
    >
        <div aria-label="banner message">
            Test Banner
        </div>
        <div class="ml-auto myn8">
            <span class="s-btn s-banner--btn">Close</span>
        </div>
    </div>
`;

describe("banner", () => {
    runComponentTests({
        type: "visual",
        baseClass: "s-banner",
        variants: ["info", "success", "warning", "danger"],
        modifiers: {
            primary: ["important"],
        },
        attributes: {
            role: "alert",
            ariaHidden: "false",
        },
        children: {
            default: bannerChild,
        },
        tag: "aside",
    });
});
