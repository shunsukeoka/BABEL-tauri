import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { MasterVolume } from './MasterVolume'

export default {
    title: 'Audio/MasterVolume',
    component: MasterVolume,
} as ComponentMeta<typeof MasterVolume>

export const Default: ComponentStoryObj<typeof MasterVolume> = {
    args: {},
}
