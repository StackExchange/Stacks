import { html } from "@open-wc/testing";
import { runComponentTests } from "../../test/test-utils";
import { WCAGNonTextContrast } from "../../test/assertions";
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
    runComponentTests({
        type: "a11y",
        baseClass: "s-navigation",
        variants: ["vertical", "muted"],
        modifiers: {
            primary: ["scroll", "sm"],
        },
        tag: "ul",
        children: {
            default: getChildren(true),
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
        additionalAssertions: [WCAGNonTextContrast],
    });
});
