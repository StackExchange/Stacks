import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

const modifiers = [
    {
        name: "error",
        parentClasses: "has-error",
    },
    {
        name: "success",
        parentClasses: "has-success",
    },
    {
        name: "warning",
        parentClasses: "has-warning",
    },
    {
        name: "disabled",
        parentClasses: "is-disabled",
    },
    {
        name: "readonly",
        parentClasses: "is-readonly",
    },
    {
        name: "creditcard",
        modifier: "creditcard",
        inputClasses: "s-input__creditcard",
    },
    {
        name: "search",
        modifier: "search",
        inputClasses: "s-input__search",
    },
];

const getSvgPath = (name: string) => {
    switch (name) {
        case "creditcard":
            return '<path d="M3 3h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Zm0 6v4h12V9H3Zm0-3h12V5H3v1Z"></path>';
        case "search":
            return '<path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>';
        default:
            return '<path d="M9.06 3C4 3 1 9 1 9s3 6 8.06 6C14 15 17 9 17 9s-3-6-7.94-6ZM9 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2Z"></path>'; // eye icon path
    }
};

describe("input-icon", () => {
    modifiers.forEach(({ name, parentClasses, modifier, inputClasses }) => {
        runVisualTests({
            baseClass: `s-input-icon`,
            tag: "svg",
            children: {
                [name]: getSvgPath(name), // IconSearch
            },
            modifiers: {
                standalone: modifier ? [`${modifier}`] : [],
                global: parentClasses ? [`parent-${parentClasses}`] : [],
            },
            attributes: {
                "aria-hidden": "true",
                "width": "18",
                "height": "18",
                "viewBox": "0 0 18 18",
            },
            template: ({ component, testid }) => html`
                <div
                    data-testid="${testid}"
                    class="d-flex fd-column g4 fc-black ps-relative wmx2 p8 ${parentClasses ??
                    ""}"
                >
                    <label class="s-label v-visible-sr" for="ex-input"
                        >Input</label
                    >
                    <div class="d-flex ps-relative svg-icon">
                        <input
                            id="ex-input"
                            type="text"
                            class="s-input ${inputClasses ?? ""}"
                            placeholder="${name} input…"
                        />
                        ${component}
                    </div>
                </div>
            `,
            options: {
                includeNullModifier: false,
            },
        });
    });
});
