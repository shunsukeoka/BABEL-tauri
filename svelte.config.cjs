// eslint-disable-next-line import/no-extraneous-dependencies
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    preprocess: sveltePreprocess({
        scss: {
            prependData: "@import './src/assets/styles/variables.scss';",
        },
    }),
};
