import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import "../../index";

const items = [
    {
        label: "Group 1",
        title: true,
    },
    {
        label: "Product",
        selected: true,
    },
    {
        label: "Email",
    },
    {
        label: "Group 2",
        title: true,
    },
    {
        label: "Content",
    },
    {
        label: "Brand",
    },
    {
        label: "Marketing",
    },
    {
        label: "More selected",
        dropdown: true,
        selected: true,
    },
    {
        label: "More",
        dropdown: true,
    },
];

const getChildren = (includeTitles = false): string =>
    items
        .map((item) => {
            if (item.title) {
                return includeTitles
                    ? `<li class="s-navigation--title">${item.label}</li>`
                    : "";
            }
            const classes = `s-navigation--item${
                item.selected ? " is-selected" : ""
            }${item.dropdown ? " s-navigation--item__dropdown" : ""}`;
            return `<li><a href="#" class="${classes}">${item.label}</a></li>`;
        })
        .join("");

describe("navigation", () => {
    runVisualTests({
        baseClass: "s-navigation",
        variants: ["muted"],
        modifiers: {
            primary: ["scroll", "sm"],
        },
        tag: "ul",
        children: {
            default: getChildren(),
        },
        template: ({ component, testid }) => html`
            <nav
                class="d-inline-block p8 wmx3"
                aria-label="example-navigation"
                data-testid="${testid}"
            >
                ${component}
            </nav>
        `,
    });

    runVisualTests({
        baseClass: "s-navigation",
        variants: ["vertical"],
        tag: "ul",
        children: {
            default: getChildren(true),
        },
        template: ({ component, testid }) => html`
            <nav
                class="d-inline-block p8 ws2"
                aria-label="example-navigation"
                data-testid="${testid}"
            >
                ${component}
            </nav>
        `,
        options: {
            includeNullVariant: false,
        },
    });
});
