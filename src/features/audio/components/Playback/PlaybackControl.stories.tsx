import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { PlaybackControl } from './PlaybackControl'

export default {
    title: 'Audio/Playback/PlaybackControl',
    component: PlaybackControl,
} as ComponentMeta<typeof PlaybackControl>

export const Default: ComponentStoryObj<typeof PlaybackControl> = {
    args: {},
}
