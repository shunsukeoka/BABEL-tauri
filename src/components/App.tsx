import styled from 'styled-components'
import { SideNav } from './layouts/SideNav'

const defaultNav = {
    tags: [
        { name: 'Voice', id: 'tag:voice' },
        { name: 'BGM', id: 'tag:bgm' },
        { name: 'FX', id: 'tag:fx' },
    ],
    projects: [{ name: 'Sample Project', id: 'project:sample' }],
    directories: [
        { name: 'Sound Materials', path: '/d/Works/Sound/Sound Materials' },
        { name: 'Voice Recording', path: '/d/Works/Sound/Voice Recording' },
    ],
    onClick: (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        console.log(event.currentTarget.value)
    },
}

/**
 * View Component
 */
const AppView: React.VFC = () => (
    <sp-theme scale="medium" color="light">
        <main>
            <header>
                <h1 className="logo">BABEL</h1>
            </header>

            <SideNav
                tags={defaultNav.tags}
                projects={defaultNav.projects}
                directories={defaultNav.directories}
                onClick={defaultNav.onClick}
            />
        </main>
    </sp-theme>
)

/**
 * Styled Component
 */
const StyledApp = styled(AppView)``

/**
 * Component
 */
const App: React.VFC = () => <StyledApp />

/**
 * Export
 */
export { App }
