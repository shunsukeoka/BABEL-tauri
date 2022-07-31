import clsx from 'clsx'
import React from 'react'

const sizes = {
    default: 'py-1 px-sm text-base',
}

const variants = {
    default: `
        bg-white
        text-black
    `,
    primary: `
        bg-primary
    `,
}

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

interface ButtonProps {
    variant?: ButtonVariant
    size?: ButtonSize
    label: string
    onClick?: () => void
}

/**
 * Component
 */
export const Button: React.FC<ButtonProps> = ({ variant, size, label, onClick }: ButtonProps) => (
    <button
        type="button"
        className={clsx(
            'inline-block cursor-pointer rounded border-0 font-roboto hover:opacity-80',
            sizes[size || 'default'],
            variants[variant || 'default'],
        )}
        onClick={onClick}
    >
        {label}
    </button>
)
