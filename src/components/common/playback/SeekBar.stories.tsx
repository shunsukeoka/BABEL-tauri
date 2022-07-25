import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SeekBar } from './SeekBar'

export default {
    title: 'Common/PlayBack/SeekBar',
    component: SeekBar,
} as ComponentMeta<typeof SeekBar>

export const Default: ComponentStoryObj<typeof SeekBar> = {
    args: {
        min: 0.0,
        max: 1.0,
        step: 0.0001,
        value: 0.5,
        size: 9,
        variant: 'default',
    },
}
