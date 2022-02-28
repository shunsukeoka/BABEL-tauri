/* eslint-disable global-require */

/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['svelte3', '@typescript-eslint', 'prettier'],
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
            rules: {
                'import/no-mutable-exports': 'off',
                'import/prefer-default-export': 'off',
            },
        },
    ],
    settings: {
        'svelte3/typescript': () => require('typescript'),
        'svelte3/ignore-styles': (attributes) => attributes.lang && attributes.lang === 'scss',
    },
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        indent: ['error', 4],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
            },
        ],
    },
};
