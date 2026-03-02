import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginSvelte from "eslint-plugin-svelte";
import eslingPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import svelteParser from "svelte-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import pluginChaiFriendly from "eslint-plugin-chai-friendly";

export default [
    eslint.configs.recommended,
    {
        files: ["**/*.svelte", "*.svelte", "**/*.svelte.ts", "*.svelte.ts"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: tsParser,
            },
        },
    },
    ...tseslint.configs.recommended,
    ...eslintPluginSvelte.configs["flat/recommended"],
    eslingPluginPrettierRecommended,
    {
        plugins: { "chai-friendly": pluginChaiFriendly },
        rules: {
            "@typescript-eslint/no-unused-expressions": "off",
            "chai-friendly/no-unused-expressions": [
                "error",
                { allowTernary: true, allowShortCircuit: true },
            ],
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha,
                ...globals.chai,
            },
        },
    },
    {
        ignores: ["netlify/*", "storybook-static/*", "lib/*", ".svelte-kit/*"],
    },
];
