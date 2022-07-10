import React from 'react'
import styled from 'styled-components'

/**
 * Props
 */
export interface SeekBarProps {
    value: number
    lineColor?: string
    lineSize?: number
    knobColor?: string
    knobSize?: number
    min?: number
    max?: number
    step?: number
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledSeekBar = styled.div<SeekBarProps>`
    input[type='range'] {
        appearance: none;
        width: 100%;
        height: ${(props) => `${props.lineSize}px`};
        background-color: ${(props) => props.lineColor};
        border-radius: 8px;

        &:focus,
        &:active {
            outline: none;
        }

        &::-webkit-slider-thumb {
            appearance: none;
            width: ${(props) => `${props.knobSize}px`};
            height: ${(props) => `${props.knobSize}px`};
            cursor: pointer;
            background-color: ${(props) => props.knobColor};
            border: none;
            border-radius: 50%;
        }
    }
`

/**
 * View Component
 */
const SeekBarView: React.VFC<SeekBarProps> = ({ ...props }: SeekBarProps) => (
    <StyledSeekBar {...props}>
        <input
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            onChange={props.onChange}
        />
    </StyledSeekBar>
)

/**
 * Default Props
 */
SeekBarView.defaultProps = {
    lineColor: '#c7c7c7',
    lineSize: 2,
    knobColor: '#262626',
    knobSize: 12,
    min: 0.0,
    max: 1.0,
    step: 0.0001,
    onChange: (event) => {
        event.preventDefault()
        const currentValue = event.target.value
        console.log(currentValue)
    },
}

/**
 * Component
 */
const SeekBar: React.VFC<SeekBarProps> = ({ ...props }: SeekBarProps) => <SeekBarView {...props} />

/**
 * Export
 */
export { SeekBar }
