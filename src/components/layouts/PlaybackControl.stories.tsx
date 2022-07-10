import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { PlaybackControl } from './PlayBackControl'

export default {
    title: 'Layouts/PlaybackControl',
    component: PlaybackControl,
} as ComponentMeta<typeof PlaybackControl>

export const Default: ComponentStoryObj<typeof PlaybackControl> = {
    args: { isPlaying: false, isRepeat: false, seekValue: 0.1 },
}
