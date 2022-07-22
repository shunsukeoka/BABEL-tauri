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
    elapsedTime?: string
    totalTime?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledSeekBar = styled.div<SeekBarProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 10px;
        letter-spacing: 0.025em;
    }

    input[type='range'] {
        appearance: none;
        width: 100%;
        height: ${(props) => `${props.lineSize}px`};
        margin: 0 8px;
        background-color: ${(props) => props.lineColor};
        border-radius: 8px;

        &::-webkit-slider-thumb {
            appearance: none;
            width: ${(props) => `${props.knobSize}px`};
            height: ${(props) => `${props.knobSize}px`};
            cursor: pointer;
            background-color: ${(props) => props.knobColor};
            border: none;
            border-radius: 50%;
        }

        &:focus,
        &:active {
            outline: none;
        }
    }
`

/**
 * View Component
 */
const SeekBarView: React.VFC<SeekBarProps> = ({ ...props }: SeekBarProps) => (
    <StyledSeekBar {...props}>
        <span>{props.elapsedTime}</span>
        <input
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            onChange={props.onChange}
        />
        <span>{props.totalTime}</span>
    </StyledSeekBar>
)

/**
 * Default Props
 */
SeekBarView.defaultProps = {
    lineColor: '#d0d5de',
    lineSize: 1,
    knobColor: '#d0d5de',
    knobSize: 8,
    min: 0.0,
    max: 1.0,
    step: 0.0001,
    elapsedTime: '00:00',
    totalTime: '00:00',
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
