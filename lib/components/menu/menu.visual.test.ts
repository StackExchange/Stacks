import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

describe("menu", () => {
    runVisualTests({
        baseClass: `s-menu`,
        children: {
            default: `
                <li class="s-menu--title" role="separator">Title 1</li>
                <li role="menuitem">
                    <a href="#" class="s-block-link">Example li</a>
                </li>
                <li class="s-menu--title" role="separator">Title 2</li>
                <li role="menuitem">
                    <a href="#" class="s-block-link s-block-link__left is-selected">Selected link</a>
                </li>
                <li role="menuitem">
                    <a href="#" class="s-block-link">Example li</a>
                </li>
                <li role="menuitem" class="s-menu--label">Example label</li>
                <li role="menuitem">
                    <a href="#" class="s-block-link">Block link</a>
                </li>
                <li class="s-menu--divider" role="separator"></li>
                <li role="menuitem">
                    <a href="…" class="s-block-link s-block-link__danger">Danger link</a>
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
