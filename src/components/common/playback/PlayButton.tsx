import styled from 'styled-components'

/**
 * Props
 */
export interface PlayButtonProps {
    color?: string
    size?: string
    isPlaying: boolean
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledPlayButton = styled.div<PlayButtonProps>`
    box-sizing: border-box;
    display: inline-block;
    height: 24px;
    cursor: pointer;
    border-color: transparent transparent transparent ${(props) => props.color};
    border-style: solid;
    border-width: 12px 0 12px 20px;
    transition: 100ms all ease;
    will-change: border-width;

    &.is-playing {
        border-style: double;
        border-width: 0 0 0 20px;
    }
`

/**
 * View Component
 */
const PlayButtonView: React.VFC<PlayButtonProps> = ({ isPlaying, onClick, ...props }: PlayButtonProps) => (
    <StyledPlayButton className={isPlaying ? `is-playing` : ''} isPlaying={isPlaying} {...props} onClick={onClick} />
)

/**
 * Default Props
 */
PlayButtonView.defaultProps = {
    color: '#000',
    size: '40px',
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
