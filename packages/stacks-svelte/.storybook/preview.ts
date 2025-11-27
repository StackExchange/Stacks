import type { Preview } from "@storybook/svelte";
import WithMode from "./decorators/with-mode";
import "@stackoverflow/stacks/lib/stacks.less";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                method: "alphabetical",
                order: ["Getting Started", "Components"],
            },
        },
        docs: {
            controls: { sort: "requiredFirst" },
            story: {
                inline: false,
                iframeHeight: 400,
            },
        },
        backgrounds: {
            disable: true,
        },
    },
    globalTypes: {
        mode: {
            name: "Mode",
            description: "Global mode for components",
            defaultValue: "light",
            toolbar: {
                icon: "circlehollow",
                items: [
                    { value: "light", title: "Light", icon: "circlehollow" },
                    { value: "dark", title: "Dark", icon: "circle" },
                    {
                        value: "highcontrast",
                        title: "High Contrast",
                        icon: "contrast",
                    },
                    {
                        value: "highcontrast-dark",
                        title: "High Contrast Dark",
                        icon: "contrast",
                    },
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
    },
    tags: ["autodocs"],
    decorators: [WithMode],
};

export default preview;
