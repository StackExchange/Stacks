import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("menu", () => {
    runVisualTests({
        baseClass: `s-menu`,
        children: {
            default: `
                <li class="s-menu--title" role="separator">Title 1</li>
                <li class="s-menu--item" role="menuitem">
                    <a href="#" class="s-menu--action">Example link</a>
                </li>
                <li class="s-menu--item" role="menuitem">
                    <button class="s-menu--action">Example button</button>
                </li>
                <li class="s-menu--title" role="separator">Title 2</li>
                <li class="s-menu--item" role="menuitem">
                    <a href="#" class="s-menu--action is-selected">Selected link</a>
                </li>
                <li class="s-menu--item" role="menuitem">
                    <a href="#" class="s-menu--action">Example link</a>
                </li>
                <li class="s-menu--divider" role="separator"></li>
                <li class="s-menu--item" role="menuitem">
                    <a href="#" class="s-menu--action s-menu--action__danger">Danger link</a>
                </li>
            `,
        },
        tag: "ul",
        attributes: {
            role: "menu",
        },
        template: ({ component, testid }) => html`
            <div class="ws2" data-testid="${testid}">${component}</div>
        `,
    });
});
