import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SideNav } from './SideNav'
import { ReactComponent as AddProjectIcon } from '../../assets/img/icon/add-project.svg'
import { ReactComponent as AddFolderIcon } from '../../assets/img/icon/add-folder.svg'

export default {
    title: 'Layouts/SideNav',
    component: SideNav,
} as ComponentMeta<typeof SideNav>

export const Default: ComponentStoryObj<typeof SideNav> = {
    args: {
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
        actions: [
            {
                id: 'action:add:project',
                icon: <AddProjectIcon />,
                tooltip: 'add project',
                onClick: (event: React.MouseEvent<HTMLInputElement>) => {
                    event.preventDefault()
                    console.log(event.currentTarget.value)
                },
            },
            {
                id: 'action:add:directory',
                icon: <AddFolderIcon />,
                tooltip: 'add directory',
                onClick: (event: React.MouseEvent<HTMLInputElement>) => {
                    event.preventDefault()
                    console.log(event.currentTarget.value)
                },
            },
        ],
        onClick: (event: React.MouseEvent<HTMLInputElement>) => {
            event.preventDefault()
            console.log(event.currentTarget.value)
        },
    },
}
