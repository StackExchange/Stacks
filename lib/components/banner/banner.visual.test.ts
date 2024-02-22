import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

const bannerChild = `
    <div
        class="d-flex flex__center jc-space-between s-banner--container"
        role="alertdialog"
        aria-labelledby="banner-title"
        aria-describedby="banner-description"
    >
        <div aria-label="banner message">
            <h2 id="banner-title">Banner heading</h2>
            <p id="banner-description">Banner description</p>
        </div>
        <div class="ml-auto myn8">
            <span class="s-btn s-banner--btn">Close</span>
        </div>
    </div>
`;

describe("banner", () => {
    runVisualTests({
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
    });
});
