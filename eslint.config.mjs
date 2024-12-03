import prettier from "eslint-config-prettier";
import js from "@eslint/js";
import ts from "typescript-eslint";
import nounsanitized from "eslint-plugin-no-unsanitized";

export default ts.config(
    js.configs.recommended,
    nounsanitized.configs.recommended,
    ...ts.configs.recommended,
    prettier,
    {
        rules: {
            "no-console": "error",
            "no-alert": "error",
            "no-process-env": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    destructuredArrayIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-unused-expressions": "off",
        },
    },
    {
        ignores: ["node_modules", "dist", "**/*.js"],
    }
);
