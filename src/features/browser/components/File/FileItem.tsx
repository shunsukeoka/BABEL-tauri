import { IFileInfo } from '@/types'
import { useCallback } from 'react'
import { AudioTauriCommand, usePlaybackStore } from '@/features/audio'
import { timeToDisplayMS } from '@/utils/time'

export interface FileItemProps {
    info?: IFileInfo
}

export const FileItem = ({ info }: FileItemProps) => {
    const { updateCurrentSound, updatePlayingState } = usePlaybackStore((state) => state)

    const handleDoubleClick = useCallback(() => {
        if (!info || !info.audio_properties) return

        const command = new AudioTauriCommand()
        command.playSoundFile(info?.file_path)

        updateCurrentSound(info)

        updatePlayingState(true)
    }, [info, updateCurrentSound, updatePlayingState])

    return (
        <div
            className="flex cursor-pointer items-center justify-between overflow-hidden px-2 py-4 text-sm hover:opacity-60 not-first-child:border-t-[1px] not-first-child:border-solid not-first-child:border-t-[#efefef]"
            onDoubleClick={handleDoubleClick}
        >
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{info?.file_name}</p>
            <p className="text-sm">{info?.audio_properties ? timeToDisplayMS(info.audio_properties.duration) : ''}</p>
        </div>
    )
}
