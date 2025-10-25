import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["**/node_modules/**", ".next/**", "dist/**", "build/**", "out/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "jsx-a11y/alt-text": "off",
    },
  },
  {
    files: ["next-env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];

export default eslintConfig;
