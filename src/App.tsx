import { AppProviders } from '@/providers/app'
import { AppRoutes } from '@/routes'

export const App = () => (
    <AppProviders>
        <AppRoutes />
    </AppProviders>
)
