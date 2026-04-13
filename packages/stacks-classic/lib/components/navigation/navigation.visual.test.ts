import { html } from "@open-wc/testing";
import { runVisualTests } from "../../test/visual-test-utils";
import { IconHome, IconHomeFill } from "@stackoverflow/stacks-icons/icons";
import "../../index";

const outlineIcon = IconHome.replace('class="', 'class="s-navigation--icon ');
const filledIcon = IconHomeFill.replace(
    'class="',
    'class="s-navigation--icon '
);

interface NavigationItem {
    label: string;
    title?: boolean;
    selected?: boolean;
    dropdown?: boolean;
}

const items: NavigationItem[] = [
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

const getChildren = (includeTitles = false, includeIcons = false): string => {
    const getClasses = function (item: NavigationItem) {
        return `s-navigation--item${
            item.selected ? " is-selected" : ""
        }${item.dropdown ? " s-navigation--item__dropdown" : ""}`;
    };

    const getIcon = function (item: NavigationItem) {
        return includeIcons ? (item.selected ? filledIcon : outlineIcon) : "";
    };

    if (!includeTitles) {
        return items
            .map((item) => {
                if (item.title) {
                    return ""; //don't print title
                }
                return `<li><a href="#" class="${getClasses(item)}">${getIcon(item)}${item.label}</a></li>`;
            })
            .join("");
    } else {
        //Vertical nav
        let html = "";
        for (const item of items) {
            if (item.title) {
                if (html.length > 0) {
                    html += "</ul></li>";
                }
                const groupName = item.label.replace(" ", "");
                html += `<li>
                <h4 class="s-navigation--title" id="nav-${groupName}">${item.label}</h4>
                <ul aria-labelledby="nav-${groupName}">
                `;
            } else {
                html += `<li><a href="#" class="${getClasses(item)}">${getIcon(item)}${item.label}</a></li>`;
            }
        }
        html += "</ul></li>";
        return html;
    }
};

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
