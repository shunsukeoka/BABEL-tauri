import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Slider } from './Slider'

export default {
    title: 'Elements/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>

export const Default: ComponentStoryObj<typeof Slider> = {
    args: {
        defaultValue: [0.5, 1.0],
        max: 1.0,
        min: 0.0,
        step: 0.0001,
    },
}
