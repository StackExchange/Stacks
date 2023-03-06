import { buildTestid, makeA11yTest, getTestVariations } from "../ts/test-utils";
import "../ts/index";

describe("s-btn", () => {
    getTestVariations({
        baseClass: "s-btn",
        variants: ["danger", "muted", "primary"],
        modifiers: {
            primary: ["filled", "outlined", "filled-outlined"],
            secondary: [
                ...["xs", "sm", "md"],
                ...["dropdown", "icon"]
            ],
            global: ["is-loading"],
            standalone: [
                ...["link", "unset"],
                ...["facebook", "github", "google"],
            ],
        },
    }).forEach(({testid, classes, theme}) => {
        makeA11yTest({
            attributes: {
                class: classes,
                role: "button",
            },
            children: "Ask question",
            tag: "button",
            testid,
            theme
        });
    });
});
