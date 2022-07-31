import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { FileItem } from './FileItem'

export default {
    title: 'Browser/File/FileItem',
    component: FileItem,
} as ComponentMeta<typeof FileItem>

export const Default: ComponentStoryObj<typeof FileItem> = {
    args: {
        info: {
            file_path: '/a/オーディオファイル名-01.wav',
            file_name: 'オーディオファイル名-01',
            mime: 'audio/wave',
            file_size: '1000',
            is_dir: true,
            is_file: false,
            is_symlink: false,
            readonly: false,
            created_t: 'yyyy/mm/dd hh:mm:ss',
            modified_t: 'yyyy/mm/dd hh:mm:ss',
            accessed_t: 'yyyy/mm/dd hh:mm:ss',
        },
    },
}
