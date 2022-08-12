// MEMO: all of the application providers
import { BrowserRouter as Router } from 'react-router-dom'

type AppProviderProps = {
    children: React.ReactNode
}

export const AppProviders = ({ children }: AppProviderProps) => <Router>{children}</Router>
