// MEMO: all of the application providers
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'

type AppProviderProps = {
    children: React.ReactNode
}

export const AppProviders = ({ children }: AppProviderProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <Router>{children}</Router>
        </QueryClientProvider>
    )
}
