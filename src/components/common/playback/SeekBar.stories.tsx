import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SeekBar } from './SeekBar'

export default {
    title: 'Common/PlayBack/SeekBar',
    component: SeekBar,
} as ComponentMeta<typeof SeekBar>

export const Default: ComponentStoryObj<typeof SeekBar> = {
    args: {
        lineColor: '#c7c7c7',
        lineSize: 2,
        knobColor: '#262626',
        knobSize: 12,
        min: 0.0,
        max: 1.0,
        step: 0.0001,
        value: 0.5,
    },
}
