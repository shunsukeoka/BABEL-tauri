import '@spectrum-web-components/bundle/elements'

export const decorators = [
    (Story) => (
        <sp-theme scale="medium" color="light">
            <Story />
        </sp-theme>
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
