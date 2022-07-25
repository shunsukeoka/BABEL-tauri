/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            body: ['Noto Sans JP', 'sans-serif'],
        },
        spacing: {
            sm: '8px',
            md: '16px',
            lg: '32px',
            xl: '48px',
        },
        extend: {
            fontFamily: {
                'melete-light': ['Melete-Light', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                noto: ['Noto Sans JP', 'sans-serif'],
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
            },
            spacing: {
                1: '4px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px',
                9: '26px',
                10: '40px',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities, addVariant }) {
            addVariant('not-first-child', '&:not(:first-child)')
            addVariant('slider-knob', ['&::-webkit-slider-thumb'])
            addUtilities({
                '.scrollbar-hidden': {
                    /* IE and Edge */
                    '-ms-overflow-style': 'none',

                    /* Firefox */
                    'scrollbar-width': 'none',

                    /* Safari and Chrome */
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
            })
        }),
    ],
}
