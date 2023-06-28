import { html } from "@open-wc/testing";
import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

const link = (text = "", visited = true, classes = "") => `<a class="${classes}" href="${visited ? "/" : "https://stackoverflow.design/404-unvisited"}">${text}</a>`;
const links = `A ${link("link")}, a <button class="s-btn s-btn__link">button</button>, an ${link("unvisited link", false)}.<br/>Nested: ${link("danger", false, "s-link s-link__danger")}, ${link("grayscale", false, "s-link s-link__grayscale")}.`;

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
        children: { // children include nested anchors block to test for appropriate nested styling
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
            <div data-testid="${testid}" class="s-card p2 ws3 fc-green-600">${testid}: ${component}</div>
        `,
    });
});
