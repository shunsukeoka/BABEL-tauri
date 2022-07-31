import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MdOutlineFolder } from 'react-icons/md'
import { BrowseList } from './BrowseList'

export default {
    title: 'Layouts/Contents/BrowseList',
    component: BrowseList,
} as ComponentMeta<typeof BrowseList>

export const Default: ComponentStoryObj<typeof BrowseList> = {
    args: {
        icon: <MdOutlineFolder />,
        title: 'LOCAL DIRECTORIES',
        browseList: [
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
