const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    async viteFinal(config, { configType }) {
        let { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'))

        if (process.env.NODE_ENV === 'production') {
            config.build.chunkSizeWarningLimit = 1200
        }

        config = mergeConfig(config, {
            ...userConfig,
        })

        config.plugins = config.plugins.filter(
            (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
        )

        config.plugins.push(
            react({
                exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
                jsxImportSource: '@emotion/react',
                babel: {
                    plugins: ['@emotion/babel-plugin'],
                },
            }),
        )

        return config
    },
}
