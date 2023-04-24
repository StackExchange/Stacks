import { defaultOptions, runComponentTests } from "../../test/test-utils";
import { html } from "@open-wc/testing";
import "../../index";

describe("anchors", () => {
    runComponentTests({
        type: "visual",
        baseClass: "s-anchors",
        variants: ["danger", "default", "grayscale", "inherit", "muted"],
        children: {
            default: `<p>
                There is a <a href="#">link here</a>, <button class="s-btn s-btn__link">a button</button>, and <a href="#">another link</a>.
            </p>`,
        },
        template: ({ component, testid }) => html`
            <div
                class="d-inline-block ws2 p8"
                data-testid="${testid}"
            >
                ${component}
            </div>
        `,
        options: {
            ...defaultOptions,
            includeNullVariant: false,
        }
    });
});
