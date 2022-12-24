import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Tags } from './Tags'

export default {
    title: 'Elements/Tags',
    component: Tags,
} as ComponentMeta<typeof Tags>

export const Default: ComponentStoryObj<typeof Tags> = {
    args: {
        tags: [
            { label: 'sound fx', color: '#FF5F00' },
            { label: 'human action', color: '#F8CB2E' },
            { label: 'footstep', color: '#1C6DD0' },
            { label: 'texture', color: '#3E8E7E' },
            { label: 'recording', color: '#8F4068' },
        ],
    },
}
