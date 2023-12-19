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
    });
});
