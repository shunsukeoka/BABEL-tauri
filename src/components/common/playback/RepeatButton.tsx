import styled from 'styled-components'
import { IoMdRepeat } from 'react-icons/io'

/**
 * Props
 */
export interface RepeatButtonProps {
    color?: string
    activeColor?: string
    size?: number
    isRepeat?: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledRepeatButton = styled.div<RepeatButtonProps>`
    font-size: ${(props) => `${props.size}px`};
    cursor: pointer;

    & > svg {
        color: ${(props) => props.color};
    }

    &.is-repeat {
        & > svg {
            color: ${(props) => props.activeColor};
        }
    }
`

/**
 * View Component
 */
const RepeatButtonView: React.VFC<RepeatButtonProps> = ({ isRepeat, onClick, ...props }: RepeatButtonProps) => (
    <StyledRepeatButton className={isRepeat ? `is-repeat` : ''} isRepeat={isRepeat} {...props} onClick={onClick}>
        <IoMdRepeat />
    </StyledRepeatButton>
)

/**
 * Default Props
 */
RepeatButtonView.defaultProps = {
    color: '#000',
    activeColor: '#ff0000',
    size: 20,
    isRepeat: false,
    onClick: (event) => {
        event.preventDefault()
        console.log(event)
    },
}

/**
 * Component
 */
const RepeatButton: React.VFC<RepeatButtonProps> = ({ ...props }: RepeatButtonProps) => <RepeatButtonView {...props} />

/**
 * Export
 */
export { RepeatButton }
