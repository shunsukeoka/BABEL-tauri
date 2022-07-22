import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { BrowseContainer } from './BrowseContainer'

export default {
    title: 'Layouts/Contents/BrowseContainer',
    component: BrowseContainer,
} as ComponentMeta<typeof BrowseContainer>

export const Default: ComponentStoryObj<typeof BrowseContainer> = {
    args: {
        favorites: [
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
        ],
        directories: [
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
