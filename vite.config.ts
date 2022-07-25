import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            exclude: /\.stories\.(t|j)sx?$/,
            include: '**/*.tsx',
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: /~(.+)/,
                replacement: path.join(process.cwd(), 'node_modules/$1'),
            },
            { find: '@/', replacement: `${__dirname}/src/` },
        ],
    },
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
})
