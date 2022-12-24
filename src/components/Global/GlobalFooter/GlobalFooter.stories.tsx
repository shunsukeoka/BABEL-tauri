import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { GlobalFooter } from './GlobalFooter'

export default {
    title: 'Globals/GlobalFooter',
    component: GlobalFooter,
} as ComponentMeta<typeof GlobalFooter>

export const Default: ComponentStoryObj<typeof GlobalFooter> = {
    args: {},
}
