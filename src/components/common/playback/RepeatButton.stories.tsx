import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { RepeatButton } from './RepeatButton'

export default {
    title: 'Common/PlayBack/RepeatButton',
    component: RepeatButton,
} as ComponentMeta<typeof RepeatButton>

export const Default: ComponentStoryObj<typeof RepeatButton> = {
    args: { variant: 'default', size: 'default', isRepeat: false },
}

export const Active: ComponentStoryObj<typeof RepeatButton> = {
    args: { variant: 'default', size: 'default', isRepeat: true },
}

export const Primary: ComponentStoryObj<typeof RepeatButton> = {
    args: { variant: 'primary', size: 'default', isRepeat: true },
}

export const Small: ComponentStoryObj<typeof RepeatButton> = {
    args: { variant: 'default', size: 'small', isRepeat: false },
}

export const Large: ComponentStoryObj<typeof RepeatButton> = {
    args: { variant: 'default', size: 'large', isRepeat: false },
}
