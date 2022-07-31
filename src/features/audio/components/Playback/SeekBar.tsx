import clsx from 'clsx'
import React from 'react'

const variants = {
    default: `
        bg-white
        slider-knob:bg-white
    `,
    primary: `
        bg-primary
        slider-knob:bg-primary
    `,
}

const sizes = {
    default: `
        h-[1px]
        slider-knob:w-2
        slider-knob:h-2
    `,
    large: `
        h-[3px]
        slider-knob:w-4
        slider-knob:h-4
    `,
}

export type SeekBarVariant = keyof typeof variants
export type SeekBarSize = keyof typeof sizes

export interface SeekBarProps {
    value?: number
    min?: number
    max?: number
    step?: number
    elapsedTime?: string
    totalTime?: string
    size?: SeekBarSize
    variant?: SeekBarVariant
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

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
    <div className="flex items-center justify-center" {...props}>
        <span className="text-xs">{elapsedTime}</span>
        <input
            className={clsx(
                'mx-2 h-[1px] w-full appearance-none rounded focus:outline-none active:outline-none slider-knob:cursor-pointer slider-knob:appearance-none slider-knob:rounded-full slider-knob:border-none',
                variants[variant || 'default'],
                sizes[size || 'default'],
            )}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
        />
        <span className="text-xs">{totalTime}</span>
    </div>
)

SeekBar.defaultProps = {
    value: 0.0,
    min: 0.0,
    max: 1.0,
    step: 0.0001,
    elapsedTime: '00:00',
    totalTime: '00:00',
}
