import { makeTest, makeTestElement, getTestVariations } from "../ts/test-utils";
import "../ts/index";

describe("s-btn", () => {
    getTestVariations({
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
        makeTest({
            element: makeTestElement({
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
