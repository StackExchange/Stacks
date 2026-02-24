import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
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
    runVisualTests({
        baseClass: "s-anchors",
        modifiers: {
            primary: ["grayscale", "muted", "danger", "inherit", "underlined"],
        },
        children: {
            // children include nested anchors block to test for appropriate nested styling
            default: `
                ${links}
                <div class="ba bc-black-225 p12 s-anchors s-anchors__danger">Danger: ${links}</div>
                <div class="ba bc-black-225 p12 s-anchors s-anchors__muted mt4">Muted: ${links}</div>
            `,
        },
        template: ({ component, testid }) => html`
            <div data-testid="${testid}" class="ba bc-black-225 p12 ws3 fc-green-500">
                ${testid}: ${component}
            </div>
        `,
    });
});
