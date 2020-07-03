module.exports = {
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
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
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'html',
        'prettier',
        'vue'
    ],
    root: true,
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['warn', 'windows'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['error', {
            usePrettierrc: true
        }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'vue/html-closing-bracket-spacing': ['error', {
            selfClosingTag: 'always'
        }],
        'vue/no-unused-components': 'warn',
        'vue/*': 'off'
    }
}
