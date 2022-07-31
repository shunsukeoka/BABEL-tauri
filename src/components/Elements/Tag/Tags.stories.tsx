import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Tags } from './Tags'

export default {
    title: 'Common/Tags',
    component: Tags,
} as ComponentMeta<typeof Tags>

export const Default: ComponentStoryObj<typeof Tags> = {
    args: {
        tags: [
            { label: 'sound fx', textColor: '#fff', backgroundColor: '#FF5F00' },
            { label: 'human action', textColor: '#fff', backgroundColor: '#F8CB2E' },
            { label: 'footstep', textColor: '#fff', backgroundColor: '#1C6DD0' },
            { label: 'texture', textColor: '#fff', backgroundColor: '#3E8E7E' },
            { label: 'recording', textColor: '#fff', backgroundColor: '#8F4068' },
        ],
    },
}
