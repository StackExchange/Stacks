import "../../index";
import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import proseTestHTML from "./prose.test.setup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = ({ component, testid, className }: any) => html`
    <article class="${className} p16" data-testid="${testid}">
        ${component}
    </article>
`;
describe("prose", () => {
    runVisualTests({
        baseClass: "s-prose",
        modifiers: {
            primary: ["sm"],
        },
        children: {
            default: proseTestHTML,
        },
        template,
    });
});
