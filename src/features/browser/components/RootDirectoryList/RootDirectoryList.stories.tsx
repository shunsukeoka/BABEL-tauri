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
                file_name: 'ファイル名1',
                file_path: 'ファイルパス1',
                mime: 'audio/wav',
                audio_properties: null,
                is_dir: true,
                is_file: false,
                is_symlink: false,
                file_size: 10000,
                readonly: false,
                created_t: '2022/01/01 00:00:00',
                modified_t: '2022/01/01 00:00:00',
                accessed_t: '2022/01/01 00:00:00',
            },
            {
                file_name: 'ファイル名2',
                file_path: 'ファイルパス2',
                mime: 'audio/wav',
                audio_properties: null,
                is_dir: true,
                is_file: false,
                is_symlink: false,
                file_size: 10000,
                readonly: false,
                created_t: '2022/01/01 00:00:00',
                modified_t: '2022/01/01 00:00:00',
                accessed_t: '2022/01/01 00:00:00',
            },
            {
                file_name: 'ファイル名3',
                file_path: 'ファイルパス3',
                mime: 'audio/wav',
                audio_properties: null,
                is_dir: true,
                is_file: false,
                is_symlink: false,
                file_size: 10000,
                readonly: false,
                created_t: '2022/01/01 00:00:00',
                modified_t: '2022/01/01 00:00:00',
                accessed_t: '2022/01/01 00:00:00',
            },
        ],
    },
}
