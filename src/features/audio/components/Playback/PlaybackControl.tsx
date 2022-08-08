import { useAnimationFrame } from '@/hooks/useAnimationFrame'
import { toggleRepeat } from '@/slice/audioPlaybackSlice'
import { useSelector } from '@/stores'
import { millisToDisplayMS } from '@/utils/time'
import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { audioEngine } from '../../utils'
import { NextPrevButton } from './NextPrevButton'
import { PlayButton } from './PlayButton'
import { RepeatButton } from './RepeatButton'
import { SeekBar } from './SeekBar'

interface PlaybackControlProps {}

export const PlaybackControl: React.FC<PlaybackControlProps> = () => {
    const { currentSound, isPlaying, isRepeat } = useSelector((state) => state.audio)
    const dispatch = useDispatch()

    const [elapsedTime, setElapsedTime] = useState<number>(0)

    const seekBarValue = useMemo(
        () =>
            currentSound && currentSound.audio_properties ? elapsedTime / currentSound.audio_properties.duration : 0,
        [currentSound, elapsedTime],
    )

    const seekBarElapsedTime = useMemo(
        () => (currentSound ? millisToDisplayMS(elapsedTime) : '--:--'),
        [currentSound, elapsedTime],
    )

    const seekBarTotalTime = useMemo(
        () =>
            currentSound && currentSound.audio_properties
                ? millisToDisplayMS(currentSound?.audio_properties.duration)
                : '--:--',
        [currentSound],
    )

    const handlePlayButton = useCallback(() => {
        if (!audioEngine.playbackInstance) return

        if (isPlaying) {
            audioEngine.playbackInstance.pause()
        } else {
            audioEngine.playbackInstance.play()
        }
    }, [isPlaying])

    const handleRepeatButton = useCallback(() => {
        dispatch(toggleRepeat())
    }, [dispatch])

    const handleChangeSeekBar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!currentSound || !currentSound.audio_properties || !audioEngine.playbackInstance) return

        const amount = e.target.value
        const ms = currentSound.audio_properties.duration * Number(amount)
        setElapsedTime(ms)
        audioEngine.playbackInstance.seek(ms / 1000.0)
    }

    const handleMouseDownSeekBar = useCallback(() => {
        if (!isPlaying) return

        audioEngine.playbackInstance?.pause()
    }, [isPlaying])

    const handleMouseUpSeekBar = useCallback(() => {
        if (isPlaying) return

        audioEngine.playbackInstance?.play()
    }, [isPlaying])

    useAnimationFrame(
        isPlaying,
        useCallback(() => {
            const playback = audioEngine.playbackInstance

            if (!playback) return

            setElapsedTime(playback.currentTimeMillis)
        }, []),
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
