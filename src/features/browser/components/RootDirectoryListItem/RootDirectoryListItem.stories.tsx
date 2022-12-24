import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { RootDirectoryListItem } from './RootDirectoryListItem'

export default {
    title: 'Browser/RootDirectoryListItem',
    component: RootDirectoryListItem,
} as ComponentMeta<typeof RootDirectoryListItem>

export const Default: ComponentStoryObj<typeof RootDirectoryListItem> = {
    args: {
        name: 'test',
        path: '/aaa/test',
    },
}
