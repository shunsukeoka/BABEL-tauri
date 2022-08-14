import React, { useCallback } from 'react'
import { AudioTauriCommand } from '../../api'
import { usePlaybackStore } from '../../stores'
import { NextPrevButton } from './NextPrevButton'
import { PlayButton } from './PlayButton'
import { RepeatButton } from './RepeatButton'
import { SeekBar } from './SeekBar'

const command = new AudioTauriCommand()

interface PlaybackControlProps {}

export const PlaybackControl: React.FC<PlaybackControlProps> = () => {
    const { currentSound, isPlaying, isRepeat, updatePlayingState, toggleRepeatState } = usePlaybackStore(
        (state) => state,
    )

    const handlePlayButton = useCallback(() => {
        if (!currentSound) return

        if (isPlaying) {
            command.pauseSoundFile()
            updatePlayingState(false)
        } else {
            command.resumeSoundFile()
            updatePlayingState(true)
        }
    }, [currentSound, isPlaying, updatePlayingState])

    const handleRepeatButton = useCallback(() => {
        toggleRepeatState()
    }, [toggleRepeatState])

    return (
        <div className="w-full">
            <div className="mx-auto my-[0] max-w-[480px]">
                <div className="relative mb-4 flex items-center justify-center">
                    <div>
                        <NextPrevButton reverse size="large" variant="default" />
                    </div>
                    <div className="mx-4">
                        <PlayButton isPlaying={isPlaying} size="large" variant="default" onClick={handlePlayButton} />
                    </div>
                    <div>
                        <NextPrevButton size="large" variant="default" />
                    </div>
                    <div className="absolute right-1">
                        <RepeatButton isRepeat={isRepeat} size="large" variant="primary" onClick={handleRepeatButton} />
                    </div>
                </div>
                <div>
                    <SeekBar variant="primary" size="large" />
                </div>
            </div>
        </div>
    )
}

PlaybackControl.defaultProps = {}
