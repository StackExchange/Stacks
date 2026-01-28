import type { TestVariationArgs } from "../../test/test-utils";
import { IconAward, IconPlus } from "@stackoverflow/stacks-icons/icons";
import "../../index";

const getChild = (child?: string): string => {
    switch (child) {
        case "nav":
            return `
                <div class="s-sidebarwidget--header">
                    <h2>Personal Information</h2>
                </div>
                <div class="s-sidebarwidget--content">
                    <ul class="s-sidebarwidget--items">
                        <li class="s-sidebarwidget--item"><a href="#">Nav item 1</a></li>
                        <li class="s-sidebarwidget--item d-block">
                            <a href="#" aria-current="true">Nav item 2</a>
                            <ul class="s-sidebarwidget--subnav">
                                <li><a href="#">Subnav item 1</a></li>
                                <li aria-current="page">
                                    <a href="#">Subnav item 2. This one's long, selected, and wraps.</a>
                                </li>
                                <li><a href="#">Subnav item 3</a></li>
                            </ul>
                        </li>
                        <li class="s-sidebarwidget--item"><a href="#">Nav item 3</a></li>
                    </ul>
                </div>
                
                <div class="s-sidebarwidget--header">
                    <h2>Site Settings</h2>
                </div>
                <div class="s-sidebarwidget--content">
                    <ul class="s-sidebarwidget--items">
                        <li class="s-sidebarwidget--item"><a href="#">Preferences</a></li>
                        <li class="s-sidebarwidget--item"><a href="#">Flair</a></li>
                    </ul>
                </div>`;
        case "basic":
            return `
                <div class="s-sidebarwidget--header">
                    <h4>${IconAward} Community Achievements</h4>
                    <button class="s-link s-sidebarwidget--action">
                        ${IconPlus} Track
                    </button>
                </div>
                <div class="s-sidebarwidget--content">
                    You’ve earned 3 new badges this week! Keep contributing to unlock more achievements and privileges within the community.
                    <button class="s-btn s-btn__tonal s-sidebarwidget--action">View all badges</button>
                </div>
                <div class="s-sidebarwidget--footer">
                    <button class="s-btn s-btn__tonal s-sidebarwidget--action">See your progress</button>
                </div>`;
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
        default: getChild(),
        basic: getChild("basic"),
        nav: getChild("nav"),
    },
    options: {
        includeNullModifier: false,
    },
};

export default testArgs;
