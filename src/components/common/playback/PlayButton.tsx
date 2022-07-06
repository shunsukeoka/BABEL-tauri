import styled from 'styled-components'
import { AudioPlaybackState } from '../../../interfaces/audio'

/**
 * Props
 */
export interface PlayButtonProps {
    color?: string
    size?: string
    playbackState: AudioPlaybackState
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
const PlayButtonView: React.VFC<PlayButtonProps> = ({ playbackState, onClick, ...props }: PlayButtonProps) => (
    <StyledPlayButton
        className={playbackState === AudioPlaybackState.PLAYING ? `is-playing` : ''}
        playbackState={playbackState}
        {...props}
        onClick={onClick}
    />
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
