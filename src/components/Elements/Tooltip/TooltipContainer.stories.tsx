import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { TooltipContainer } from './TooltipContainer'

export default {
    title: 'Common/Tooltip',
    component: TooltipContainer,
} as ComponentMeta<typeof TooltipContainer>

export const Default: ComponentStoryObj<typeof TooltipContainer> = {
    args: {
        text: 'tooltip',
        children: <div style={{ display: 'inline-block', cursor: 'pointer' }}>Hover me!</div>,
    },
}
