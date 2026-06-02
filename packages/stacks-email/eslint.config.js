import js from "@eslint/js";
import globals from "globals";
import svelte from "eslint-plugin-svelte";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
    {
        ignores: [".svelte-kit/**"],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...svelte.configs["flat/recommended"],
    prettier,
    ...svelte.configs["flat/prettier"],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
                project: "./tsconfig.eslint.json",
            },
        },
    },
    {
        files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                tsconfigRootDir: import.meta.dirname,
                project: "./tsconfig.eslint.json",
                extraFileExtensions: [".svelte"],
            },
        },
    }
);
