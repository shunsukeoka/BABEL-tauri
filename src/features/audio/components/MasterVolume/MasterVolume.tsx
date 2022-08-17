import clsx from 'clsx'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff } from 'react-icons/io'
import { AudioTauriCommand } from '../../api'

const variants = {
    default: `
        text-white
        slider-knob:bg-white
    `,
    primary: `
        text-primary
        slider-knob:bg-primary
    `,
}

const sizes = {
    default: `
        slider-knob:w-2
        slider-knob:h-2
    `,
    large: `
        slider-knob:w-3
        slider-knob:h-3
    `,
}

export type MasterVolumeVariant = keyof typeof variants
export type MasterVolumeSize = keyof typeof sizes

export type MasterVolumeProps = {
    variant?: MasterVolumeVariant
    size?: MasterVolumeSize
}

const MIN_VOLUME_VALUE = 0.0
const MAX_VOLUME_VALUE = 1.0

const command = new AudioTauriCommand()

export const MasterVolume = ({ variant, size }: MasterVolumeProps) => {
    const [volume, setVolume] = useState<number>(1.0)

    const handleChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        await command.setMasterVolume(value)
        setVolume(value)
    }, [])

    const progressColor = useMemo(
        () => ({
            background: `linear-gradient(to right, var(--color-primary) ${volume * 100.0}%, var(--color-text) ${
                volume * 100.0
            }%)`,
        }),
        [volume],
    )

    useEffect(() => {
        const initialVolume = 0.5
        setVolume(initialVolume)
        command.setMasterVolume(initialVolume)
    }, [])

    const displayIcon = useMemo(() => {
        if (volume >= 0.5) {
            return <IoMdVolumeHigh />
        }

        if (volume > 0.0 && volume < 0.5) {
            return <IoMdVolumeLow />
        }

        return <IoMdVolumeOff />
    }, [volume])

    return (
        <div className="flex items-center justify-center">
            <span className={clsx('select-none text-xl', sizes[size || 'default'], variants[variant || 'default'])}>
                {displayIcon}
            </span>
            <input
                type="range"
                className={clsx(
                    'ml-2 h-[1px] w-[120px] cursor-pointer appearance-none rounded focus:outline-none active:outline-none slider-knob:cursor-pointer slider-knob:appearance-none slider-knob:rounded-full slider-knob:border-none',
                    variants[variant || 'default'],
                    sizes[size || 'default'],
                )}
                style={progressColor}
                min={MIN_VOLUME_VALUE}
                max={MAX_VOLUME_VALUE}
                step={0.001}
                value={volume}
                onChange={handleChange}
            />
        </div>
    )
}
