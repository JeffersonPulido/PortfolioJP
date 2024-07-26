module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "jest"],
    settings: {
        react: {
            version: "18.0.2",
        },
    },
    rules: {
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: true,
                },
            },
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-function-return-type": "error",
        "func-style": ["error", "expression", { allowArrowFunctions: true }],
        "react/prop-types": "off",
        "react/display-name": "off",
        "react/react-in-tsx-scope": "off",
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
    },
};
