import { addons } from "storybook/manager-api";
import React from "react";
import stacksTheme from "./stacks-theme";

const renderLabsBadge = (name: string) => {
    return React.createElement(
        "span",
        {},
        name,
        " ",
        React.createElement(
            "span",
            { className: "s-badge s-badge__new s-badge__sm" },
            "labs"
        )
    );
};

addons.setConfig({
    theme: stacksTheme,
    sidebar: {
        renderLabel: (item) => {
            if (item.type === "component" && item.tags?.includes("labs")) {
                return renderLabsBadge(item.name);
            }
            return item.name;
        },
    },
});
