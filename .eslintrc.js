module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./lib/tsconfig.json"],
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
        // TODO this one is a pain to fix w/ ProseMirror's Class<T extends Schema = any> types
        "@typescript-eslint/no-unsafe-argument": "off",
    },
};
