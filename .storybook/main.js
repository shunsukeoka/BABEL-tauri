const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')
const svgr = require('vite-plugin-svgr').default

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },

    async viteFinal(config, { configType }) {
        const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'))

        if (process.env.NODE_ENV === 'production') {
            config.build.chunkSizeWarningLimit = 1200
        }

        return mergeConfig(config, {
            ...userConfig,
            plugins: [
                svgr({
                    svgrOptions: {
                        icon: true,
                    },
                }),
            ],
        })
    },
}
