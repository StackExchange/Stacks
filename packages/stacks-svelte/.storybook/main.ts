// known issue about show code not showing nice output when used with args
// https://github.com/storybookjs/addon-svelte-csf/issues/86

import type { StorybookConfig } from "@storybook/svelte-vite";
const config: StorybookConfig = {
    stories: [
        "../.storybook/**/*.mdx",
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-docs",
        "@storybook/addon-svelte-csf",
    ],
    framework: {
        name: "@storybook/svelte-vite",
        options: {
            builder: {
                viteConfigPath: "./vite.config.ts",
            },
        },
    },
};
export default config;
