import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { FileList } from './FileList'

export default {
    title: 'Browser/File/FileList',
    component: FileList,
} as ComponentMeta<typeof FileList>

export const Default: ComponentStoryObj<typeof FileList> = {
    args: {
        list: [
            {
                file_path: '/a/オーディオファイル名-01.wav',
                file_name: 'オーディオファイル名-01',
                mime: 'audio/wave',
                file_size: 1000,
                is_dir: true,
                is_file: false,
                is_symlink: false,
                readonly: false,
                audio_properties: {
                    channels: 2,
                    bit_depth: 16,
                    sample_rate: 44100,
                    duration: 500000,
                },
                created_t: 'yyyy/mm/dd hh:mm:ss',
                modified_t: 'yyyy/mm/dd hh:mm:ss',
                accessed_t: 'yyyy/mm/dd hh:mm:ss',
            },
            {
                file_path: '/a/オーディオファイル名-02.wav',
                file_name: 'オーディオファイル名-02',
                mime: 'audio/mp3',
                file_size: 2000,
                is_dir: true,
                is_file: false,
                is_symlink: false,
                readonly: false,
                audio_properties: {
                    channels: 2,
                    bit_depth: 24,
                    sample_rate: 44100,
                    duration: 500000,
                },
                created_t: 'yyyy/mm/dd hh:mm:ss',
                modified_t: 'yyyy/mm/dd hh:mm:ss',
                accessed_t: 'yyyy/mm/dd hh:mm:ss',
            },
            {
                file_path: '/a/オーディオファイル名-03.wav',
                file_name: 'オーディオファイル名-03',
                mime: 'audio/flac',
                file_size: 3000,
                is_dir: true,
                is_file: false,
                is_symlink: false,
                readonly: false,
                audio_properties: {
                    channels: 2,
                    bit_depth: 24,
                    sample_rate: 48000,
                    duration: 500000,
                },
                created_t: 'yyyy/mm/dd hh:mm:ss',
                modified_t: 'yyyy/mm/dd hh:mm:ss',
                accessed_t: 'yyyy/mm/dd hh:mm:ss',
            },
        ],
    },
}
