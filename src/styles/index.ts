// create stitches.js in src
import { createStitches } from '@stitches/react'
import { reset } from 'stitches-reset'

export const { styled, globalCss, createTheme, css } = createStitches({
    media: {
        tablet: '(min-width: 768px)',
        desktop: '(min-width: 992px)',
        largeDesktop: '(min-width: 1200px)',
    },
    theme: {
        space: {
            1: '2px',
            2: '4px',
            3: '8px',
            4: '16px',
            5: '24px',
            6: '32px',
            7: '40px',
            8: '48px',
            9: '56px',
            10: '64px',
            11: '72px',
            12: '80px',
        },
        colors: {
            primaryDark: 'hsl(0,0%,0%)',
            primaryMid: 'hsl(300,4%,16%)',
            primaryLight: 'hsl(246,6%,31%)',
            secondaryDark: 'hsl(212,11%,45%)',
            secondaryMid: 'hsl(195,19%,59%)',
            secondaryLight: 'hsl(177,31%,73%)',
            text: 'white',
        },
        fonts: {
            main: 'Roboto',
            sub: 'Noto Sans JP',
            text: 'Noto Sans JP',
            number: 'Noto Sans JP',
        },
    },
})

const injectGlobalStyles = globalCss({
    ...reset,
    body: {
        fontFamily: '$main',
        fontSize: '14px',
        lineHeight: '1.5em',
        letterSpacing: '0.015em',
    },
})

injectGlobalStyles()

export const defaultTheme = createTheme({
    colors: {
        primaryDark: 'hsl(198,44%,11%)',
        primaryMid: 'hsl(209,20%,24%)',
        primaryLight: 'hsl(228,15%,39%)',
        secondaryDark: 'hsl(263,12%,53%)',
        secondaryMid: 'hsl(307,19%,66%)',
        secondaryLight: 'hsl(336,62%,83%)',
        text: 'white',
    },
})
