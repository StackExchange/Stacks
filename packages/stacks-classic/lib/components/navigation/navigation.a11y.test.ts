import { html } from "@open-wc/testing";
import { runA11yTests } from "../../test/a11y-test-utils";
import "../../index";

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

const getChildren = (includeTitles = false): string => {
    const getClasses = function (item: NavigationItem) {
        return `s-navigation--item${
            item.selected ? " is-selected" : ""
        }${item.dropdown ? " s-navigation--item__dropdown" : ""}`;
    };

    if (!includeTitles) {
        return items
            .map((item) => {
                if (item.title) {
                    return ""; //don't print title
                }
                return `<li><a href="#" class="${getClasses(item)}">${item.label}</a></li>`;
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
                html += `<li><a href="#" class="${getClasses(item)}">${item.label}</a></li>`;
            }
        }
        html += "</ul></li>";
        return html;
    }
};

describe("navigation", () => {
    runA11yTests({
        baseClass: "s-navigation",
        variants: ["vertical"],
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
    });
});
