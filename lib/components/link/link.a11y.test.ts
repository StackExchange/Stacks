import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("link", () => {
    // TODO check for visited styling
    runComponentTests({
        type: "a11y",
        baseClass: "s-link",
        modifiers: {
            primary: [
                "grayscale",
                "muted",
                "danger",
                "inherit",
                "underlined",
                "visited",
            ],
            secondary: ["dropdown"],
        },
        children: {
            default: "s-link",
        },
        tag: "a",
        attributes: {
            href: "#",
        },
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            "s-link-dark",
            "s-link-dark-dropdown",
            "s-link-dark-danger",
            "s-link-dark-danger-dropdown",
            "s-link-dark-underlined",
            "s-link-dark-underlined-dropdown",
            "s-link-dark-muted",
            "s-link-dark-muted-dropdown",
            "s-link-dark-visited",
            "s-link-dark-visited-dropdown",
            "s-link-light",
            "s-link-light-danger",
            "s-link-light-danger-dropdown",
            "s-link-light-dropdown",
            "s-link-light-muted",
            "s-link-light-muted-dropdown",
            "s-link-light-underlined",
            "s-link-light-underlined-dropdown",
        ],
    });
});
