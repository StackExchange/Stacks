import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("link", () => {
    // TODO check for visited styling
    runVisualTests({
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
        template: ({ component, testid }) => html`
            <div data-testid="${testid}" class="p4 ws1">${component}</div>
        `,
    });
});
