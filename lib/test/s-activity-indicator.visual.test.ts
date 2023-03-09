import { html } from "@open-wc/testing";
import {
    buildTestElement,
    getComponentTestVariations,
    runComponentTest,
} from "../ts/test-utils";
import "../ts/index";

describe("s-activity-indicator", () => {
    getComponentTestVariations({
        baseClass: "s-activity-indicator",
        variants: ["danger", "success", "warning"],
    }).forEach(({ testid, classes, theme }) => {
        ["", "new"].forEach((child) => {
            const testidModified = child ? `${testid}-${child}` : testid;

            runComponentTest({
                element: html`
                    <div
                        class="d-inline-flex ai-center jc-center hs1 ws1 p8"
                        data-testid="${testidModified}"
                    >
                        ${buildTestElement({
                            attributes: {
                                class: classes,
                            },
                            children: `${child}<div class="v-visible-sr">New activity</div>`,
                            testid: `${testidModified}-nested`,
                        })}
                    </div>
                `,
                testid: testidModified,
                theme,
                type: "visual",
            });
        });
    });
});
