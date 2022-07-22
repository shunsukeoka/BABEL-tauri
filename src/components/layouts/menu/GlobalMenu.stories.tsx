import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { GlobalMenu } from './GlobalMenu'

export default {
    title: 'Layouts/Menu/GlobalMenu',
    component: GlobalMenu,
} as ComponentMeta<typeof GlobalMenu>

export const Default: ComponentStoryObj<typeof GlobalMenu> = {
    args: {},
}
