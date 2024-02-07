import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

describe("expandable", () => {
    runA11yTests({
        baseClass: "s-expandable",
        modifiers: {
            global: ["is-expanded"],
        },
        children: {
            default: `
                <div class="s-expandable--content">
                    <p class="mb8">Expandable: Lorem ipsum dolor sit amet, ex iudicabit necessitatibus usu, cetero laboramus concludaturque mel no, facilisis posidonium cu cum. Pro ex senserit dissentiunt, imperdiet intellegam at sed, ex pri dicit eruditi convenire. Est harum movet gubergren ei, errem dictas evertitur ea sit, at mei oratio eligendi. Ad vis legere possit, vis ne ipsum democritum appellantur. Nullam ancillae iudicabit his ad.</p>
                </div>
            `,
        },
        template: ({ component, testid }) => html`
            <div class="ws2 p8" data-testid="${testid}">
                <div><p>Before expandable content</p></div>
                ${component}
                <div><p>After expandable content</p></div>
            </div>
        `,
    });
});
