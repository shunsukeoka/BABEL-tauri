import { AppRoutes } from '@/routes'
import { AppProviders } from '@/providers/app'

export const App = () => (
    <AppProviders>
        <AppRoutes />
    </AppProviders>
)
