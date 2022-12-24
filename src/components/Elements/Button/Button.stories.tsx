import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button } from './Button'

export default {
    title: 'Elements/Button',
    component: Button,
    argTypes: {
        variants: {
            color: {
                options: ['primary', 'secondary'],
                control: { type: 'radio' },
            },
            size: {
                options: ['small', 'medium', 'large'],
                control: { type: 'radio' },
            },
        },
    },
} as ComponentMeta<typeof Button>

export const Primary: ComponentStoryObj<typeof Button> = {
    args: {
        label: 'Button',
        variants: {
            color: 'primary',
            size: 'medium',
        },
    },
}

export const Secondary: ComponentStoryObj<typeof Button> = {
    args: {
        label: 'Button',
        variants: {
            color: 'secondary',
            size: 'medium',
        },
    },
}

export const Small: ComponentStoryObj<typeof Button> = {
    args: {
        label: 'Button',
        variants: {
            color: 'primary',
            size: 'small',
        },
    },
}

export const Large: ComponentStoryObj<typeof Button> = {
    args: {
        label: 'Button',
        variants: {
            color: 'primary',
            size: 'large',
        },
    },
}
