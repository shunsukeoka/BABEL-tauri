// import styled from 'styled-components'
import clsx from 'clsx'
import { memo } from 'react'
import { IoMdPlay, IoMdPause } from 'react-icons/io'

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

export type PlayButtonVariant = keyof typeof variants
export type PlayButtonSize = keyof typeof sizes

export interface PlayButtonProps {
    variant?: PlayButtonVariant
    size?: PlayButtonSize
    isPlaying: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const PlayButton: React.FC<PlayButtonProps> = ({
    onClick,
    size,
    variant,
    isPlaying,
    ...props
}: PlayButtonProps) => (
    <div
        className={clsx('cursor-pointer', sizes[size || 'default'], variants[variant || 'default'])}
        onClick={onClick}
        {...props}
        role="presentation"
    >
        {isPlaying ? <IoMdPause /> : <IoMdPlay />}
    </div>
)

export const PlayButtonMemo = memo(PlayButton)
