import styled from 'styled-components'
import { NextPrevButton } from '../common/playback/NextPrevButton'
import { PlayButton } from '../common/playback/PlayButton'
import { RepeatButton } from '../common/playback/RepeatButton'
import { SeekBar } from '../common/playback/SeekBar'

export interface IPlaybackControlActions {}

/**
 * Props
 */
interface PlaybackControlProps {
    className?: string
    isPlaying: boolean
    isRepeat: boolean
    seekValue: number
}

/**
 * View Component
 */
const PlaybackControlView: React.VFC<PlaybackControlProps> = ({ ...props }: PlaybackControlProps) => (
    <div className={props.className}>
        <div className="pbc-surface">
            <div className="pbc-buttons">
                <NextPrevButton reverse size={16} color="#d0d5de" />
                <PlayButton className="pbc-button-play" isPlaying={props.isPlaying} size={24} color="#d0d5de" />
                <NextPrevButton size={16} color="#d0d5de" />
                <RepeatButton className="pbc-button-repeat" isRepeat={props.isRepeat} color="#d0d5de" />
            </div>
            <div className="pbc-seek-bar">
                <SeekBar value={props.seekValue} knobColor="#d0d5de" />
            </div>
        </div>
    </div>
)

/**
 * Default Props
 */
PlaybackControlView.defaultProps = {}

/**
 * Styled Component
 */
const StyledPlaybackControl = styled(PlaybackControlView)`
    width: 100%;

    .pbc-surface {
        max-width: 480px;
        margin: 0 auto;

        .pbc-buttons {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;

            .pbc-button-play {
                margin: 0 16px;
            }

            .pbc-button-repeat {
                position: absolute;
                right: 3px;
            }
        }
    }
`

/**
 * Component
 */
const PlaybackControl: React.VFC<PlaybackControlProps> = ({ ...props }) => <StyledPlaybackControl {...props} />

/**
 * Export
 */
export { PlaybackControl }
