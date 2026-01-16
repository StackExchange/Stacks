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
        "@storybook/addon-a11y"
    ],
    framework: {
        name: "@storybook/svelte-vite",
        options: {
            builder: {
                viteConfigPath: "./vite.config.ts",
            },
        },
    },
    viteFinal: (config) => {
        // Include svelte-sonner in optimizeDeps to ensure its virtual CSS modules
        // (from <style global> blocks) are properly processed by vite-plugin-svelte.
        // Without this, Storybook fails to load the Toaster component styles.
        // Note: svelte-sonner is excluded in vite.config.ts for test compatibility,
        // but Storybook needs it included for proper CSS handling.
        config!.optimizeDeps!.exclude = config?.optimizeDeps?.exclude?.filter(
            (dep) => dep !== "svelte-sonner"
        );

        return config;
    },
};
export default config;
