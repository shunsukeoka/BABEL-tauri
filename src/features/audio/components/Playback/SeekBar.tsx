import { useAnimationFrame } from '@/hooks/useAnimationFrame'
import { timeToDisplayMS } from '@/utils/time'
import clsx from 'clsx'
import React, { useCallback, useMemo, useState } from 'react'
import { AudioTauriCommand } from '../../api'
import { usePlaybackStore } from '../../stores'
import { PLAYBACK_STATE } from '../../types'

const variants = {
    default: `
        bg-white
        slider-knob:bg-white
    `,
    primary: `
        bg-white
        slider-knob:bg-primary
    `,
}

const sizes = {
    default: `
        h-[1px]
        slider-knob:w-2
        slider-knob:h-2
    `,
    large: `
        h-[2px]
        slider-knob:w-3
        slider-knob:h-3
    `,
}

export type SeekBarVariant = keyof typeof variants
export type SeekBarSize = keyof typeof sizes
export interface SeekBarProps {
    variant?: SeekBarVariant
    size?: SeekBarSize
}

const MIN_SEEK_VALUE = 0.0
const MAX_SEEK_VALUE = 1.0
const command = new AudioTauriCommand()

export const SeekBar: React.FC<SeekBarProps> = ({ size, variant }: SeekBarProps) => {
    const { currentSound, isPlaying, updateCurrentSound, updatePlayingState } = usePlaybackStore((state) => state)

    const [elapsedTime, setElapsedTime] = useState<number>(0)

    const elapsedAmount = useMemo(() => {
        if (!currentSound?.audio_properties) return 0.0
        return elapsedTime / currentSound.audio_properties.duration
    }, [currentSound?.audio_properties, elapsedTime])

    const displayValue = useMemo(
        () => (currentSound?.audio_properties ? elapsedAmount * MAX_SEEK_VALUE : MIN_SEEK_VALUE),
        [currentSound?.audio_properties, elapsedAmount],
    )

    const displayElapsedTime = useMemo(
        () => (currentSound ? timeToDisplayMS(elapsedTime) : ''),
        [currentSound, elapsedTime],
    )

    const displayTotalTime = useMemo(
        () => (currentSound?.audio_properties ? timeToDisplayMS(currentSound.audio_properties.duration) : ''),
        [currentSound],
    )

    const progressColor = useMemo(
        () => ({
            background: `linear-gradient(to right, var(--color-primary) ${elapsedAmount * 100.0}%, var(--color-text) ${
                elapsedAmount * 100.0
            }%)`,
        }),
        [elapsedAmount],
    )

    const handleChange = useCallback(
        async (e: React.ChangeEvent<HTMLInputElement>) => {
            const amount = Number(e.target.value)
            const sec = currentSound?.audio_properties ? currentSound.audio_properties.duration * amount : 0.0
            await command.seekSoundFile(sec)
            setElapsedTime(sec)
        },
        [currentSound?.audio_properties],
    )

    const handleMouseDown = useCallback(async () => {
        if (isPlaying) {
            updatePlayingState(false)
            await command.pauseSoundFile()
        }
    }, [isPlaying, updatePlayingState])

    const handleMouseUp = useCallback(
        async (e: React.MouseEvent<HTMLInputElement>) => {
            if (!isPlaying) {
                const amount = Number(e.currentTarget.value)

                if (amount < MAX_SEEK_VALUE) {
                    await command.resumeSoundFile()
                    updatePlayingState(true)
                } else {
                    await command.stopSoundFile()
                    setElapsedTime(MIN_SEEK_VALUE)
                    updatePlayingState(false)
                    updateCurrentSound(undefined)
                }
            }
        },
        [isPlaying, updateCurrentSound, updatePlayingState],
    )

    useAnimationFrame(
        isPlaying,
        useCallback(async () => {
            const playbackState = await command.getPlaybackState()
            playbackState.map(async ({ state, elapsed_time }) => {
                setElapsedTime(elapsed_time)

                if (state === PLAYBACK_STATE.STOPPED) {
                    setElapsedTime(MIN_SEEK_VALUE)
                    updatePlayingState(false)
                    updateCurrentSound(undefined)
                }
            })
        }, [updateCurrentSound, updatePlayingState]),
    )

    return (
        <div className="flex items-center justify-center">
            <span className="select-none text-xs">{displayElapsedTime}</span>
            <input
                type="range"
                className={clsx(
                    'mx-2 h-[1px] w-[calc(100%-64px)] cursor-pointer appearance-none rounded focus:outline-none active:outline-none slider-knob:cursor-pointer slider-knob:appearance-none slider-knob:rounded-full slider-knob:border-none',
                    variants[variant || 'default'],
                    sizes[size || 'default'],
                )}
                style={progressColor}
                min={MIN_SEEK_VALUE}
                max={MAX_SEEK_VALUE}
                step={0.001}
                value={displayValue}
                disabled={!currentSound}
                onChange={handleChange}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            />
            <span className="select-none text-xs">{displayTotalTime}</span>
        </div>
    )
}
