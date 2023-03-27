module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
            "./lib/tsconfig.json",
            "./lib/tsconfig.test.json",
        ],
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "plugin:no-unsanitized/DOM",
    ],
    rules: {
        "no-console": "error",
        "no-alert": "error",
        "no-process-env": "error",
    },
};
