import * as path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            compilerOptions: {
                customElement: false,
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
});
