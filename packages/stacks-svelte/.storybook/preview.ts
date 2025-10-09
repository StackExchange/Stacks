import type { Preview } from "@storybook/svelte";
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
        },
    },
    tags: ["autodocs"],
};

export default preview;
