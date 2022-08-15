import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SeekBar } from './SeekBar'

export default {
    title: 'Audio/Playback/SeekBar',
    component: SeekBar,
} as ComponentMeta<typeof SeekBar>

export const Default: ComponentStoryObj<typeof SeekBar> = {
    args: {
        variant: 'default',
        size: 'default',
    },
}
