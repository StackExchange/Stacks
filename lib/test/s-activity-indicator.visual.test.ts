import { html } from "@open-wc/testing";
import { getTestVariations, makeTest, makeTestElement } from "../ts/test-utils";
import "../ts/index";

describe("s-activity-indicator", () => {
    getTestVariations({
        baseClass: "s-activity-indicator",
        variants: ["danger", "success", "warning"],
    }).forEach(({ testid, classes, theme }) => {
        [null, "new"].forEach((child) => {
            const testidModified = child ? `${testid}-${child}` : testid;

            makeTest({
                element: html`
                    <div
                        class="d-inline-flex p8"
                        data-testid="${testidModified}"
                    >
                        ${makeTestElement({
                            attributes: {
                                class: classes,
                            },
                            children:
                                `${child}<div class="v-visible-sr">New activity</div>`,
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
