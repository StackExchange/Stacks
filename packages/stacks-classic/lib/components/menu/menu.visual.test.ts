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
            checkmark: `
                <li class="s-menu--title" role="separator">Checkmark Menu</li>
                <li class="s-menu--item" role="menuitem">
                    <label class="s-menu--action s-check s-check__checkmark" for="check-1">
                        <input type="checkbox" id="check-1" name="check-1" />
                        Option 1
                    </label>
                </li>
                <li class="s-menu--item" role="menuitem">
                    <label class="s-menu--action s-check s-check__checkmark" for="check-2">
                        <input type="checkbox" id="check-2" name="check-2" checked />
                        Option 2
                    </label>
                </li>
                <li class="s-menu--item" role="menuitem">
                    <label class="s-menu--action s-check s-check__checkmark" for="check-3">
                        <input type="checkbox" id="check-3" name="check-3" />
                        Option 3
                    </label>
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
