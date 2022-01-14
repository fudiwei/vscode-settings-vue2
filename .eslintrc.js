module.exports = {
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                mocha: true
            }
        }
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['@typescript-eslint', 'html', 'prettier', 'vue'],
    root: true,
    rules: {
        'indent': 'off',
        'linebreak-style': ['warn', 'windows'],
        'max-len': ['warn', 120],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['warn', { usePrettierrc: true }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'vue/html-closing-bracket-spacing': ['warn', { selfClosingTag: 'always' }],
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-components': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/triple-slash-reference': 'off'
    }
};
