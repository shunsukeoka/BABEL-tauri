// import styled from 'styled-components'
import clsx from 'clsx'
import { IoMdSkipForward, IoMdSkipBackward } from 'react-icons/io'

const sizes = {
    default: 'text-base',
    small: 'text-sm',
    large: 'text-lg',
}

const variants = {
    default: `
        text-white
    `,
    primary: `
        text-primary
    `,
}

export type NextPrevButtonVariant = keyof typeof variants
export type NextPrevButtonSize = keyof typeof sizes

export interface NextPrevButtonProps {
    variant?: NextPrevButtonVariant
    size?: NextPrevButtonSize
    reverse?: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const NextPrevButton: React.FC<NextPrevButtonProps> = ({
    size,
    variant,
    reverse,
    onClick,
    ...props
}: NextPrevButtonProps) => (
    <div
        className={clsx('cursor-pointer', sizes[size || 'default'], variants[variant || 'default'])}
        onClick={onClick}
        {...props}
        role="presentation"
    >
        {reverse ? <IoMdSkipBackward /> : <IoMdSkipForward />}
    </div>
)
