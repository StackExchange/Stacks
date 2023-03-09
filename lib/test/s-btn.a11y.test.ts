import {
    runComponentTest,
    buildTestElement,
    getComponentTestVariations,
} from "../ts/test-utils";
import "../ts/index";

describe("s-btn", () => {
    getComponentTestVariations({
        baseClass: "s-btn",
        variants: ["danger", "muted", "primary"],
        modifiers: {
            primary: ["filled", "outlined"],
            secondary: [...["xs", "sm", "md"], ...["dropdown", "icon"]],
            global: ["is-loading"],
            standalone: [
                ...["link", "unset"],
                ...["facebook", "github", "google"],
            ],
        },
    }).forEach(({ testid, classes, theme }) => {
        runComponentTest({
            element: buildTestElement({
                attributes: {
                    class: classes,
                    role: "button",
                },
                children: "Ask question",
                tag: "button",
                testid,
            }),
            testid,
            theme,
            type: "a11y",
        });
    });
});
