import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { FileListItem } from './FileListItem'

export default {
    title: 'Browser/FileListItem',
    component: FileListItem,
} as ComponentMeta<typeof FileListItem>

export const Default: ComponentStoryObj<typeof FileListItem> = {
    args: {
        info: {
            file_name: 'ファイル名',
            file_path: 'ファイルパス',
            audio_properties: {
                channels: 2,
                duration: 10000,
                bit_depth: 16,
                sample_rate: 48000,
            },
            mime: 'audio/wav',
            is_dir: false,
            is_file: true,
            is_symlink: false,
            file_size: 50000,
            readonly: false,
            created_t: '2022/01/01 00:00:00',
            modified_t: '2022/01/01 00:00:00',
            accessed_t: '2022/01/01 00:00:00',
        },
    },
}
