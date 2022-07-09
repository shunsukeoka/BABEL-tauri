import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { PlayButton } from './PlayButton'

export default {
    title: 'Common/PlayBack/PlayButton',
    component: PlayButton,
} as ComponentMeta<typeof PlayButton>

export const Default: ComponentStoryObj<typeof PlayButton> = {
    args: { isPlaying: true, color: '#000' },
}
