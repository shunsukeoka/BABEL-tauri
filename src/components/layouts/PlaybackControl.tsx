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
                <NextPrevButton reverse size={16} />
                <PlayButton className="pbc-button-play" isPlaying={props.isPlaying} size={24} />
                <NextPrevButton size={16} />
                <RepeatButton className="pbc-button-repeat" isRepeat={props.isRepeat} />
            </div>
            <div className="pbc-seek-bar">
                <SeekBar value={props.seekValue} />
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
    .pbc-surface {
        width: 60%;
        max-width: 480px;

        .pbc-buttons {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;

            .pbc-button-play {
                margin: 0 20px;
            }

            .pbc-button-repeat {
                position: absolute;
                right: 0;
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
