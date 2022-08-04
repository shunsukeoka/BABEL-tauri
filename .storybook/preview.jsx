import { Provider } from 'react-redux'
import { store } from '../src/stores'
import '../src/assets/styles/index.scss'

export const decorators = [
    (Story) => (
        <Provider store={store}>
            <Story />
        </Provider>
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
