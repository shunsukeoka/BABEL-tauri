import { Slider } from '@/components/Elements/Slider'
import { styled } from '@/styles'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff } from 'react-icons/io'

// export type MasterVolumeProps = {}

const StyledMasterVolume = styled('div', {
    display: 'flex',
    alignItems: 'center',

    '& > .slider': {
        width: '120px',
    },

    '& > .icon': {
        display: 'flex',
        alignItems: 'center',
        marginRight: '$3',
        userSelect: 'none',
    },
})

const MIN_VOLUME_VALUE = 0.0
const MAX_VOLUME_VALUE = 1.0

export const MasterVolume = () => {
    const [volume, setVolume] = useState<number>(1.0)

    const onChangeVolume = useCallback(async (value: number[]) => {
        // TODO: volume change command
        setVolume(value[0])
    }, [])

    useEffect(() => {
        const initialVolume = 0.5
        setVolume(initialVolume)
    }, [])

    useEffect(() => {
        console.log(volume)
    }, [volume])

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
        <StyledMasterVolume>
            <span className="icon">{displayIcon}</span>

            <Slider
                className="slider"
                min={MIN_VOLUME_VALUE}
                max={MAX_VOLUME_VALUE}
                step={0.001}
                value={[volume]}
                defaultValue={[volume]}
                onValueChange={onChangeVolume}
            />
        </StyledMasterVolume>
    )
}

export const MasterVolumeMemo = memo(MasterVolume)
