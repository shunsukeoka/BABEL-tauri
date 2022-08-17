import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { MasterVolume } from './MasterVolume'

export default {
    title: 'Audio/MasterVolume',
    component: MasterVolume,
} as ComponentMeta<typeof MasterVolume>

export const Default: ComponentStoryObj<typeof MasterVolume> = {
    args: { variant: 'default', size: 'default' },
}

export const Primary: ComponentStoryObj<typeof MasterVolume> = {
    args: { variant: 'primary', size: 'default' },
}

export const Large: ComponentStoryObj<typeof MasterVolume> = {
    args: { variant: 'default', size: 'large' },
}
