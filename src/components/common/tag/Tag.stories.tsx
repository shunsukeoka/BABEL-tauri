import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Tag } from './Tag'

export default {
    title: 'Common/Tag',
    component: Tag,
} as ComponentMeta<typeof Tag>

export const Default: ComponentStoryObj<typeof Tag> = {
    args: { textColor: '#000', backgroundColor: '#fff', label: 'Tag' },
}
