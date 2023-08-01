import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

// TODO check for visited styling
const link = (text = "", classes = "") =>
    `<a class="${classes}" href="#">${text}</a>`;
const links = `A ${link(
    "link"
)}, a <button class="s-btn s-btn__link">button</button>, an ${link(
    "unvisited link"
)}.<br/>Nested: ${link("danger", "s-link s-link__danger")}, ${link(
    "grayscale",
    "s-link s-link__grayscale"
)}.`;

describe("anchors", () => {
    runComponentTests({
        type: "visual",
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
            // children include nested anchors block to test for appropriate nested styling
            default: `
                ${links}
                <div class="s-card s-anchors s-anchors__danger">Danger: ${links}</div>
                <div class="s-card s-anchors s-anchors__muted mt4">Muted: ${links}</div>
            `,
        },
        options: {
            ...defaultOptions,
            includeNullModifier: false,
        },
        template: ({ component, testid }) => html`
            <div data-testid="${testid}" class="s-card ws3 fc-green-600">
                ${testid}: ${component}
            </div>
        `,
        skippedTestids: [
            // TODO resolve webkit failures for these. See https://github.com/StackExchange/Stacks/actions/runs/5406068986/jobs/9822478155?pr=1404
            /s-anchors/,
        ],
    });
});
