const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
    framework: '@storybook/svelte',
    core: {
        builder: 'storybook-builder-vite',
    },
    svelteOptions: {
        preprocess: require('../svelte.config.cjs').preprocess,
    },
    async viteFinal(config, { configType }) {
        const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'));

        return mergeConfig(config, {
            ...userConfig,
            plugins: [],
        });
    },
};
