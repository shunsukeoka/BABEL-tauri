import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MdPlayCircleOutline } from 'react-icons/md'

import { GlobalMenuItemMemo } from './GlobalMenuItem'

export default {
    title: 'Globals/GlobalMenuItemMemo',
    component: GlobalMenuItemMemo,
} as ComponentMeta<typeof GlobalMenuItemMemo>

export const Default: ComponentStoryObj<typeof GlobalMenuItemMemo> = {
    args: {
        icon: <MdPlayCircleOutline />,
        name: 'Browse',
        active: false,
    },
}

export const Active: ComponentStoryObj<typeof GlobalMenuItemMemo> = {
    args: {
        icon: <MdPlayCircleOutline />,
        name: 'Browse',
        active: true,
    },
}
