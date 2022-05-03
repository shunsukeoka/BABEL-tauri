import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { FileList } from './FileList'

export default {
    title: 'Layouts/FileList',
    component: FileList,
} as ComponentMeta<typeof FileList>

export const Default: ComponentStoryObj<typeof FileList> = {
    args: {
        items: [
            {
                path: '/a/オーディオファイル名-01.wav',
                name: 'オーディオファイル名-01',
                fileType: 'audio/wave',
                audioLength: '12:34',
                tags: [
                    { label: 'sound fx', textColor: '#fff', backgroundColor: '#FF5F00' },
                    { label: 'human action', textColor: '#fff', backgroundColor: '#F8CB2E' },
                    { label: 'footstep', textColor: '#fff', backgroundColor: '#1C6DD0' },
                ],
            },
            {
                path: '/a/b/オーディオファイル名-02.mp3',
                name: 'オーディオファイル名-02',
                fileType: 'audio/mp3',
                audioLength: '05:42',
                tags: [
                    { label: 'music', textColor: '#fff', backgroundColor: '#612897' },
                    { label: 'techno', textColor: '#fff', backgroundColor: '#95CD41' },
                ],
            },
            {
                path: '/a/b/c/オーディオファイル名-03.flac',
                name: 'オーディオファイル名-03',
                fileType: 'audio/flac',
                audioLength: '02:13',
                tags: [
                    { label: 'se', textColor: '#fff', backgroundColor: '#750550' },
                    { label: 'game sound', textColor: '#fff', backgroundColor: '#890F0D' },
                ],
            },
        ],
    },
}
