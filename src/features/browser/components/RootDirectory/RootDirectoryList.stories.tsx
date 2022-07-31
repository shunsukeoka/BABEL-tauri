import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MdOutlineFolder } from 'react-icons/md'
import { RootDirectoryList } from './RootDirectoryList'

export default {
    title: 'Browser/RootDirectory/RootDirectoryList',
    component: RootDirectoryList,
} as ComponentMeta<typeof RootDirectoryList>

export const Default: ComponentStoryObj<typeof RootDirectoryList> = {
    args: {
        icon: <MdOutlineFolder />,
        title: 'LOCAL DIRECTORIES',
        list: [
            {
                file_path: 'xxx/yyy/zzz',
                file_name: 'Sample Magic - SM08 NU RAVE',
                file_size: '123',
                mime: '',
                is_dir: true,
                is_file: false,
                is_symlink: false,
                readonly: false,
                created_t: '',
                modified_t: '',
                accessed_t: '',
            },
            {
                file_path: 'xxx/yyy/zzz',
                file_name: 'Vengeance Dance Explosion Vol.1',
                file_size: '123',
                mime: '',
                is_dir: true,
                is_file: false,
                is_symlink: false,
                readonly: false,
                created_t: '',
                modified_t: '',
                accessed_t: '',
            },
        ],
    },
}
