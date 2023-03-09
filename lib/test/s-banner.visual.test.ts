import {
    getComponentTestVariations,
    runComponentTest,
    buildTestElement,
} from "../ts/test-utils";
import "../ts/index";

const testElementChild = (testid) => `
    <div
        class="d-flex flex__center jc-space-between s-banner--container"
        role="alertdialog"
        aria-describedby="banner-message"
    >
        <div aria-label="banner message">
            Test Banner: ${testid}
        </div>
        <div class="ml-auto myn8">
            <span class="s-btn s-banner--btn">Close</span>
        </div>
    </div>
`;

describe("s-banner", () => {
    getComponentTestVariations({
        baseClass: "s-banner",
        variants: ["info", "success", "warning", "danger"],
        modifiers: {
            primary: ["important"],
        },
    }).forEach(({ testid, classes, theme }) => {
        runComponentTest({
            element: buildTestElement({
                attributes: {
                    class: classes,
                    role: "alert",
                    ariaHidden: "false",
                },
                children: testElementChild(testid),
                tag: "aside",
                testid,
            }),
            testid,
            theme,
            type: "visual",
        });
    });
});
