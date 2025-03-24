import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  configPrettier,

  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      "no-trailing-spaces": ["error", { skipBlankLines: true }],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "multi-word-component-names": ["none"],
      "prettier/prettier": [
        "error",
        {
          arrowParens: "always",
          bracketSameLine: true,
          bracketSpacing: false,
          semi: false,
          experimentalTernaries: false,
          singleQuote: true,
          jsxSingleQuote: true,
          quoteProps: "as-needed",
          trailingComma: "none",
          singleAttributePerLine: false,
          htmlWhitespaceSensitivity: "css",
          vueIndentScriptAndStyle: false,
          proseWrap: "always",
          insertPragma: false,
          printWidth: 100,
          requirePragma: false,
          tabWidth: 2,
          useTabs: false,
          embeddedLanguageFormatting: "auto",
          cursorOffset: -1,
        },
      ],
    },
    plugins: {
      vue: pluginVue,
      prettier: pluginPrettier,
    },
  },
];
