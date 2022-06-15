import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            exclude: /\.stories\.(t|j)sx?$/,
            include: '**/*.tsx',
        }),
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: /~(.+)/,
                replacement: path.join(process.cwd(), 'node_modules/$1'),
            },
        ],
    },
})
