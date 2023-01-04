import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MdPlayCircleOutline } from 'react-icons/md'

import { RootDirectoryList } from './RootDirectoryList'

export default {
    title: 'Browser/RootDirectoryList',
    component: RootDirectoryList,
} as ComponentMeta<typeof RootDirectoryList>

export const Default: ComponentStoryObj<typeof RootDirectoryList> = {
    args: {
        title: 'TEST',
        icon: <MdPlayCircleOutline />,
        list: [
            {
                id: 1,
                path: 'ファイル名1',
                name: 'ファイルパス1',
                createdAt: '2023/01/01 00:00:00',
                updatedAt: '2023/01/01 00:00:00',
            },
            {
                id: 2,
                path: 'ファイル名2',
                name: 'ファイルパス2',
                createdAt: '2023/02/02 00:00:00',
                updatedAt: '2023/02/02 00:00:00',
            },
            {
                id: 3,
                path: 'ファイル名3',
                name: 'ファイルパス3',
                createdAt: '2023/03/03 00:00:00',
                updatedAt: '2023/03/03 00:00:00',
            },
        ],
    },
}
