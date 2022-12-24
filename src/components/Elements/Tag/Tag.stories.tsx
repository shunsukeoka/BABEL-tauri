import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Tag } from './Tag'

export default {
    title: 'Elements/Tag',
    component: Tag,
} as ComponentMeta<typeof Tag>

export const Default: ComponentStoryObj<typeof Tag> = {
    args: {
        color: '#000',
        label: 'Label',
    },
}
