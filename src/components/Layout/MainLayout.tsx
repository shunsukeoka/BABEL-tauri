import { styled } from '@/styles'
import { GlobalHeader, GlobalFooter } from '../Global'

interface MainLayoutProps {
    children: React.ReactNode
}

const StyledMainLayout = styled('div', {
    display: 'flex',
    height: 'calc(100vh-168px)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
})

export const MainLayout = ({ children }: MainLayoutProps) => (
    <div>
        <GlobalHeader />

        <StyledMainLayout>{children}</StyledMainLayout>

        <GlobalFooter />
    </div>
)
