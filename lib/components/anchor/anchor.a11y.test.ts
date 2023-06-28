import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

const link = (text = "", visited = true, classes = "") => `<a class="${classes}" href="${visited ? "/" : "https://stackoverflow.design/404-unvisited"}">${text}</a>`;

describe("anchors", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-anchors",
        modifiers: {
            primary: [
                "default",
                "grayscale",
                "muted",
                "danger",
                "inherit",
                "underlined",
            ],
        },
        children: {
            default: `A ${link("link")}, a <button class="s-btn s-btn__link">button</button>, an ${link("unvisited link", false)}.`,
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
        skippedTestids: [
            "s-anchors-dark-danger", // TODO fix contrast issue
            "s-anchors-dark-default", // TODO fix contrast issue
            "s-anchors-dark-underlined", // TODO fix contrast issue
        ],
    });
});
