import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { PlayButton } from './PlayButton'

export default {
    title: 'Common/PlayBack/PlayButton',
    component: PlayButton,
} as ComponentMeta<typeof PlayButton>

export const Default: ComponentStoryObj<typeof PlayButton> = {
    args: { isPlaying: false, variant: 'default', size: 'default' },
}

export const Primary: ComponentStoryObj<typeof PlayButton> = {
    args: { isPlaying: false, variant: 'primary', size: 'default' },
}

export const Small: ComponentStoryObj<typeof PlayButton> = {
    args: { isPlaying: false, variant: 'default', size: 'small' },
}

export const Large: ComponentStoryObj<typeof PlayButton> = {
    args: { isPlaying: false, variant: 'default', size: 'large' },
}
