import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import nextPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';
import babelParser from '@babel/eslint-parser';
import globals from 'globals';

export default [
  js.configs.recommended, // replaces 'eslint:recommended'
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: babelParser, // Set the parser here
      parserOptions: {
        requireConfigFile: false, // Disable requiring a babel config file
        babelOptions: {
          presets: ['@babel/preset-react'], // Enable React JSX support in Babel
        },
      },
      globals: {
        ...globals.browser, // ✅ this gives you fetch, FormData, alert, etc.
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      '@next/next': nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
    },
  },
];
