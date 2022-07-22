import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { BrowsePage } from './pages/Browse'
import { GlobalHeader } from './layouts/GlobalHeader'
import { PlaybackControl } from './layouts/PlaybackControl'

/**
 * Props
 */
interface AppProps {}

/**
 * Styled Component
 */
const StyledApp = styled.main`
    .container {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: calc(100vh - 168px);
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 104px;
    }
`

/**
 * View Component
 */
const AppView: React.VFC<AppProps> = ({ ...props }: AppProps) => (
    <StyledApp {...props}>
        <GlobalHeader />

        <section className="container">
            <Routes>
                <Route path="/" element={<BrowsePage />} />
            </Routes>
        </section>

        <footer>
            <PlaybackControl isPlaying={false} isRepeat={false} seekValue={0.5} />
        </footer>
    </StyledApp>
)

/**
 * Default Props
 */
AppView.defaultProps = {}

/**
 * Component
 */
const App: React.VFC = () => <AppView />

/**
 * Export
 */
export { App }
