import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { GlobalHeader } from './GlobalHeader'

export default {
    title: 'Layouts/Menu/GlobalHeader',
    component: GlobalHeader,
} as ComponentMeta<typeof GlobalHeader>

export const Default: ComponentStoryObj<typeof GlobalHeader> = {
    args: {},
}
