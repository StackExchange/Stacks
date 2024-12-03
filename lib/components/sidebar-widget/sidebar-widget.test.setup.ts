import type { TestVariationArgs } from "../../test/test-utils";
import "../../index";

const getChild = (child?: string): string => {
    switch (child) {
        case "accordions":
            return `<h2
                class="s-sidebarwidget--header s-sidebarwidget__expanding-control s-sidebarwidget__small-bold-text"
                aria-controls="expanded"
                aria-expanded="true"
                aria-label="toggle expanded"
                data-controller="s-expandable-control"
                tabindex="0">
                    Expanded section
                </h2>
                <div class="s-expandable is-expanded" id="expanded">
                    <div class="s-expandable--content">
                        <div class="s-sidebarwidget--content">This is expanded</div>
                    </div>
                </div>
                <h2
                    class="s-sidebarwidget--header s-sidebarwidget__expanding-control s-sidebarwidget__small-bold-text"
                    aria-controls="collapsed"
                    aria-expanded="false"
                    aria-label="toggle collapsed"
                    data-controller="s-expandable-control"
                    tabindex="0">
                    Collapsed section
                </h2>
                <div class="s-expandable" id="collapsed">
                    <div class="s-expandable--content">
                        <div class="s-sidebarwidget--content">This is collapsed</div>
                    </div>
                </div>`;
        case "items":
            return `<div class="s-sidebarwidget--content s-sidebarwidget__items">
                <div class="s-sidebarwidget--item">
                    <span><strong>bkelly</strong> contributed 6 edits</span>
                </div>
                <div class="s-sidebarwidget--item">
                    <span><strong>giamir</strong> contributed 7 edits</span>
                </div>
                <div class="s-sidebarwidget--item">
                    <span><strong>dc</strong> contributed 3 edits</span>
                </div>
            </div>`;
        case "nav":
            return `<h2 class="s-sidebarwidget--header">Personal Information</h2>
                <ul class="s-sidebarwidget--content s-sidebarwidget__items">
                    <li class="s-sidebarwidget--item"><a href="#">Nav item 1</a></li>
                    <li class="s-sidebarwidget--item d-block">
                        <a href="#" aria-current="true">Nav item 2</a>
                        <ul class="s-sidebarwidget--subnav">
                            <li><a href="#">Subnav item 1</a></li>
                            <li aria-current="page">
                                <a href="#">Subnav item 3. This one's long, selected, and wraps.</a>
                            </li>
                            <li><a href="#">Subnav item 3</a></li>
                        </ul>
                    </li>
                    <li class="s-sidebarwidget--item"><a href="#">Nav item 3</a></li>
                </ul>
                <h2 class="s-sidebarwidget--header">Site Settings</h2>
                <ul class="s-sidebarwidget--content s-sidebarwidget__items">
                    <li class="s-sidebarwidget--item"><a href="#">Preferences</a></li>
                    <li class="s-sidebarwidget--item"><a href="#">Flair</a></li>
                </ul>`;
        case "small-bold-headers":
            return `<h2 class="s-sidebarwidget--header s-sidebarwidget__small-bold-text">Small bold text</h2>
                <div class="s-sidebarwidget--content">Widget content</div>`;
        case "table":
            return `<table class="s-sidebarwidget--content s-sidebarwidget__items">
                    <tbody>
                        <tr class="s-sidebarwidget--item">
                            <td class="tc-black-350">asked</td>
                            <td>4 years, 4 months ago</td>
                        </tr>
                        <tr class="s-sidebarwidget--item">
                            <td class="tc-black-350">viewed</td>
                            <td>7,437 times</td>
                        </tr>
                        <tr class="s-sidebarwidget--item">
                            <td class="tc-black-350">active</td>
                            <td>2 months ago</td>
                        </tr>
                    </tbody>
                </table>`;
        default:
            return `<div class="s-sidebarwidget--content">12,345,678</div>`;
    }
};

const testArgs: TestVariationArgs = {
    baseClass: "s-sidebarwidget",
    variants: ["blue", "green", "yellow"],
    modifiers: {
        global: ["ws3"],
    },
    children: {
        "default": getChild(),
        "accordions": getChild("accordions"),
        "items": getChild("items"),
        "nav": getChild("nav"),
        "small-bold-headers": getChild("small-bold-headers"),
        "table": getChild("table"),
    },
    options: {
        includeNullModifier: false,
    },
};

export default testArgs;
