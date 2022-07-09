import styled from 'styled-components'
import { IoMdPlay, IoMdPause } from 'react-icons/io'

/**
 * Props
 */
export interface PlayButtonProps {
    color?: string
    size?: number
    isPlaying: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledPlayButton = styled.div<PlayButtonProps>`
    font-size: ${(props) => `${props.size}px`};
    cursor: pointer;

    & > svg {
        color: ${(props) => props.color};
    }
`

/**
 * View Component
 */
const PlayButtonView: React.VFC<PlayButtonProps> = ({ isPlaying, onClick, ...props }: PlayButtonProps) => (
    <StyledPlayButton isPlaying={isPlaying} {...props} onClick={onClick}>
        {isPlaying ? <IoMdPause /> : <IoMdPlay />}
    </StyledPlayButton>
)

/**
 * Default Props
 */
PlayButtonView.defaultProps = {
    color: '#000',
    size: 14,
    onClick: (event) => {
        event.preventDefault()
        console.log(event)
    },
}

/**
 * Component
 */
const PlayButton: React.VFC<PlayButtonProps> = ({ ...props }: PlayButtonProps) => <PlayButtonView {...props} />

/**
 * Export
 */
export { PlayButton }
