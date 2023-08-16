import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

// TODO check for visited styling
const link = (text = "", visited = true, classes = "") =>
    `<a class="${classes}" href="${
        visited ? "/" : "https://stackoverflow.design/404-unvisited"
    }">${text}</a>`;

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
            default: `A ${link(
                "link"
            )}, a <button class="s-btn s-btn__link">button</button>, an ${link(
                "unvisited link",
                false
            )}.`,
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            "s-anchors-dark-danger",
            "s-anchors-dark-default",
            "s-anchors-dark-underlined",
            "s-anchors-dark-grayscale",
            "s-anchors-dark-muted",
            "s-anchors-light-danger",
            "s-anchors-light-default",
            "s-anchors-light-muted",
            "s-anchors-light-underlined",
        ],
    });
});
