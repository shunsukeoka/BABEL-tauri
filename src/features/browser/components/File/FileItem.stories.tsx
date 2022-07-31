import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { FileItem } from './FileItem'

export default {
    title: 'Browser/File/FileItem',
    component: FileItem,
} as ComponentMeta<typeof FileItem>

export const Default: ComponentStoryObj<typeof FileItem> = {
    args: {
        path: '/path/オーディオファイル名',
        name: 'オーディオファイル名',
        fileType: 'audio/wave',
        audioLength: '12:34',
        tags: [
            { label: 'sound fx', textColor: '#fff', backgroundColor: '#FF5F00' },
            { label: 'human action', textColor: '#fff', backgroundColor: '#F8CB2E' },
            { label: 'footstep', textColor: '#fff', backgroundColor: '#1C6DD0' },
            { label: 'texture', textColor: '#fff', backgroundColor: '#3E8E7E' },
            { label: 'recording', textColor: '#fff', backgroundColor: '#8F4068' },
        ],
    },
}
