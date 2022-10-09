import { IoMdRepeat } from 'react-icons/io'
import clsx from 'clsx'
import { memo } from 'react'

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

export type RepeatButtonVariant = keyof typeof variants
export type RepeatButtonSize = keyof typeof sizes

export interface RepeatButtonProps {
    variant?: RepeatButtonVariant
    size?: RepeatButtonSize
    isRepeat?: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const RepeatButton: React.FC<RepeatButtonProps> = ({
    isRepeat,
    size,
    variant,
    onClick,
    ...props
}: RepeatButtonProps) => (
    <div
        className={clsx('cursor-pointer', sizes[size || 'default'], isRepeat && variants[variant || 'default'])}
        {...props}
        onClick={onClick}
        role="presentation"
    >
        <IoMdRepeat />
    </div>
)

export const RepeatButtonMemo = memo(RepeatButton)
