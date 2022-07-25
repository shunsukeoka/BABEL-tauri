import { Routes, Route } from 'react-router-dom'
import { BrowsePage } from './pages/Browse'
import { GlobalHeader } from './layouts/GlobalHeader'
import { PlaybackControl } from './layouts/PlaybackControl'

interface AppProps {}

export const App: React.FC<AppProps> = ({ ...props }: AppProps) => (
    <main {...props}>
        <GlobalHeader />

        <section className="flex h-[calc(100vh-168px)] items-start justify-start">
            <Routes>
                <Route path="/" element={<BrowsePage />} />
            </Routes>
        </section>

        <footer className="flex h-[104px] w-full items-center justify-center">
            <PlaybackControl isPlaying={false} isRepeat={false} seekValue={0.5} />
        </footer>
    </main>
)

App.defaultProps = {}
