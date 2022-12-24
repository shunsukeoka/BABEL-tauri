import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { FileList } from './FileList'

export default {
    title: 'Browser/FileList',
    component: FileList,
} as ComponentMeta<typeof FileList>

export const Default: ComponentStoryObj<typeof FileList> = {
    args: {
        list: [
            {
                file_name: 'ファイル名-01',
                file_path: 'ファイルパス-01',
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
            {
                file_name: 'ファイル名-02',
                file_path: 'ファイルパス-01',
                audio_properties: {
                    channels: 2,
                    duration: 20000,
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
            {
                file_name: 'ファイル名-03',
                file_path: 'ファイルパス-03',
                audio_properties: {
                    channels: 2,
                    duration: 30000,
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
            {
                file_name: 'ファイル名-04',
                file_path: 'ファイルパス-04',
                audio_properties: {
                    channels: 2,
                    duration: 40000,
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
            {
                file_name: 'ファイル名-05',
                file_path: 'ファイルパス-05',
                audio_properties: {
                    channels: 2,
                    duration: 50000,
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
        ],
    },
}