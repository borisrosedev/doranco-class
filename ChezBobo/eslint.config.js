const eslintConfigPrettier = require("eslint-config-prettier");
const js = require("@eslint/js");
module.exports = [
    //js.configs.recommended,
    {
        name: 'Boris Custom Eslint',
        ignores: ["**/*.config.js"],
        linterOptions: {
            noInlineConfig: true
        },
        rules: {
            semi: ["warn", "always"]
        },
    },
    {
        name: "Boris Custom Test Eslint",
        files: ["__test__/**/*.js"],
        env: {
            jest: true
        },
        languageOptions: {
            globals: {
                it: "readonly",
                describe: "readonly"
            }
        }
    }
];