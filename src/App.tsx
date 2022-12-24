import { AppRoutes } from '@/routes'
import { AppProviders } from '@/providers/app'
import { styled, defaultTheme } from './styles'

const AppContainer = styled('div')

export const App = () => (
    <AppProviders>
        <AppContainer className={defaultTheme.className}>
            <AppRoutes />
        </AppContainer>
    </AppProviders>
)
