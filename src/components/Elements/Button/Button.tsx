import { css } from '@emotion/react'
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
    label: string
    onClick?: () => void
}

const style = css({
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    fontFamily: 'Roboto',
    ':hover': {
        opacity: 0.8,
    },
})

/**
 * Component
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => (
    <button
        type="button"
        // className={clsx(
        //     'inline-block cursor-pointer rounded border-0 font-roboto hover:opacity-80',
        //     sizes[size || 'default'],
        //     variants[variant || 'default'],
        // )}
        css={style}
        onClick={onClick}
    >
        {label}
    </button>
)
