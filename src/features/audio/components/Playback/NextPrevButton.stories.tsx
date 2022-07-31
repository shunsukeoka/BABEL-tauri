import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { NextPrevButton } from './NextPrevButton'

export default {
    title: 'Audio/Playback/NextPrevButton',
    component: NextPrevButton,
} as ComponentMeta<typeof NextPrevButton>

export const Default: ComponentStoryObj<typeof NextPrevButton> = {
    args: { variant: 'default', size: 'default', reverse: false },
}

export const Reverse: ComponentStoryObj<typeof NextPrevButton> = {
    args: { variant: 'default', size: 'default', reverse: true },
}

export const Primary: ComponentStoryObj<typeof NextPrevButton> = {
    args: { variant: 'primary', size: 'default', reverse: false },
}

export const Small: ComponentStoryObj<typeof NextPrevButton> = {
    args: { variant: 'default', size: 'small', reverse: false },
}

export const Large: ComponentStoryObj<typeof NextPrevButton> = {
    args: { variant: 'default', size: 'large', reverse: false },
}
