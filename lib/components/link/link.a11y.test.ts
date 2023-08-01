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
        skippedTestids: [
            "s-link-dark", // TODO fix contrast issue
            "s-link-dark-dropdown", // TODO fix contrast issue
            "s-link-dark-danger", // TODO fix contrast issue
            "s-link-dark-danger-dropdown", // TODO fix contrast issue
            "s-link-dark-underlined", // TODO fix contrast issue
            "s-link-dark-underlined-dropdown", // TODO fix contrast issue
        ],
    });
});
