import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { GlobalMenu } from './GlobalMenu'

export default {
    title: 'Globals/GlobalMenu',
    component: GlobalMenu,
} as ComponentMeta<typeof GlobalMenu>

export const Default: ComponentStoryObj<typeof GlobalMenu> = {
    args: {},
}
