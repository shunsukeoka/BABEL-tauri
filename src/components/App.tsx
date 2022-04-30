import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { dialog } from '@tauri-apps/api'
import { useState } from 'react'
import { BrowserPage } from './pages/Browser'
import { SideNav, ISidenavActions } from './layouts/SideNav'
import { ReactComponent as AddProjectIcon } from '../assets/img/icon/add-project.svg'
import { ReactComponent as AddFolderIcon } from '../assets/img/icon/add-folder.svg'
import { FileBrowserService } from '../services/FileBrowserService'
import { ITag } from '../interfaces/tag'
import { IProjectInfo } from '../interfaces/project'
import { IDirectoryInfo } from '../interfaces/file'

/**
 * Props
 */
interface AppProps {
    tags?: ITag[]
    projects?: IProjectInfo[]
    directories?: IDirectoryInfo[]
    actions?: ISidenavActions[]
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledApp = styled.main`
    .container {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: rgba(255 0 0 / 10%);
    }
`

/**
 * View Component
 */
const AppView: React.VFC<AppProps> = ({ tags, projects, directories, actions, onClick }: AppProps) => (
    <sp-theme scale="medium" color="light">
        <StyledApp>
            <header>
                <h1 className="logo">BABEL</h1>
            </header>

            <section className="container">
                <SideNav
                    tags={tags}
                    projects={projects}
                    directories={directories}
                    actions={actions}
                    onClick={onClick}
                />

                <Routes>
                    <Route path="/" element={<BrowserPage />} />
                </Routes>
            </section>
        </StyledApp>
    </sp-theme>
)

/**
 * Default Props
 */
AppView.defaultProps = {
    tags: [],
    projects: [],
    directories: [],
    actions: [],
    onClick: (event) => {
        event.preventDefault()
    },
}

/**
 * Component
 */
const App: React.VFC = () => {
    const fileBrowserService = new FileBrowserService()

    const initial = {
        tags: [
            { name: 'Voice', id: 'tag:voice' },
            { name: 'BGM', id: 'tag:bgm' },
            { name: 'FX', id: 'tag:fx' },
        ],
        projects: [{ name: 'Sample Project', id: 'project:sample' }],
        directories: [
            { name: 'Sound Materials', path: 'D:\\Dropbox\\Private\\sound_materials\\Sampling Sound Library' },
            { name: 'Voice Recording', path: '/d/Works/Sound/Voice Recording' },
        ],
    }

    const [tags] = useState(initial.tags)
    const [projects] = useState(initial.projects)
    const [directories, setDirectories] = useState(initial.directories)

    const onClickSideNavItem = async (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()

        const path = event.currentTarget.value

        const result = await fileBrowserService.fetch(path)

        console.log(result)
    }

    const onClickAddProjectButton = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
    }

    const onClickAddLocalDirectory = async (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()

        const path = (await dialog.open({ directory: true })) as string

        if (path) {
            const updated = [...directories, { name: path.replace(/\\/g, '/').split('/').pop() || path, path }]
            setDirectories(updated)
        }
    }

    const actions = [
        {
            id: 'action:add:project',
            icon: <AddProjectIcon />,
            tooltip: 'add project',
            onClick: onClickAddProjectButton,
        },
        {
            id: 'action:add:directory',
            icon: <AddFolderIcon />,
            tooltip: 'add directory',
            onClick: onClickAddLocalDirectory,
        },
    ]

    return (
        <AppView
            tags={tags}
            projects={projects}
            directories={directories}
            actions={actions}
            onClick={onClickSideNavItem}
        />
    )
}

/**
 * Export
 */
export { App }
