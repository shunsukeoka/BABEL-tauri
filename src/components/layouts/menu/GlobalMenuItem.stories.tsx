import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MdPlayCircleOutline } from 'react-icons/md'
import { GlobalMenuItem } from './GlobalMenuItem'

export default {
    title: 'Layouts/Menu/GlobalMenuItem',
    component: GlobalMenuItem,
} as ComponentMeta<typeof GlobalMenuItem>

export const Default: ComponentStoryObj<typeof GlobalMenuItem> = {
    args: {
        name: 'Browse',
        icon: <MdPlayCircleOutline />,
        active: true,
    },
}
