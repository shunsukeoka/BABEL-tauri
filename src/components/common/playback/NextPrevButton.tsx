import styled from 'styled-components'
import { IoMdSkipForward, IoMdSkipBackward } from 'react-icons/io'

/**
 * Props
 */
export interface NextPrevButtonProps {
    color?: string
    size?: number
    reverse?: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledNextPrevButton = styled.div<NextPrevButtonProps>`
    font-size: ${(props) => `${props.size}px`};
    cursor: pointer;

    & > svg {
        color: ${(props) => props.color};
    }
`

/**
 * View Component
 */
const NextPrevButtonView: React.VFC<NextPrevButtonProps> = ({ reverse, onClick, ...props }: NextPrevButtonProps) => (
    <StyledNextPrevButton reverse={reverse} {...props} onClick={onClick}>
        {reverse ? <IoMdSkipBackward /> : <IoMdSkipForward />}
    </StyledNextPrevButton>
)

/**
 * Default Props
 */
NextPrevButtonView.defaultProps = {
    color: '#000',
    size: 14,
    reverse: false,
    onClick: (event) => {
        event.preventDefault()
        console.log(event)
    },
}

/**
 * Component
 */
const NextPrevButton: React.VFC<NextPrevButtonProps> = ({ ...props }: NextPrevButtonProps) => (
    <NextPrevButtonView {...props} />
)

/**
 * Export
 */
export { NextPrevButton }
