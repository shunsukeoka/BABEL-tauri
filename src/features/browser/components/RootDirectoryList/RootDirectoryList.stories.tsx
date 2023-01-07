import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { RootDirectoryList } from './RootDirectoryList'

export default {
    title: 'Browser/RootDirectoryList',
    component: RootDirectoryList,
} as ComponentMeta<typeof RootDirectoryList>

export const Default: ComponentStoryObj<typeof RootDirectoryList> = {
    args: {},
}
