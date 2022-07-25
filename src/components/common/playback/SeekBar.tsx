import clsx from 'clsx'
import React from 'react'
import styled from '@emotion/styled'

const variants = {
    default: `
        bg-white
    `,
    primary: `
        bg-primary
    `,
}

export type SeekBarVariant = keyof typeof variants

export interface SeekBarProps {
    value?: number
    min?: number
    max?: number
    step?: number
    elapsedTime?: string
    totalTime?: string
    size?: number
    variant?: SeekBarVariant
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledSeekBar = styled.div<SeekBarProps>`
    input[type='range'] {
        &::-webkit-slider-thumb {
            appearance: none;
            width: ${(props) => `${props.size}px`};
            height: ${(props) => `${props.size}px`};
            cursor: pointer;
            background-color: ${(props) => {
                switch (props.variant) {
                    case 'default':
                        return 'var(--color-text)'
                    case 'primary':
                        return 'var(--color-primary)'
                    default:
                        return 'var(--color-text)'
                }
            }};
            border: none;
            border-radius: 50%;
        }
    }
`

export const SeekBar: React.FC<SeekBarProps> = ({
    size,
    variant,
    elapsedTime,
    totalTime,
    min,
    max,
    step,
    value,
    onChange,
    ...props
}: SeekBarProps) => (
    <StyledSeekBar className="flex items-center justify-center" size={size} variant={variant} {...props}>
        <span className="text-xs">{elapsedTime}</span>
        <input
            className={clsx(
                'mx-2 h-[1px] w-full appearance-none rounded focus:outline-none active:outline-none',
                variants[variant || 'default'],
            )}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
        />
        <span className="text-xs">{totalTime}</span>
    </StyledSeekBar>
)

SeekBar.defaultProps = {
    value: 0.0,
    min: 0.0,
    max: 1.0,
    step: 0.0001,
    elapsedTime: '00:00',
    totalTime: '00:00',
    size: 9,
}
