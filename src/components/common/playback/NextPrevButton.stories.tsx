import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { NextPrevButton } from './NextPrevButton'

export default {
    title: 'Common/PlayBack/NextPrevButton',
    component: NextPrevButton,
} as ComponentMeta<typeof NextPrevButton>

export const Default: ComponentStoryObj<typeof NextPrevButton> = {
    args: { color: '#000', size: 18, reverse: false },
}
