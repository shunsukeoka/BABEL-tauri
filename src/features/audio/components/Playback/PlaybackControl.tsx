import { useAnimationFrame } from '@/hooks/useAnimationFrame'
import { timeToDisplayMS } from '@/utils/time'
import React, { useCallback, useMemo, useState } from 'react'
import { AudioTauriCommand } from '../../api'
import { usePlaybackStore } from '../../stores'
import { PLAYBACK_STATE } from '../../types'
import { NextPrevButton } from './NextPrevButton'
import { PlayButton } from './PlayButton'
import { RepeatButton } from './RepeatButton'
import { SeekBar } from './SeekBar'

interface PlaybackControlProps {}

export const PlaybackControl: React.FC<PlaybackControlProps> = () => {
    const command = new AudioTauriCommand()

    const { currentSound, isPlaying, isRepeat, updateCurrentSound, updatePlayingState, toggleRepeatState } =
        usePlaybackStore((state) => state)

    const [elapsedTime, setElapsedTime] = useState<number>(0)

    const seekBarValue = useMemo(
        () =>
            currentSound && currentSound.audio_properties ? elapsedTime / currentSound.audio_properties.duration : 0,
        [currentSound, elapsedTime],
    )

    const seekBarElapsedTime = useMemo(
        () => (currentSound ? timeToDisplayMS(elapsedTime) : '--:--'),
        [currentSound, elapsedTime],
    )

    const seekBarTotalTime = useMemo(
        () =>
            currentSound && currentSound.audio_properties
                ? timeToDisplayMS(currentSound?.audio_properties.duration)
                : '--:--',
        [currentSound],
    )

    const handlePlayButton = useCallback(() => {
        if (isPlaying) {
            command.pauseSoundFile()
            updatePlayingState(false)
        } else {
            command.resumeSoundFile()
            updatePlayingState(true)
        }
    }, [command, isPlaying, updatePlayingState])

    const handleRepeatButton = useCallback(() => {
        toggleRepeatState()
    }, [toggleRepeatState])

    const handleChangeSeekBar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (currentSound && currentSound.audio_properties) {
            const amount = e.target.value
            const sec = currentSound.audio_properties.duration * Number(amount)

            setElapsedTime(sec)

            command.seekSoundFile(sec)
        }
    }

    const handleMouseDownSeekBar = useCallback(() => {
        if (isPlaying) {
            command.pauseSoundFile()
            updatePlayingState(false)
        }
    }, [command, isPlaying, updatePlayingState])

    const handleMouseUpSeekBar = useCallback(() => {
        if (!isPlaying) {
            command.resumeSoundFile()
            updatePlayingState(true)
        }
    }, [command, isPlaying, updatePlayingState])

    useAnimationFrame(
        isPlaying,
        useCallback(async () => {
            const playbackState = await command.getPlaybackState()
            playbackState.map(async ({ state, elapsed_time }) => {
                setElapsedTime(elapsed_time)

                if (state === PLAYBACK_STATE.STOPPED) {
                    updatePlayingState(false)
                    updateCurrentSound(undefined)
                }
            })
        }, [command, updateCurrentSound, updatePlayingState]),
    )

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
                    <SeekBar
                        value={seekBarValue}
                        elapsedTime={seekBarElapsedTime}
                        totalTime={seekBarTotalTime}
                        onChange={handleChangeSeekBar}
                        onMouseDown={handleMouseDownSeekBar}
                        onMouseUp={handleMouseUpSeekBar}
                        variant="default"
                    />
                </div>
            </div>
        </div>
    )
}

PlaybackControl.defaultProps = {}
