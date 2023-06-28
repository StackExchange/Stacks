import { html } from "@open-wc/testing";
import { runComponentTests } from "../../test/test-utils";
import "../../index";

describe("link", () => {
    // TODO check for visited styling
    runComponentTests({
        type: "visual",
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
        skippedTestids: [
            // TODO resolve webkit failures for these. See https://github.com/StackExchange/Stacks/actions/runs/5406068986/jobs/9822478155?pr=1404
            "s-anchors-highcontrast-dark-danger",
            "s-anchors-highcontrast-dark-default",
            "s-anchors-highcontrast-dark-grayscale",
            "s-anchors-highcontrast-dark-inherit",
            "s-anchors-highcontrast-dark-muted",
            "s-anchors-highcontrast-dark-underlined",
            "s-anchors-highcontrast-light-danger",
            "s-anchors-highcontrast-light-default",
            "s-anchors-highcontrast-light-grayscale",
            "s-anchors-highcontrast-light-inherit",
            "s-anchors-highcontrast-light-muted",
            "s-anchors-highcontrast-light-underlined",
            "s-anchors-light-underlined",
        ],
    });
});
