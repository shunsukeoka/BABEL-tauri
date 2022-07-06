import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AudioPlaybackState } from '../../../interfaces/audio'
import { PlayButton } from './PlayButton'

export default {
    title: 'Common/PlayBack/PlayButton',
    component: PlayButton,
    argTypes: {
        playbackState: {
            control: {
                type: 'select',
                options: [AudioPlaybackState.PLAYING, AudioPlaybackState.PAUSED],
                labels: {
                    '0': 'PLAYING',
                    '1': 'PAUSED',
                },
            },
        },
    },
} as ComponentMeta<typeof PlayButton>

export const Default: ComponentStoryObj<typeof PlayButton> = {
    args: { playbackState: AudioPlaybackState.PAUSED, color: '#000' },
}
