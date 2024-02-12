import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("link", () => {
    // TODO check for visited styling
    runA11yTests({
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
