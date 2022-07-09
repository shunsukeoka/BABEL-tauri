import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { RepeatButton } from './RepeatButton'

export default {
    title: 'Common/PlayBack/RepeatButton',
    component: RepeatButton,
} as ComponentMeta<typeof RepeatButton>

export const Default: ComponentStoryObj<typeof RepeatButton> = {
    args: { color: '#000', activeColor: '#ff0000', size: 18, isRepeat: false },
}
