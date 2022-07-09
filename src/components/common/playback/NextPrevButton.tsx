import styled from 'styled-components'

/**
 * Props
 */
export interface NextPrevButtonProps {
    color?: string
    size?: string
    reverse?: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledNextPrevButton = styled.div<NextPrevButtonProps>`
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    height: 18px;
    cursor: pointer;
    border-color: transparent transparent transparent ${(props) => props.color};
    border-style: solid;
    border-width: 10px 0 10px 14px;

    &::before {
        position: absolute;
        top: -10px;
        height: 20px;
        content: '';
        border-left: 3px solid ${(props) => props.color};
    }

    &.is-prev {
        left: 0;
    }

    &.is-next {
        left: 3px;
        transform: rotate(180deg);
    }
`

/**
 * View Component
 */
const NextPrevButtonView: React.VFC<NextPrevButtonProps> = ({ reverse, onClick, ...props }: NextPrevButtonProps) => (
    <StyledNextPrevButton className={reverse ? `is-next` : 'is-prev'} reverse={reverse} {...props} onClick={onClick} />
)

/**
 * Default Props
 */
NextPrevButtonView.defaultProps = {
    color: '#000',
    size: '40px',
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
