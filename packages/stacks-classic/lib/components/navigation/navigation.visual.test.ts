import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import { IconHome, IconHomeFill } from "@stackoverflow/stacks-icons/icons";
import "../../index";

const outlineIcon = IconHome.replace('class="', 'class="s-navigation--icon ');
const filledIcon = IconHomeFill.replace(
    'class="',
    'class="s-navigation--icon '
);

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

const getChildren = (includeTitles = false, includeIcons = false): string =>
    items
        .map((item) => {
            if (item.title) {
                return includeTitles
                    ? `<li class="s-navigation--title">${item.label}</li>`
                    : "";
            }
            const icon = includeIcons
                ? item.selected
                    ? filledIcon
                    : outlineIcon
                : "";
            const classes = `s-navigation--item${
                item.selected ? " is-selected" : ""
            }${item.dropdown ? " s-navigation--item__dropdown" : ""}`;
            return `<li><a href="#" class="${classes}">${icon}${item.label}</a></li>`;
        })
        .join("");

describe("navigation", () => {
    runVisualTests({
        baseClass: "s-navigation",
        modifiers: {
            primary: ["scroll", "sm"],
        },
        tag: "ul",
        children: {
            default: getChildren(),
            icon: getChildren(false, true),
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
        excludedTestids: [
            /^s-navigation-(?=.*sm).*icon$/, // s-navigation with icon and sm modifier not supported
        ],
    });

    runVisualTests({
        baseClass: "s-navigation",
        variants: ["vertical"],
        modifiers: {
            primary: ["sm"],
        },
        tag: "ul",
        children: {
            default: getChildren(true),
            icon: getChildren(true, true),
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
        excludedTestids: [
            /^s-navigation-(?=.*sm).*icon$/, // s-navigation with icon and sm modifier not supported
        ],
        options: {
            includeNullVariant: false,
        },
    });
});
