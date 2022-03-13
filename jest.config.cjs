module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.svelte$': [
            'svelte-jester',
            {
                preprocess: true,
            },
        ],
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    moduleFileExtensions: ['js', 'ts', 'svelte'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transformIgnorePatterns: ['<rootDir>/node_modules/!(@sveltejs/svelte-virtual-list)'],
};
