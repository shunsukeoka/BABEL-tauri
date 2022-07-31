import { NextPrevButton } from './NextPrevButton'
import { PlayButton } from './PlayButton'
import { RepeatButton } from './RepeatButton'
import { SeekBar } from './SeekBar'

export interface IPlaybackControlActions {}

interface PlaybackControlProps {
    isPlaying: boolean
    isRepeat: boolean
    seekValue: number
}

export const PlaybackControl: React.FC<PlaybackControlProps> = ({ ...props }: PlaybackControlProps) => (
    <div className="w-full">
        <div className="mx-auto my-[0] max-w-[480px]">
            <div className="relative mb-4 flex items-center justify-center">
                <div>
                    <NextPrevButton reverse size="large" variant="default" />
                </div>
                <div className="mx-4">
                    <PlayButton isPlaying={props.isPlaying} size="large" variant="default" />
                </div>
                <div>
                    <NextPrevButton size="large" variant="default" />
                </div>
                <div className="absolute right-1">
                    <RepeatButton isRepeat={props.isRepeat} size="large" variant="default" />
                </div>
            </div>
            <div>
                <SeekBar value={props.seekValue} variant="default" />
            </div>
        </div>
    </div>
)

PlaybackControl.defaultProps = {}
