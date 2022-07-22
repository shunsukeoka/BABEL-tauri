import { Reset } from 'styled-reset'
import { GlobalStyle } from '../src/assets/styles/global-style'

export const decorators = [
    (Story) => (
        <>
            <Reset />
            <GlobalStyle />
            <Story />
        </>
    ),
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
