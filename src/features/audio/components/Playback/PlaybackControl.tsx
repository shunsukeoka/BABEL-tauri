import { useAnimationFrame } from '@/hooks/useAnimationFrame'
import { toggleRepeat } from '@/slice/audioPlaybackSlice'
import { useSelector } from '@/stores'
import { millisToDisplayMS } from '@/utils/time'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { usePlayback } from '../../hooks'
import { audioEngine } from '../../utils'
import { NextPrevButton } from './NextPrevButton'
import { PlayButton } from './PlayButton'
import { RepeatButton } from './RepeatButton'
import { SeekBar } from './SeekBar'

interface PlaybackControlProps {}

export const PlaybackControl: React.FC<PlaybackControlProps> = () => {
    const { currentPlaybackId, currentSound, isPlaying, isRepeat } = useSelector((state) => state.audio)
    const dispatch = useDispatch()
    const { pause, resume } = usePlayback()

    const [elapsedTime, setElapsedTime] = useState<number>(0)

    const handlePlayButton = useCallback(() => {
        if (currentPlaybackId) {
            if (isPlaying) {
                pause(currentPlaybackId)
            } else {
                resume(currentPlaybackId)
            }
        }
    }, [currentPlaybackId, isPlaying, pause, resume])

    const handleRepeatButton = useCallback(() => {
        dispatch(toggleRepeat())
    }, [dispatch])

    const handleChangeSeekBar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = e.target.value

        if (currentPlaybackId && currentSound) {
            const playback = audioEngine.getInstance(currentPlaybackId)
            const ms = currentSound.audio_properties.duration * Number(amount)

            if (playback) {
                setElapsedTime(ms)
                playback.seek(ms / 1000.0)
            }
        }
    }

    const handleMouseDownSeekBar = useCallback(() => {
        if (currentPlaybackId) {
            if (isPlaying) {
                pause(currentPlaybackId)
            }
        }
    }, [currentPlaybackId, isPlaying, pause])

    const handleMouseUpSeekBar = useCallback(() => {
        if (currentPlaybackId) {
            if (!isPlaying) {
                resume(currentPlaybackId)
            }
        }
    }, [currentPlaybackId, isPlaying, resume])

    useAnimationFrame(
        isPlaying,
        useCallback(() => {
            if (currentPlaybackId) {
                const playback = audioEngine.getInstance(currentPlaybackId)
                if (playback) setElapsedTime(playback?.currentTimeMillis)
            }
        }, [currentPlaybackId]),
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
                        value={currentSound ? elapsedTime / currentSound.audio_properties.duration : 0}
                        elapsedTime={currentSound ? millisToDisplayMS(elapsedTime) : '--:--'}
                        totalTime={currentSound ? millisToDisplayMS(currentSound?.audio_properties.duration) : '--:--'}
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
