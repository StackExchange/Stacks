import type { TestVariationArgs } from "../../test/test-utils";
import { IconAward, IconPlus } from "@stackoverflow/stacks-icons/icons";
import "../../index";

const getChild = (child?: string): string => {
    switch (child) {
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
    variants: [],
    modifiers: {
        global: ["ws3"],
    },
    children: {
        default: getChild(),
        basic: getChild("basic"),
    },
    options: {
        includeNullModifier: false,
    },
};

export default testArgs;
