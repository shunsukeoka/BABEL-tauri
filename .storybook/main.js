const path = require('path')

const { loadConfigFromFile, mergeConfig } = require('vite')

const svgrPlugin = require('vite-plugin-svgr')

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite', // builder: '@storybook/builder-vite',
    },

    async viteFinal(config, { configType }) {
        const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'))
        console.log(path.resolve(__dirname, '../vite.config.ts'))

        if (process.env.NODE_ENV === 'production') {
            config.build.chunkSizeWarningLimit = 1200
        }

        return mergeConfig(config, {
            ...userConfig,
            plugins: [
                svgrPlugin({
                    svgrOptions: {
                        icon: true,
                    },
                }),
            ],
            define: process.env.NODE_ENV === 'development' ? { ...config.define, global: 'window' } : undefined,
        })
    },
}
