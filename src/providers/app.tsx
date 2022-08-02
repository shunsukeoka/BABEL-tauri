// MEMO: all of the application providers

import { store } from '@/stores'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

type AppProviderProps = {
    children: React.ReactNode
}

export const AppProviders = ({ children }: AppProviderProps) => (
    <Provider store={store}>
        <Router>{children}</Router>
    </Provider>
)
