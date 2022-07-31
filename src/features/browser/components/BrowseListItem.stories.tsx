import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { BrowseListItem } from './BrowseListItem'

export default {
    title: 'Layouts/Contents/BrowseListItem',
    component: BrowseListItem,
} as ComponentMeta<typeof BrowseListItem>

export const Default: ComponentStoryObj<typeof BrowseListItem> = {
    args: {
        name: 'Sampling Sound Library',
    },
}
